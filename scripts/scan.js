'use strict';

// Walk firmwares/ and return a normalized list of every archived version.
// Handles both layouts: firmwares/<dev>/<Type>/<ver>/ and flat firmwares/<dev>/<ver>/.

const { fs, path, FIRMWARES_DIR, isFlatDevice, normalizeFirmwareType, relPosix } = require('./lib');

function readMeta(dir) {
  try {
    return JSON.parse(fs.readFileSync(path.join(dir, 'metadata.json'), 'utf8'));
  } catch (e) {
    return null;
  }
}

// A version dir is a leaf that contains metadata.json.
function isVersionDir(dir) {
  return fs.existsSync(path.join(dir, 'metadata.json'));
}

function entryFrom(deviceType, firmwareType, version, dir) {
  const meta = readMeta(dir);
  if (!meta) return null;

  // A pre-existing manual `changelog` file (plain text, usually German) wins.
  let manualChangelog = '';
  const clPath = path.join(dir, 'changelog');
  if (fs.existsSync(clPath) && fs.statSync(clPath).isFile()) {
    manualChangelog = fs.readFileSync(clPath, 'utf8').trim();
  }

  const filename = meta.archivedFilename || null;
  const binRel = filename ? relPosix(path.join(dir, filename)) : null;

  return {
    deviceType: meta.deviceType || deviceType,
    firmwareType: isFlatDevice(deviceType) ? null : normalizeFirmwareType(firmwareType || meta.firmwareType),
    version: String(version),
    versionNum: parseInt(version, 10) || 0,
    filename,
    filesize: meta.archivedFilesize || null,
    sha256: meta.archivedSha256 || null,
    archivedAt: meta.archivedAt || null,
    issueNumber: meta.issueNumber || null,
    note: meta.releaseNote || meta.chinese || meta.remark || meta.english || '',
    noteDE: meta.releaseNoteDE || '',
    noteEN: meta.releaseNoteEN || '',
    manualChangelog,
    dirRel: relPosix(dir),
    binRel,
    hasBin: !!(filename && fs.existsSync(path.join(dir, filename))),
  };
}

function scanFirmwares() {
  const out = [];
  if (!fs.existsSync(FIRMWARES_DIR)) return out;

  for (const device of fs.readdirSync(FIRMWARES_DIR)) {
    const deviceDir = path.join(FIRMWARES_DIR, device);
    if (!fs.statSync(deviceDir).isDirectory()) continue;

    for (const child of fs.readdirSync(deviceDir)) {
      const childDir = path.join(deviceDir, child);
      if (!fs.statSync(childDir).isDirectory()) continue;

      if (isVersionDir(childDir)) {
        // flat layout: device/version
        const e = entryFrom(device, null, child, childDir);
        if (e) out.push(e);
      } else {
        // type layout: device/type/version
        for (const ver of fs.readdirSync(childDir)) {
          const verDir = path.join(childDir, ver);
          if (fs.statSync(verDir).isDirectory() && isVersionDir(verDir)) {
            const e = entryFrom(device, child, ver, verDir);
            if (e) out.push(e);
          }
        }
      }
    }
  }
  return out;
}

module.exports = { scanFirmwares };
