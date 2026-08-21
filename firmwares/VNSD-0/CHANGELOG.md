# Changelog — VNSD-0 (Marstek Venus D)

## FC41D v202409090159 — 2026-08-21

- Installierte 2024er-Basisversion des FC41D-Kommunikationsmoduls, ausgeliefert über die statische hamedata-URL.

<sub>Datei `202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl` · SHA-256 `0d10d2a4d467…`</sub>

## FC41D v202512040647 — 2026-08-21

_Keine Release Notes._

<sub>Issue [#31](../../../../issues/31) · Datei `202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl` · SHA-256 `63c2f3531306…`</sub>

## Control v150 — 2026-08-13

- Loacl-API-Sendeausnahme im Ethernet-Modus optimieren
- HTTP-Upgrade-Fehlerproblem im Ethernet-Modus optimieren
- Peak-Shaving-Funktion hinzufügen
- Datenverlustproblem durch übermäßige HTTP-Daten optimieren
- Messgerätverbindungsmethode optimieren, CT_TYPE-Verbindung verwenden

<sub>Issue [#28](../../../../issues/28) · Datei `150_control_VNSD-0_app_0150_0805_115146.bin` · SHA-256 `4140e7a6d38a…`</sub>

## Control v149.2 — 2026-08-12

- Lösen Sie das Problem der abnormalen Datenanzeige, die dadurch verursacht wird, dass HTTP-Daten kein Intervall hochladen

<sub>Issue [#17](../../../../issues/17) · Datei `1492_control_VNSD-0_app_1492_0702_142136.bin` · SHA-256 `9b24db59c4db…`</sub>

## Control v149 — 2026-08-12

- Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-Schnittstelle erhaltenen PV-Daten 0 sind und der USV-Schalter die USV manuell abnormal anzeigt.
- Ein Reparaturmechanismus für IIC-Deadlocks hinzugefügt, um das EEPROM-Lesefehlerproblem zu lösen
- Möglichkeit zur Anpassung an französische Stromzähler hinzugefügt
- HTTP-Daten-Upload hinzugefügt, um IP und die kumulative Lade- und Entladekapazität des Akkus zu erhöhen (nur VE3)
- Optimieren Sie die Funktion des Reststromzugangs zum Internet
- Lösen Sie die Ausnahme bei der DOD-Konfigurationszustellung
- Der HTTP-Daten-Upload wurde auf 5 Minuten geändert, um die Anomalie der VA-Batteriezellenspannungsdaten zu beheben.
- Unterstützt die Konfiguration mit maximaler Leistung
- Venus D unterstützt eine maximale Leistung von 2500 W

<sub>Issue [#4](../../../../issues/4) · Datei `149_control_VNSD-0_app_0149_0521_094621.bin` · SHA-256 `a8e5e9285e6c…`</sub>

## Control v147 — 2026-08-12

- Basierend auf dem Original 147:
- Optimierung der deutschen Stromzähleranbindung
- Optimierung der Drittanbieter-Serverkonfiguration unter Ethernet
- Optimierung des gelegentlich fehlenden Problems der HTTP-Datenberichterstattung

<sub>Issue [#16](../../../../issues/16) · Datei `147_control_VNSD-0_202601281721320b2053125.bin` · SHA-256 `3435e0b98067…`</sub>

## BMS v118 — 2026-08-12

- OTA-Test

<sub>Issue [#25](../../../../issues/25) · Datei `118_bms_VNSD-0_20260119100535e43806957.bin` · SHA-256 `fdcefaec7a8c…`</sub>

## BMS v117.7 — 2026-08-12

- OTA-Test 1177

<sub>Issue [#19](../../../../issues/19) · Datei `1177_bms_VNSD-0_20251010135647565eb2036.bin` · SHA-256 `69b18aa42831…`</sub>

## Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](../../../../issues/18) · Datei `116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin` · SHA-256 `b81bb99f8213…`</sub>

## Micro v115 — 2026-08-12

- Anpassung an Zentralsteuerung 147

<sub>Issue [#21](../../../../issues/21) · Datei `115_micro_VNSD-0_202601230921310c0e30687.bin` · SHA-256 `b2505973136f…`</sub>

