# Changelog — VNSE3-0 (Marstek Venus E 3.0)

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## Control v150 — 2026-08-12

- Optimize Loacl API sending exception in Ethernet mode
- Optimize HTTP upgrade failure problem in Ethernet mode
- Add Peak-shaving function
- Optimize data loss problem caused by excessive HTTP data
- Optimize meter connection method, use CT_TYPE connection

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

- Fix the problem of no forced charging when SOC is lower than 6%

<sub>Issue [#14](../../../../issues/14) · File `119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin` · SHA-256 `3c834d677e0d…`</sub>

## BMS v115 — 2026-08-12

- Optimize the judgment conditions when the boot SOC is 100% or 0%
- Cooperate with the inverter for ultra-low voltage rescue
- Fix the bug that may cause inability to charge and discharge after full charging.

<sub>Issue [#26](../../../../issues/26) · File `115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin` · SHA-256 `cb50cc792e24…`</sub>

## BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](../../../../issues/13) · File `113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin` · SHA-256 `da7ebe26b679…`</sub>

## BMS v112 — 2026-07-07

- The charge and discharge tube is controlled externally and needs to be adapted to vns117 and ems147

<sub>File `112_bms_VNSE3-0_20260121113157833696278.bin` · SHA-256 `b3193ced35dd…`</sub>

## Control v147.6 — 2026-03-13

- Optimize MQTT connection stability

<sub>File `1476_control_VNSE3-0_app_1476_0312_182736.bin` · SHA-256 `a2f8dedfe489…`</sub>

## BMS v110 — 2025-12-22

- firmware retransmission

<sub>File `110_bms_VNSE3-0_202512031001144fcbf8852.bin` · SHA-256 `7ea97e0fb136…`</sub>

## Control v144 — 2025-11-26

- New features:
- Anti-backflow power baseline setting allows users to set the power of the grid-connected port and stably draw/feed power from the grid at this power value.
- Adaptation to four new electricity meters. Dutch meter reader: SMR-P1 German meter reader: SMR-IR French meter reader: SMR-TIC New version CT002: TPM2-100CT
- DOD function setting Allow customers to set the device SOC usage range by themselves, and the working range can be set to [(12%~70%) - 100%]. It is recommended that customers in high-latitude cold zones appropriately increase the SOC working range to extend battery life.
- Added device Bluetooth shutdown function. Device Bluetooth can be turned off through the server or APP.
- XID/VID can connect to a third-party server. Can connect to a third-party server through APP settings.

<sub>File `144_control_VNSE3-0_20251118161530cc2d80857.bin` · SHA-256 `518a3b8e40c0…`</sub>

## BMS v106 — 2025-10-27

- Fixed the SOC jump problem of Chuneng battery BMS.

<sub>File `106_bms_VNSE3-0_2025081814112994acd7498.bin` · SHA-256 `bf28fb5c786a…`</sub>

