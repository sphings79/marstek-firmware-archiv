# Changelog — Marstek Firmware Archiv

Alle archivierten Firmware-Versionen, chronologisch (neueste zuerst).

## VNSE3-0 — Control v150 — 2026-08-12

- Loacl-API-Sendeausnahme im Ethernet-Modus optimieren
- HTTP-Upgrade-Fehlerproblem im Ethernet-Modus optimieren
- Peak-Shaving-Funktion hinzufügen
- Datenverlustproblem durch übermäßige HTTP-Daten optimieren
- Messgerätverbindungsmethode optimieren, CT_TYPE-Verbindung verwenden

<sub>Issue [#27](issues/27) · [VNSEE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/VNSEE3-0_app_0150_0804_151249.bin)</sub>

## VNSE3-0 — BMS v115 — 2026-08-12

- Optimieren Sie die Beurteilungsbedingungen, wenn der Boot-SOC 100 % oder 0 % beträgt
- Arbeiten Sie mit dem Wechselrichter zusammen, um eine Rettung bei extrem niedriger Spannung zu gewährleisten
- Beheben Sie den Fehler, der dazu führen kann, dass das Gerät nach dem vollständigen Aufladen nicht geladen und entladen werden kann.

<sub>Issue [#26](issues/26) · [Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/Ac3.0BmsAPP_V115_ota_110451.bin)</sub>

## VNSD-0 — BMS v118 — 2026-08-12

- OTA-Test

<sub>Issue [#25](issues/25) · [20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/20260119100535e43806957.bin)</sub>

## VNSA-0 — MPPT v1211 — 2026-08-12

- Verbesserter netzunabhängiger VA-Anschluss mit RCD-Ladefunktion

<sub>Issue [#24](issues/24) · [VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/MPPT/1211/VA_inv_app_1211_0520_ota_193621.bin)</sub>

## VNSD-0 — BMS v1177 — 2026-08-12

- OTA-Test 1177

<sub>Issue [#19](issues/19) · [20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/20251010135647565eb2036.bin)</sub>

## VNSA-0 — BMS v1105 — 2026-08-12

- Muss in Verbindung mit Wechselrichter 1193 und höher verwendet werden
- Arbeiten Sie mit dem Wechselrichter zusammen, um die Rettung der Photovoltaik-Startupbatterie bei extrem niedriger Spannung durchzuführen
- Optimierung der Zwangsladelogik

<sub>Issue [#22](issues/22) · [VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/VA50A_APP_V1105_ota_144658.bin)</sub>

## VNSA-0 — Control v149 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und der USV-Schalter die USV manuell abnormal anzeigt.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Möglichkeit zur Anpassung an französische Stromzähler hinzugefügt
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion des Reststromzugangs zum Internet
- Lösen Sie die Ausnahme bei der DOD-Konfigurationszustellung
- Der HTTP-Daten-Upload wurde auf 5 Minuten geändert, um die Anomalie der VA-Batteriezellenspannungsdaten zu beheben.
- Unterstützt die Konfiguration mit maximaler Leistung

<sub>Issue [#23](issues/23) · [VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/VNSA-0_app_0149_0528_102448.bin)</sub>

## VNSE3-0 — Control v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](issues/20) · [VNSEE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/VNSEE3-0_app_0148_0331_093751.bin)</sub>

## VNSD-0 — MPPT v115 — 2026-08-12

- Anpassung an Zentralsteuerung 147

<sub>Issue [#21](issues/21) · [202601230921310c0e30687.bin](firmwares/VNSD-0/MPPT/115/202601230921310c0e30687.bin)</sub>

## VNSD-0 — Control v1492 — 2026-08-12

- Lösen Sie das Problem der abnormalen Datenanzeige, die dadurch verursacht wird, dass HTTP-Daten kein Intervall hochladen

<sub>Issue [#17](issues/17) · [VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/VNSD-0_app_1492_0702_142136.bin)</sub>

## VNSD-0 — MPPT v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](issues/18) · [vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/MPPT/116/vd_inv_app_0116_0702_ota_163439.bin)</sub>

## VNSD-0 — Control v147 — 2026-08-12

- Basierend auf dem Original 147:
- Optimierung der deutschen Stromzähleranbindung
- Optimierung der Drittanbieter-Serverkonfiguration unter Ethernet
- Optimierung des gelegentlich fehlenden Problems der HTTP-Datenberichterstattung

<sub>Issue [#16](issues/16) · [202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/202601281721320b2053125.bin)</sub>

## VNSE3-0 — Control v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](issues/12) · [VNSEE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/VNSEE3-0_app_0149_0528_3_101940.bin)</sub>

## VNSE3-0 — MPPT v119 — 2026-08-12

- Beheben Sie das Problem, dass kein Ladevorgang erzwungen wird, wenn der Ladezustand unter 6 % liegt.

<sub>Issue [#14](issues/14) · [inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/MPPT/119/inv_app_0119_0326_ota_152726.bin)</sub>

## VNSE3-0 — BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](issues/13) · [Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/Ac3.0BmsAPP_V113_ota_175955.bin)</sub>

## HME-4 — v124 — 2026-08-12

- UDP-Protokoll v4: Fehler bei UDP-Reset behoben.

<sub>Issue [#9](issues/9) · [20250915163554648799838.bin](firmwares/HME-4/124/20250915163554648799838.bin)</sub>

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

<sub>Issue [#4](issues/4) · [VNSD-0_app_0149_0521_094621.bin](firmwares/VNSD-0/Control/149/VNSD-0_app_0149_0521_094621.bin)</sub>

## VNSA-0 — MPPT v1193 — 2026-08-12

- Optimierung der Niederspannungsrettung, muss mit der BMS V1105-Version zusammenarbeiten

<sub>Issue [#3](issues/3) · [VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/MPPT/1193/VA_inv_app_1193_0512_ota_092355.bin)</sub>

## VNSA-0 — Control v1487 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt (siehe Aktualisierung des OpenApi-Dokuments), das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und die USV beim Umschalten der USV manuell nicht ordnungsgemäß angezeigt wird.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Neu angepasste französische Stromzähler
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion der Nutzung von Reststrom für die Verbindung mit dem Internet
- Beheben Sie die abnormale DOD-Zustellung der APP-Konfiguration
- Parallele Upgrade-Funktion für mehrere Maschinen im WLAN-Modus hinzugefügt (spezielle Version verfügbar)

<sub>Issue [#2](issues/2) · [VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/VNSA-0_app_1487_0511_1_155731.bin)</sub>

