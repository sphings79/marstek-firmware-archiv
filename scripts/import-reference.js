'use strict';

// Import every firmware + release note from another Marstek archive
// (e.g. rweijnen/marstek-firmware-archive) into THIS archive.
//
//   node scripts/import-reference.js <pfad-zum-referenz-repo> [--no-translate] [--dry-run]
//
// - Kopiert nur Versionen, die hier noch fehlen (vorhandene bleiben unangetastet).
// - Vereinheitlicht auf die kanonische Struktur/Metadaten (Dateiname, Übersetzung,
//   SHA-256, CRC/Größen-Verifikation) und markiert Einträge mit `importedFrom`.
// - Maskiert Klarnamen (`deviceName`) aus der Fremdquelle.
//
// Wird sowohl manuell benutzt als auch von `sync-upstream.js` (täglicher
// Abgleich per GitHub Action) als Modul aufgerufen.

const {
  fs,
  path,
  targetDir,
  relPosix,
  isFlatDevice,
  buildArchiveName,
  deriveFirmwareType,
  findDownloadUrl,
  extractReleaseNote,
  sha256,
} = require('./lib');
const { translateNote, loadCache, saveCache } = require('./translate');
const { verifyBuffer } = require('./verify');

const DEFAULT_SOURCE = 'rweijnen/marstek-firmware-archive';
const FIRMWARE_EXTS = ['.bin', '.rbl'];

function isFirmwareFile(name) {
  const lower = String(name).toLowerCase();
  return FIRMWARE_EXTS.some((ext) => lower.endsWith(ext));
}

// Klarnamen aus der Fremdquelle unkenntlich machen: erste zwei + letzte zwei
// Zeichen bleiben stehen, der Rest wird zu '*' (gleiche Form wie im übrigen
// Archiv, z. B. "MS********0c"). Zu kurze Namen ("MTCT") bleiben unverändert.
function maskDeviceName(value) {
  const name = String(value || '');
  if (name.length <= 4) return name;
  return name.slice(0, 2) + '*'.repeat(name.length - 4) + name.slice(-2);
}

// Dateiname nach dem hiesigen Schema <version>_<typ>_<gerät>_<original>,
// abgeleitet aus der unveränderlichen CDN-Basename in metadata.url. Fällt auf
// den Namen der Fremdquelle zurück, wenn keine brauchbare URL vorhanden ist.
function pickArchiveName(meta, version, deviceType, firmwareType) {
  const fallback = String(meta.archivedFilename || 'firmware.bin');
  const url = findDownloadUrl(meta);
  let name = fallback;
  if (url) {
    try {
      name = path.basename(new URL(url).pathname).split('?')[0];
    } catch (e) {
      name = fallback;
    }
  }
  if (!isFirmwareFile(name)) name = fallback;
  return buildArchiveName(name, version, deviceType, firmwareType);
}

function findRefVersions(refFirmwares) {
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

// refRoot: Pfad zu einem ausgecheckten Referenz-Repo (mit oder ohne firmwares/).
// opts: { noTranslate, dryRun, source }
async function importFrom(refRoot, opts = {}) {
  const source = opts.source || process.env.SOURCE_REPO || DEFAULT_SOURCE;
  const refFirmwares = fs.existsSync(path.join(refRoot, 'firmwares'))
    ? path.join(refRoot, 'firmwares')
    : refRoot;

  const cache = loadCache();
  const items = findRefVersions(refFirmwares);
  console.log(`Referenz: ${items.length} Versionen in ${refFirmwares}\n`);
  const summary = { imported: [], exists: 0, skipped: 0, error: 0, unverified: [] };

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

    if (opts.dryRun) {
      summary.imported.push(label);
      console.log(`  + ${label} (Dry-Run, nichts geschrieben)`);
      continue;
    }

    const buf = fs.readFileSync(srcBin);
    const note = extractReleaseNote(meta);
    let de = '';
    let en = typeof meta.english === 'string' ? meta.english.trim() : '';
    if (note && !opts.noTranslate) {
      const tr = await translateNote(note, cache, ['de', 'en']);
      de = tr.de;
      if (!en) en = tr.en;
    }
    const v = verifyBuffer(buf, meta, firmwareType);
    const filename = pickArchiveName(meta, version, deviceType, firmwareType);

    fs.mkdirSync(dest, { recursive: true });
    fs.writeFileSync(path.join(dest, filename), buf);

    const out = Object.assign({}, meta, {
      deviceType,
      firmwareType,
      version,
      releaseNote: note,
      releaseNoteDE: de,
      releaseNoteEN: en,
      archivedFilename: filename,
      archivedFilesize: buf.length,
      archivedSha256: sha256(buf),
      apiCrc: v.checked ? v.apiCrc : null,
      apiSize: v.checked ? v.apiSize : null,
      verified: v.checked ? v.ok : null,
      issueNumber: null,
      importedFrom: source,
    });
    if (out.deviceName) out.deviceName = maskDeviceName(out.deviceName);
    fs.writeFileSync(path.join(dest, 'metadata.json'), JSON.stringify(out, null, 2) + '\n');

    // Preserve a pre-existing manual `changelog` file from the reference, if any.
    const refCl = path.join(dir, 'changelog');
    if (fs.existsSync(refCl) && fs.statSync(refCl).isFile()) {
      fs.copyFileSync(refCl, path.join(dest, 'changelog'));
    }

    summary.imported.push(label);
    if (v.checked && !v.ok) summary.unverified.push(`${label}: ${v.errors.join('; ')}`);
    const vtag = v.checked ? (v.ok ? '✓verifiziert' : '⚠ ' + v.errors.join(';')) : '(keine crc)';
    console.log(`  + ${label} ${vtag} → ${relPosix(path.join(dest, filename))}`);
    saveCache(cache);
  }

  saveCache(cache);
  console.log(
    '\nZusammenfassung: ' +
      JSON.stringify({
        imported: summary.imported.length,
        exists: summary.exists,
        skipped: summary.skipped,
        error: summary.error,
      })
  );
  return summary;
}

module.exports = { importFrom, maskDeviceName, pickArchiveName };

if (require.main === module) {
  const refRoot = process.argv[2];
  if (!refRoot) {
    console.error(
      'Usage: node scripts/import-reference.js <pfad-zum-referenz-repo> [--no-translate] [--dry-run]'
    );
    process.exit(1);
  }
  importFrom(refRoot, {
    noTranslate: process.argv.includes('--no-translate'),
    dryRun: process.argv.includes('--dry-run'),
  }).catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
