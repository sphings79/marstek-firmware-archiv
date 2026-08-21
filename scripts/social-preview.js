'use strict';

// Erzeugt das Social-Preview-Bild — das Vorschaubild, das GitHub ausliefert,
// wenn jemand den Repo-Link teilt (WhatsApp, Discord, Reddit, Slack …).
//
//   node scripts/social-preview.js
//   -> .github/social-preview.svg   (Quelle, editierbar, in Git lesbar)
//   -> .github/social-preview.png   (1280×640, das was hochgeladen wird)
//
// Hochladen bleibt Handarbeit — GitHub bietet dafür keine API:
//   Settings -> General -> Social preview -> Upload an image
//
// Warum der Umweg über PDF: auf dem Mac ist ohne Zusatzsoftware nur Quick Look
// als Renderer da, und das skaliert SVG nicht verlässlich (verzerrt 2:1-Formate).
// Ein selbst geschriebenes PDF mit exakter MediaBox rastert `sips` dagegen
// pixelgenau. Das Layout wird deshalb einmal als Primitiven-Liste beschrieben
// und in beide Formate ausgegeben.

const os = require('os');
const { execFileSync } = require('child_process');
const { fs, path, REPO_ROOT, deviceModel } = require('./lib');
const { scanFirmwares } = require('./scan');

const W = 1280;
const H = 640;

const C = {
  bg: '#0b1220',
  chip: '#152238',
  chipEdge: '#24344f',
  fg: '#e8eef7',
  muted: '#8fa3bf',
  accent: '#4ade80',
  link: '#38bdf8',
  rule: '#24344f',
};

// ---------------------------------------------------------------- Textbreite
// Grobe Helvetica-Metrik: reicht, um Chips um ihren Text herum zu bauen. Beide
// Ausgabeformate benutzen dieselbe Schätzung, also sitzen sie identisch.
const NARROW = new Set('ijlt.,:;!|/\\\'`()[]{}-'.split(''));
const WIDE = new Set('mwMW@%'.split(''));
function measure(text, size, bold) {
  let em = 0;
  for (const ch of String(text)) {
    if (NARROW.has(ch)) em += 0.3;
    else if (WIDE.has(ch)) em += 0.85;
    else if (ch === ' ') em += 0.28;
    else if (ch >= 'A' && ch <= 'Z') em += 0.68;
    else em += 0.53;
  }
  return em * size * (bold ? 1.06 : 1);
}

// ------------------------------------------------------------------- Layout
function layout() {
  const fws = scanFirmwares().filter((f) => f.hasBin);
  const codes = [...new Set(fws.map((f) => f.deviceType))].sort();

  // Kurznamen für die Chip-Reihe — in eine Zeile müssen sie passen, also
  // knapper als im README: "Marstek Smart Meter CT002 / P1" -> "CT002 / P1".
  const shorten = (name) =>
    name
      .replace(/^Marstek\s+/, '')
      .replace(/^Smart Meter\s+/, '')
      .replace(/^Saturn \/ /, '')
      .replace(/\s+Gen 1\/2$/, '')
      .replace(/\s+v2$/, '');
  const chips = [...new Set(codes.map((c) => shorten(deviceModel(c) || c)))].sort();

  const items = [
    { t: 'rect', x: 0, y: 0, w: W, h: H, fill: C.bg },
    { t: 'rect', x: 0, y: 0, w: W, h: 8, fill: C.accent },

    // Batteriesymbol oben rechts, bewusst dezent. Bleibt über der Chip-Reihe,
    // damit die Chips die volle Breite nutzen können.
    { t: 'rect', x: 1082, y: 74, w: 60, h: 22, r: 7, fill: C.accent, opacity: 0.16 },
    { t: 'rect', x: 1040, y: 96, w: 144, h: 232, r: 20, fill: C.chip },
    { t: 'rect', x: 1060, y: 212, w: 104, h: 96, r: 10, fill: C.accent, opacity: 0.16 },

    { t: 'text', x: 80, y: 148, s: 24, fill: C.accent, tracking: 6, str: 'COMMUNITY ARCHIVE' },
    { t: 'text', x: 80, y: 244, s: 66, fill: C.fg, bold: true, str: 'Marstek Firmware Archive' },
    {
      t: 'text',
      x: 80,
      y: 306,
      s: 29,
      fill: C.muted,
      str: 'Original OTA firmware — every version kept, so you can go back.',
    },
  ];

  // Chip-Reihe, von links gesetzt; Breite aus der geschätzten Textbreite.
  const PAD = 26;
  let x = 80;
  for (const label of chips) {
    const tw = measure(label, 23);
    const w = tw + PAD * 2;
    if (x + w > W - 80) {
      console.warn(`  ! Chip "${label}" passt nicht mehr in die Zeile und fehlt im Bild.`);
      break;
    }
    items.push({ t: 'rect', x, y: 384, w, h: 54, r: 27, fill: C.chip, stroke: C.chipEdge });
    items.push({ t: 'text', x: x + PAD, y: 419, s: 23, fill: C.fg, str: label });
    x += w + 14;
  }

  items.push({ t: 'rect', x: 80, y: 508, w: W - 160, h: 2, fill: C.rule });
  items.push({
    t: 'text',
    x: 80,
    y: 556,
    s: 23,
    fill: C.muted,
    // Bewusst ohne Geräte-Zahl: die Chips zeigen Modelle, `codes` zählt
    // Gerätecodes (HME-3 und HME-4 sind beide "CT002 / P1") — das wären zwei
    // verschiedene Zahlen im selben Bild.
    str: `${fws.length} firmware files · release notes EN/DE · SHA-256 verified · synced daily`,
  });
  items.push({
    t: 'text',
    x: 80,
    y: 596,
    s: 23,
    fill: C.link,
    str: 'github.com/sphings79/marstek-firmware-archiv',
  });

  return items;
}

// ---------------------------------------------------------------------- SVG
const escXml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function toSvg(items) {
  const body = items
    .map((i) => {
      if (i.t === 'rect') {
        const r = i.r ? ` rx="${i.r}"` : '';
        const st = i.stroke ? ` stroke="${i.stroke}" stroke-width="2"` : '';
        const op = i.opacity != null ? ` opacity="${i.opacity}"` : '';
        return `  <rect x="${i.x}" y="${i.y}" width="${i.w}" height="${i.h}"${r} fill="${i.fill}"${st}${op}/>`;
      }
      const tr = i.tracking ? ` letter-spacing="${i.tracking}"` : '';
      const fw = i.bold ? ' font-weight="bold"' : '';
      return `  <text x="${i.x}" y="${i.y}" font-size="${i.s}" fill="${i.fill}"${fw}${tr}>${escXml(i.str)}</text>`;
    })
    .join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
${body}
</svg>
`;
}

// ---------------------------------------------------------------------- PDF
const hexRgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => (v / 255).toFixed(4)).join(' ');
};

// Rechteck mit runden Ecken als Bezier-Pfad (PDF kennt kein rx).
function roundRect(x, y, w, h, r) {
  const k = 0.5523 * r;
  const x2 = x + w;
  const y2 = y + h;
  return [
    `${x + r} ${y} m`,
    `${x2 - r} ${y} l`,
    `${x2 - r + k} ${y} ${x2} ${y + r - k} ${x2} ${y + r} c`,
    `${x2} ${y2 - r} l`,
    `${x2} ${y2 - r + k} ${x2 - r + k} ${y2} ${x2 - r} ${y2} c`,
    `${x + r} ${y2} l`,
    `${x + r - k} ${y2} ${x} ${y2 - r + k} ${x} ${y2 - r} c`,
    `${x} ${y + r} l`,
    `${x} ${y + r - k} ${x + r - k} ${y} ${x + r} ${y} c`,
    'h',
  ].join('\n');
}

// PDF-Textliterale: Klammern und Backslash maskieren, Nicht-ASCII nach
// WinAnsi (Latin-1) — "—" und "·" liegen dort auf 0x97 bzw. 0xB7.
function pdfString(s) {
  const win = { '—': '\x97', '·': '\xb7', '–': '\x96', '…': '\x85', '"': '\x93', '"': '\x94' };
  let out = '';
  for (const ch of String(s)) {
    const c = win[ch] || ch;
    if (c === '(' || c === ')' || c === '\\') out += '\\' + c;
    else if (c.charCodeAt(0) > 255) out += '?';
    else out += c;
  }
  return out;
}

function toPdf(items) {
  const ops = [];
  for (const i of items) {
    ops.push('q');
    if (i.opacity != null) ops.push(`/GS${Math.round(i.opacity * 100)} gs`);
    if (i.t === 'rect') {
      const y = H - i.y - i.h; // PDF zählt y von unten
      ops.push(`${hexRgb(i.fill)} rg`);
      if (i.stroke) ops.push(`${hexRgb(i.stroke)} RG 2 w`);
      if (i.r) {
        ops.push(roundRect(i.x, y, i.w, i.h, i.r));
        ops.push(i.stroke ? 'B' : 'f');
      } else {
        ops.push(`${i.x} ${y} ${i.w} ${i.h} re`);
        ops.push(i.stroke ? 'B' : 'f');
      }
    } else {
      ops.push('BT');
      ops.push(`/${i.bold ? 'FB' : 'FR'} ${i.s} Tf`);
      if (i.tracking) ops.push(`${i.tracking} Tc`);
      ops.push(`${hexRgb(i.fill)} rg`);
      ops.push(`${i.x} ${H - i.y} Td`);
      ops.push(`(${pdfString(i.str)}) Tj`);
      ops.push('ET');
    }
    ops.push('Q');
  }
  const content = ops.join('\n');

  // Transparenz-States für die beiden benutzten Deckkräfte.
  const alphas = [...new Set(items.filter((i) => i.opacity != null).map((i) => i.opacity))];
  const gs = alphas
    .map((a) => `/GS${Math.round(a * 100)} << /Type /ExtGState /ca ${a} /CA ${a} >>`)
    .join(' ');

  const objs = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${W} ${H}] /Resources << /Font << /FR 5 0 R /FB 6 0 R >> /ExtGState << ${gs} >> >> /Contents 4 0 R >>`,
    `<< /Length ${Buffer.byteLength(content, 'latin1')} >>\nstream\n${content}\nendstream`,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
  ];

  let pdf = '%PDF-1.4\n';
  const offsets = [];
  objs.forEach((o, i) => {
    offsets.push(Buffer.byteLength(pdf, 'latin1'));
    pdf += `${i + 1} 0 obj\n${o}\nendobj\n`;
  });
  const xref = Buffer.byteLength(pdf, 'latin1');
  pdf += `xref\n0 ${objs.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((o) => (pdf += String(o).padStart(10, '0') + ' 00000 n \n'));
  pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(pdf, 'latin1');
}

// --------------------------------------------------------------------- main
const items = layout();
const outDir = path.join(REPO_ROOT, '.github');
fs.mkdirSync(outDir, { recursive: true });

const svgPath = path.join(outDir, 'social-preview.svg');
fs.writeFileSync(svgPath, toSvg(items));
console.log('.github/social-preview.svg');

const pdfPath = path.join(os.tmpdir(), 'marstek-social-preview.pdf');
fs.writeFileSync(pdfPath, toPdf(items));

const pngPath = path.join(outDir, 'social-preview.png');
try {
  execFileSync('sips', ['-s', 'format', 'png', '-z', String(H), String(W), pdfPath, '--out', pngPath], {
    stdio: 'ignore',
  });
  console.log(`.github/social-preview.png (${W}×${H})`);
} catch (e) {
  console.log(`PNG übersprungen (kein sips) — PDF liegt unter ${pdfPath}`);
} finally {
  fs.rmSync(pdfPath, { force: true });
}
