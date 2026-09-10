# Marstek Firmware Archiv

[![Stars](https://img.shields.io/github/stars/sphings79/marstek-firmware-archiv?style=flat&logo=github&label=Sterne)](https://github.com/sphings79/marstek-firmware-archiv/stargazers)
[![Firmware](https://img.shields.io/badge/Firmware--Dateien-46-blue)](#verfügbare-firmware)
[![Updated](https://img.shields.io/github/last-commit/sphings79/marstek-firmware-archiv?label=zuletzt%20aktualisiert)](https://github.com/sphings79/marstek-firmware-archiv/commits/main)

[🇬🇧 English](README.md) · 🇩🇪 **Deutsch**

**Community-Archiv für originale Marstek-OTA-Firmware.** Hier findest du die
Firmware-Dateien für **Marstek Venus E, Venus D, Venus A, Saturn/B2500** und die
**CT002-/P1-Smart-Meter** zum Download — mit Release Notes auf Deutsch und
Englisch, SHA-256-Prüfsumme, Dateigröße und Changelog pro Version.

> ⭐ **Hilft dir das Archiv?** Ein Stern kostet einen Klick und sorgt dafür, dass
> andere Marstek-Nutzer es überhaupt finden.

## Warum ein Firmware-Archiv?

- **Downgrade möglich machen.** Marstek liefert immer nur die *aktuelle* Version
  aus. Wer nach einem Update Probleme hat, kommt ohne Archiv nicht zurück.
- **Vor dem Update sichern.** Die Download-URL einer Version verschwindet,
  sobald das Update auf dem Gerät angestoßen wurde.
- **Nachvollziehen, was sich ändert.** Die Release Notes kommen von Marstek auf
  Chinesisch — hier stehen sie übersetzt und versioniert nebeneinander.

> [!WARNING]
> Firmware-Updates auf eigene Gefahr. Die Dateien sind unveränderte Originale von
> Marsteks Update-Servern, aber ein fehlgeschlagenes Update kann ein Gerät
> unbrauchbar machen. Prüfe vor dem Flashen, dass Gerätecode **und** Modul
> (Control, BMS, Micro, MPPT, FC41D) zu deinem Gerät passen.

## Unterstützte Geräte

| Gerätecode | Modell | Firmware |
|------------|--------|----------|
| `HME-3` | Marstek Smart Meter CT002 / P1 | [4 Versionen](#hme-3--marstek-smart-meter-ct002--p1) |
| `HME-4` | Marstek Smart Meter CT002 / P1 | [3 Versionen](#hme-4--marstek-smart-meter-ct002--p1) |
| `HMG-50` | Marstek Venus E Gen 1/2 | [5 Versionen](#hmg-50--marstek-venus-e-gen-12) |
| `HMJ-2` | Marstek Saturn / B2500 v2 | [1 Version](#hmj-2--marstek-saturn--b2500-v2) |
| `VNSA-0` | Marstek Venus A | [11 Versionen](#vnsa-0--marstek-venus-a) |
| `VNSD-0` | Marstek Venus D | [10 Versionen](#vnsd-0--marstek-venus-d) |
| `VNSE3-0` | Marstek Venus E 3.0 | [12 Versionen](#vnse3-0--marstek-venus-e-30) |

Der Gerätecode steht in der Marstek-App bzw. wird vom
[Firmware-Checker](#-firmware-checker-tool) direkt mit ausgelesen.

## 🔍 Firmware-Checker-Tool

Mit dem **Marstek Firmware Checker** kannst du die aktuell verfügbare Firmware
für deine Geräte direkt bei Marstek abfragen, sichern und automatisch hierher
einreichen:

- 🌐 **Tool (gehostet):** <https://sphings-dev.de/marstek/marstek-fw-checker/>
- 💻 **Quellcode:** <https://github.com/sphings79/marstek-fw-checker>

> [!IMPORTANT]
> **Firmware kann nur gesichert werden, solange das Update noch nicht angestoßen
> wurde.** Sobald du das Update auf dem Gerät startest, ist die Download-URL nicht
> mehr abrufbar. Sichere die Firmware also **vor** dem Update.

> [!NOTE]
> Das Tool speichert **keine Logindaten**. Deine Marstek-Zugangsdaten werden nur
> für die Abfrage verwendet und nicht gespeichert.

> Automatisch gepflegt. Neue Firmware wird über GitHub-Issues mit dem Label
> `firmware-submission` eingereicht und per GitHub Action einsortiert.
> Zusätzlich gleicht ein täglicher Job das Archiv von
> [rweijnen/marstek-firmware-archive](https://github.com/rweijnen/marstek-firmware-archive)
> ab und schlägt fehlende Versionen per Pull Request vor (markiert mit ↗ ref).

## Verfügbare Firmware

### HME-3 — Marstek Smart Meter CT002 / P1

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v122 | 76 KB | 2025-12-01 | [📁 122_HME-3_2025091516373099b077494.bin](firmwares/HME-3/122/122_HME-3_2025091516373099b077494.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | UDP-Protokoll v4: Fehler beim UDP-Reset behoben |
| v118 | 72 KB | 2025-10-27 | [📁 118_HME-3_2025071415581563c0d7425.bin](firmwares/HME-3/118/118_HME-3_2025071415581563c0d7425.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | SML-Auslesewerte optimiert |
| v117 | 72 KB | 2025-08-25 | [📁 117_HME-3_20250702110345eebe62348.bin](firmwares/HME-3/117/117_HME-3_20250702110345eebe62348.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. UDP-Empfang und Neustartverhalten optimiert 2. Bluetooth-Befehl zum Aktualisieren des Q… |
| v116 | 68 KB | 2025-11-14 | [📁 116_HME-3_20250610173327b6ce85859.bin](firmwares/HME-3/116/116_HME-3_20250610173327b6ce85859.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. BLE und MQTT liefern jetzt Momentanwerte für die Phasen A, B, C sowie die Summe 2. Blue… |

### HME-4 — Marstek Smart Meter CT002 / P1

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v202506141125 | 662.03 KB | 2026-08-21 | [📁 202506141125_HME-4_20250625175845d30f22583.rbl](firmwares/HME-4/202506141125/202506141125_HME-4_20250625175845d30f22583.rbl) | [#32](../../issues/32) |  |
| v124 | 72 KB | 2026-08-12 | [📁 124_HME-4_20250915163554648799838.bin](firmwares/HME-4/124/124_HME-4_20250915163554648799838.bin) | [#9](../../issues/9) | UDP-Protokoll v4: Fehler beim UDP-Reset behoben |
| v120 | 66 KB | 2025-08-25 | [📁 120_HME-4_202507021110400569f6547.bin](firmwares/HME-4/120/120_HME-4_202507021110400569f6547.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. UDP-Empfang und Neustartverhalten optimiert 2. Bluetooth-Befehl zum Aktualisieren des Q… |

### HMG-50 — Marstek Venus E Gen 1/2

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v216 | 72 KB | 2025-09-08 | [📁 216_bms_HMG-50_20250902100339408038111.bin](firmwares/HMG-50/BMS/216/216_bms_HMG-50_20250902100339408038111.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | SOC-Sprünge bei niedrigem Ladestand behoben |
| v215 | 72 KB | 2025-08-25 | [📁 215_bms_HMG-50_20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/215_bms_HMG-50_20250806112046448ef9739.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Ladeschluss-Hysterese von 97 auf 99 % angehoben 2. Stabilität des Update-Vorgangs verbe… |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v156 | 236 KB | 2026-07-31 | [📁 156_control_HMG-50_20251118172129117290445.bin](firmwares/HMG-50/Control/156/156_control_HMG-50_20251118172129117290445.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Bluetooth-Broadcast lässt sich ein- und ausschalten 2. Konfiguration eines Drittanbiete… |
| v155 | 232 KB | 2025-10-27 | [📁 155_control_HMG-50_202509161548003ff722863.bin](firmwares/HMG-50/Control/155/155_control_HMG-50_202509161548003ff722863.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Kumulierte Erfassung der Lade- und Entladezeit ergänzt 2. Netzanschlussnorm lässt sich … |
| v153 | 222 KB | 2025-08-25 | [📁 153_control_HMG-50_202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/153_control_HMG-50_202505301136007a5b57023.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Einrichtung in WLANs ohne Passwort möglich 2. Verschiedene bekannte Probleme behoben |

### HMJ-2 — Marstek Saturn / B2500 v2

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v110 | 146 KB | 2026-07-24 | [📁 110_HMJ-2_20250523160631745d66082.bin](firmwares/HMJ-2/110/110_HMJ-2_20250523160631745d66082.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) |  |

### VNSA-0 — Marstek Venus A

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v110.5 (Beta) | 102 KB | 2026-08-12 | [📁 1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin) | [#22](../../issues/22) | Nur zusammen mit Micro-Firmware ab V119.3 verwenden. 1. Tiefentladungs-Rettung der Batteri… |
| v109 | 102 KB | 2026-08-26 | [📁 109_bms_VNSA-0_20251226103854b52c66481.bin](firmwares/VNSA-0/BMS/109/109_bms_VNSA-0_20251226103854b52c66481.bin) | [#35](../../issues/35) | Siehe Changelog |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v150.9 (Beta) | 382 KB | 2026-09-10 | [📁 1509_control_VNSA-0_ems_app_1509_0908_093804.bin](firmwares/VNSA-0/Control/1509/1509_control_VNSA-0_ems_app_1509_0908_093804.bin) | [#40](../../issues/40) | 1. Störung behoben, wenn die PV-Erzeugung während der Überschusseinspeisung abbricht 2. Da… |
| v150.8 (Beta) | 378 KB | 2026-09-10 | [📁 1508_control_VNSA-0_app_1508_0819_182932.bin](firmwares/VNSA-0/Control/1508/1508_control_VNSA-0_app_1508_0819_182932.bin) | [#41](../../issues/41) | Nur für Testzwecke |
| v150 | 378 KB | 2026-08-26 | [📁 150_control_VNSA-0_app_0150_0811_114724.bin](firmwares/VNSA-0/Control/150/150_control_VNSA-0_app_0150_0811_114724.bin) | [#36](../../issues/36) | 1. Fehlerhaftes Senden der Local API im Ethernet-Modus behoben 2. Fehlgeschlagene HTTP-Upd… |
| v149 | 374 KB | 2026-08-12 | [📁 149_control_VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/149_control_VNSA-0_app_0149_0528_102448.bin) | [#23](../../issues/23) | 1. Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, … |
| v148.7 (Beta) | 374 KB | 2026-08-12 | [📁 1487_control_VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/1487_control_VNSA-0_app_1487_0511_1_155731.bin) | [#2](../../issues/2) | 1. Weitere OpenAPI-Funktionen ergänzt (siehe OpenAPI-Dokumentation); behoben: ES-Schnittst… |
| v148 | 368 KB | 2026-09-05 | [📁 148_control_VNSA-0_app_0148_0330_104509.bin](firmwares/VNSA-0/Control/148/148_control_VNSA-0_app_0148_0330_104509.bin) | [#38](../../issues/38) | Monats-Update 148 |

#### Micro

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v121.1 (Beta) | 143 KB | 2026-08-12 | [📁 1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin) | [#24](../../issues/24) | Belastbarkeit des VA-Notstromausgangs mit vorgeschaltetem RCD verbessert |
| v119.3 (Beta) | 143 KB | 2026-08-12 | [📁 1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin) | [#3](../../issues/3) | Nur zusammen mit BMS-Firmware V110.5 verwenden. 1. Tiefentladungs-Rettung optimiert |
| v119 | 143 KB | 2026-09-05 | [📁 119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin](firmwares/VNSA-0/Micro/119/119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin) | [#39](../../issues/39) | 1. Nulldurchgangs-Schaltpunkt des Netzrelais optimiert 2. Behoben: unter 6 % Batterie-SOC … |

### VNSD-0 — Marstek Venus D

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v118 | 104 KB | 2026-08-12 | [📁 118_bms_VNSD-0_20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/118_bms_VNSD-0_20260119100535e43806957.bin) | [#25](../../issues/25) | OTA-Test |
| v117.7 (Beta) | 104 KB | 2026-08-12 | [📁 1177_bms_VNSD-0_20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/1177_bms_VNSD-0_20251010135647565eb2036.bin) | [#19](../../issues/19) | OTA-Test 117.7 |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v150 | 380 KB | 2026-08-13 | [📁 150_control_VNSD-0_app_0150_0805_115146.bin](firmwares/VNSD-0/Control/150/150_control_VNSD-0_app_0150_0805_115146.bin) | [#28](../../issues/28) | 1. Fehlerhaftes Senden der Local API im Ethernet-Modus behoben 2. Fehlgeschlagene HTTP-Upd… |
| v149.2 (Beta) | 376 KB | 2026-08-12 | [📁 1492_control_VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/1492_control_VNSD-0_app_1492_0702_142136.bin) | [#17](../../issues/17) | Fehlerhafte Datenanzeige durch ausbleibende HTTP-Uploads behoben |
| v149 | 376 KB | 2026-08-12 | [📁 149_control_VNSD-0_app_0149_0521_094621.bin](firmwares/VNSD-0/Control/149/149_control_VNSD-0_app_0149_0521_094621.bin) | [#4](../../issues/4) | 1. Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, … |
| v147 | 364 KB | 2026-08-12 | [📁 147_control_VNSD-0_202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/147_control_VNSD-0_202601281721320b2053125.bin) | [#16](../../issues/16) | Aufbauend auf dem bisherigen v147: 1. Anbindung deutscher Stromzähler optimiert 2. Konfigu… |

#### FC41D

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v202512040647 | 666.92 KB | 2026-08-21 | [📁 202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl](firmwares/VNSD-0/FC41D/202512040647/202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl) | [#31](../../issues/31) |  |
| v202409090159 | 663.77 KB | 2026-08-21 | [📁 202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl](firmwares/VNSD-0/FC41D/202409090159/202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl) | - | Installierte 2024er-Basisversion des FC41D-Kommunikationsmoduls, ausgeliefert über die sta… |

#### Micro

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v116 | 113 KB | 2026-08-12 | [📁 116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin) | [#18](../../issues/18) | VD 2500w |
| v115 | 113 KB | 2026-08-12 | [📁 115_micro_VNSD-0_202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/115_micro_VNSD-0_202601230921310c0e30687.bin) | [#21](../../issues/21) | Angepasst an Control-Firmware 147 |

### VNSE3-0 — Marstek Venus E 3.0

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v115 | 82 KB | 2026-08-12 | [📁 115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin) | [#26](../../issues/26) | 1. Prüfbedingung beim Start optimiert, wenn der SOC 100 % oder 0 % beträgt 2. Tiefentladun… |
| v113 | 95 KB | 2026-08-12 | [📁 113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin) | [#13](../../issues/13) | 1. Amperestunden-Zählung läuft jetzt im Timer-Interrupt anhand des Wechselrichterstroms 2.… |
| v112 | 93 KB | 2026-07-07 | [📁 112_bms_VNSE3-0_20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/112_bms_VNSE3-0_20260121113157833696278.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Erfordert VNS-Firmware 117 und EMS-Firmware 147. 1. Lade- und Entlade-MOSFETs werden exter… |
| v110 | 89 KB | 2025-12-22 | [📁 110_bms_VNSE3-0_202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/110_bms_VNSE3-0_202512031001144fcbf8852.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Erneute Auslieferung der Firmware 109 |
| v106 | 90 KB | 2025-10-27 | [📁 106_bms_VNSE3-0_2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/106_bms_VNSE3-0_2025081814112994acd7498.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | SOC-Sprünge beim BMS mit CORNEX-Zellen behoben |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v150 | 366 KB | 2026-08-12 | [📁 150_control_VNSE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/150_control_VNSE3-0_app_0150_0804_151249.bin) | [#27](../../issues/27) | 1. Fehlerhaftes Senden der Local API im Ethernet-Modus behoben 2. Fehlgeschlagene HTTP-Upd… |
| v149 | 362 KB | 2026-08-12 | [📁 149_control_VNSE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/149_control_VNSE3-0_app_0149_0528_3_101940.bin) | [#12](../../issues/12) | 1. Weitere OpenAPI-Funktionen ergänzt; behoben: ES-Schnittstelle lieferte PV-Daten als 0, … |
| v148 | 358 KB | 2026-08-12 | [📁 148_control_VNSE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/148_control_VNSE3-0_app_0148_0331_093751.bin) | [#20](../../issues/20) | 1. Datensicherung ergänzt 2. Erkennung von Zählerabrissen und Phasenerkennung verbessert 3… |
| v147.6 (Beta) | 356 KB | 2026-03-13 | [📁 1476_control_VNSE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/1476_control_VNSE3-0_app_1476_0312_182736.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Stabilität der MQTT-Verbindung verbessert |
| v147 | 352 KB | 2026-08-30 | [📁 147_control_VNSE3-0_202601281724177c3442083.bin](firmwares/VNSE3-0/Control/147/147_control_VNSE3-0_202601281724177c3442083.bin) | [#37](../../issues/37) | Aufbauend auf dem bisherigen v147: 1. Anbindung deutscher Stromzähler optimiert 2. Konfigu… |
| v144 | 346 KB | 2025-11-26 | [📁 144_control_VNSE3-0_20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/144_control_VNSE3-0_20251118161530cc2d80857.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Neue Funktionen: 1. Leistungs-Sollwert für die Rückspeisesperre: Die Leistung am Netzansch… |

#### Micro

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v119 | 117 KB | 2026-08-12 | [📁 119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin) | [#14](../../issues/14) | Behoben: unterhalb von 6 % SOC wurde die Zwangsladung nicht gestartet |

---

**Firmware-Dateien gesamt:** 46
**Zuletzt aktualisiert:** 2026-09-10 13:31:58 UTC

## Mitmachen

Fehlt eine Version? Zieh sie mit dem [Firmware-Checker](#-firmware-checker-tool) und reiche
sie über das [Issue-Template](../../issues/new?template=firmware-submission.md)
ein — der Rest läuft automatisch. Jede Einsendung wird gegen die von Marstek
gemeldete Größe und CRC-16/MODBUS-Prüfsumme verifiziert, bevor sie im Archiv
landet.

## Changelogs

- Gesamt: [CHANGELOG.de.md](CHANGELOG.de.md)
- Pro Gerät: `firmwares/<Gerät>/CHANGELOG.de.md`
- Pro Modul: `firmwares/<Gerät>/<Typ>/CHANGELOG.de.md`

## Archiv-Struktur

- **Standard-Geräte** (VNSD-0, VNSE3-0, VNSA-0, HMG-50): `firmwares/<Gerät>/<Typ>/<Version>/`
- **Flat-Geräte** (HME-3, HME-4, HMJ-2): `firmwares/<Gerät>/<Version>/`
- **Kommunikationsmodul** (FC41D, WLAN-Modul): als Firmware-Typ unter dem Gerät, z. B. `firmwares/VNSD-0/FC41D/<Version>/` — eine `.rbl`-Datei

Jeder Versionsordner enthält die Firmware-Datei (`.bin` bzw. `.rbl`) und eine `metadata.json`
(Download-URL, SHA-256, Dateigröße, Release Notes inkl. Übersetzung, Issue-Referenz).
