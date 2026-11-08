'use strict';

// Consistency checks for the firmware archive. No dependencies, no network.
//
//   node scripts/check-archive.js              # check every archived entry
//   node scripts/check-archive.js --base <ref> # per-entry checks only for
//                                              # entries changed vs <ref>
//
// Output uses GitHub Actions annotations (::error / ::warning). The exit code
// is 1 only when an *error* was found; warnings never fail the run.
//
// Checks:
//   markers     merge-conflict markers in tracked text files          (error)
//   entry       metadata.json readable, file present, size + SHA-256,
//               folder name matches device/type/version               (error)
//   verify      size/CRC against the Marstek API values              (error,
//               warning when the entry is already flagged verified:false)
//   notes       API carries a release note but releaseNote is empty   (warning)
//   privacy     unmasked token / mailbox / uid / serial / MAC / e-mail
//               in metadata.json                                      (error)
//   duplicates  same SHA-256 under several versions of one module     (warning)

const { execFileSync } = require('child_process');
const crypto = require('crypto');
const { fs, path, REPO_ROOT, isFlatDevice, targetDir, extractReleaseNote, relPosix } = require('./lib');
const { scanFirmwares } = require('./scan');
const { verifyBuffer } = require('./verify');

const baseIdx = process.argv.indexOf('--base');
const base = baseIdx > -1 ? process.argv[baseIdx + 1] : null;

let errors = 0;
let warnings = 0;

function annotate(level, file, msg) {
  if (level === 'error') errors++;
  else warnings++;
  const loc = file ? ` file=${file}` : '';
  console.log(`::${level}${loc}::${msg}`);
}

function git(args) {
  return execFileSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8', maxBuffer: 1 << 28 });
}

// ── markers ────────────────────────────────────────────────────────────────
// Assembled from pieces so this file never matches itself.
const MARKER_RE = new RegExp('^(' + '<'.repeat(7) + '|' + '>'.repeat(7) + ')( |$)', 'm');
const TEXT_EXT = /\.(md|json|js|yml|yaml|txt)$/i;

function checkMarkers() {
  const files = git(['ls-files']).split('\n').filter((f) => f && TEXT_EXT.test(f));
  for (const f of files) {
    const abs = path.join(REPO_ROOT, f);
    if (!fs.existsSync(abs)) continue;
    if (MARKER_RE.test(fs.readFileSync(abs, 'utf8'))) {
      annotate('error', f, 'markers: merge-conflict marker found');
    }
  }
}

// ── privacy ────────────────────────────────────────────────────────────────
const SENSITIVE_KEYS = new Set(['token', 'mailbox', 'uid', 'devid', 'sn', 'mac', 'email', 'password']);
const EMAIL_RE = /[A-Za-z0-9._%+-]+(@|%40)[A-Za-z0-9.-]+\.[A-Za-z]{2,}/;
const URL_SECRET_RE = /[?&](token|mailbox|uid|devid)=/i;

function scanPrivacy(node, trail, hits) {
  if (Array.isArray(node)) {
    node.forEach((v, i) => scanPrivacy(v, trail + '[' + i + ']', hits));
  } else if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      const here = trail ? trail + '.' + k : k;
      if (SENSITIVE_KEYS.has(k.toLowerCase()) && typeof v === 'string' && v && !v.includes('*')) {
        hits.push(here + ' is not masked');
      }
      scanPrivacy(v, here, hits);
    }
  } else if (typeof node === 'string') {
    if (EMAIL_RE.test(node)) hits.push(trail + ' contains an e-mail address');
    else if (URL_SECRET_RE.test(node)) hits.push(trail + ' contains a token/mailbox/uid URL parameter');
  }
}

// ── per-entry checks ───────────────────────────────────────────────────────
function changedDirs() {
  if (!base) return null;
  const out = git(['diff', '--name-only', base, '--', 'firmwares']);
  const dirs = new Set();
  for (const f of out.split('\n')) {
    if (f) dirs.add(path.posix.dirname(f));
  }
  return dirs;
}

function checkEntries(entries, changed) {
  for (const e of entries) {
    if (changed && !changed.has(e.dirRel)) continue;
    const metaRel = e.dirRel + '/metadata.json';
    const label = `${e.deviceType}${e.firmwareType ? ' ' + e.firmwareType : ''} v${e.version}`;
    const meta = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, metaRel), 'utf8'));

    // entry: file, size, hash, folder name
    if (!e.filename || !e.hasBin) {
      annotate('error', metaRel, `entry: ${label}: archived file missing`);
      continue;
    }
    const buf = fs.readFileSync(path.join(REPO_ROOT, e.binRel));
    if (meta.archivedFilesize != null && buf.length !== meta.archivedFilesize) {
      annotate('error', metaRel, `entry: ${label}: file is ${buf.length} bytes, metadata says ${meta.archivedFilesize}`);
    }
    const sha = crypto.createHash('sha256').update(buf).digest('hex');
    if (meta.archivedSha256 && sha !== meta.archivedSha256) {
      annotate('error', metaRel, `entry: ${label}: SHA-256 does not match metadata`);
    }
    const expectedDir = relPosix(targetDir(e.deviceType, e.firmwareType, e.version));
    if (expectedDir !== e.dirRel) {
      annotate('error', metaRel, `entry: ${label}: stored in ${e.dirRel}, expected ${expectedDir}`);
    }

    // verify: size/CRC against API values (module layout) or flat apiResponse.size
    const v = verifyBuffer(buf, meta, e.firmwareType);
    let problems = v.checked && !v.ok ? v.errors : [];
    const api = meta.apiResponse;
    if (!v.checked && isFlatDevice(e.deviceType) && api && api.size != null && api.size !== '') {
      if (Number(api.size) !== buf.length) problems = [`size ${buf.length} ≠ API ${api.size}`];
    }
    if (problems.length) {
      annotate(meta.verified === false ? 'warning' : 'error', metaRel, `verify: ${label}: ${problems.join('; ')}`);
    }

    // notes: API has text, archive has none
    if (extractReleaseNote(meta) && !String(meta.releaseNote || '').trim()) {
      annotate('warning', metaRel, `notes: ${label}: API provides a release note but releaseNote is empty`);
    }

    // privacy
    const hits = [];
    scanPrivacy(meta, '', hits);
    for (const h of hits) annotate('error', metaRel, `privacy: ${label}: ${h}`);
  }
}

// ── duplicates ─────────────────────────────────────────────────────────────
function checkDuplicates(entries) {
  const seen = new Map();
  for (const e of entries) {
    if (!e.sha256) continue;
    const key = `${e.deviceType}|${e.firmwareType || ''}|${e.sha256}`;
    if (!seen.has(key)) seen.set(key, []);
    seen.get(key).push(e);
  }
  for (const list of seen.values()) {
    if (list.length > 1) {
      const names = list.map((e) => 'v' + e.version).join(', ');
      annotate('warning', list[0].dirRel + '/metadata.json',
        `duplicates: ${list[0].deviceType}${list[0].firmwareType ? ' ' + list[0].firmwareType : ''}: identical file under ${names}`);
    }
  }
}

checkMarkers();
const entries = scanFirmwares();
checkEntries(entries, changedDirs());
checkDuplicates(entries);

console.log(`check-archive: ${entries.length} entries, ${errors} error(s), ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
