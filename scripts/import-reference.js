'use strict';

// One-time import of every firmware + release note from another Marstek archive
// (e.g. rweijnen/marstek-firmware-archive) into THIS archive.
//
//   node scripts/import-reference.js <pfad-zum-referenz-repo> [--no-translate]
//
// - Kopiert nur Versionen, die hier noch fehlen (vorhandene bleiben unangetastet).
// - Vereinheitlicht auf die kanonische Struktur/Metadaten (Übersetzung, SHA-256,
//   CRC/Größen-Verifikation) und markiert Einträge mit `importedFrom`.

const {
  fs,
  path,
  targetDir,
  relPosix,
  isFlatDevice,
  normalizeFirmwareType,
  deriveFirmwareType,
  extractReleaseNote,
  sha256,
} = require('./lib');
const { translateNote } = require('./translate');
const { verifyBuffer } = require('./verify');
const { loadCache, saveCache } = require('./translate');

const refRoot = process.argv[2];
const noTranslate = process.argv.includes('--no-translate');
const SOURCE = process.env.SOURCE_REPO || 'rweijnen/marstek-firmware-archive';

if (!refRoot) {
  console.error('Usage: node scripts/import-reference.js <pfad-zum-referenz-repo> [--no-translate]');
  process.exit(1);
}

const refFirmwares = fs.existsSync(path.join(refRoot, 'firmwares'))
  ? path.join(refRoot, 'firmwares')
  : refRoot;

function findRefVersions() {
  const versions = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name === 'metadata.json') {
        try {
          versions.push({ dir, meta: JSON.parse(fs.readFileSync(p, 'utf8')) });
        } catch (err) {
          console.error('  ! kann Metadaten nicht lesen:', p);
        }
      }
    }
  };
  walk(refFirmwares);
  return versions;
}

async function main() {
  const cache = loadCache();
  const items = findRefVersions();
  console.log(`Referenz: ${items.length} Versionen in ${refFirmwares}\n`);
  const summary = { imported: 0, exists: 0, skipped: 0, error: 0 };

  for (const { dir, meta } of items) {
    const deviceType = meta.deviceType;
    const firmwareType = isFlatDevice(deviceType) ? null : deriveFirmwareType(meta, meta.firmwareType);
    const version = String(meta.version);
    if (!deviceType || !version || !meta.archivedFilename) {
      summary.skipped++;
      console.log(`  · ${deviceType}/${version} übersprungen (unvollständige Metadaten)`);
      continue;
    }

    const label = firmwareType ? `${deviceType} ${firmwareType} v${version}` : `${deviceType} v${version}`;
    const dest = targetDir(deviceType, firmwareType, version);

    if (fs.existsSync(dest) && fs.existsSync(path.join(dest, 'metadata.json'))) {
      summary.exists++;
      console.log(`  = ${label} bereits vorhanden`);
      continue;
    }

    const srcBin = path.join(dir, meta.archivedFilename);
    if (!fs.existsSync(srcBin)) {
      summary.error++;
      console.log(`  x ${label} — Binärdatei fehlt in Referenz`);
      continue;
    }

    const buf = fs.readFileSync(srcBin);
    const note = extractReleaseNote(meta);
    let de = '';
    let en = typeof meta.english === 'string' ? meta.english.trim() : '';
    if (note && !noTranslate) {
      const tr = await translateNote(note, cache, ['de', 'en']);
      de = tr.de;
      if (!en) en = tr.en;
    }
    const v = verifyBuffer(buf, meta, firmwareType);

    fs.mkdirSync(dest, { recursive: true });
    fs.writeFileSync(path.join(dest, meta.archivedFilename), buf);

    const out = Object.assign({}, meta, {
      deviceType,
      firmwareType,
      version,
      releaseNote: note,
      releaseNoteDE: de,
      releaseNoteEN: en,
      archivedFilename: meta.archivedFilename,
      archivedFilesize: buf.length,
      archivedSha256: sha256(buf),
      apiCrc: v.checked ? v.apiCrc : null,
      apiSize: v.checked ? v.apiSize : null,
      verified: v.checked ? v.ok : null,
      issueNumber: null,
      importedFrom: SOURCE,
    });
    fs.writeFileSync(path.join(dest, 'metadata.json'), JSON.stringify(out, null, 2) + '\n');

    // Preserve a pre-existing manual `changelog` file from the reference, if any.
    const refCl = path.join(dir, 'changelog');
    if (fs.existsSync(refCl) && fs.statSync(refCl).isFile()) {
      fs.copyFileSync(refCl, path.join(dest, 'changelog'));
    }

    summary.imported++;
    const vtag = v.checked ? (v.ok ? '✓verifiziert' : '⚠ ' + v.errors.join(';')) : '(keine crc)';
    console.log(`  + ${label} ${vtag}`);
    saveCache(cache);
  }

  saveCache(cache);
  console.log('\nZusammenfassung:', JSON.stringify(summary));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
