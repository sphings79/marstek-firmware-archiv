# Automatisierung des Firmware-Archivs

Alle Logik steckt in `scripts/` (reines Node.js, **keine npm-Abhängigkeiten**,
Node ≥ 18 wegen `fetch`). Zwei GitHub Actions rufen diese Skripte auf.

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
- **`micro`-Ordner** aus dem Altbestand sind Duplikate der MPPT-Firmware
  (identische `.bin`). `migrate-casing.js` meldet sie, löscht aber nichts.
- **Manuelle `changelog`-Dateien** in Versionsordnern haben Vorrang vor der
  automatischen Übersetzung.
