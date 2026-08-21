# Automatisierung des Firmware-Archivs

Alle Logik steckt in `scripts/` (reines Node.js, **keine npm-Abhängigkeiten**,
Node ≥ 18 wegen `fetch`). Drei GitHub Actions rufen diese Skripte auf.

## Ablauf bei neuer Firmware

1. Ein Issue mit Label `firmware-submission` wird angelegt (durch das
   Submission-Tool oder per Issue-Template).
2. `.github/workflows/firmware-archiver.yml` startet, ruft
   `node scripts/archive-issue.js <nr>` auf:
   - liest Gerät/Typ/Version + JSON aus dem Issue-Text,
   - lädt die `.bin` von der `url`,
   - legt sie unter `firmwares/<Gerät>/<Typ>/<Version>/` ab (Flat-Geräte ohne Typ),
   - übersetzt die Release Notes (ZH → DE/EN) und schreibt `metadata.json`.
3. `generate-changelogs.js` + `update-readme.js` bauen Changelogs und README neu.
4. Der Workflow committet, kommentiert das Issue und schließt es.

## Skripte

| Skript | Zweck |
|--------|-------|
| `lib.js` | Gemeinsame Helfer: kanonische Typnamen, Pfade, Issue-Parser |
| `translate.js` | ZH→DE/EN mit Cache (`translation-cache.json`), keyless |
| `archive.js` | Kern: ein Issue → ein Firmware-Ordner (idempotent) |
| `archive-issue.js` | CLI für die Action (ein Issue per Nummer) |
| `backfill.js` | ALLE Issues (offen + geschlossen) neu verarbeiten |
| `scan.js` | firmwares/-Baum einlesen |
| `update-readme.js` | README.md erzeugen |
| `generate-changelogs.js` | Global + pro Gerät + pro Modul CHANGELOG.md |
| `migrate-casing.js` | Einmalig: Ordner auf kanonische Schreibweise + Duplikat-Report |
| `verify.js` | Integritätsprüfung: CRC-16/MODBUS + Größe gegen die Marstek-API-Werte |
| `import-reference.js` | Firmware + Changelogs aus einem anderen Archiv übernehmen (nur Fehlendes) |
| `sync-upstream.js` | Fremdarchiv klonen und `import-reference.js` darauf anwenden |

## Integritätsprüfung

Nach dem Download vergleicht der Archiver die Datei mit den Werten aus der
Marstek-API im Issue (`apiResponse.data.<modul>`):

- **Größe** = `size` (exakte Byte-Anzahl)
- **Prüfsumme** = `crc` → **CRC-16/MODBUS** über die gesamte `.bin`

Stimmt etwas nicht, wird das Issue **nicht** archiviert, sondern als Fehler
markiert. Fehlen die API-Werte (ältere Submissions/Importe), wird die Prüfung
übersprungen. Ergebnis landet in `metadata.json` als `apiCrc`, `apiSize`,
`verified` (`true`/`false`/`null`).

## Abgleich mit dem Archiv von Remko Weijnen

`.github/workflows/upstream-sync.yml` läuft **täglich um 04:37 UTC** (und per
*Run workflow* von Hand) und ruft `sync-upstream.js` auf:

1. klont `rweijnen/marstek-firmware-archive` flach in ein Temp-Verzeichnis,
2. `import-reference.js` übernimmt jede Version, die dort liegt und hier fehlt,
3. Changelogs + README werden neu erzeugt,
4. das Ergebnis landet **als Pull Request** auf dem Branch `upstream-sync` —
   nicht direkt auf `main`, damit Fremdinhalte vor dem Merge gesichtet werden.

Der Branch ist rollend: ist der PR noch offen, aktualisiert ihn der nächste Lauf
per Force-Push (er wird jedes Mal frisch von `main` gebaut und enthält damit den
kompletten Rückstand), statt einen zweiten PR mit denselben Versionen zu öffnen.
Ohne Neues passiert **gar nichts** — kein Branch, kein PR. Manuell dasselbe lokal:

```bash
node scripts/sync-upstream.js --dry-run   # nur zeigen, was fehlen würde
node scripts/sync-upstream.js             # importieren
node scripts/generate-changelogs.js && node scripts/update-readme.js
```

Andere Quelle: `--repo owner/name`, eine volle URL, ein lokaler Repo-Pfad oder
`UPSTREAM_REPO=…`. Wer ein bereits ausgechecktes Repo hat, kann
`import-reference.js` auch direkt füttern:

```bash
node scripts/import-reference.js /pfad/zum/ref-repo [--dry-run] [--no-translate]
```

Beim Import gilt:

- vorhandene Versionen bleiben unangetastet,
- Dateien werden auf unser Namensschema `<version>_<typ>_<gerät>_<original>`
  gebracht, Struktur/Metadaten vereinheitlicht (Übersetzung, SHA-256, CRC/Größe),
- ein `deviceName` aus der Fremdquelle wird maskiert (`De******ku`),
- Einträge werden mit `importedFrom` markiert (in README als `↗ ref`-Link).

## Einmaliger Cleanup / Backfill (lokal)

```bash
node scripts/migrate-casing.js            # Dry-Run: Umbenenn-Plan + micro/MPPT-Duplikate
node scripts/migrate-casing.js --apply    # git mv auf Control/BMS/MPPT/…
node scripts/backfill.js --refresh        # alle Issues; --refresh erneuert auch Metadaten/Übersetzung
node scripts/generate-changelogs.js
node scripts/update-readme.js
node scripts/migrate-casing.js            # nochmal: zeigt jetzt alle micro-Duplikate
git add -A && git commit && git push
```

Oder ohne lokale Ausführung: den Workflow **Firmware Backfill** manuell starten
(Actions-Tab → Firmware Backfill → Run workflow).

## Konventionen

- **Kanonische Typ-Ordner:** `Control`, `BMS`, `MPPT`, `Micro` (großgeschrieben).
- **Flat-Geräte** (ohne Typ-Unterordner): `HME-3`, `HME-4`, `HMJ-2`
  (in `lib.js` → `FLAT_STRUCTURE_DEVICES`).
- **Firmware-Typ wird aus `apiResponse.data.<modul>` abgeleitet, nicht aus dem
  Top-Feld.** Das Submission-Tool labelt die Microinverter-Firmware oben
  fälschlich als „MPPT"; maßgeblich ist der Modul-Slot, dessen `url` zur
  Download-URL passt (`mcu_type`). Siehe `deriveFirmwareType()` in `lib.js`.
- **Manuelle `changelog`-Dateien** in Versionsordnern haben Vorrang vor der
  automatischen Übersetzung.
