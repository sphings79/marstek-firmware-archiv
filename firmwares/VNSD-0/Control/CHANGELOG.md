# Changelog — VNSD-0 / Control

## v1492 — 2026-08-12

- Lösen Sie das Problem der abnormalen Datenanzeige, die dadurch verursacht wird, dass HTTP-Daten kein Intervall hochladen

<sub>Issue [#17](../../../../../issues/17) · Datei `VNSD-0_app_1492_0702_142136.bin` · SHA-256 `9b24db59c4db…`</sub>

## v149 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und der USV-Schalter die USV manuell abnormal anzeigt.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Möglichkeit zur Anpassung an französische Stromzähler hinzugefügt
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion des Reststromzugangs zum Internet
- Lösen Sie die Ausnahme bei der DOD-Konfigurationszustellung
- Der HTTP-Daten-Upload wurde auf 5 Minuten geändert, um die Anomalie der VA-Batteriezellenspannungsdaten zu beheben.
- Unterstützt die Konfiguration mit maximaler Leistung
- Venus D unterstützt eine maximale Leistung von 2500 W

<sub>Issue [#4](../../../../../issues/4) · Datei `VNSD-0_app_0149_0521_094621.bin` · SHA-256 `a8e5e9285e6c…`</sub>

## v147 — 2026-08-12

- Basierend auf dem Original 147:
- Optimierung der deutschen Stromzähleranbindung
- Optimierung der Drittanbieter-Serverkonfiguration unter Ethernet
- Optimierung des gelegentlich fehlenden Problems der HTTP-Datenberichterstattung

<sub>Issue [#16](../../../../../issues/16) · Datei `202601281721320b2053125.bin` · SHA-256 `3435e0b98067…`</sub>

