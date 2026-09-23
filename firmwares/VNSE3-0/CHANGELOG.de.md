# Changelog — VNSE3-0 (Marstek Venus E 3.0)

[🇬🇧 English](CHANGELOG.md) · 🇩🇪 **Deutsch**

## FC41D v202512040647 — 2026-09-23

_Keine Release Notes._

<sub>Issue [#43](../../../../issues/43) · Datei `202512040647_fc41d_VNSE3-0_202512271054507d95a7957.rbl` · SHA-256 `63c2f3531306…`</sub>

## Control v147 — 2026-08-30

_Aufbauend auf dem bisherigen v147:_

- Anbindung deutscher Stromzähler optimiert
- Konfiguration des Drittanbieter-Servers im Ethernet-Betrieb optimiert
- Gelegentlich ausbleibende HTTP-Datenübertragungen behoben

<sub>Issue [#37](../../../../issues/37) · Datei `147_control_VNSE3-0_202601281724177c3442083.bin` · SHA-256 `0782d6862c53…`</sub>

## Control v150 — 2026-08-12

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

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

- Behoben: unterhalb von 6 % SOC wurde die Zwangsladung nicht gestartet

<sub>Issue [#14](../../../../issues/14) · Datei `119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin` · SHA-256 `3c834d677e0d…`</sub>

## BMS v115 — 2026-08-12

- Prüfbedingung beim Start optimiert, wenn der SOC 100 % oder 0 % beträgt
- Tiefentladungs-Rettung gemeinsam mit dem Wechselrichter
- Fehler behoben, durch den nach einer Vollladung weder geladen noch entladen werden konnte

<sub>Issue [#26](../../../../issues/26) · Datei `115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin` · SHA-256 `cb50cc792e24…`</sub>

## BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](../../../../issues/13) · Datei `113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin` · SHA-256 `da7ebe26b679…`</sub>

## BMS v112 — 2026-07-07

_Erfordert VNS-Firmware 117 und EMS-Firmware 147._

- Lade- und Entlade-MOSFETs werden extern angesteuert

<sub>Datei `112_bms_VNSE3-0_20260121113157833696278.bin` · SHA-256 `b3193ced35dd…`</sub>

## Control v147.6 (Beta) — 2026-03-13

- Stabilität der MQTT-Verbindung verbessert

<sub>Datei `1476_control_VNSE3-0_app_1476_0312_182736.bin` · SHA-256 `a2f8dedfe489…`</sub>

## BMS v110 — 2025-12-22

- Erneute Auslieferung der Firmware 109

<sub>Datei `110_bms_VNSE3-0_202512031001144fcbf8852.bin` · SHA-256 `7ea97e0fb136…`</sub>

## Control v144 — 2025-11-26

_Neue Funktionen:_

- Leistungs-Sollwert für die Rückspeisesperre: Die Leistung am Netzanschlusspunkt lässt sich frei vorgeben, das Gerät bezieht oder speist konstant mit diesem Wert
- Unterstützung für vier weitere Stromzähler — Niederlande: SMR-P1, Deutschland: SMR-IR, Frankreich: SMR-TIC, neue CT002-Version: TPM2-100CT
- Einstellbare Entladetiefe (DOD): Der nutzbare SOC-Bereich lässt sich auf [(12–70 %) – 100 %] festlegen. In kalten Regionen empfiehlt sich ein höherer unterer Wert, das verlängert die Lebensdauer der Batterie
- Bluetooth des Geräts lässt sich über Server oder App abschalten
- Verbindung zu einem Drittanbieter-Server über XID/VID, einstellbar in der App

<sub>Datei `144_control_VNSE3-0_20251118161530cc2d80857.bin` · SHA-256 `518a3b8e40c0…`</sub>

## BMS v106 — 2025-10-27

- SOC-Sprünge beim BMS mit CORNEX-Zellen behoben

<sub>Datei `106_bms_VNSE3-0_2025081814112994acd7498.bin` · SHA-256 `bf28fb5c786a…`</sub>

