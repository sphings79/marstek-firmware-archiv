'use strict';

// Core: turn ONE firmware-submission issue into an archived firmware folder.
// Idempotent — re-running on an already-archived version is a no-op.

const {
  fs,
  path,
  targetDir,
  relPosix,
  parseIssueBody,
  findDownloadUrl,
  extractReleaseNote,
  isFlatDevice,
  sha256,
} = require('./lib');
const { translateNote } = require('./translate');

function pickFilename(url) {
  let name = path.basename(new URL(url).pathname);
  name = name.split('?')[0];
  if (!name.toLowerCase().endsWith('.bin')) name = 'firmware.bin';
  return name;
}

async function download(url) {
  const res = await fetch(url, { redirect: 'follow', headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error('download http ' + res.status);
  const buf = Buffer.from(await res.arrayBuffer());
  if (!buf.length) throw new Error('downloaded file is empty');
  return buf;
}

// issue: { number, state, body }
// cache: translation cache object (mutated in place; caller persists it)
async function processIssue(issue, cache, opts = {}) {
  const parsed = parseIssueBody(issue.body);
  if (!parsed) {
    return { number: issue.number, status: 'skipped', reason: 'not a firmware submission' };
  }

  const { deviceType, firmwareType, version, metadata } = parsed;
  const dir = targetDir(deviceType, firmwareType, version);
  const label = isFlatDevice(deviceType)
    ? `${deviceType} v${version}`
    : `${deviceType} ${firmwareType} v${version}`;

  // Idempotency: a folder with a real .bin + metadata.json is considered done,
  // unless opts.refresh is set (then we regenerate metadata + translations,
  // reusing the on-disk .bin instead of re-downloading).
  let existingBin = null;
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    const binName = files.find((f) => f.toLowerCase().endsWith('.bin'));
    const hasMeta = files.includes('metadata.json');
    if (binName && hasMeta) {
      if (!opts.refresh) {
        return { number: issue.number, status: 'exists', label, path: relPosix(dir) };
      }
      existingBin = path.join(dir, binName);
    }
  }

  const url = findDownloadUrl(metadata);
  if (!url) {
    return { number: issue.number, status: 'error', label, reason: 'no download URL in metadata' };
  }

  const filename = existingBin ? path.basename(existingBin) : pickFilename(url);
  let buf;
  try {
    buf = existingBin ? fs.readFileSync(existingBin) : await download(url);
  } catch (e) {
    return { number: issue.number, status: 'error', label, reason: e.message };
  }

  // Translate the (usually Chinese) release note.
  const note = extractReleaseNote(metadata);
  let translations = { de: '', en: '' };
  if (note && !opts.noTranslate) {
    translations = await translateNote(note, cache, ['de', 'en']);
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, filename), buf);

  const out = Object.assign({}, metadata, {
    deviceType,
    firmwareType: isFlatDevice(deviceType) ? null : firmwareType,
    version,
    url,
    releaseNote: note,
    releaseNoteDE: translations.de,
    releaseNoteEN: translations.en,
    archivedAt: opts.now || new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
    archivedFilename: filename,
    archivedFilesize: buf.length,
    archivedSha256: sha256(buf),
    issueNumber: issue.number,
  });
  fs.writeFileSync(path.join(dir, 'metadata.json'), JSON.stringify(out, null, 2) + '\n');

  return {
    number: issue.number,
    status: existingBin ? 'refreshed' : 'archived',
    label,
    path: relPosix(dir),
    filename,
    filesize: buf.length,
  };
}

module.exports = { processIssue };
