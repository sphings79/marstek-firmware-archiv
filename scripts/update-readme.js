'use strict';

// Regenerate README.md from the firmwares/ tree. German-facing, grouped by
// device and firmware module, newest version first.

const { fs, path, REPO_ROOT, formatVersion } = require('./lib');
const { scanFirmwares } = require('./scan');

function fmtSize(bytes) {
  if (!bytes) return '-';
  const u = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round((bytes / Math.pow(1024, i)) * 100) / 100 + ' ' + u[i];
}

function fmtDate(s) {
  if (!s) return '-';
  const d = new Date(s);
  if (isNaN(d)) return '-';
  return d.toISOString().slice(0, 10);
}

function shortDesc(fw) {
  const de = (fw.noteDE || '').replace(/\s*\n\s*/g, ' ').trim();
  const orig = (fw.note || '').replace(/\s*\n\s*/g, ' ').trim();
  let text = de || orig;
  if (!text) return '';
  if (text.length > 90) text = text.slice(0, 90) + '…';
  text = text.replace(/\|/g, '\\|');
  if (!de && /[一-鿿]/.test(orig)) {
    const url = 'https://translate.google.com/?sl=zh&tl=de&text=' + encodeURIComponent(fw.note);
    return `${text} [🌐](${url} "Übersetzen")`;
  }
  return text;
}

function build() {
  const fws = scanFirmwares();
  const devices = {};
  for (const fw of fws) {
    const type = fw.firmwareType || 'Firmware';
    (devices[fw.deviceType] = devices[fw.deviceType] || {});
    (devices[fw.deviceType][type] = devices[fw.deviceType][type] || []).push(fw);
  }

  let md = `# Marstek Firmware Archiv

Community-Firmware-Archiv für Marstek Venus Geräte.

> Automatisch gepflegt. Neue Firmware wird über GitHub-Issues mit dem Label
> \`firmware-submission\` eingereicht und per GitHub Action einsortiert.

## 🔍 Firmware-Checker-Tool

Mit dem **Marstek Firmware Checker** kannst du die aktuell verfügbare Firmware
für deine Geräte direkt bei Marstek abfragen, sichern und automatisch hierher
einreichen:

- 🌐 **Tool (gehostet):** <https://sphings-dev.de/marstek/marstek-fw-checker/>
- 💻 **Quellcode:** <https://github.com/sphings79/marstek-fw-checker>

> [!IMPORTANT]
> **Firmware kann nur gesichert werden, solange das Update noch nicht angestoßen
> wurde.** Sobald du das Update auf dem Gerät startest, ist die Download-URL nicht
> mehr abrufbar. Sichere die Firmware also **vor** dem Update.

> [!NOTE]
> Das Tool speichert **keine Logindaten**. Deine Marstek-Zugangsdaten werden nur
> für die Abfrage verwendet und nicht gespeichert.

## Verfügbare Firmware

`;

  let total = 0;
  for (const device of Object.keys(devices).sort()) {
    md += `### ${device}\n\n`;
    const types = Object.keys(devices[device]).sort();
    for (const type of types) {
      if (types.length > 1 || type !== 'Firmware') md += `#### ${type}\n\n`;
      md += '| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |\n';
      md += '|---------|-------|-------------|----------|-------|------------|\n';
      devices[device][type].sort((a, b) => b.versionNum - a.versionNum);
      for (const fw of devices[device][type]) {
        const dl = fw.binRel ? `[📁 ${fw.filename}](${fw.binRel})` : '-';
        const issue = fw.issueNumber
          ? `[#${fw.issueNumber}](../../issues/${fw.issueNumber})`
          : fw.importedFrom
          ? `[↗ ref](https://github.com/${fw.importedFrom})`
          : '-';
        md += `| v${formatVersion(fw.version)} | ${fmtSize(fw.filesize)} | ${fmtDate(fw.archivedAt)} | ${dl} | ${issue} | ${shortDesc(fw)} |\n`;
        total++;
      }
      md += '\n';
    }
  }

  md += `---

**Firmware-Dateien gesamt:** ${total}
**Zuletzt aktualisiert:** ${new Date().toISOString().slice(0, 19).replace('T', ' ')} UTC

## Changelogs

- Gesamt: [CHANGELOG.md](CHANGELOG.md)
- Pro Gerät: \`firmwares/<Gerät>/CHANGELOG.md\`
- Pro Modul: \`firmwares/<Gerät>/<Typ>/CHANGELOG.md\`

## Archiv-Struktur

- **Standard-Geräte** (VNSD-0, VNSE3-0, VNSA-0, HMG-50): \`firmwares/<Gerät>/<Typ>/<Version>/\`
- **Flat-Geräte** (HME-3, HME-4, HMJ-2): \`firmwares/<Gerät>/<Version>/\`
- **Kommunikationsmodul** (FC41D, WLAN-Modul): als Firmware-Typ unter dem Gerät, z. B. \`firmwares/VNSD-0/FC41D/<Version>/\` — eine \`.rbl\`-Datei

Jeder Versionsordner enthält die Firmware-Datei (\`.bin\` bzw. \`.rbl\`) und eine \`metadata.json\`
(Download-URL, SHA-256, Dateigröße, Release Notes inkl. Übersetzung, Issue-Referenz).
`;

  return md;
}

fs.writeFileSync(path.join(REPO_ROOT, 'README.md'), build());
console.log('README.md aktualisiert.');
