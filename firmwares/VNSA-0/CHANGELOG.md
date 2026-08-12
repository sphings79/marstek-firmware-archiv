# Changelog — VNSA-0

## MPPT v1211 — 2026-08-12

- Verbesserter netzunabhängiger VA-Anschluss mit RCD-Ladefunktion

<sub>Issue [#24](../../../../issues/24) · Datei `VA_inv_app_1211_0520_ota_193621.bin` · SHA-256 `277611ea8982…`</sub>

## BMS v1105 — 2026-08-12

- Muss in Verbindung mit Wechselrichter 1193 und höher verwendet werden
- Arbeiten Sie mit dem Wechselrichter zusammen, um die Rettung der Photovoltaik-Startupbatterie bei extrem niedriger Spannung durchzuführen
- Optimierung der Zwangsladelogik

<sub>Issue [#22](../../../../issues/22) · Datei `VA50A_APP_V1105_ota_144658.bin` · SHA-256 `c642c7ea1e84…`</sub>

## Control v149 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und der USV-Schalter die USV manuell abnormal anzeigt.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Möglichkeit zur Anpassung an französische Stromzähler hinzugefügt
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion des Reststromzugangs zum Internet
- Lösen Sie die Ausnahme bei der DOD-Konfigurationszustellung
- Der HTTP-Daten-Upload wurde auf 5 Minuten geändert, um die Anomalie der VA-Batteriezellenspannungsdaten zu beheben.
- Unterstützt die Konfiguration mit maximaler Leistung

<sub>Issue [#23](../../../../issues/23) · Datei `VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## MPPT v1193 — 2026-08-12

- Optimierung der Niederspannungsrettung, muss mit der BMS V1105-Version zusammenarbeiten

<sub>Issue [#3](../../../../issues/3) · Datei `VA_inv_app_1193_0512_ota_092355.bin` · SHA-256 `4735bbe75d69…`</sub>

## Control v1487 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt (siehe Aktualisierung des OpenApi-Dokuments), das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und die USV beim Umschalten der USV manuell nicht ordnungsgemäß angezeigt wird.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Neu angepasste französische Stromzähler
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion der Nutzung von Reststrom für die Verbindung mit dem Internet
- Beheben Sie die abnormale DOD-Zustellung der APP-Konfiguration
- Parallele Upgrade-Funktion für mehrere Maschinen im WLAN-Modus hinzugefügt (spezielle Version verfügbar)

<sub>Issue [#2](../../../../issues/2) · Datei `VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

