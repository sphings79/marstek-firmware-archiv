'use strict';

// Shared helpers for the firmware archive automation.
// Used identically by the GitHub Action (per-issue) and the backfill script.

const fs = require('fs');
const path = require('path');

// Repo root = one level above this scripts/ folder.
const REPO_ROOT = path.resolve(__dirname, '..');
const FIRMWARES_DIR = path.join(REPO_ROOT, 'firmwares');

// Devices that store firmware WITHOUT a firmwareType subfolder:
//   firmwares/<device>/<version>/
// Everything else uses firmwares/<device>/<Type>/<version>/
const FLAT_STRUCTURE_DEVICES = new Set(['HME-3', 'HME-4', 'HMJ-2']);

// Canonical, capitalized firmware-type folder names. The submission issues and
// the old archive used mixed casing (control/Control, bms/BMS, micro). We pin a
// single spelling so no duplicate folders (control + Control) can ever appear.
const CANONICAL_TYPES = {
  control: 'Control',
  bms: 'BMS',
  mppt: 'MPPT',
  micro: 'Micro',
  dcdc: 'DCDC',
  led: 'LED',
  charger: 'Charger',
};

// The submission tool's top-level "Firmware Type" field is UNRELIABLE: it labels
// the microinverter firmware as "MPPT". The authoritative source is
// apiResponse.data.<module> — the module slot whose `url` matches the download
// URL is the real firmware type (its key / mcu_type). We always prefer that.
function deriveFirmwareType(metadata, fallback) {
  const data = metadata && metadata.apiResponse && metadata.apiResponse.data;
  const base = (u) => (u ? String(u).split('/').pop().split('?')[0] : null);
  if (data && typeof data === 'object') {
    const topBase = base(metadata.url);
    // 1) module whose url matches the top-level download url
    for (const [k, v] of Object.entries(data)) {
      if (v && typeof v === 'object' && v.url && topBase && base(v.url) === topBase) {
        return normalizeFirmwareType(v.mcu_type || k);
      }
    }
    // 2) exactly one populated module carrying a url
    const populated = Object.entries(data).filter(([, v]) => v && typeof v === 'object' && v.url);
    if (populated.length === 1) {
      const [k, v] = populated[0];
      return normalizeFirmwareType(v.mcu_type || k);
    }
  }
  return normalizeFirmwareType(fallback);
}

function isFlatDevice(deviceType) {
  return FLAT_STRUCTURE_DEVICES.has(deviceType);
}

function normalizeFirmwareType(ft) {
  if (!ft) return null;
  const key = String(ft).trim().toLowerCase();
  if (CANONICAL_TYPES[key]) return CANONICAL_TYPES[key];
  const t = String(ft).trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

// Absolute target directory for a firmware version.
function targetDir(deviceType, firmwareType, version) {
  if (isFlatDevice(deviceType)) {
    return path.join(FIRMWARES_DIR, deviceType, String(version));
  }
  return path.join(FIRMWARES_DIR, deviceType, normalizeFirmwareType(firmwareType), String(version));
}

// Repo-relative POSIX path, for README/changelog links.
function relPosix(absPath) {
  return path.relative(REPO_ROOT, absPath).split(path.sep).join('/');
}

// Parse a submission issue body into its fields + embedded JSON metadata.
// Returns null if the body is not a firmware submission.
function parseIssueBody(body) {
  if (!body) return null;

  const field = (label) => {
    const m = body.match(new RegExp('\\*\\*' + label + ':\\*\\*\\s*(.+)'));
    return m ? m[1].trim() : null;
  };

  const deviceType = field('Device Type');
  const firmwareTypeRaw = field('Firmware Type');
  const version = field('Version');

  // Grab the first ```json ... ``` fenced block.
  let metadata = null;
  const fence = body.match(/```json\s*([\s\S]*?)```/i);
  if (fence) {
    try {
      metadata = JSON.parse(fence[1].trim());
    } catch (e) {
      metadata = null;
    }
  }

  if (!deviceType || !version) return null;

  return {
    deviceType,
    firmwareTypeRaw: firmwareTypeRaw && firmwareTypeRaw !== 'None' ? firmwareTypeRaw : null,
    // Derived from apiResponse when possible (fixes the tool's "MPPT" mislabel).
    firmwareType: isFlatDevice(deviceType)
      ? null
      : deriveFirmwareType(metadata || {}, firmwareTypeRaw),
    version: String(version),
    metadata: metadata || {},
  };
}

// Find the firmware download URL inside an arbitrary metadata object.
function findDownloadUrl(metadata) {
  if (!metadata || typeof metadata !== 'object') return null;
  if (typeof metadata.url === 'string' && metadata.url) return metadata.url;
  if (typeof metadata.downloadUrl === 'string' && metadata.downloadUrl) return metadata.downloadUrl;
  if (typeof metadata.firmware_url === 'string' && metadata.firmware_url) return metadata.firmware_url;
  // Deep search for the first .bin URL.
  let found = null;
  const walk = (o) => {
    if (found || !o || typeof o !== 'object') return;
    for (const v of Object.values(o)) {
      if (found) return;
      if (typeof v === 'string' && /^https?:\/\/.+\.bin(\?|$)/i.test(v)) { found = v; return; }
      if (v && typeof v === 'object') walk(v);
    }
  };
  walk(metadata);
  return found;
}

// Pull the raw (usually Chinese) release note out of a metadata object.
function extractReleaseNote(metadata) {
  if (!metadata || typeof metadata !== 'object') return '';
  const candidates = [metadata.english, metadata.chinese, metadata.remark];
  for (const c of candidates) {
    if (typeof c === 'string' && c.trim()) return c.trim();
  }
  // Look inside apiResponse.data.<module>
  const data = metadata.apiResponse && metadata.apiResponse.data;
  if (data && typeof data === 'object') {
    for (const mod of Object.values(data)) {
      if (mod && typeof mod === 'object') {
        for (const key of ['english', 'chinese', 'remark']) {
          if (typeof mod[key] === 'string' && mod[key].trim()) return mod[key].trim();
        }
      }
    }
  }
  return '';
}

function sha256(buffer) {
  return require('crypto').createHash('sha256').update(buffer).digest('hex');
}

module.exports = {
  REPO_ROOT,
  FIRMWARES_DIR,
  FLAT_STRUCTURE_DEVICES,
  CANONICAL_TYPES,
  isFlatDevice,
  normalizeFirmwareType,
  deriveFirmwareType,
  targetDir,
  relPosix,
  parseIssueBody,
  findDownloadUrl,
  extractReleaseNote,
  sha256,
  fs,
  path,
};
