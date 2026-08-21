'use strict';

// Generate changelogs from the firmwares/ tree, in English and German:
//   * CHANGELOG.md / CHANGELOG.de.md                          (global, all devices)
//   * firmwares/<device>/CHANGELOG.md|.de.md                  (per device)
//   * firmwares/<device>/<Type>/CHANGELOG.md|.de.md           (per firmware module)
//
// Release-note preference per version:
//   manual `changelog` file  >  translation for that language  >  original text.
// Eine sprachlose `changelog`-Datei gilt für beide Fassungen; wer es sauber
// getrennt will, legt `changelog.en` und/oder `changelog.de` daneben.

const { fs, path, REPO_ROOT, FIRMWARES_DIR, formatVersion, deviceModel } = require('./lib');
const { scanFirmwares } = require('./scan');

// Sprachabhängige Bausteine; der Aufbau darunter ist für beide identisch.
const LANGS = {
  en: {
    file: 'CHANGELOG.md',
    sibling: 'CHANGELOG.de.md',
    switcher: (sib) => `🇬🇧 **English** · [🇩🇪 Deutsch](${sib})`,
    noteKey: 'noteEN',
    manualKey: 'manualChangelogEN',
    globalTitle: 'Changelog — Marstek Firmware Archive',
    globalIntro: 'Every archived firmware version, newest first.',
    deviceTitle: (d, m) => `Changelog — ${d}${m ? ` (${m})` : ''}`,
    moduleTitle: (d, m, t) => `Changelog — ${d}${m ? ` (${m})` : ''} / ${t}`,
    noNotes: '_No release notes._',
    fileLabel: 'File',
  },
  de: {
    file: 'CHANGELOG.de.md',
    sibling: 'CHANGELOG.md',
    switcher: (sib) => `[🇬🇧 English](${sib}) · 🇩🇪 **Deutsch**`,
    noteKey: 'noteDE',
    manualKey: 'manualChangelogDE',
    globalTitle: 'Changelog — Marstek Firmware Archiv',
    globalIntro: 'Alle archivierten Firmware-Versionen, chronologisch (neueste zuerst).',
    deviceTitle: (d, m) => `Changelog — ${d}${m ? ` (${m})` : ''}`,
    moduleTitle: (d, m, t) => `Changelog — ${d}${m ? ` (${m})` : ''} / ${t}`,
    noNotes: '_Keine Release Notes._',
    fileLabel: 'Datei',
  },
};

function fmtDate(s) {
  if (!s) return '';
  const d = new Date(s);
  return isNaN(d) ? '' : d.toISOString().slice(0, 10);
}

function bestNote(fw, L) {
  if (fw[L.manualKey]) return fw[L.manualKey];
  if (fw[L.noteKey]) return fw[L.noteKey];
  return fw.note || '';
}

// Strip a leading list marker: "1." "2、" "3)" or a bare "1 " that machine
// translation sometimes leaves, plus "-"/"*" bullets.
function stripMarker(s) {
  return s
    .trim()
    .replace(/^[-*]\s*/, '')
    .replace(/^\d+\s*[.、)]\s*/, '')
    .replace(/^\d+\s+/, '')
    .trim();
}

// Turn a note (possibly a "1、 ... 2、 ..." run-on) into markdown bullet lines.
function asBullets(note, L) {
  if (!note) return L.noNotes;
  const text = note.replace(/\r/g, '');
  if (text.includes('\n')) {
    return text
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .map((l) => `- ${stripMarker(l)}`)
      .join('\n');
  }
  // single line: split on enumerators like "1、" "2." "3)".
  const parts = text
    .split(/\s*\d+\s*[、.)]\s+|\s+\d+\s*[、.)]\s*/)
    .map((s) => stripMarker(s))
    .filter(Boolean);
  if (parts.length <= 1) return `- ${stripMarker(text)}`;
  return parts.map((p) => `- ${p}`).join('\n');
}

function header(title, L, intro) {
  let s = `# ${title}\n\n${L.switcher(L.sibling)}\n\n`;
  if (intro) s += intro + '\n\n';
  return s;
}

function section(fw, L, opts = {}) {
  const date = fmtDate(fw.archivedAt);
  const head =
    opts.withModule && fw.firmwareType
      ? `${fw.firmwareType} v${formatVersion(fw.version)}`
      : `v${formatVersion(fw.version)}`;
  let s = `## ${head}${date ? ` — ${date}` : ''}\n\n`;
  s += asBullets(bestNote(fw, L), L) + '\n\n';
  const bits = [];
  if (fw.issueNumber)
    bits.push(`Issue [#${fw.issueNumber}](../../${'../'.repeat(opts.depth || 0)}issues/${fw.issueNumber})`);
  if (fw.filename && fw.binRel) bits.push(`${L.fileLabel} \`${fw.filename}\``);
  if (fw.sha256) bits.push(`SHA-256 \`${fw.sha256.slice(0, 12)}…\``);
  if (bits.length) s += '<sub>' + bits.join(' · ') + '</sub>\n\n';
  return s;
}

function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}

function buildAll(L, fws) {
  let files = 0;

  // ---- Global ----
  const byDate = [...fws].sort((a, b) => {
    const d = new Date(b.archivedAt || 0) - new Date(a.archivedAt || 0);
    return d || b.versionNum - a.versionNum;
  });
  let global = header(L.globalTitle, L, L.globalIntro);
  for (const fw of byDate) {
    const mod = fw.firmwareType ? `${fw.firmwareType} ` : '';
    global += `## ${fw.deviceType} — ${mod}v${formatVersion(fw.version)}${fw.archivedAt ? ` — ${fmtDate(fw.archivedAt)}` : ''}\n\n`;
    global += asBullets(bestNote(fw, L), L) + '\n\n';
    const bits = [];
    if (fw.issueNumber) bits.push(`Issue [#${fw.issueNumber}](issues/${fw.issueNumber})`);
    if (fw.binRel) bits.push(`[${fw.filename}](${fw.binRel})`);
    if (bits.length) global += '<sub>' + bits.join(' · ') + '</sub>\n\n';
  }
  writeFile(path.join(REPO_ROOT, L.file), global);
  files++;

  // ---- Per device & per module ----
  const devices = {};
  for (const fw of fws) {
    (devices[fw.deviceType] = devices[fw.deviceType] || []).push(fw);
  }

  for (const device of Object.keys(devices).sort()) {
    const list = devices[device];

    // per device (depth 2: firmwares/<device>/CHANGELOG*.md)
    // Marktname mit in die Überschrift: die Geräte-Changelogs werden einzeln
    // verlinkt und gefunden, "VNSD-0" allein sagt einem Suchenden nichts.
    const model = deviceModel(device);
    let dmd = header(L.deviceTitle(device, model), L);
    const sorted = [...list].sort((a, b) => {
      const d = new Date(b.archivedAt || 0) - new Date(a.archivedAt || 0);
      return d || b.versionNum - a.versionNum;
    });
    for (const fw of sorted) dmd += section(fw, L, { withModule: true, depth: 2 });
    writeFile(path.join(FIRMWARES_DIR, device, L.file), dmd);
    files++;

    // per module (depth 3: firmwares/<device>/<Type>/CHANGELOG*.md)
    const byType = {};
    for (const fw of list) {
      const t = fw.firmwareType || 'Firmware';
      (byType[t] = byType[t] || []).push(fw);
    }
    for (const type of Object.keys(byType)) {
      if (type === 'Firmware') continue; // flat device: covered by device-level changelog
      let tmd = header(L.moduleTitle(device, model, type), L);
      const ts = byType[type].sort((a, b) => b.versionNum - a.versionNum);
      for (const fw of ts) tmd += section(fw, L, { depth: 3 });
      writeFile(path.join(FIRMWARES_DIR, device, type, L.file), tmd);
      files++;
    }
  }

  return { files, devices: Object.keys(devices).length };
}

function main() {
  const fws = scanFirmwares().filter((f) => f.hasBin);
  for (const L of Object.values(LANGS)) {
    const r = buildAll(L, fws);
    console.log(`${L.file}: ${r.files} Datei(en) — global + ${r.devices} Geräte + Module.`);
  }
}

main();
