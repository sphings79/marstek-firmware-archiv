# Changelog — VNSE3-0

## Control v150 — 2026-08-12

- Loacl-API-Sendeausnahme im Ethernet-Modus optimieren
- HTTP-Upgrade-Fehlerproblem im Ethernet-Modus optimieren
- Peak-Shaving-Funktion hinzufügen
- Datenverlustproblem durch übermäßige HTTP-Daten optimieren
- Messgerätverbindungsmethode optimieren, CT_TYPE-Verbindung verwenden

<sub>Issue [#27](../../../../issues/27) · Datei `150_control_VNSE3-0_app_0150_0804_151249.bin` · SHA-256 `f043becb81ba…`</sub>

## Control v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](../../../../issues/12) · Datei `149_control_VNSE3-0_app_0149_0528_3_101940.bin` · SHA-256 `35a3fbd83bd8…`</sub>

## Control v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](../../../../issues/20) · Datei `148_control_VNSE3-0_app_0148_0331_093751.bin` · SHA-256 `7dd227641f62…`</sub>

## Micro v119 — 2026-08-12

- Beheben Sie das Problem, dass kein Ladevorgang erzwungen wird, wenn der Ladezustand unter 6 % liegt.

<sub>Issue [#14](../../../../issues/14) · Datei `119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin` · SHA-256 `3c834d677e0d…`</sub>

## BMS v115 — 2026-08-12

- Optimieren Sie die Beurteilungsbedingungen, wenn der Boot-SOC 100 % oder 0 % beträgt
- Arbeiten Sie mit dem Wechselrichter zusammen, um eine Rettung bei extrem niedriger Spannung zu gewährleisten
- Beheben Sie den Fehler, der dazu führen kann, dass das Gerät nach dem vollständigen Aufladen nicht geladen und entladen werden kann.

<sub>Issue [#26](../../../../issues/26) · Datei `115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin` · SHA-256 `cb50cc792e24…`</sub>

## BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](../../../../issues/13) · Datei `113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin` · SHA-256 `da7ebe26b679…`</sub>

## BMS v112 — 2026-07-07

- Die Lade- und Entladeröhre wird extern gesteuert und muss an vns117 und ems147 angepasst werden

<sub>Datei `112_bms_VNSE3-0_20260121113157833696278.bin` · SHA-256 `b3193ced35dd…`</sub>

## Control v147.6 — 2026-03-13

- Optimieren Sie die Stabilität der MQTT-Verbindung

<sub>Datei `1476_control_VNSE3-0_app_1476_0312_182736.bin` · SHA-256 `a2f8dedfe489…`</sub>

## BMS v110 — 2025-12-22

- Firmware-Neuübertragung

<sub>Datei `110_bms_VNSE3-0_202512031001144fcbf8852.bin` · SHA-256 `7ea97e0fb136…`</sub>

## Control v144 — 2025-11-26

- Neue Funktionen:
- Mit der Grundlinieneinstellung für die Anti-Rückfluss-Leistung können Benutzer die Leistung des mit dem Netz verbundenen Anschlusses einstellen und bei diesem Leistungswert stabil Strom aus dem Netz beziehen/einspeisen.
- Anpassung an vier neue Stromzähler. Niederländischer Zählerableser: SMR-P1 Deutscher Zählerableser: SMR-IR Französischer Zählerleser: SMR-TIC Neue Version CT002: TPM2-100CT
- DOD-Funktionseinstellung Ermöglichen Sie Kunden, den SOC-Nutzungsbereich des Geräts selbst festzulegen, und der Arbeitsbereich kann auf [(12 % ~ 70 %) – 100 %] eingestellt werden. Kunden in kalten Breitengraden wird empfohlen, den SOC-Arbeitsbereich entsprechend zu erhöhen, um die Batterielebensdauer zu verlängern.
- Funktion zum Herunterfahren des Geräts über Bluetooth hinzugefügt. Geräte-Bluetooth kann über den Server oder die APP ausgeschaltet werden.
- XID/VID kann eine Verbindung zu einem Drittanbieter-Server herstellen. Kann über APP-Einstellungen eine Verbindung zu einem Server eines Drittanbieters herstellen.

<sub>Datei `144_control_VNSE3-0_20251118161530cc2d80857.bin` · SHA-256 `518a3b8e40c0…`</sub>

## BMS v106 — 2025-10-27

- Das SOC-Sprungproblem des Chuneng-Batterie-BMS wurde behoben.

<sub>Datei `106_bms_VNSE3-0_2025081814112994acd7498.bin` · SHA-256 `bf28fb5c786a…`</sub>

