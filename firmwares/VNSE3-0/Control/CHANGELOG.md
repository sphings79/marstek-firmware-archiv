# Changelog — VNSE3-0 (Marstek Venus E 3.0) / Control

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v150 — 2026-08-12

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#27](../../../../../issues/27) · File `150_control_VNSE3-0_app_0150_0804_151249.bin` · SHA-256 `f043becb81ba…`</sub>

## v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](../../../../../issues/12) · File `149_control_VNSE3-0_app_0149_0528_3_101940.bin` · SHA-256 `35a3fbd83bd8…`</sub>

## v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](../../../../../issues/20) · File `148_control_VNSE3-0_app_0148_0331_093751.bin` · SHA-256 `7dd227641f62…`</sub>

## v147.6 (Beta) — 2026-03-13

- Improved MQTT connection stability

<sub>File `1476_control_VNSE3-0_app_1476_0312_182736.bin` · SHA-256 `a2f8dedfe489…`</sub>

## v147 — 2026-08-30

_Based on the existing v147:_

- Improved the connection to German electricity meters
- Improved third-party server configuration in Ethernet mode
- Fixed occasionally missing HTTP data uploads

<sub>Issue [#37](../../../../../issues/37) · File `147_control_VNSE3-0_202601281724177c3442083.bin` · SHA-256 `0782d6862c53…`</sub>

## v144 — 2025-11-26

_New features:_

- Anti-backfeed power setpoint: the power at the grid connection point can be set freely, and the device draws or feeds at that value continuously
- Support for four additional meters — Netherlands: SMR-P1, Germany: SMR-IR, France: SMR-TIC, new CT002 version: TPM2-100CT
- Configurable depth of discharge (DOD): the usable SOC range can be set to [(12–70 %) – 100 %]. In cold regions a higher lower limit is recommended, as it extends battery life
- Device Bluetooth can be switched off via the server or the app
- Third-party server connection via XID/VID, configurable in the app

<sub>File `144_control_VNSE3-0_20251118161530cc2d80857.bin` · SHA-256 `518a3b8e40c0…`</sub>

