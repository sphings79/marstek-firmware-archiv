# Changelog — VNSE3-0 (Marstek Venus E 3.0) / Control

[🇬🇧 English](CHANGELOG.md) · 🇩🇪 **Deutsch**

## v150 — 2026-08-12

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#27](../../../../../issues/27) · Datei `150_control_VNSE3-0_app_0150_0804_151249.bin` · SHA-256 `f043becb81ba…`</sub>

## v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](../../../../../issues/12) · Datei `149_control_VNSE3-0_app_0149_0528_3_101940.bin` · SHA-256 `35a3fbd83bd8…`</sub>

## v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](../../../../../issues/20) · Datei `148_control_VNSE3-0_app_0148_0331_093751.bin` · SHA-256 `7dd227641f62…`</sub>

## v147.6 (Beta) — 2026-03-13

- Stabilität der MQTT-Verbindung verbessert

<sub>Datei `1476_control_VNSE3-0_app_1476_0312_182736.bin` · SHA-256 `a2f8dedfe489…`</sub>

## v147 — 2026-08-30

_Aufbauend auf dem bisherigen v147:_

- Anbindung deutscher Stromzähler optimiert
- Konfiguration des Drittanbieter-Servers im Ethernet-Betrieb optimiert
- Gelegentlich ausbleibende HTTP-Datenübertragungen behoben

<sub>Issue [#37](../../../../../issues/37) · Datei `147_control_VNSE3-0_202601281724177c3442083.bin` · SHA-256 `0782d6862c53…`</sub>

## v144 — 2025-11-26

_Neue Funktionen:_

- Leistungs-Sollwert für die Rückspeisesperre: Die Leistung am Netzanschlusspunkt lässt sich frei vorgeben, das Gerät bezieht oder speist konstant mit diesem Wert
- Unterstützung für vier weitere Stromzähler — Niederlande: SMR-P1, Deutschland: SMR-IR, Frankreich: SMR-TIC, neue CT002-Version: TPM2-100CT
- Einstellbare Entladetiefe (DOD): Der nutzbare SOC-Bereich lässt sich auf [(12–70 %) – 100 %] festlegen. In kalten Regionen empfiehlt sich ein höherer unterer Wert, das verlängert die Lebensdauer der Batterie
- Bluetooth des Geräts lässt sich über Server oder App abschalten
- Verbindung zu einem Drittanbieter-Server über XID/VID, einstellbar in der App

<sub>Datei `144_control_VNSE3-0_20251118161530cc2d80857.bin` · SHA-256 `518a3b8e40c0…`</sub>

