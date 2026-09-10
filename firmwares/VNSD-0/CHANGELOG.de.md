# Changelog — VNSD-0 (Marstek Venus D)

[🇬🇧 English](CHANGELOG.md) · 🇩🇪 **Deutsch**

## FC41D v202409090159 — 2026-08-21

- Installierte 2024er-Basisversion des FC41D-Kommunikationsmoduls, ausgeliefert über die statische hamedata-URL.

<sub>Datei `202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl` · SHA-256 `0d10d2a4d467…`</sub>

## FC41D v202512040647 — 2026-08-21

_Keine Release Notes._

<sub>Issue [#31](../../../../issues/31) · Datei `202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl` · SHA-256 `63c2f3531306…`</sub>

## Control v150 — 2026-08-13

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#28](../../../../issues/28) · Datei `150_control_VNSD-0_app_0150_0805_115146.bin` · SHA-256 `4140e7a6d38a…`</sub>

## Control v149.2 (Beta) — 2026-08-12

- Fehlerhafte Datenanzeige durch ausbleibende HTTP-Uploads behoben

<sub>Issue [#17](../../../../issues/17) · Datei `1492_control_VNSD-0_app_1492_0702_142136.bin` · SHA-256 `9b24db59c4db…`</sub>

## Control v149 — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Konfiguration behoben
- HTTP-Upload-Intervall auf 5 Minuten geändert; fehlerhafte Zellspannungswerte beim VA behoben
- Konfiguration der maximalen Leistung wird unterstützt
- Venus D unterstützt eine maximale Leistung von 2500 W

<sub>Issue [#4](../../../../issues/4) · Datei `149_control_VNSD-0_app_0149_0521_094621.bin` · SHA-256 `a8e5e9285e6c…`</sub>

## Control v147 — 2026-08-12

_Aufbauend auf dem bisherigen v147:_

- Anbindung deutscher Stromzähler optimiert
- Konfiguration des Drittanbieter-Servers im Ethernet-Betrieb optimiert
- Gelegentlich ausbleibende HTTP-Datenübertragungen behoben

<sub>Issue [#16](../../../../issues/16) · Datei `147_control_VNSD-0_202601281721320b2053125.bin` · SHA-256 `3435e0b98067…`</sub>

## BMS v118 — 2026-08-12

- OTA-Test

<sub>Issue [#25](../../../../issues/25) · Datei `118_bms_VNSD-0_20260119100535e43806957.bin` · SHA-256 `fdcefaec7a8c…`</sub>

## BMS v117.7 (Beta) — 2026-08-12

- OTA-Test
- 7

<sub>Issue [#19](../../../../issues/19) · Datei `1177_bms_VNSD-0_20251010135647565eb2036.bin` · SHA-256 `69b18aa42831…`</sub>

## Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](../../../../issues/18) · Datei `116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin` · SHA-256 `b81bb99f8213…`</sub>

## Micro v115 — 2026-08-12

- Angepasst an Control-Firmware 147

<sub>Issue [#21](../../../../issues/21) · Datei `115_micro_VNSD-0_202601230921310c0e30687.bin` · SHA-256 `b2505973136f…`</sub>

