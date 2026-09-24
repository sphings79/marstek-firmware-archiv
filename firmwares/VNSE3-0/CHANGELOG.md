# Changelog — VNSE3-0 (Marstek Venus E 3.0)

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## Micro v116 — 2026-09-24

- Optimization After the device has been stationary for a long time, the battery is seriously out of power and cannot be strongly charged.

<sub>Issue [#45](../../../../issues/45) · File `116_micro_VNSE3-0_20251128103443b389c9748.bin` · SHA-256 `dfcb319c16a9…`</sub>

## FC41D v202512040647 — 2026-09-23

_No release notes._

<sub>Issue [#43](../../../../issues/43) · File `202512040647_fc41d_VNSE3-0_202512271054507d95a7957.rbl` · SHA-256 `63c2f3531306…`</sub>

## Control v147 — 2026-08-30

_Based on the existing v147:_

- Improved the connection to German electricity meters
- Improved third-party server configuration in Ethernet mode
- Fixed occasionally missing HTTP data uploads

<sub>Issue [#37](../../../../issues/37) · File `147_control_VNSE3-0_202601281724177c3442083.bin` · SHA-256 `0782d6862c53…`</sub>

## Control v150 — 2026-08-12

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#27](../../../../issues/27) · File `150_control_VNSE3-0_app_0150_0804_151249.bin` · SHA-256 `f043becb81ba…`</sub>

## Control v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](../../../../issues/12) · File `149_control_VNSE3-0_app_0149_0528_3_101940.bin` · SHA-256 `35a3fbd83bd8…`</sub>

## Control v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](../../../../issues/20) · File `148_control_VNSE3-0_app_0148_0331_093751.bin` · SHA-256 `7dd227641f62…`</sub>

## Micro v119 — 2026-08-12

- Fixed forced charging not starting below 6 % SOC

<sub>Issue [#14](../../../../issues/14) · File `119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin` · SHA-256 `3c834d677e0d…`</sub>

## BMS v115 — 2026-08-12

- Optimised the start-up check when SOC reads 100 % or 0 %
- Deep-discharge recovery together with the inverter
- Fixed a bug that could prevent charging and discharging after a full charge

<sub>Issue [#26](../../../../issues/26) · File `115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin` · SHA-256 `cb50cc792e24…`</sub>

## BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](../../../../issues/13) · File `113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin` · SHA-256 `da7ebe26b679…`</sub>

## BMS v112 — 2026-07-07

_Requires VNS firmware 117 and EMS firmware 147._

- The charge and discharge MOSFETs are now controlled externally

<sub>File `112_bms_VNSE3-0_20260121113157833696278.bin` · SHA-256 `b3193ced35dd…`</sub>

## Control v147.6 (Beta) — 2026-03-13

- Improved MQTT connection stability

<sub>File `1476_control_VNSE3-0_app_1476_0312_182736.bin` · SHA-256 `a2f8dedfe489…`</sub>

## BMS v110 — 2025-12-22

- Re-release of firmware 109

<sub>File `110_bms_VNSE3-0_202512031001144fcbf8852.bin` · SHA-256 `7ea97e0fb136…`</sub>

## Control v144 — 2025-11-26

_New features:_

- Anti-backfeed power setpoint: the power at the grid connection point can be set freely, and the device draws or feeds at that value continuously
- Support for four additional meters — Netherlands: SMR-P1, Germany: SMR-IR, France: SMR-TIC, new CT002 version: TPM2-100CT
- Configurable depth of discharge (DOD): the usable SOC range can be set to [(12–70 %) – 100 %]. In cold regions a higher lower limit is recommended, as it extends battery life
- Device Bluetooth can be switched off via the server or the app
- Third-party server connection via XID/VID, configurable in the app

<sub>File `144_control_VNSE3-0_20251118161530cc2d80857.bin` · SHA-256 `518a3b8e40c0…`</sub>

## BMS v106 — 2025-10-27

- Fixed SOC jumps on BMS units with CORNEX cells

<sub>File `106_bms_VNSE3-0_2025081814112994acd7498.bin` · SHA-256 `bf28fb5c786a…`</sub>

