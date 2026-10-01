'use strict';

// Write index.json: a compact list of every flashable firmware image, for tools that want to
// offer a download without walking the repository (the GitHub contents API is rate-limited, a
// single raw file is not). Only .bin images of devices with a firmware-type layout are listed;
// the FC41D .rbl modules and the flat meter/Saturn layouts are not OTA images for these tools.
//
//   index.json
//   { generated, devices: { "<deviceType>": { model, firmwares: [ { type, version, display, beta,
//       file, size, sha256, date, noteEN, noteDE } ] } } }
//
// `file` is the path inside the repository, so a raw URL is
// https://raw.githubusercontent.com/<owner>/<repo>/main/<file>.

const { fs, path, REPO_ROOT, deviceModel, formatVersion, isBetaVersion } = require('./lib');
const { scanFirmwares } = require('./scan');

const devices = {};

for (const fw of scanFirmwares()) {
  if (!fw.hasBin || !fw.firmwareType || !/\.bin$/i.test(fw.filename)) continue;

  const dev = (devices[fw.deviceType] ||= { model: deviceModel(fw.deviceType), firmwares: [] });
  dev.firmwares.push({
    type: fw.firmwareType,
    version: fw.version,
    display: formatVersion(fw.version),
    beta: isBetaVersion(fw.version),
    file: fw.binRel,
    size: fw.filesize,
    sha256: fw.sha256,
    date: fw.archivedAt ? String(fw.archivedAt).slice(0, 10) : null,
    noteEN: fw.manualChangelogEN || fw.noteEN || fw.note || '',
    noteDE: fw.manualChangelogDE || fw.noteDE || fw.note || '',
    versionNum: fw.versionNum,
  });
}

// Newest first within each type, stable output so the file only changes when the archive does.
for (const dev of Object.values(devices)) {
  dev.firmwares.sort((a, b) => a.type.localeCompare(b.type) || b.versionNum - a.versionNum);
  for (const f of dev.firmwares) delete f.versionNum;
}

const sorted = Object.fromEntries(Object.entries(devices).sort(([a], [b]) => a.localeCompare(b)));
fs.writeFileSync(path.join(REPO_ROOT, 'index.json'), JSON.stringify({ devices: sorted }, null, 1) + '\n');

const count = Object.values(sorted).reduce((n, d) => n + d.firmwares.length, 0);
console.log(`index.json: ${count} firmware images across ${Object.keys(sorted).length} devices`);
