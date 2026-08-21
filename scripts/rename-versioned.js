'use strict';

// One-time migration: rename already-archived firmware files to the
// self-describing scheme that archive.js now uses for new files:
//
//   <version>_<type>_<device>_<original>
//   202512271054507d95a7957.rbl  ->  1492_control_VNSD-0_...  (example)
//
// Why: the CDN basenames are opaque hashes whose leading digits look like a
// date/version but are NOT the firmware version. Prefixing the real version +
// device + type makes each file self-describing once downloaded and detached
// from its version folder.
//
// The target name is derived from the IMMUTABLE source basename in
// metadata.url, so this is idempotent no matter what the file is currently
// called on disk (it can be re-run safely, e.g. after the earlier version-only
// rename). Uses `git mv` to preserve history, updates each metadata.json's
// `archivedFilename`, and (with --apply) regenerates changelogs + README.
//
//   node scripts/rename-versioned.js            # dry run (default) — shows plan
//   node scripts/rename-versioned.js --apply    # actually rename + regenerate

const { execSync } = require('child_process');
const { fs, path, FIRMWARES_DIR, relPosix, findDownloadUrl, buildArchiveName } = require('./lib');

const apply = process.argv.includes('--apply');
const REPO_ROOT = path.resolve(__dirname, '..');

function git(args) {
  return execSync('git ' + args, { cwd: REPO_ROOT, stdio: 'pipe' }).toString();
}

const FIRMWARE_EXTS = ['.bin', '.rbl'];
function isFirmwareFile(name) {
  const lower = String(name).toLowerCase();
  return FIRMWARE_EXTS.some((ext) => lower.endsWith(ext));
}

// Every directory that contains a metadata.json is a version dir.
function findVersionDirs(root) {
  const out = [];
  const walk = (d) => {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    if (entries.some((e) => e.isFile() && e.name === 'metadata.json')) out.push(d);
    for (const e of entries) if (e.isDirectory()) walk(path.join(d, e.name));
  };
  if (fs.existsSync(root)) walk(root);
  return out;
}

function main() {
  const planned = [];
  const skipped = [];

  for (const dir of findVersionDirs(FIRMWARES_DIR)) {
    let meta;
    try {
      meta = JSON.parse(fs.readFileSync(path.join(dir, 'metadata.json'), 'utf8'));
    } catch (e) {
      skipped.push({ dir: relPosix(dir), reason: 'metadata.json unlesbar' });
      continue;
    }

    const version = meta.version != null ? String(meta.version) : path.basename(dir);
    const deviceType = meta.deviceType || null;
    const firmwareType = meta.firmwareType || null;

    // Immutable source basename — the naming base, independent of the current
    // on-disk filename (which may already carry an older prefix).
    const url = findDownloadUrl(meta);
    const originalBase = url ? path.basename(url.split('?')[0]) : null;

    const firmwareFiles = fs.readdirSync(dir).filter((f) => isFirmwareFile(f));
    if (firmwareFiles.length === 0) {
      skipped.push({ dir: relPosix(dir), reason: 'keine Firmware-Datei' });
      continue;
    }
    if (!originalBase || !isFirmwareFile(originalBase)) {
      skipped.push({ dir: relPosix(dir), reason: 'keine brauchbare Quell-URL in metadata.json' });
      continue;
    }

    const newName = buildArchiveName(originalBase, version, deviceType, firmwareType);

    // The current firmware file we will rename. Prefer the one whose name ends
    // with the immutable source basename; fall back to the single firmware file.
    const current =
      firmwareFiles.find((f) => f === originalBase || f.endsWith('_' + originalBase) || f.endsWith(originalBase)) ||
      firmwareFiles[0];

    if (current === newName) continue; // already correct

    const targetPath = path.join(dir, newName);
    if (fs.existsSync(targetPath) && current !== newName) {
      skipped.push({ dir: relPosix(dir), reason: `Ziel existiert bereits: ${newName}` });
      continue;
    }

    planned.push({
      dir,
      current,
      newName,
      updateMeta: meta.archivedFilename === current,
    });
  }

  console.log(`\n== Selbstbeschreibende Dateinamen (${apply ? 'APPLY' : 'dry run'}) ==\n`);
  if (!planned.length) console.log('  Nichts umzubenennen — alle Dateien tragen bereits das Schema.');

  for (const p of planned) {
    console.log(`  ${relPosix(path.join(p.dir, p.current))}\n    -> ${p.newName}`);
    if (!apply) continue;

    git(`mv "${relPosix(path.join(p.dir, p.current))}" "${relPosix(path.join(p.dir, p.newName))}"`);

    if (p.updateMeta) {
      const metaPath = path.join(p.dir, 'metadata.json');
      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      meta.archivedFilename = p.newName;
      fs.writeFileSync(metaPath, JSON.stringify(meta, null, 2) + '\n');
    }
  }

  if (skipped.length) {
    console.log('\n  Übersprungen:');
    for (const s of skipped) console.log(`    ${s.dir} — ${s.reason}`);
  }

  if (apply && planned.length) {
    console.log('\n  Changelogs & README neu generieren …');
    require('./generate-changelogs.js');
    require('./update-readme.js');
    console.log('  Fertig. Bitte `git status` / `git diff` vor dem Commit prüfen.');
  } else if (!apply) {
    console.log('\nNur Dry-Run. Mit --apply ausführen, um umzubenennen und zu regenerieren.');
  }
}

main();
