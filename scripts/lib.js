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
  // FC41D = WLAN-/Kommunikationsmodul (Quectel/Realtek). Wird als Firmware-Typ
  // unter dem jeweiligen Gerät abgelegt: firmwares/<Gerät>/FC41D/<Version>/.
  // Die .rbl ist modulweit; taucht dasselbe Modul-Image auf mehreren Geräten
  // auf, wird es je Gerät einmal archiviert.
  fc41d: 'FC41D',
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

// Numeric sort value for a firmware version.
// Marstek stores some versions as "major.minor" with the dot removed: a 4-digit
// version's last digit is a minor revision (1492 = 149.2, 1487 = 148.7), while
// 3-digit versions are whole numbers (150 = 150.0). So 150 is NEWER than 1492
// even though 1492 > 150 as plain integers. Long numeric versions (e.g. the
// 12-digit FC41D build timestamps) and anything else compare by plain value.
function versionSortValue(version) {
  const s = String(version == null ? '' : version).trim();
  if (/^\d{4}$/.test(s)) return parseInt(s, 10) / 10; // 1492 -> 149.2
  if (/^\d+$/.test(s)) return parseInt(s, 10);        // 150, timestamps, ...
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

// Human-facing version string. A 4-digit version is "major.minor" with the dot
// dropped, so display it with the dot: 1492 -> "149.2". 3-digit versions and
// long timestamps are shown unchanged. Display only — never used for folders.
function formatVersion(version) {
  const s = String(version == null ? '' : version).trim();
  if (/^\d{4}$/.test(s)) return s.slice(0, 3) + '.' + s.slice(3); // 1492 -> 149.2
  return s;
}

function escapeRegExp(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function fileToken(s) {
  return String(s == null ? '' : s).trim().replace(/[^A-Za-z0-9._-]/g, '');
}

// Misspelled device prefixes that appear in Marstek's own source filenames
// (e.g. "VNSEE3-0_app_..." with a doubled E). When an original name starts with
// one of these, we strip it — the scheme adds the correct device code anyway, so
// keeping it would produce e.g. ..._VNSE3-0_VNSEE3-0_app_...
const SOURCE_NAME_TYPO_PREFIXES = ['VNSEE3-0'];

function stripSourceTypoPrefix(name) {
  for (const p of SOURCE_NAME_TYPO_PREFIXES) {
    const m = name.match(new RegExp('^' + escapeRegExp(p) + '[._-]', 'i'));
    if (m) return name.slice(m[0].length);
  }
  return name;
}

// Build the archived filename for a firmware file. Scheme:
//   <version>_<type>_<device>_<original>
// e.g. 147_control_VNSD-0_202601281721320b2053125.bin
//
// The version prefix makes the real version unmistakable (the opaque CDN hashes
// only LOOK like a date), and device + type add context once a file is
// downloaded out of its folder. Tokens the <original> name already begins with
// are NOT repeated: VNSD-0_app_0150_...bin becomes 150_control_VNSD-0_app_0150_...
// (device appears once), never 150_control_VNSD-0_VNSD-0_app_...
//
// `originalBasename` should be the immutable CDN basename (from metadata.url),
// so the result is stable no matter what the file is currently called on disk.
function buildArchiveName(originalBasename, version, deviceType, firmwareType) {
  let name = String(originalBasename || '').split('/').pop().split('?')[0];
  if (!name) name = 'firmware.bin';
  name = stripSourceTypoPrefix(name);

  const tokens = [];
  const v = fileToken(version);
  if (v) tokens.push(v);
  const t = firmwareType ? fileToken(firmwareType).toLowerCase() : '';
  if (t) tokens.push(t);
  const d = fileToken(deviceType);
  if (d) tokens.push(d);

  // Drop any token the original name already starts with (case-insensitive),
  // so a leading device/type/version segment is never duplicated.
  const prefixParts = tokens.filter(
    (tok) => !new RegExp('^' + escapeRegExp(tok) + '[._-]', 'i').test(name)
  );
  if (!prefixParts.length) return name;

  const prefix = prefixParts.join('_');
  if (name.toLowerCase().startsWith(prefix.toLowerCase() + '_')) return name; // idempotent
  return prefix + '_' + name;
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
      if (typeof v === 'string' && /^https?:\/\/.+\.(bin|rbl)(\?|$)/i.test(v)) { found = v; return; }
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
  versionSortValue,
  formatVersion,
  buildArchiveName,
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
