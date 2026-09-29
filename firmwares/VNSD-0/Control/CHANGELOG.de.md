# Changelog — VNSD-0 (Marstek Venus D) / Control

[🇬🇧 English](CHANGELOG.md) · 🇩🇪 **Deutsch**

## v151 — 2026-09-29

- Optimieren Sie die Modbus-TCP-Stabilität
- Das Problem, dass DOD aufgrund eines abnormalen Status vor der Optimierung nicht entlassen werden kann
- Fügen Sie die Überprüfung des Ymodel-Upgrade-Typs hinzu
- Optimieren Sie die Überprüfung des KI-Modus und fragen Sie die aktuelle KI-Strategie des Geräts ab
- Der URL-Fehler des Vorabversionsservers wurde behoben, der zu einem Fehler beim Hochladen der Daten führte.
- Optimieren Sie die Stabilität von HTTP-Upload-Daten
- Optimieren Sie die CT-Kommunikationsfrequenz auf 1,1 S

<sub>Issue [#46](../../../../../issues/46) · Datei `151_control_VNSD-0_ems_app_0151_0929_094333.bin` · SHA-256 `db3638cb6868…`</sub>

## v150 — 2026-08-13

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#28](../../../../../issues/28) · Datei `150_control_VNSD-0_app_0150_0805_115146.bin` · SHA-256 `4140e7a6d38a…`</sub>

## v149.2 (Beta) — 2026-08-12

- Fehlerhafte Datenanzeige durch ausbleibende HTTP-Uploads behoben

<sub>Issue [#17](../../../../../issues/17) · Datei `1492_control_VNSD-0_app_1492_0702_142136.bin` · SHA-256 `9b24db59c4db…`</sub>

## v149 — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Konfiguration behoben
- HTTP-Upload-Intervall auf 5 Minuten geändert; fehlerhafte Zellspannungswerte beim VA behoben
- Konfiguration der maximalen Leistung wird unterstützt
- Venus D unterstützt eine maximale Leistung von 2500 W

<sub>Issue [#4](../../../../../issues/4) · Datei `149_control_VNSD-0_app_0149_0521_094621.bin` · SHA-256 `a8e5e9285e6c…`</sub>

## v147 — 2026-08-12

_Aufbauend auf dem bisherigen v147:_

- Anbindung deutscher Stromzähler optimiert
- Konfiguration des Drittanbieter-Servers im Ethernet-Betrieb optimiert
- Gelegentlich ausbleibende HTTP-Datenübertragungen behoben

<sub>Issue [#16](../../../../../issues/16) · Datei `147_control_VNSD-0_202601281721320b2053125.bin` · SHA-256 `3435e0b98067…`</sub>

