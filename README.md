# Marstek Firmware Archiv

Community-Firmware-Archiv für Marstek Venus Geräte.

> Automatisch gepflegt. Neue Firmware wird über GitHub-Issues mit dem Label
> `firmware-submission` eingereicht und per GitHub Action einsortiert.

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

## Verfügbare Firmware

### HME-3

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v122 | 76 KB | 2025-12-01 | [📁 2025091516373099b077494.bin](firmwares/HME-3/122/2025091516373099b077494.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Das UDP-Protokoll v4 behebt den UDP-Reset-Fehler |
| v118 | 72 KB | 2025-10-27 | [📁 2025071415581563c0d7425.bin](firmwares/HME-3/118/2025071415581563c0d7425.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Optimieren Sie SML-Messwerte |
| v117 | 72 KB | 2025-08-25 | [📁 20250702110345eebe62348.bin](firmwares/HME-3/117/20250702110345eebe62348.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Optimierter UDP-Empfang und Neustartoptimierung 2. Fügen Sie den Befehl zum Bluetooth-U… |
| v116 | 68 KB | 2025-11-14 | [📁 20250610173327b6ce85859.bin](firmwares/HME-3/116/20250610173327b6ce85859.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. BLE und MQTT fügen ABC3-Phasen- und Konjunktionsdaten Now-Daten hinzu 2. Bluetooth fügt… |

### HME-4

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v124 | 72 KB | 2026-08-12 | [📁 20250915163554648799838.bin](firmwares/HME-4/124/20250915163554648799838.bin) | [#9](../../issues/9) | Das UDP-Protokoll v4 behebt den UDP-Reset-Fehler |
| v120 | 66 KB | 2025-08-25 | [📁 202507021110400569f6547.bin](firmwares/HME-4/120/202507021110400569f6547.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Optimierter UDP-Empfang und Neustartoptimierung 2. Fügen Sie den Befehl zum Bluetooth-U… |

### HMG-50

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v216 | 72 KB | 2025-09-08 | [📁 20250902100339408038111.bin](firmwares/HMG-50/BMS/216/20250902100339408038111.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Das Problem mit dem SOC-Sprung bei niedrigem Batteriestand wurde behoben. |
| v215 | 72 KB | 2025-08-25 | [📁 20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/20250806112046448ef9739.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Die volle Leistungshysterese wird von 97 auf 99 angepasst, um die Stabilität von Upgrades … |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v156 | 236 KB | 2026-07-31 | [📁 20251118172129117290445.bin](firmwares/HMG-50/Control/156/20251118172129117290445.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Bluetooth-Broadcast-Umschaltfunktion hinzugefügt 2. Funktion zum Konfigurieren von Serv… |
| v155 | 232 KB | 2025-10-27 | [📁 202509161548003ff722863.bin](firmwares/HMG-50/Control/155/202509161548003ff722863.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Akkumulationsfunktion beim Laden und Entladen hinzugefügt; Unterstützung für die Ausgabe v… |
| v153 | 222 KB | 2025-08-25 | [📁 202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/202505301136007a5b57023.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Unterstützt die Netzwerkverteilungsfunktion für passwortloses WLAN; 2. Optimieren Sie e… |

### HMJ-2

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v110 | 146 KB | 2026-07-24 | [📁 20250523160631745d66082.bin](firmwares/HMJ-2/110/20250523160631745d66082.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) |  |

### VNSA-0

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v1105 | 102 KB | 2026-08-12 | [📁 VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/VA50A_APP_V1105_ota_144658.bin) | [#22](../../issues/22) | Muss in Verbindung mit Wechselrichter 1193 und höher verwendet werden 1. Arbeiten Sie mit … |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v1487 | 374 KB | 2026-08-12 | [📁 VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/VNSA-0_app_1487_0511_1_155731.bin) | [#2](../../issues/2) | 1. Einige Funktionen von OpenApi hinzugefügt (siehe Aktualisierung des OpenApi-Dokuments),… |
| v149 | 374 KB | 2026-08-12 | [📁 VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/VNSA-0_app_0149_0528_102448.bin) | [#23](../../issues/23) | 1. Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-… |

#### Micro

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v1211 | 143 KB | 2026-08-12 | [📁 VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/VA_inv_app_1211_0520_ota_193621.bin) | [#24](../../issues/24) | Verbesserter netzunabhängiger VA-Anschluss mit RCD-Ladefunktion |
| v1193 | 143 KB | 2026-08-12 | [📁 VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/VA_inv_app_1193_0512_ota_092355.bin) | [#3](../../issues/3) | Optimierung der Niederspannungsrettung, muss mit der BMS V1105-Version zusammenarbeiten |

### VNSD-0

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v1177 | 104 KB | 2026-08-12 | [📁 20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/20251010135647565eb2036.bin) | [#19](../../issues/19) | OTA-Test 1177 |
| v118 | 104 KB | 2026-08-12 | [📁 20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/20260119100535e43806957.bin) | [#25](../../issues/25) | OTA-Test |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v1492 | 376 KB | 2026-08-12 | [📁 VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/VNSD-0_app_1492_0702_142136.bin) | [#17](../../issues/17) | Lösen Sie das Problem der abnormalen Datenanzeige, die dadurch verursacht wird, dass HTTP-… |
| v149 | 376 KB | 2026-08-12 | [📁 VNSD-0_app_0149_0521_094621.bin](firmwares/VNSD-0/Control/149/VNSD-0_app_0149_0521_094621.bin) | [#4](../../issues/4) | 1. Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-… |
| v147 | 364 KB | 2026-08-12 | [📁 202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/202601281721320b2053125.bin) | [#16](../../issues/16) | Basierend auf dem Original 147: 1. Optimierung der deutschen Stromzähleranbindung 2. Optim… |

#### Micro

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v116 | 113 KB | 2026-08-12 | [📁 vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/vd_inv_app_0116_0702_ota_163439.bin) | [#18](../../issues/18) | VD 2500w |
| v115 | 113 KB | 2026-08-12 | [📁 202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/202601230921310c0e30687.bin) | [#21](../../issues/21) | Anpassung an Zentralsteuerung 147 |

### VNSE3-0

#### BMS

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v115 | 82 KB | 2026-08-12 | [📁 Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/Ac3.0BmsAPP_V115_ota_110451.bin) | [#26](../../issues/26) | 1 Optimieren Sie die Beurteilungsbedingungen, wenn der Boot-SOC 100 % oder 0 % beträgt 2. … |
| v113 | 95 KB | 2026-08-12 | [📁 Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/Ac3.0BmsAPP_V113_ota_175955.bin) | [#13](../../issues/13) | 1. Die Amperestunden-Integration wird geändert, um den Wechselrichterstrom im Timer-Interr… |
| v112 | 93 KB | 2026-07-07 | [📁 20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/20260121113157833696278.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Die Lade- und Entladeröhre wird extern gesteuert und muss an vns117 und ems147 angepasst w… |
| v110 | 89 KB | 2025-12-22 | [📁 202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/202512031001144fcbf8852.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 109 Firmware-Neuübertragung |
| v106 | 90 KB | 2025-10-27 | [📁 2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/2025081814112994acd7498.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Das SOC-Sprungproblem des Chuneng-Batterie-BMS wurde behoben. |

#### Control

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v1476 | 356 KB | 2026-03-13 | [📁 VNSEE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/VNSEE3-0_app_1476_0312_182736.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Optimieren Sie die Stabilität der MQTT-Verbindung |
| v150 | 366 KB | 2026-08-12 | [📁 VNSEE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/VNSEE3-0_app_0150_0804_151249.bin) | [#27](../../issues/27) | 1. Loacl-API-Sendeausnahme im Ethernet-Modus optimieren 2. HTTP-Upgrade-Fehlerproblem im E… |
| v149 | 362 KB | 2026-08-12 | [📁 VNSEE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/VNSEE3-0_app_0149_0528_3_101940.bin) | [#12](../../issues/12) | 1. Einige Funktionen von OpenApi hinzugefügt und das Problem behoben, dass die von der ES-… |
| v148 | 358 KB | 2026-08-12 | [📁 VNSEE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/VNSEE3-0_app_0148_0331_093751.bin) | [#20](../../issues/20) | 1. Datensicherungsfunktion hinzugefügt 2. Optimieren Sie die Erkennung von Zählerunterbrec… |
| v144 | 346 KB | 2025-11-26 | [📁 20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/20251118161530cc2d80857.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Neue Funktionen: 1. Mit der Grundlinieneinstellung für die Anti-Rückfluss-Leistung können … |

#### Micro

| Version | Größe | Hinzugefügt | Download | Issue | Änderungen |
|---------|-------|-------------|----------|-------|------------|
| v119 | 117 KB | 2026-08-12 | [📁 inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/inv_app_0119_0326_ota_152726.bin) | [#14](../../issues/14) | 1. Beheben Sie das Problem, dass kein Ladevorgang erzwungen wird, wenn der Ladezustand unt… |

---

**Firmware-Dateien gesamt:** 35
**Zuletzt aktualisiert:** 2026-08-12 12:05:06 UTC

## Changelogs

- Gesamt: [CHANGELOG.md](CHANGELOG.md)
- Pro Gerät: `firmwares/<Gerät>/CHANGELOG.md`
- Pro Modul: `firmwares/<Gerät>/<Typ>/CHANGELOG.md`

## Archiv-Struktur

- **Standard-Geräte** (VNSD-0, VNSE3-0, VNSA-0, HMG-50): `firmwares/<Gerät>/<Typ>/<Version>/`
- **Flat-Geräte** (HME-3, HME-4, HMJ-2): `firmwares/<Gerät>/<Version>/`

Jeder Versionsordner enthält die `.bin`-Datei und eine `metadata.json`
(Download-URL, SHA-256, Dateigröße, Release Notes inkl. Übersetzung, Issue-Referenz).
