# Changelog — Marstek Firmware Archiv

Alle archivierten Firmware-Versionen, chronologisch (neueste zuerst).

## VNSD-0 — Control v150 — 2026-08-13

- Loacl-API-Sendeausnahme im Ethernet-Modus optimieren
- HTTP-Upgrade-Fehlerproblem im Ethernet-Modus optimieren
- Peak-Shaving-Funktion hinzufügen
- Datenverlustproblem durch übermäßige HTTP-Daten optimieren
- Messgerätverbindungsmethode optimieren, CT_TYPE-Verbindung verwenden

<sub>Issue [#28](issues/28) · [150_control_VNSD-0_app_0150_0805_115146.bin](firmwares/VNSD-0/Control/150/150_control_VNSD-0_app_0150_0805_115146.bin)</sub>

## VNSE3-0 — Control v150 — 2026-08-12

- Loacl-API-Sendeausnahme im Ethernet-Modus optimieren
- HTTP-Upgrade-Fehlerproblem im Ethernet-Modus optimieren
- Peak-Shaving-Funktion hinzufügen
- Datenverlustproblem durch übermäßige HTTP-Daten optimieren
- Messgerätverbindungsmethode optimieren, CT_TYPE-Verbindung verwenden

<sub>Issue [#27](issues/27) · [150_control_VNSE3-0_VNSEE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/150_control_VNSE3-0_VNSEE3-0_app_0150_0804_151249.bin)</sub>

## VNSD-0 — Control v149.2 — 2026-08-12

- Lösen Sie das Problem der abnormalen Datenanzeige, die dadurch verursacht wird, dass HTTP-Daten kein Intervall hochladen

<sub>Issue [#17](issues/17) · [1492_control_VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/1492_control_VNSD-0_app_1492_0702_142136.bin)</sub>

## VNSA-0 — Control v149 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und der USV-Schalter die USV manuell abnormal anzeigt.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Möglichkeit zur Anpassung an französische Stromzähler hinzugefügt
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion des Reststromzugangs zum Internet
- Lösen Sie die Ausnahme bei der DOD-Konfigurationszustellung
- Der HTTP-Daten-Upload wurde auf 5 Minuten geändert, um die Anomalie der VA-Batteriezellenspannungsdaten zu beheben.
- Unterstützt die Konfiguration mit maximaler Leistung

<sub>Issue [#23](issues/23) · [149_control_VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/149_control_VNSA-0_app_0149_0528_102448.bin)</sub>

## VNSD-0 — Control v149 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und der USV-Schalter die USV manuell abnormal anzeigt.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Möglichkeit zur Anpassung an französische Stromzähler hinzugefügt
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion des Reststromzugangs zum Internet
- Lösen Sie die Ausnahme bei der DOD-Konfigurationszustellung
- Der HTTP-Daten-Upload wurde auf 5 Minuten geändert, um die Anomalie der VA-Batteriezellenspannungsdaten zu beheben.
- Unterstützt die Konfiguration mit maximaler Leistung
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

<sub>Issue [#12](issues/12) · [149_control_VNSE3-0_VNSEE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/149_control_VNSE3-0_VNSEE3-0_app_0149_0528_3_101940.bin)</sub>

## VNSA-0 — Control v148.7 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt (siehe Aktualisierung des OpenApi-Dokuments), das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und die USV beim Umschalten der USV manuell nicht ordnungsgemäß angezeigt wird.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Neu angepasste französische Stromzähler
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion der Nutzung von Reststrom für die Verbindung mit dem Internet
- Beheben Sie die abnormale DOD-Zustellung der APP-Konfiguration
- Parallele Upgrade-Funktion für mehrere Maschinen im WLAN-Modus hinzugefügt (spezielle Version verfügbar)

<sub>Issue [#2](issues/2) · [1487_control_VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/1487_control_VNSA-0_app_1487_0511_1_155731.bin)</sub>

## VNSE3-0 — Control v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](issues/20) · [148_control_VNSE3-0_VNSEE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/148_control_VNSE3-0_VNSEE3-0_app_0148_0331_093751.bin)</sub>

## VNSD-0 — Control v147 — 2026-08-12

- Basierend auf dem Original 147:
- Optimierung der deutschen Stromzähleranbindung
- Optimierung der Drittanbieter-Serverkonfiguration unter Ethernet
- Optimierung des gelegentlich fehlenden Problems der HTTP-Datenberichterstattung

<sub>Issue [#16](issues/16) · [147_control_VNSD-0_202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/147_control_VNSD-0_202601281721320b2053125.bin)</sub>

## HME-4 — v124 — 2026-08-12

- UDP-Protokoll v4: Fehler bei UDP-Reset behoben.

<sub>Issue [#9](issues/9) · [124_HME-4_20250915163554648799838.bin](firmwares/HME-4/124/124_HME-4_20250915163554648799838.bin)</sub>

## VNSA-0 — Micro v121.1 — 2026-08-12

- Verbesserter netzunabhängiger VA-Anschluss mit RCD-Ladefunktion

<sub>Issue [#24](issues/24) · [1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin)</sub>

## VNSA-0 — Micro v119.3 — 2026-08-12

- Optimierung der Niederspannungsrettung, muss mit der BMS V1105-Version zusammenarbeiten

<sub>Issue [#3](issues/3) · [1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin)</sub>

## VNSE3-0 — Micro v119 — 2026-08-12

- Beheben Sie das Problem, dass kein Ladevorgang erzwungen wird, wenn der Ladezustand unter 6 % liegt.

<sub>Issue [#14](issues/14) · [119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin)</sub>

## VNSD-0 — BMS v118 — 2026-08-12

- OTA-Test

<sub>Issue [#25](issues/25) · [118_bms_VNSD-0_20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/118_bms_VNSD-0_20260119100535e43806957.bin)</sub>

## VNSD-0 — BMS v117.7 — 2026-08-12

- OTA-Test 1177

<sub>Issue [#19](issues/19) · [1177_bms_VNSD-0_20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/1177_bms_VNSD-0_20251010135647565eb2036.bin)</sub>

## VNSD-0 — Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](issues/18) · [116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin)</sub>

## VNSD-0 — Micro v115 — 2026-08-12

- Anpassung an Zentralsteuerung 147

<sub>Issue [#21](issues/21) · [115_micro_VNSD-0_202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/115_micro_VNSD-0_202601230921310c0e30687.bin)</sub>

## VNSE3-0 — BMS v115 — 2026-08-12

- Optimieren Sie die Beurteilungsbedingungen, wenn der Boot-SOC 100 % oder 0 % beträgt
- Arbeiten Sie mit dem Wechselrichter zusammen, um eine Rettung bei extrem niedriger Spannung zu gewährleisten
- Beheben Sie den Fehler, der dazu führen kann, dass das Gerät nach dem vollständigen Aufladen nicht geladen und entladen werden kann.

<sub>Issue [#26](issues/26) · [115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin)</sub>

## VNSE3-0 — BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](issues/13) · [113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin)</sub>

## VNSA-0 — BMS v110.5 — 2026-08-12

- Muss in Verbindung mit Wechselrichter 1193 und höher verwendet werden
- Arbeiten Sie mit dem Wechselrichter zusammen, um die Rettung der Photovoltaik-Startupbatterie bei extrem niedriger Spannung durchzuführen
- Optimierung der Zwangsladelogik

<sub>Issue [#22](issues/22) · [1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin)</sub>

## HMG-50 — Control v156 — 2026-07-31

- Bluetooth-Broadcast-Umschaltfunktion hinzugefügt
- Funktion zum Konfigurieren von Servern von Drittanbietern hinzugefügt
- Optimieren Sie die Stabilität der OpenApi-Schnittstelle

<sub>[156_control_HMG-50_20251118172129117290445.bin](firmwares/HMG-50/Control/156/156_control_HMG-50_20251118172129117290445.bin)</sub>

## HMJ-2 — v110 — 2026-07-24

_Keine Release Notes._

<sub>[110_HMJ-2_20250523160631745d66082.bin](firmwares/HMJ-2/110/110_HMJ-2_20250523160631745d66082.bin)</sub>

## VNSE3-0 — BMS v112 — 2026-07-07

- Die Lade- und Entladeröhre wird extern gesteuert und muss an vns117 und ems147 angepasst werden

<sub>[112_bms_VNSE3-0_20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/112_bms_VNSE3-0_20260121113157833696278.bin)</sub>

## VNSE3-0 — Control v147.6 — 2026-03-13

- Optimieren Sie die Stabilität der MQTT-Verbindung

<sub>[1476_control_VNSE3-0_VNSEE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/1476_control_VNSE3-0_VNSEE3-0_app_1476_0312_182736.bin)</sub>

## VNSE3-0 — BMS v110 — 2025-12-22

- Firmware-Neuübertragung

<sub>[110_bms_VNSE3-0_202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/110_bms_VNSE3-0_202512031001144fcbf8852.bin)</sub>

## HME-3 — v122 — 2025-12-01

- Das UDP-Protokoll v4 behebt den UDP-Reset-Fehler

<sub>[122_HME-3_2025091516373099b077494.bin](firmwares/HME-3/122/122_HME-3_2025091516373099b077494.bin)</sub>

## VNSE3-0 — Control v144 — 2025-11-26

- Neue Funktionen:
- Mit der Grundlinieneinstellung für die Anti-Rückfluss-Leistung können Benutzer die Leistung des mit dem Netz verbundenen Anschlusses einstellen und bei diesem Leistungswert stabil Strom aus dem Netz beziehen/einspeisen.
- Anpassung an vier neue Stromzähler. Niederländischer Zählerableser: SMR-P1 Deutscher Zählerableser: SMR-IR Französischer Zählerleser: SMR-TIC Neue Version CT002: TPM2-100CT
- DOD-Funktionseinstellung Ermöglichen Sie Kunden, den SOC-Nutzungsbereich des Geräts selbst festzulegen, und der Arbeitsbereich kann auf [(12 % ~ 70 %) – 100 %] eingestellt werden. Kunden in kalten Breitengraden wird empfohlen, den SOC-Arbeitsbereich entsprechend zu erhöhen, um die Batterielebensdauer zu verlängern.
- Funktion zum Herunterfahren des Geräts über Bluetooth hinzugefügt. Geräte-Bluetooth kann über den Server oder die APP ausgeschaltet werden.
- XID/VID kann eine Verbindung zu einem Drittanbieter-Server herstellen. Kann über APP-Einstellungen eine Verbindung zu einem Server eines Drittanbieters herstellen.

<sub>[144_control_VNSE3-0_20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/144_control_VNSE3-0_20251118161530cc2d80857.bin)</sub>

## HME-3 — v116 — 2025-11-14

- BLE und MQTT fügen ABC3-Phasen- und Konjunktionsdaten Now-Daten hinzu
- Bluetooth fügt eine passwortlose WLAN-Konfiguration hinzu
- Verschlüsseln Sie mit dem neuen Mqtt-Serverzertifikat
- Das UDP-Protokoll fügt Leistungsdaten hinzu

<sub>[116_HME-3_20250610173327b6ce85859.bin](firmwares/HME-3/116/116_HME-3_20250610173327b6ce85859.bin)</sub>

## HME-3 — v118 — 2025-10-27

- Optimieren Sie SML-Messwerte

<sub>[118_HME-3_2025071415581563c0d7425.bin](firmwares/HME-3/118/118_HME-3_2025071415581563c0d7425.bin)</sub>

## HMG-50 — Control v155 — 2025-10-27

- Akkumulationsfunktion beim Laden und Entladen hinzugefügt; Unterstützung für die Ausgabe von Netzanschlussstandards hinzugefügt

<sub>[155_control_HMG-50_202509161548003ff722863.bin](firmwares/HMG-50/Control/155/155_control_HMG-50_202509161548003ff722863.bin)</sub>

## VNSE3-0 — BMS v106 — 2025-10-27

- Das SOC-Sprungproblem des Chuneng-Batterie-BMS wurde behoben.

<sub>[106_bms_VNSE3-0_2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/106_bms_VNSE3-0_2025081814112994acd7498.bin)</sub>

## HMG-50 — BMS v216 — 2025-09-08

- Das Problem mit dem SOC-Sprung bei niedrigem Batteriestand wurde behoben.

<sub>[216_bms_HMG-50_20250902100339408038111.bin](firmwares/HMG-50/BMS/216/216_bms_HMG-50_20250902100339408038111.bin)</sub>

## HME-3 — v117 — 2025-08-25

- Optimierter UDP-Empfang und Neustartoptimierung
- Fügen Sie den Befehl zum Bluetooth-Upgrade des Quectel-Moduls hinzu
- CT3 behebt den 7E1-Konfigurationsfehler, optimiert das SML-Protokoll-Parsing und fügt eine SML-Protokoll-Druckfunktion hinzu

<sub>[117_HME-3_20250702110345eebe62348.bin](firmwares/HME-3/117/117_HME-3_20250702110345eebe62348.bin)</sub>

## HME-4 — v120 — 2025-08-25

- Optimierter UDP-Empfang und Neustartoptimierung
- Fügen Sie den Befehl zum Bluetooth-Upgrade des Quectel-Moduls hinzu
- Ändern Sie die Verbindung der Slave-Maschine auf 15 Einheiten

<sub>[120_HME-4_202507021110400569f6547.bin](firmwares/HME-4/120/120_HME-4_202507021110400569f6547.bin)</sub>

## HMG-50 — Control v153 — 2025-08-25

- Unterstützt die Netzwerkverteilungsfunktion für passwortloses WLAN;
- Optimieren Sie einige bekannte Probleme

<sub>[153_control_HMG-50_202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/153_control_HMG-50_202505301136007a5b57023.bin)</sub>

## HMG-50 — BMS v215 — 2025-08-25

- Die volle Leistungshysterese wird von 97 auf 99 angepasst, um die Stabilität von Upgrades zu optimieren.

<sub>[215_bms_HMG-50_20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/215_bms_HMG-50_20250806112046448ef9739.bin)</sub>

