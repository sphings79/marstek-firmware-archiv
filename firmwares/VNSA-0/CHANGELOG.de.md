# Changelog — VNSA-0 (Marstek Venus A)

[🇬🇧 English](CHANGELOG.md) · 🇩🇪 **Deutsch**

## BMS v115 — 2026-10-08

- Offizielle VNSA115-Version

<sub>Issue [#51](../../../../issues/51) · Datei `115_bms_VNSA-0_VEPRO_BMS_V115_APP_20260901_ota_174540.bin` · SHA-256 `d44833daebeb…`</sub>

## FC41D v202512040647 — 2026-10-06

_Keine Release Notes._

<sub>Issue [#50](../../../../issues/50) · Datei `202512040647_fc41d_VNSA-0_202512271054507d95a7957.rbl` · SHA-256 `63c2f3531306…`</sub>

## Control v151 — 2026-10-06

- Optimieren Sie die Modbus-TCP-Stabilität
- Das Problem, dass DOD aufgrund eines abnormalen Status vor der Optimierung nicht entlassen werden kann
- Fügen Sie die Überprüfung des Ymodel-Upgrade-Typs hinzu
- Optimieren Sie die Überprüfung des KI-Modus und fragen Sie die aktuelle KI-Strategie des Geräts ab
- Der URL-Fehler des Vorabversionsservers wurde behoben, der zu einem Fehler beim Hochladen der Daten führte.
- Optimieren Sie die Stabilität von HTTP-Upload-Daten
- Optimieren Sie die CT-Kommunikationsfrequenz auf 1,1 S

<sub>Issue [#49](../../../../issues/49) · Datei `151_control_VNSA-0_ems_app_0151_0928_095826.bin` · SHA-256 `5cceb230f28c…`</sub>

## BMS v110 — 2026-10-06

- Der maximale Lade- und Entladestrom wird auf 40A geändert

<sub>Issue [#48](../../../../issues/48) · Datei `110_bms_VNSA-0_VABMS_APP_110_ota_163748.bin` · SHA-256 `f4ee89c8837f…`</sub>

## Control v150.8 (Beta) — 2026-09-10

- Nur für Testzwecke

<sub>Issue [#41](../../../../issues/41) · Datei `1508_control_VNSA-0_app_1508_0819_182932.bin` · SHA-256 `664623dd130c…`</sub>

## Control v150.9 (Beta) — 2026-09-10

- Störung behoben, wenn die PV-Erzeugung während der Überschusseinspeisung abbricht
- Dauerhaftes Blinken der LED behoben
- Stabilität der CT-Verbindung und die Phasenerkennung verbessert

<sub>Issue [#40](../../../../issues/40) · Datei `1509_control_VNSA-0_ems_app_1509_0908_093804.bin` · SHA-256 `a8c58127189e…`</sub>

## Micro v119 — 2026-09-05

- Nulldurchgangs-Schaltpunkt des Netzrelais optimiert
- Behoben: unter 6 % Batterie-SOC konnte der Wechselrichter die Zwangsladung nicht selbst starten
- Überlastschwellen am Notstromausgang von 1,1 / 1,25 / 1,4-fach auf 1,1 / 1,2-fach geändert
- Verstärkungspunkt des LLC-Sanftanlaufs angepasst, um Schäden an der Leistungsstufe zu vermeiden

<sub>Issue [#39](../../../../issues/39) · Datei `119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin` · SHA-256 `b00254c28127…`</sub>

## Control v148 — 2026-09-05

- Monats-Update 148

<sub>Issue [#38](../../../../issues/38) · Datei `148_control_VNSA-0_app_0148_0330_104509.bin` · SHA-256 `02b5088cc9cf…`</sub>

## Control v150 — 2026-08-26

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#36](../../../../issues/36) · Datei `150_control_VNSA-0_app_0150_0811_114724.bin` · SHA-256 `7dbff622f394…`</sub>

## BMS v109 — 2026-08-26

- Siehe Changelog

<sub>Issue [#35](../../../../issues/35) · Datei `109_bms_VNSA-0_20251226103854b52c66481.bin` · SHA-256 `ceabe476044b…`</sub>

## Control v149 — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Konfiguration behoben
- HTTP-Upload-Intervall auf 5 Minuten geändert; fehlerhafte Zellspannungswerte beim VA behoben
- Konfiguration der maximalen Leistung wird unterstützt

<sub>Issue [#23](../../../../issues/23) · Datei `149_control_VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## Control v148.7 (Beta) — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt (siehe OpenAPI-Dokumentation); behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Einstellung aus der App behoben
- Paralleles Update mehrerer Geräte im WLAN-Modus ergänzt (nur in Sonderversionen freigeschaltet)

<sub>Issue [#2](../../../../issues/2) · Datei `1487_control_VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

## Micro v121.1 (Beta) — 2026-08-12

- Belastbarkeit des VA-Notstromausgangs mit vorgeschaltetem RCD verbessert

<sub>Issue [#24](../../../../issues/24) · Datei `1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin` · SHA-256 `277611ea8982…`</sub>

## Micro v119.3 (Beta) — 2026-08-12

_Nur zusammen mit BMS-Firmware V110.5 verwenden._

- Tiefentladungs-Rettung optimiert

<sub>Issue [#3](../../../../issues/3) · Datei `1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin` · SHA-256 `4735bbe75d69…`</sub>

## BMS v110.5 (Beta) — 2026-08-12

_Nur zusammen mit Micro-Firmware ab V119.3 verwenden._

- Tiefentladungs-Rettung der Batterie über PV-Start, gemeinsam mit dem Wechselrichter
- Zwangsladelogik optimiert

<sub>Issue [#22](../../../../issues/22) · Datei `1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin` · SHA-256 `c642c7ea1e84…`</sub>

