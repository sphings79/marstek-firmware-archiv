# Changelog — VNSE3-0 / Control

## v150 — 2026-08-12

- Loacl-API-Sendeausnahme im Ethernet-Modus optimieren
- HTTP-Upgrade-Fehlerproblem im Ethernet-Modus optimieren
- Peak-Shaving-Funktion hinzufügen
- Datenverlustproblem durch übermäßige HTTP-Daten optimieren
- Messgerätverbindungsmethode optimieren, CT_TYPE-Verbindung verwenden

<sub>Issue [#27](../../../../../issues/27) · Datei `VNSEE3-0_app_0150_0804_151249.bin` · SHA-256 `f043becb81ba…`</sub>

## v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](../../../../../issues/12) · Datei `VNSEE3-0_app_0149_0528_3_101940.bin` · SHA-256 `35a3fbd83bd8…`</sub>

## v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](../../../../../issues/20) · Datei `VNSEE3-0_app_0148_0331_093751.bin` · SHA-256 `7dd227641f62…`</sub>

