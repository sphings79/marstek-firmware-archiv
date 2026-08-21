# Changelog — VNSA-0 / Control

## v149 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und der USV-Schalter die USV manuell abnormal anzeigt.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Möglichkeit zur Anpassung an französische Stromzähler hinzugefügt
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion des Reststromzugangs zum Internet
- Lösen Sie die Ausnahme bei der DOD-Konfigurationszustellung
- Der HTTP-Daten-Upload wurde auf 5 Minuten geändert, um die Anomalie der VA-Batteriezellenspannungsdaten zu beheben.
- Unterstützt die Konfiguration mit maximaler Leistung

<sub>Issue [#23](../../../../../issues/23) · Datei `149_control_VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## v148.7 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt (siehe Aktualisierung des OpenApi-Dokuments), das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und die USV beim Umschalten der USV manuell nicht ordnungsgemäß angezeigt wird.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Neu angepasste französische Stromzähler
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion der Nutzung von Reststrom für die Verbindung mit dem Internet
- Beheben Sie die abnormale DOD-Zustellung der APP-Konfiguration
- Parallele Upgrade-Funktion für mehrere Maschinen im WLAN-Modus hinzugefügt (spezielle Version verfügbar)

<sub>Issue [#2](../../../../../issues/2) · Datei `1487_control_VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

