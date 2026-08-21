'use strict';

// Regelmäßiger Abgleich mit einem fremden Marstek-Archiv (Standard:
// rweijnen/marstek-firmware-archive): klont es flach in ein Temp-Verzeichnis
// und übernimmt jede Firmware-Version, die hier noch fehlt.
//
//   node scripts/sync-upstream.js                 # abgleichen + importieren
//   node scripts/sync-upstream.js --dry-run       # nur berichten, nichts schreiben
//   node scripts/sync-upstream.js --repo owner/name
//
// Idempotent: vorhandene Versionen bleiben unangetastet, ein Lauf ohne Neues
// schreibt nichts. Schreibt Outputs (`count`, `labels`, `upstream_sha`,
// `report_file`) nach $GITHUB_OUTPUT, damit die Action daraus Commit-Message,
// Job-Summary und PR-Beschreibung bauen kann.

const os = require('os');
const { execFileSync } = require('child_process');
const { fs, path } = require('./lib');
const { importFrom } = require('./import-reference');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const noTranslate = args.includes('--no-translate');
const repoArgIdx = args.indexOf('--repo');
const REPO =
  (repoArgIdx !== -1 ? args[repoArgIdx + 1] : null) ||
  process.env.UPSTREAM_REPO ||
  'rweijnen/marstek-firmware-archive';
// Neben `owner/name` auch eine volle URL oder ein lokales Git-Repo (praktisch
// zum Testen bzw. wenn die Quelle schon ausgecheckt vorliegt).
const CLONE_URL = /^https?:\/\//.test(REPO) || fs.existsSync(REPO)
  ? REPO
  : `https://github.com/${REPO}.git`;

function setOutput(key, value) {
  const out = process.env.GITHUB_OUTPUT;
  if (out) fs.appendFileSync(out, `${key}=${String(value).replace(/\r?\n/g, ' ')}\n`);
}

function appendSummary(md) {
  const f = process.env.GITHUB_STEP_SUMMARY;
  if (f) fs.appendFileSync(f, md + '\n');
}

// Markdown-Bericht für die PR-Beschreibung (`gh pr create --body-file`).
function writeReport(summary, sha) {
  const file = path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'upstream-sync-report.md');
  const lines = [
    'Automatischer Abgleich mit ' +
      (/^[\w.-]+\/[\w.-]+$/.test(REPO) ? `[\`${REPO}\`](https://github.com/${REPO})` : `\`${REPO}\``) +
      ` (Stand \`${sha}\`).`,
    '',
    `**${summary.imported.length} Version(en) übernommen**, die hier noch fehlten:`,
    '',
    ...summary.imported.map((l) => `- ${l}`),
  ];
  if (summary.unverified.length) {
    lines.push(
      '',
      '> [!WARNING]',
      '> Integritätsprüfung (CRC-16/MODBUS + Größe) fehlgeschlagen bei:',
      ...summary.unverified.map((l) => `> - ${l}`)
    );
  }
  if (summary.error) {
    lines.push('', `_${summary.error} Eintrag/Einträge der Quelle waren unvollständig und wurden übersprungen._`);
  }
  lines.push(
    '',
    '---',
    '',
    'Vor dem Merge kurz prüfen: Release Notes sinnvoll übersetzt, keine Klarnamen ' +
      'in `metadata.json`, Dateinamen nach Schema `<version>_<typ>_<gerät>_<original>`.'
  );
  fs.writeFileSync(file, lines.join('\n') + '\n');
  return file;
}

async function main() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'marstek-upstream-'));
  let sha = '';
  try {
    console.log(`Klone ${CLONE_URL} …`);
    execFileSync('git', ['clone', '--depth', '1', '--quiet', CLONE_URL, tmp], { stdio: 'inherit' });
    sha = execFileSync('git', ['-C', tmp, 'rev-parse', '--short', 'HEAD']).toString().trim();
    console.log(`Upstream-Stand: ${REPO}@${sha}\n`);

    const summary = await importFrom(tmp, { dryRun, noTranslate, source: REPO });

    setOutput('count', summary.imported.length);
    setOutput('labels', summary.imported.join(', '));
    setOutput('upstream_sha', sha);
    setOutput('report_file', writeReport(summary, sha));

    if (summary.imported.length) {
      appendSummary(
        `### ${summary.imported.length} neue Firmware(s) aus \`${REPO}@${sha}\`` +
          (dryRun ? ' _(Dry-Run)_' : '') +
          '\n\n' +
          summary.imported.map((l) => `- ${l}`).join('\n')
      );
      if (summary.unverified.length) {
        appendSummary(
          '\n**⚠ Integritätsprüfung fehlgeschlagen:**\n' +
            summary.unverified.map((l) => `- ${l}`).join('\n')
        );
      }
    } else {
      appendSummary(`### Nichts Neues bei \`${REPO}@${sha}\` – Archiv ist aktuell.`);
    }

    // Fehlende Binärdateien o. Ä. in der Fremdquelle sind deren Problem, nicht
    // unseres: melden, aber den Lauf nicht rot färben.
    if (summary.error) console.log(`Hinweis: ${summary.error} Referenz-Eintrag/-Einträge unvollständig.`);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(e);
  setOutput('count', 0);
  process.exit(1);
});
