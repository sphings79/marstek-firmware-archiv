# Changelog — VNSA-0 (Marstek Venus A) / Control

[🇬🇧 English](CHANGELOG.md) · 🇩🇪 **Deutsch**

## v150.9 (Beta) — 2026-09-10

- Störung behoben, wenn die PV-Erzeugung während der Überschusseinspeisung abbricht
- Dauerhaftes Blinken der LED behoben
- Stabilität der CT-Verbindung und die Phasenerkennung verbessert

<sub>Issue [#40](../../../../../issues/40) · Datei `1509_control_VNSA-0_ems_app_1509_0908_093804.bin` · SHA-256 `a8c58127189e…`</sub>

## v150.8 (Beta) — 2026-09-10

- Nur für Testzwecke

<sub>Issue [#41](../../../../../issues/41) · Datei `1508_control_VNSA-0_app_1508_0819_182932.bin` · SHA-256 `664623dd130c…`</sub>

## v150 — 2026-08-26

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#36](../../../../../issues/36) · Datei `150_control_VNSA-0_app_0150_0811_114724.bin` · SHA-256 `7dbff622f394…`</sub>

## v149 — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Konfiguration behoben
- HTTP-Upload-Intervall auf 5 Minuten geändert; fehlerhafte Zellspannungswerte beim VA behoben
- Konfiguration der maximalen Leistung wird unterstützt

<sub>Issue [#23](../../../../../issues/23) · Datei `149_control_VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## v148.7 (Beta) — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt (siehe OpenAPI-Dokumentation); behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Einstellung aus der App behoben
- Paralleles Update mehrerer Geräte im WLAN-Modus ergänzt (nur in Sonderversionen freigeschaltet)

<sub>Issue [#2](../../../../../issues/2) · Datei `1487_control_VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

## v148 — 2026-09-05

- Monats-Update 148

<sub>Issue [#38](../../../../../issues/38) · Datei `148_control_VNSA-0_app_0148_0330_104509.bin` · SHA-256 `02b5088cc9cf…`</sub>

