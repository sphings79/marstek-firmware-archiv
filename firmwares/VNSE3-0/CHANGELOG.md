# Changelog — VNSE3-0

## Control v150 — 2026-08-12

- Loacl-API-Sendeausnahme im Ethernet-Modus optimieren
- HTTP-Upgrade-Fehlerproblem im Ethernet-Modus optimieren
- Peak-Shaving-Funktion hinzufügen
- Datenverlustproblem durch übermäßige HTTP-Daten optimieren
- Messgerätverbindungsmethode optimieren, CT_TYPE-Verbindung verwenden

<sub>Issue [#27](../../../../issues/27) · Datei `VNSEE3-0_app_0150_0804_151249.bin` · SHA-256 `f043becb81ba…`</sub>

## BMS v115 — 2026-08-12

- Optimieren Sie die Beurteilungsbedingungen, wenn der Boot-SOC 100 % oder 0 % beträgt
- Arbeiten Sie mit dem Wechselrichter zusammen, um eine Rettung bei extrem niedriger Spannung zu gewährleisten
- Beheben Sie den Fehler, der dazu führen kann, dass das Gerät nach dem vollständigen Aufladen nicht geladen und entladen werden kann.

<sub>Issue [#26](../../../../issues/26) · Datei `Ac3.0BmsAPP_V115_ota_110451.bin` · SHA-256 `cb50cc792e24…`</sub>

## Control v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](../../../../issues/20) · Datei `VNSEE3-0_app_0148_0331_093751.bin` · SHA-256 `7dd227641f62…`</sub>

## Control v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](../../../../issues/12) · Datei `VNSEE3-0_app_0149_0528_3_101940.bin` · SHA-256 `35a3fbd83bd8…`</sub>

## MPPT v119 — 2026-08-12

- Beheben Sie das Problem, dass kein Ladevorgang erzwungen wird, wenn der Ladezustand unter 6 % liegt.

<sub>Issue [#14](../../../../issues/14) · Datei `inv_app_0119_0326_ota_152726.bin` · SHA-256 `3c834d677e0d…`</sub>

## BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](../../../../issues/13) · Datei `Ac3.0BmsAPP_V113_ota_175955.bin` · SHA-256 `da7ebe26b679…`</sub>

