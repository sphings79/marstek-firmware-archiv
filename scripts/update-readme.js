'use strict';

// Regenerate README.md (English) and README.de.md (German) from the firmwares/
// tree, grouped by device and firmware module, newest version first.
//
// Englisch ist die Hauptsprache, weil die Marstek-Community überwiegend
// englischsprachig ist und GitHub README.md als Standard anzeigt; die deutsche
// Fassung steht gleichwertig daneben und ist oben verlinkt.
//
// Die Kopfzone ist bewusst suchmaschinenfreundlich: Gerätecodes stehen immer
// zusammen mit dem Marktnamen — niemand sucht nach "VNSE3-0", alle suchen nach
// "Venus E".

const { fs, path, REPO_ROOT, formatVersion, deviceModel } = require('./lib');
const { scanFirmwares } = require('./scan');

const GH_REPO = process.env.GITHUB_REPOSITORY || 'sphings79/marstek-firmware-archiv';
const CHECKER_URL = 'https://sphings-dev.de/marstek/marstek-fw-checker/';
const CHECKER_SRC = 'https://github.com/sphings79/marstek-fw-checker';
const UPSTREAM = 'rweijnen/marstek-firmware-archive';

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

// Anker-Slug wie GitHub ihn aus einer Überschrift bildet: klein schreiben,
// alles außer Buchstaben/Ziffern/Leerraum/Bindestrich entfernen (Klammern,
// Slash, Punkt, Geviertstrich, Emoji), dann jedes Leerzeichen einzeln durch
// '-' ersetzen. Bewusst OHNE trim(): aus "## 🔍 Firmware Checker" wird bei
// GitHub "#-firmware-checker" — das Leerzeichen hinter dem entfernten Emoji
// bleibt als führender Bindestrich stehen. Unicode-Klassen statt \w, weil \w
// in JS nur ASCII abdeckt und GitHub Umlaute im Anker behält
// ("#verfügbare-firmware"). Gegen echte gerenderte READMEs verifiziert.
function slug(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, '')
    .replace(/\s/g, '-');
}

// "VNSD-0" -> "VNSD-0 — Marstek Venus D" (bzw. nur den Code, wenn unbekannt).
function deviceHeading(code) {
  const model = deviceModel(code);
  return model ? `${code} — ${model}` : code;
}

// Sprachabhängige Bausteine. Alles, was in beiden Fassungen unterschiedlich
// ist, steht hier — der Aufbau darunter ist für beide Sprachen identisch.
const TEXTS = {
  en: {
    file: 'README.md',
    switcher: '🇬🇧 **English** · [🇩🇪 Deutsch](README.de.md)',
    title: 'Marstek Firmware Archive',
    firmwareHeading: 'Available firmware',
    checkerHeading: '🔍 Firmware Checker tool',
    noteLang: 'en',
    badgeStars: 'stars',
    badgeFiles: 'firmware--files',
    badgeUpdated: 'last%20updated',
    tableHead: '| Version | Size | Added | Download | Issue | Changes |',
    tableRule: '|---------|------|-------|----------|-------|---------|',
    deviceTableHead: '| Device code | Model | Firmware |',
    deviceTableRule: '|-------------|-------|----------|',
    versions: (n) => `${n} version${n === 1 ? '' : 's'}`,
    translateTitle: 'Translate',
    body: (a) => `**Community archive of original Marstek OTA firmware.** Download the firmware
for **Marstek Venus E, Venus D, Venus A, Saturn/B2500** and the **CT002 / P1
smart meters** — each version with release notes in English and German, its
SHA-256 checksum, file size and a per-device changelog.

> ⭐ **Does this archive help you?** A star costs one click, and it is what makes
> other Marstek owners find it in the first place.

## Why a firmware archive?

- **Make downgrades possible at all.** Marstek only ever serves the *current*
  version. Once an update causes trouble, there is no way back without an archive.
- **Save it before you update.** A version's download URL disappears the moment
  the update is triggered on the device.
- **See what actually changed.** Marstek writes its release notes in Chinese —
  here they sit translated and versioned side by side.

> [!WARNING]
> Flashing firmware is at your own risk. The files are untouched originals from
> Marstek's update servers, but a failed update can brick a device. Before
> flashing, make sure both the device code **and** the module (Control, BMS,
> Micro, MPPT, FC41D) match your hardware.

## Supported devices

`,
    afterDeviceTable: (a) => `
Your device code is shown in the Marstek app, and the
[Firmware Checker](#${a.checker}) reads it out for you.

## 🔍 Firmware Checker tool

The **Marstek Firmware Checker** queries the firmware currently offered for your
devices straight from Marstek, lets you save it, and submits it here
automatically:

- 🌐 **Hosted tool:** <${CHECKER_URL}>
- 💻 **Source:** <${CHECKER_SRC}>

> [!IMPORTANT]
> **Firmware can only be saved as long as the update has not been triggered yet.**
> The moment you start the update on the device, the download URL is gone. So
> save the firmware **before** updating.

> [!NOTE]
> The tool stores **no login data**. Your Marstek credentials are used for the
> query only and are never saved.

> Maintained automatically. New firmware is submitted through GitHub issues
> labelled \`firmware-submission\` and filed by a GitHub Action. A daily job also
> compares this archive against
> [${UPSTREAM}](https://github.com/${UPSTREAM}) and proposes
> missing versions as a pull request (marked ↗ ref).

## ${a.firmwareHeading}

`,
    footer: (a) => `---

**Firmware files in total:** ${a.total}
**Last updated:** ${a.stamp} UTC

## Contributing

Missing a version? Pull it with the [Firmware Checker](#${a.checker}) and submit
it through the [issue template](../../issues/new?template=firmware-submission.md)
— the rest happens automatically. Every submission is verified against the file
size and CRC-16/MODBUS checksum reported by Marstek before it enters the archive.

## Changelogs

- Everything: [CHANGELOG.md](CHANGELOG.md)
- Per device: \`firmwares/<device>/CHANGELOG.md\`
- Per module: \`firmwares/<device>/<type>/CHANGELOG.md\`

_Changelog files are written in German._

## Archive layout

- **Standard devices** (VNSD-0, VNSE3-0, VNSA-0, HMG-50): \`firmwares/<device>/<type>/<version>/\`
- **Flat devices** (HME-3, HME-4, HMJ-2): \`firmwares/<device>/<version>/\`
- **Comms module** (FC41D, the Wi-Fi module): stored as a firmware type under its device, e.g. \`firmwares/VNSD-0/FC41D/<version>/\` — an \`.rbl\` file

Every version folder holds the firmware file (\`.bin\` or \`.rbl\`) and a \`metadata.json\`
(download URL, SHA-256, file size, release notes incl. translations, issue reference).
`,
  },

  de: {
    file: 'README.de.md',
    switcher: '[🇬🇧 English](README.md) · 🇩🇪 **Deutsch**',
    title: 'Marstek Firmware Archiv',
    firmwareHeading: 'Verfügbare Firmware',
    checkerHeading: '🔍 Firmware-Checker-Tool',
    noteLang: 'de',
    badgeStars: 'Sterne',
    badgeFiles: 'Firmware--Dateien',
    badgeUpdated: 'zuletzt%20aktualisiert',
    tableHead: '| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |',
    tableRule: '|---------|-------|-------------|----------|-------|------------|',
    deviceTableHead: '| Gerätecode | Modell | Firmware |',
    deviceTableRule: '|------------|--------|----------|',
    versions: (n) => `${n} Version${n === 1 ? '' : 'en'}`,
    translateTitle: 'Übersetzen',
    body: (a) => `**Community-Archiv für originale Marstek-OTA-Firmware.** Hier findest du die
Firmware-Dateien für **Marstek Venus E, Venus D, Venus A, Saturn/B2500** und die
**CT002-/P1-Smart-Meter** zum Download — mit Release Notes auf Deutsch und
Englisch, SHA-256-Prüfsumme, Dateigröße und Changelog pro Version.

> ⭐ **Hilft dir das Archiv?** Ein Stern kostet einen Klick und sorgt dafür, dass
> andere Marstek-Nutzer es überhaupt finden.

## Warum ein Firmware-Archiv?

- **Downgrade möglich machen.** Marstek liefert immer nur die *aktuelle* Version
  aus. Wer nach einem Update Probleme hat, kommt ohne Archiv nicht zurück.
- **Vor dem Update sichern.** Die Download-URL einer Version verschwindet,
  sobald das Update auf dem Gerät angestoßen wurde.
- **Nachvollziehen, was sich ändert.** Die Release Notes kommen von Marstek auf
  Chinesisch — hier stehen sie übersetzt und versioniert nebeneinander.

> [!WARNING]
> Firmware-Updates auf eigene Gefahr. Die Dateien sind unveränderte Originale von
> Marsteks Update-Servern, aber ein fehlgeschlagenes Update kann ein Gerät
> unbrauchbar machen. Prüfe vor dem Flashen, dass Gerätecode **und** Modul
> (Control, BMS, Micro, MPPT, FC41D) zu deinem Gerät passen.

## Unterstützte Geräte

`,
    afterDeviceTable: (a) => `
Der Gerätecode steht in der Marstek-App bzw. wird vom
[Firmware-Checker](#${a.checker}) direkt mit ausgelesen.

## 🔍 Firmware-Checker-Tool

Mit dem **Marstek Firmware Checker** kannst du die aktuell verfügbare Firmware
für deine Geräte direkt bei Marstek abfragen, sichern und automatisch hierher
einreichen:

- 🌐 **Tool (gehostet):** <${CHECKER_URL}>
- 💻 **Quellcode:** <${CHECKER_SRC}>

> [!IMPORTANT]
> **Firmware kann nur gesichert werden, solange das Update noch nicht angestoßen
> wurde.** Sobald du das Update auf dem Gerät startest, ist die Download-URL nicht
> mehr abrufbar. Sichere die Firmware also **vor** dem Update.

> [!NOTE]
> Das Tool speichert **keine Logindaten**. Deine Marstek-Zugangsdaten werden nur
> für die Abfrage verwendet und nicht gespeichert.

> Automatisch gepflegt. Neue Firmware wird über GitHub-Issues mit dem Label
> \`firmware-submission\` eingereicht und per GitHub Action einsortiert.
> Zusätzlich gleicht ein täglicher Job das Archiv von
> [${UPSTREAM}](https://github.com/${UPSTREAM})
> ab und schlägt fehlende Versionen per Pull Request vor (markiert mit ↗ ref).

## ${a.firmwareHeading}

`,
    footer: (a) => `---

**Firmware-Dateien gesamt:** ${a.total}
**Zuletzt aktualisiert:** ${a.stamp} UTC

## Mitmachen

Fehlt eine Version? Zieh sie mit dem [Firmware-Checker](#${a.checker}) und reiche
sie über das [Issue-Template](../../issues/new?template=firmware-submission.md)
ein — der Rest läuft automatisch. Jede Einsendung wird gegen die von Marstek
gemeldete Größe und CRC-16/MODBUS-Prüfsumme verifiziert, bevor sie im Archiv
landet.

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
`,
  },
};

// Kurzfassung der Release Note in der Zielsprache. Fehlt die Übersetzung und
// ist das Original chinesisch, hängen wir einen Übersetzungslink an.
function shortDesc(fw, t) {
  const translated = ((t.noteLang === 'en' ? fw.noteEN : fw.noteDE) || '')
    .replace(/\s*\n\s*/g, ' ')
    .trim();
  const orig = (fw.note || '').replace(/\s*\n\s*/g, ' ').trim();
  let text = translated || orig;
  if (!text) return '';
  if (text.length > 90) text = text.slice(0, 90) + '…';
  text = text.replace(/\|/g, '\\|');
  if (!translated && /[一-鿿]/.test(orig)) {
    const url =
      `https://translate.google.com/?sl=zh&tl=${t.noteLang}&text=` + encodeURIComponent(fw.note);
    return `${text} [🌐](${url} "${t.translateTitle}")`;
  }
  return text;
}

function build(t, fws) {
  const devices = {};
  for (const fw of fws) {
    const type = fw.firmwareType || 'Firmware';
    (devices[fw.deviceType] = devices[fw.deviceType] || {});
    (devices[fw.deviceType][type] = devices[fw.deviceType][type] || []).push(fw);
  }
  const deviceCodes = Object.keys(devices).sort();
  const total = fws.length;
  const a = {
    total,
    stamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
    checker: slug(t.checkerHeading),
    firmwareHeading: t.firmwareHeading,
  };

  let md = `# ${t.title}

[![Stars](https://img.shields.io/github/stars/${GH_REPO}?style=flat&logo=github&label=${t.badgeStars})](https://github.com/${GH_REPO}/stargazers)
[![Firmware](https://img.shields.io/badge/${t.badgeFiles}-${total}-blue)](#${slug(t.firmwareHeading)})
[![Updated](https://img.shields.io/github/last-commit/${GH_REPO}?label=${t.badgeUpdated})](https://github.com/${GH_REPO}/commits/main)

${t.switcher}

${t.body(a)}${t.deviceTableHead}
${t.deviceTableRule}
`;

  for (const code of deviceCodes) {
    const count = Object.values(devices[code]).reduce((n, l) => n + l.length, 0);
    md += `| \`${code}\` | ${deviceModel(code) || '—'} | [${t.versions(count)}](#${slug(deviceHeading(code))}) |\n`;
  }

  md += t.afterDeviceTable(a);

  for (const device of deviceCodes) {
    md += `### ${deviceHeading(device)}\n\n`;
    const types = Object.keys(devices[device]).sort();
    for (const type of types) {
      if (types.length > 1 || type !== 'Firmware') md += `#### ${type}\n\n`;
      md += t.tableHead + '\n' + t.tableRule + '\n';
      devices[device][type].sort((x, y) => y.versionNum - x.versionNum);
      for (const fw of devices[device][type]) {
        const dl = fw.binRel ? `[📁 ${fw.filename}](${fw.binRel})` : '-';
        const issue = fw.issueNumber
          ? `[#${fw.issueNumber}](../../issues/${fw.issueNumber})`
          : fw.importedFrom
          ? `[↗ ref](https://github.com/${fw.importedFrom})`
          : '-';
        md += `| v${formatVersion(fw.version)} | ${fmtSize(fw.filesize)} | ${fmtDate(fw.archivedAt)} | ${dl} | ${issue} | ${shortDesc(fw, t)} |\n`;
      }
      md += '\n';
    }
  }

  return md + t.footer(a);
}

const fws = scanFirmwares();
for (const t of Object.values(TEXTS)) {
  fs.writeFileSync(path.join(REPO_ROOT, t.file), build(t, fws));
  console.log(`${t.file} aktualisiert.`);
}
