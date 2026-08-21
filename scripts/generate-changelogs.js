'use strict';

// Generate changelogs from the firmwares/ tree:
//   * CHANGELOG.md                                  (global, all devices)
//   * firmwares/<device>/CHANGELOG.md               (per device)
//   * firmwares/<device>/<Type>/CHANGELOG.md        (per firmware module)
//
// Release-note preference per version:
//   manual `changelog` file  >  translated German  >  original text.

const { fs, path, REPO_ROOT, FIRMWARES_DIR, formatVersion } = require('./lib');
const { scanFirmwares } = require('./scan');

function fmtDate(s) {
  if (!s) return '';
  const d = new Date(s);
  return isNaN(d) ? '' : d.toISOString().slice(0, 10);
}

function bestNote(fw) {
  if (fw.manualChangelog) return fw.manualChangelog;
  if (fw.noteDE) return fw.noteDE;
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
function asBullets(note) {
  if (!note) return '_Keine Release Notes._';
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

function section(fw, opts = {}) {
  const date = fmtDate(fw.archivedAt);
  const head = opts.withModule && fw.firmwareType ? `${fw.firmwareType} v${formatVersion(fw.version)}` : `v${formatVersion(fw.version)}`;
  let s = `## ${head}${date ? ` — ${date}` : ''}\n\n`;
  s += asBullets(bestNote(fw)) + '\n\n';
  const bits = [];
  if (fw.issueNumber) bits.push(`Issue [#${fw.issueNumber}](../../${'../'.repeat(opts.depth || 0)}issues/${fw.issueNumber})`);
  if (fw.filename && fw.binRel) bits.push(`Datei \`${fw.filename}\``);
  if (fw.sha256) bits.push(`SHA-256 \`${fw.sha256.slice(0, 12)}…\``);
  if (bits.length) s += '<sub>' + bits.join(' · ') + '</sub>\n\n';
  return s;
}

function writeFile(p, content) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}

function main() {
  const fws = scanFirmwares().filter((f) => f.hasBin);

  // ---- Global ----
  const byDate = [...fws].sort((a, b) => {
    const d = new Date(b.archivedAt || 0) - new Date(a.archivedAt || 0);
    return d || b.versionNum - a.versionNum;
  });
  let global = `# Changelog — Marstek Firmware Archiv\n\nAlle archivierten Firmware-Versionen, chronologisch (neueste zuerst).\n\n`;
  for (const fw of byDate) {
    const mod = fw.firmwareType ? `${fw.firmwareType} ` : '';
    global += `## ${fw.deviceType} — ${mod}v${formatVersion(fw.version)}${fw.archivedAt ? ` — ${fmtDate(fw.archivedAt)}` : ''}\n\n`;
    global += asBullets(bestNote(fw)) + '\n\n';
    const bits = [];
    if (fw.issueNumber) bits.push(`Issue [#${fw.issueNumber}](issues/${fw.issueNumber})`);
    if (fw.binRel) bits.push(`[${fw.filename}](${fw.binRel})`);
    if (bits.length) global += '<sub>' + bits.join(' · ') + '</sub>\n\n';
  }
  writeFile(path.join(REPO_ROOT, 'CHANGELOG.md'), global);

  // ---- Per device & per module ----
  const devices = {};
  for (const fw of fws) {
    (devices[fw.deviceType] = devices[fw.deviceType] || []).push(fw);
  }

  for (const device of Object.keys(devices).sort()) {
    const list = devices[device];

    // per device (depth 2: firmwares/<device>/CHANGELOG.md)
    let dmd = `# Changelog — ${device}\n\n`;
    const sorted = [...list].sort((a, b) => {
      const d = new Date(b.archivedAt || 0) - new Date(a.archivedAt || 0);
      return d || b.versionNum - a.versionNum;
    });
    for (const fw of sorted) dmd += section(fw, { withModule: true, depth: 2 });
    writeFile(path.join(FIRMWARES_DIR, device, 'CHANGELOG.md'), dmd);

    // per module (depth 3: firmwares/<device>/<Type>/CHANGELOG.md)
    const byType = {};
    for (const fw of list) {
      const t = fw.firmwareType || 'Firmware';
      (byType[t] = byType[t] || []).push(fw);
    }
    for (const type of Object.keys(byType)) {
      if (type === 'Firmware') continue; // flat device: covered by device-level changelog
      let tmd = `# Changelog — ${device} / ${type}\n\n`;
      const ts = byType[type].sort((a, b) => b.versionNum - a.versionNum);
      for (const fw of ts) tmd += section(fw, { depth: 3 });
      writeFile(path.join(FIRMWARES_DIR, device, type, 'CHANGELOG.md'), tmd);
    }
  }

  console.log(`Changelogs erzeugt: global + ${Object.keys(devices).length} Geräte + Module.`);
}

main();
