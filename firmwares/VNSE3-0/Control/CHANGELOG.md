# Changelog — VNSE3-0 (Marstek Venus E 3.0) / Control

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v150 — 2026-08-12

- Optimize Loacl API sending exception in Ethernet mode
- Optimize HTTP upgrade failure problem in Ethernet mode
- Add Peak-shaving function
- Optimize data loss problem caused by excessive HTTP data
- Optimize meter connection method, use CT_TYPE connection

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

## v147.6 — 2026-03-13

- Optimize MQTT connection stability

<sub>File `1476_control_VNSE3-0_app_1476_0312_182736.bin` · SHA-256 `a2f8dedfe489…`</sub>

## v144 — 2025-11-26

- New features:
- Anti-backflow power baseline setting allows users to set the power of the grid-connected port and stably draw/feed power from the grid at this power value.
- Adaptation to four new electricity meters. Dutch meter reader: SMR-P1 German meter reader: SMR-IR French meter reader: SMR-TIC New version CT002: TPM2-100CT
- DOD function setting Allow customers to set the device SOC usage range by themselves, and the working range can be set to [(12%~70%) - 100%]. It is recommended that customers in high-latitude cold zones appropriately increase the SOC working range to extend battery life.
- Added device Bluetooth shutdown function. Device Bluetooth can be turned off through the server or APP.
- XID/VID can connect to a third-party server. Can connect to a third-party server through APP settings.

<sub>File `144_control_VNSE3-0_20251118161530cc2d80857.bin` · SHA-256 `518a3b8e40c0…`</sub>

