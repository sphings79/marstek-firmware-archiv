# Changelog — Marstek Firmware Archiv

[🇬🇧 English](CHANGELOG.md) · 🇩🇪 **Deutsch**

Alle archivierten Firmware-Versionen, chronologisch (neueste zuerst).

## VNSE3-0 — Micro v116 — 2026-09-24

- Optimieren Sie das Problem, dass der Akku nach längerem Stehenlassen des Geräts stark entladen ist, was dazu führt, dass der Ladevorgang nicht erzwungen werden kann.

<sub>Issue [#45](issues/45) · [116_micro_VNSE3-0_20251128103443b389c9748.bin](firmwares/VNSE3-0/Micro/116/116_micro_VNSE3-0_20251128103443b389c9748.bin)</sub>

## VNSE3-0 — FC41D v202512040647 — 2026-09-23

_Keine Release Notes._

<sub>Issue [#43](issues/43) · [202512040647_fc41d_VNSE3-0_202512271054507d95a7957.rbl](firmwares/VNSE3-0/FC41D/202512040647/202512040647_fc41d_VNSE3-0_202512271054507d95a7957.rbl)</sub>

## VNSA-0 — Control v150.8 (Beta) — 2026-09-10

- Nur für Testzwecke

<sub>Issue [#41](issues/41) · [1508_control_VNSA-0_app_1508_0819_182932.bin](firmwares/VNSA-0/Control/1508/1508_control_VNSA-0_app_1508_0819_182932.bin)</sub>

## VNSA-0 — Control v150.9 (Beta) — 2026-09-10

- Störung behoben, wenn die PV-Erzeugung während der Überschusseinspeisung abbricht
- Dauerhaftes Blinken der LED behoben
- Stabilität der CT-Verbindung und die Phasenerkennung verbessert

<sub>Issue [#40](issues/40) · [1509_control_VNSA-0_ems_app_1509_0908_093804.bin](firmwares/VNSA-0/Control/1509/1509_control_VNSA-0_ems_app_1509_0908_093804.bin)</sub>

## VNSA-0 — Micro v119 — 2026-09-05

- Nulldurchgangs-Schaltpunkt des Netzrelais optimiert
- Behoben: unter 6 % Batterie-SOC konnte der Wechselrichter die Zwangsladung nicht selbst starten
- Überlastschwellen am Notstromausgang von 1,1 / 1,25 / 1,4-fach auf 1,1 / 1,2-fach geändert
- Verstärkungspunkt des LLC-Sanftanlaufs angepasst, um Schäden an der Leistungsstufe zu vermeiden

<sub>Issue [#39](issues/39) · [119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin](firmwares/VNSA-0/Micro/119/119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin)</sub>

## VNSA-0 — Control v148 — 2026-09-05

- Monats-Update 148

<sub>Issue [#38](issues/38) · [148_control_VNSA-0_app_0148_0330_104509.bin](firmwares/VNSA-0/Control/148/148_control_VNSA-0_app_0148_0330_104509.bin)</sub>

## VNSE3-0 — Control v147 — 2026-08-30

_Aufbauend auf dem bisherigen v147:_

- Anbindung deutscher Stromzähler optimiert
- Konfiguration des Drittanbieter-Servers im Ethernet-Betrieb optimiert
- Gelegentlich ausbleibende HTTP-Datenübertragungen behoben

<sub>Issue [#37](issues/37) · [147_control_VNSE3-0_202601281724177c3442083.bin](firmwares/VNSE3-0/Control/147/147_control_VNSE3-0_202601281724177c3442083.bin)</sub>

## VNSA-0 — Control v150 — 2026-08-26

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#36](issues/36) · [150_control_VNSA-0_app_0150_0811_114724.bin](firmwares/VNSA-0/Control/150/150_control_VNSA-0_app_0150_0811_114724.bin)</sub>

## VNSA-0 — BMS v109 — 2026-08-26

- Siehe Changelog

<sub>Issue [#35](issues/35) · [109_bms_VNSA-0_20251226103854b52c66481.bin](firmwares/VNSA-0/BMS/109/109_bms_VNSA-0_20251226103854b52c66481.bin)</sub>

## VNSD-0 — FC41D v202409090159 — 2026-08-21

- Installierte 2024er-Basisversion des FC41D-Kommunikationsmoduls, ausgeliefert über die statische hamedata-URL.

<sub>[202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl](firmwares/VNSD-0/FC41D/202409090159/202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl)</sub>

## HME-4 — v202506141125 — 2026-08-21

_Keine Release Notes._

<sub>Issue [#32](issues/32) · [202506141125_HME-4_20250625175845d30f22583.rbl](firmwares/HME-4/202506141125/202506141125_HME-4_20250625175845d30f22583.rbl)</sub>

## VNSD-0 — FC41D v202512040647 — 2026-08-21

_Keine Release Notes._

<sub>Issue [#31](issues/31) · [202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl](firmwares/VNSD-0/FC41D/202512040647/202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl)</sub>

## VNSD-0 — Control v150 — 2026-08-13

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#28](issues/28) · [150_control_VNSD-0_app_0150_0805_115146.bin](firmwares/VNSD-0/Control/150/150_control_VNSD-0_app_0150_0805_115146.bin)</sub>

## VNSE3-0 — Control v150 — 2026-08-12

- Fehlerhaftes Senden der Local API im Ethernet-Modus behoben
- Fehlgeschlagene HTTP-Updates im Ethernet-Modus behoben
- Peak-Shaving-Funktion ergänzt
- Datenverlust durch zu lange HTTP-Datensätze behoben
- Anbindung des Stromzählers auf CT_TYPE-Verbindung umgestellt

<sub>Issue [#27](issues/27) · [150_control_VNSE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/150_control_VNSE3-0_app_0150_0804_151249.bin)</sub>

## VNSD-0 — Control v149.2 (Beta) — 2026-08-12

- Fehlerhafte Datenanzeige durch ausbleibende HTTP-Uploads behoben

<sub>Issue [#17](issues/17) · [1492_control_VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/1492_control_VNSD-0_app_1492_0702_142136.bin)</sub>

## VNSA-0 — Control v149 — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Konfiguration behoben
- HTTP-Upload-Intervall auf 5 Minuten geändert; fehlerhafte Zellspannungswerte beim VA behoben
- Konfiguration der maximalen Leistung wird unterstützt

<sub>Issue [#23](issues/23) · [149_control_VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/149_control_VNSA-0_app_0149_0528_102448.bin)</sub>

## VNSD-0 — Control v149 — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Konfiguration behoben
- HTTP-Upload-Intervall auf 5 Minuten geändert; fehlerhafte Zellspannungswerte beim VA behoben
- Konfiguration der maximalen Leistung wird unterstützt
- Venus D unterstützt eine maximale Leistung von 2500 W

<sub>Issue [#4](issues/4) · [149_control_VNSD-0_app_0149_0521_094621.bin](firmwares/VNSD-0/Control/149/149_control_VNSD-0_app_0149_0521_094621.bin)</sub>

## VNSE3-0 — Control v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](issues/12) · [149_control_VNSE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/149_control_VNSE3-0_app_0149_0528_3_101940.bin)</sub>

## VNSA-0 — Control v148.7 (Beta) — 2026-08-12

- Weitere OpenAPI-Funktionen ergänzt (siehe OpenAPI-Dokumentation); behoben: ES-Schnittstelle lieferte PV-Daten als 0, und nach manuellem Umschalten wurde fälschlich UPS angezeigt
- Reparaturmechanismus bei I²C-Deadlock ergänzt, behebt Lesefehler am EEPROM
- Unterstützung für französische Stromzähler ergänzt
- HTTP-Datenupload um IP-Adresse und kumulierte Lade-/Entlademenge der Batterie erweitert (nur VE3)
- Überschusseinspeisung ins Netz optimiert
- Fehlerhafte Übertragung der DOD-Einstellung aus der App behoben
- Paralleles Update mehrerer Geräte im WLAN-Modus ergänzt (nur in Sonderversionen freigeschaltet)

<sub>Issue [#2](issues/2) · [1487_control_VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/1487_control_VNSA-0_app_1487_0511_1_155731.bin)</sub>

## VNSE3-0 — Control v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](issues/20) · [148_control_VNSE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/148_control_VNSE3-0_app_0148_0331_093751.bin)</sub>

## VNSD-0 — Control v147 — 2026-08-12

_Aufbauend auf dem bisherigen v147:_

- Anbindung deutscher Stromzähler optimiert
- Konfiguration des Drittanbieter-Servers im Ethernet-Betrieb optimiert
- Gelegentlich ausbleibende HTTP-Datenübertragungen behoben

<sub>Issue [#16](issues/16) · [147_control_VNSD-0_202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/147_control_VNSD-0_202601281721320b2053125.bin)</sub>

## HME-4 — v124 — 2026-08-12

- UDP-Protokoll v4: Fehler bei UDP-Reset behoben.

<sub>Issue [#9](issues/9) · [124_HME-4_20250915163554648799838.bin](firmwares/HME-4/124/124_HME-4_20250915163554648799838.bin)</sub>

## VNSA-0 — Micro v121.1 (Beta) — 2026-08-12

- Belastbarkeit des VA-Notstromausgangs mit vorgeschaltetem RCD verbessert

<sub>Issue [#24](issues/24) · [1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin)</sub>

## VNSA-0 — Micro v119.3 (Beta) — 2026-08-12

_Nur zusammen mit BMS-Firmware V110.5 verwenden._

- Tiefentladungs-Rettung optimiert

<sub>Issue [#3](issues/3) · [1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin)</sub>

## VNSE3-0 — Micro v119 — 2026-08-12

- Behoben: unterhalb von 6 % SOC wurde die Zwangsladung nicht gestartet

<sub>Issue [#14](issues/14) · [119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin)</sub>

## VNSD-0 — BMS v118 — 2026-08-12

- OTA-Test

<sub>Issue [#25](issues/25) · [118_bms_VNSD-0_20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/118_bms_VNSD-0_20260119100535e43806957.bin)</sub>

## VNSD-0 — BMS v117.7 (Beta) — 2026-08-12

- OTA-Test
- 7

<sub>Issue [#19](issues/19) · [1177_bms_VNSD-0_20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/1177_bms_VNSD-0_20251010135647565eb2036.bin)</sub>

## VNSD-0 — Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](issues/18) · [116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin)</sub>

## VNSD-0 — Micro v115 — 2026-08-12

- Angepasst an Control-Firmware 147

<sub>Issue [#21](issues/21) · [115_micro_VNSD-0_202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/115_micro_VNSD-0_202601230921310c0e30687.bin)</sub>

## VNSE3-0 — BMS v115 — 2026-08-12

- Prüfbedingung beim Start optimiert, wenn der SOC 100 % oder 0 % beträgt
- Tiefentladungs-Rettung gemeinsam mit dem Wechselrichter
- Fehler behoben, durch den nach einer Vollladung weder geladen noch entladen werden konnte

<sub>Issue [#26](issues/26) · [115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin)</sub>

## VNSE3-0 — BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](issues/13) · [113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin)</sub>

## VNSA-0 — BMS v110.5 (Beta) — 2026-08-12

_Nur zusammen mit Micro-Firmware ab V119.3 verwenden._

- Tiefentladungs-Rettung der Batterie über PV-Start, gemeinsam mit dem Wechselrichter
- Zwangsladelogik optimiert

<sub>Issue [#22](issues/22) · [1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin)</sub>

## HMG-50 — Control v156 — 2026-07-31

- Bluetooth-Broadcast lässt sich ein- und ausschalten
- Konfiguration eines Drittanbieter-Servers ergänzt
- Stabilität der OpenAPI-Schnittstelle verbessert

<sub>[156_control_HMG-50_20251118172129117290445.bin](firmwares/HMG-50/Control/156/156_control_HMG-50_20251118172129117290445.bin)</sub>

## HMJ-2 — v110 — 2026-07-24

_Keine Release Notes._

<sub>[110_HMJ-2_20250523160631745d66082.bin](firmwares/HMJ-2/110/110_HMJ-2_20250523160631745d66082.bin)</sub>

## VNSE3-0 — BMS v112 — 2026-07-07

_Erfordert VNS-Firmware 117 und EMS-Firmware 147._

- Lade- und Entlade-MOSFETs werden extern angesteuert

<sub>[112_bms_VNSE3-0_20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/112_bms_VNSE3-0_20260121113157833696278.bin)</sub>

## VNSE3-0 — Control v147.6 (Beta) — 2026-03-13

- Stabilität der MQTT-Verbindung verbessert

<sub>[1476_control_VNSE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/1476_control_VNSE3-0_app_1476_0312_182736.bin)</sub>

## VNSE3-0 — BMS v110 — 2025-12-22

- Erneute Auslieferung der Firmware 109

<sub>[110_bms_VNSE3-0_202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/110_bms_VNSE3-0_202512031001144fcbf8852.bin)</sub>

## HME-3 — v122 — 2025-12-01

- UDP-Protokoll v4: Fehler beim UDP-Reset behoben

<sub>[122_HME-3_2025091516373099b077494.bin](firmwares/HME-3/122/122_HME-3_2025091516373099b077494.bin)</sub>

## VNSE3-0 — Control v144 — 2025-11-26

_Neue Funktionen:_

- Leistungs-Sollwert für die Rückspeisesperre: Die Leistung am Netzanschlusspunkt lässt sich frei vorgeben, das Gerät bezieht oder speist konstant mit diesem Wert
- Unterstützung für vier weitere Stromzähler — Niederlande: SMR-P1, Deutschland: SMR-IR, Frankreich: SMR-TIC, neue CT002-Version: TPM2-100CT
- Einstellbare Entladetiefe (DOD): Der nutzbare SOC-Bereich lässt sich auf [(12–70 %) – 100 %] festlegen. In kalten Regionen empfiehlt sich ein höherer unterer Wert, das verlängert die Lebensdauer der Batterie
- Bluetooth des Geräts lässt sich über Server oder App abschalten
- Verbindung zu einem Drittanbieter-Server über XID/VID, einstellbar in der App

<sub>[144_control_VNSE3-0_20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/144_control_VNSE3-0_20251118161530cc2d80857.bin)</sub>

## HME-3 — v116 — 2025-11-14

- BLE und MQTT liefern jetzt Momentanwerte für die Phasen A, B, C sowie die Summe
- Bluetooth-Einrichtung für WLANs ohne Passwort ergänzt
- Verschlüsselung mit neuem MQTT-Server-Zertifikat
- UDP-Protokoll um Energiezählerstände erweitert

<sub>[116_HME-3_20250610173327b6ce85859.bin](firmwares/HME-3/116/116_HME-3_20250610173327b6ce85859.bin)</sub>

## HME-3 — v118 — 2025-10-27

- SML-Auslesewerte optimiert

<sub>[118_HME-3_2025071415581563c0d7425.bin](firmwares/HME-3/118/118_HME-3_2025071415581563c0d7425.bin)</sub>

## HMG-50 — Control v155 — 2025-10-27

- Kumulierte Erfassung der Lade- und Entladezeit ergänzt
- Netzanschlussnorm lässt sich jetzt an das Gerät übertragen

<sub>[155_control_HMG-50_202509161548003ff722863.bin](firmwares/HMG-50/Control/155/155_control_HMG-50_202509161548003ff722863.bin)</sub>

## VNSE3-0 — BMS v106 — 2025-10-27

- SOC-Sprünge beim BMS mit CORNEX-Zellen behoben

<sub>[106_bms_VNSE3-0_2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/106_bms_VNSE3-0_2025081814112994acd7498.bin)</sub>

## HMG-50 — BMS v216 — 2025-09-08

- SOC-Sprünge bei niedrigem Ladestand behoben

<sub>[216_bms_HMG-50_20250902100339408038111.bin](firmwares/HMG-50/BMS/216/216_bms_HMG-50_20250902100339408038111.bin)</sub>

## HME-3 — v117 — 2025-08-25

- UDP-Empfang und Neustartverhalten optimiert
- Bluetooth-Befehl zum Aktualisieren des Quectel-Moduls ergänzt
- CT3: Fehler in der 7E1-Konfiguration behoben, SML-Auswertung optimiert und Protokollausgabe für SML ergänzt

<sub>[117_HME-3_20250702110345eebe62348.bin](firmwares/HME-3/117/117_HME-3_20250702110345eebe62348.bin)</sub>

## HME-4 — v120 — 2025-08-25

- UDP-Empfang und Neustartverhalten optimiert
- Bluetooth-Befehl zum Aktualisieren des Quectel-Moduls ergänzt
- Anzahl verbindbarer Slave-Geräte auf 15 erhöht

<sub>[120_HME-4_202507021110400569f6547.bin](firmwares/HME-4/120/120_HME-4_202507021110400569f6547.bin)</sub>

## HMG-50 — Control v153 — 2025-08-25

- Einrichtung in WLANs ohne Passwort möglich
- Verschiedene bekannte Probleme behoben

<sub>[153_control_HMG-50_202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/153_control_HMG-50_202505301136007a5b57023.bin)</sub>

## HMG-50 — BMS v215 — 2025-08-25

- Ladeschluss-Hysterese von 97 auf 99 % angehoben
- Stabilität des Update-Vorgangs verbessert

<sub>[215_bms_HMG-50_20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/215_bms_HMG-50_20250806112046448ef9739.bin)</sub>

