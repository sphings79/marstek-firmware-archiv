'use strict';

// Regenerate README.md from the firmwares/ tree. German-facing, grouped by
// device and firmware module, newest version first.
//
// Die Kopfzone ist bewusst suchmaschinenfreundlich: Gerätecodes stehen immer
// zusammen mit dem Marktnamen (niemand sucht nach "VNSE3-0", alle suchen nach
// "Venus E"), und es gibt einen kurzen englischen Abschnitt, weil die
// Marstek-Community überwiegend englischsprachig ist.

const { fs, path, REPO_ROOT, formatVersion, deviceModel } = require('./lib');
const { scanFirmwares } = require('./scan');

const FIRMWARE_HEADING = 'Verfügbare Firmware';
const CHECKER_HEADING = '🔍 Firmware-Checker-Tool';
const GH_REPO = process.env.GITHUB_REPOSITORY || 'sphings79/marstek-firmware-archiv';

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

// "VNSD-0" -> "VNSD-0 — Marstek Venus D" (bzw. nur den Code, wenn unbekannt).
function deviceHeading(code) {
  const model = deviceModel(code);
  return model ? `${code} — ${model}` : code;
}

// Anker-Slug wie GitHub ihn aus einer Überschrift bildet: klein schreiben,
// alles außer Wortzeichen/Leerraum/Bindestrich entfernen (Klammern, Slash,
// Punkt, Geviertstrich, Emoji), dann jedes Leerzeichen einzeln durch '-'
// ersetzen. Bewusst OHNE trim(): aus "## ${CHECKER_HEADING}" wird bei
// GitHub "#-firmware-checker-tool" — das Leerzeichen hinter dem entfernten
// Emoji bleibt als führender Bindestrich stehen. Gegen echte gerenderte
// READMEs verifiziert. Unicode-Klassen statt \\w, weil \\w in JS nur ASCII
// abdeckt — GitHub behält Umlaute im Anker ("#verfügbare-firmware").
function slug(text) {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\p{M}\s_-]/gu, '')
    .replace(/\s/g, '-');
}

function build() {
  const fws = scanFirmwares();
  const devices = {};
  for (const fw of fws) {
    const type = fw.firmwareType || 'Firmware';
    (devices[fw.deviceType] = devices[fw.deviceType] || {});
    (devices[fw.deviceType][type] = devices[fw.deviceType][type] || []).push(fw);
  }

  const deviceCodes = Object.keys(devices).sort();
  const total = fws.length;

  let md = `# Marstek Firmware Archiv

[![Stars](https://img.shields.io/github/stars/${GH_REPO}?style=flat&logo=github&label=Sterne)](https://github.com/${GH_REPO}/stargazers)
[![Firmware-Dateien](https://img.shields.io/badge/Firmware--Dateien-${total}-blue)](#${slug(FIRMWARE_HEADING)})
[![Letzte Aktualisierung](https://img.shields.io/github/last-commit/${GH_REPO}?label=zuletzt%20aktualisiert)](https://github.com/${GH_REPO}/commits/main)

**Community-Archiv für originale Marstek-OTA-Firmware.** Hier findest du die
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

| Gerätecode | Modell | Firmware |
|------------|--------|----------|
`;

  for (const code of deviceCodes) {
    const count = Object.values(devices[code]).reduce((n, l) => n + l.length, 0);
    md += `| \`${code}\` | ${deviceModel(code) || '—'} | [${count} Version(en)](#${slug(deviceHeading(code))}) |\n`;
  }

  md += `
Der Gerätecode steht in der Marstek-App bzw. wird vom
[Firmware-Checker](#${slug(CHECKER_HEADING)}) direkt mit ausgelesen.

## ${CHECKER_HEADING}

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

## English

Community archive of **original Marstek OTA firmware** for the Marstek Venus E,
Venus D, Venus A, Saturn/B2500 and the CT002 / P1 smart meters. Every version
ships with the untouched \`.bin\`/\`.rbl\` file, its SHA-256 checksum, the original
Chinese release notes plus English and German translations, and a per-device
changelog. Marstek only serves the *latest* firmware, so this archive exists to
make downgrades and rollbacks possible at all. The tables below are sorted newest
first — column headings are German, but device codes, versions and filenames are
not. Contributions are welcome via the
[firmware submission issue template](../../issues/new?template=firmware-submission.md).

> Automatisch gepflegt. Neue Firmware wird über GitHub-Issues mit dem Label
> \`firmware-submission\` eingereicht und per GitHub Action einsortiert.
> Zusätzlich gleicht ein täglicher Job das Archiv von
> [rweijnen/marstek-firmware-archive](https://github.com/rweijnen/marstek-firmware-archive)
> ab und schlägt fehlende Versionen per Pull Request vor (markiert mit ↗ ref).

## ${FIRMWARE_HEADING}

`;

  for (const device of deviceCodes) {
    md += `### ${deviceHeading(device)}\n\n`;
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
      }
      md += '\n';
    }
  }

  md += `---

**Firmware-Dateien gesamt:** ${total}
**Zuletzt aktualisiert:** ${new Date().toISOString().slice(0, 19).replace('T', ' ')} UTC

## Mitmachen

Fehlt eine Version? Zieh sie mit dem
[Firmware-Checker](#${slug(CHECKER_HEADING)}) und reiche sie über das
[Issue-Template](../../issues/new?template=firmware-submission.md) ein — der Rest
läuft automatisch. Jede Einsendung wird gegen die von Marstek gemeldete Größe und
CRC-16/MODBUS-Prüfsumme verifiziert, bevor sie im Archiv landet.

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
