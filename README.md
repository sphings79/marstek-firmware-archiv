# Marstek Firmware Archive

[![Stars](https://img.shields.io/github/stars/sphings79/marstek-firmware-archiv?style=flat&logo=github&label=stars)](https://github.com/sphings79/marstek-firmware-archiv/stargazers)
[![Firmware](https://img.shields.io/badge/firmware--files-47-blue)](#available-firmware)
[![Updated](https://img.shields.io/github/last-commit/sphings79/marstek-firmware-archiv?label=last%20updated)](https://github.com/sphings79/marstek-firmware-archiv/commits/main)

🇬🇧 **English** · [🇩🇪 Deutsch](README.de.md)

**Community archive of original Marstek OTA firmware.** Download the firmware
for **Marstek Venus E, Venus D, Venus A, Saturn/B2500** and the **CT002 / P1
smart meters** — each version with release notes in English and German, its
SHA-256 checksum, file size and a per-device changelog.

> ⭐ **Does this archive help you?** A star costs one click, and it is what makes
> other Marstek owners find it in the first place.

## Why a firmware archive?

- **Make downgrades possible at all.** Marstek only ever serves the *current*
  version. Once an update causes trouble, there is no way back without an archive.
- **Save it before you update.** A version's download URL disappears the moment
  the update is triggered on the device.
- **See what actually changed.** Marstek writes its release notes in Chinese —
  here they sit translated and versioned side by side.

> [!WARNING]
> Flashing firmware is at your own risk. The files are untouched originals from
> Marstek's update servers, but a failed update can brick a device. Before
> flashing, make sure both the device code **and** the module (Control, BMS,
> Micro, MPPT, FC41D) match your hardware.

## Supported devices

| Device code | Model | Firmware |
|-------------|-------|----------|
| `HME-3` | Marstek Smart Meter CT002 / P1 | [4 versions](#hme-3--marstek-smart-meter-ct002--p1) |
| `HME-4` | Marstek Smart Meter CT002 / P1 | [3 versions](#hme-4--marstek-smart-meter-ct002--p1) |
| `HMG-50` | Marstek Venus E Gen 1/2 | [5 versions](#hmg-50--marstek-venus-e-gen-12) |
| `HMJ-2` | Marstek Saturn / B2500 v2 | [1 version](#hmj-2--marstek-saturn--b2500-v2) |
| `VNSA-0` | Marstek Venus A | [11 versions](#vnsa-0--marstek-venus-a) |
| `VNSD-0` | Marstek Venus D | [10 versions](#vnsd-0--marstek-venus-d) |
| `VNSE3-0` | Marstek Venus E 3.0 | [13 versions](#vnse3-0--marstek-venus-e-30) |

Your device code is shown in the Marstek app, and the
[Firmware Checker](#-firmware-checker-tool) reads it out for you.

## 🔍 Firmware Checker tool

The **Marstek Firmware Checker** queries the firmware currently offered for your
devices straight from Marstek, lets you save it, and submits it here
automatically:

- 🌐 **Hosted tool:** <https://sphings-dev.de/marstek/marstek-fw-checker/>
- 💻 **Source:** <https://github.com/sphings79/marstek-fw-checker>

> [!IMPORTANT]
> **Firmware can only be saved as long as the update has not been triggered yet.**
> The moment you start the update on the device, the download URL is gone. So
> save the firmware **before** updating.

> [!NOTE]
> The tool stores **no login data**. Your Marstek credentials are used for the
> query only and are never saved.

> Maintained automatically. New firmware is submitted through GitHub issues
> labelled `firmware-submission` and filed by a GitHub Action. A daily job also
> compares this archive against
> [rweijnen/marstek-firmware-archive](https://github.com/rweijnen/marstek-firmware-archive) and proposes
> missing versions as a pull request (marked ↗ ref).

## Available firmware

### HME-3 — Marstek Smart Meter CT002 / P1

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v122 | 76 KB | 2025-12-01 | [📁 122_HME-3_2025091516373099b077494.bin](firmwares/HME-3/122/122_HME-3_2025091516373099b077494.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | UDP protocol v4: fixed a UDP reset bug |
| v118 | 72 KB | 2025-10-27 | [📁 118_HME-3_2025071415581563c0d7425.bin](firmwares/HME-3/118/118_HME-3_2025071415581563c0d7425.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Optimised SML meter readings |
| v117 | 72 KB | 2025-08-25 | [📁 117_HME-3_20250702110345eebe62348.bin](firmwares/HME-3/117/117_HME-3_20250702110345eebe62348.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Optimised UDP reception and restart behaviour<br>2. Added a Bluetooth command for updating the Quectel module<br>3. CT3: fixed a bug in the 7E1 configuration, improved SML parsing and added SML protocol logging |
| v116 | 68 KB | 2025-11-14 | [📁 116_HME-3_20250610173327b6ce85859.bin](firmwares/HME-3/116/116_HME-3_20250610173327b6ce85859.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. BLE and MQTT now report live values for phases A, B, C and the combined total<br>2. Added Bluetooth setup for open (passwordless) Wi-Fi networks<br>3. Encryption now uses the new MQTT server certificate<br>4. UDP protocol extended with energy meter readings |

### HME-4 — Marstek Smart Meter CT002 / P1

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v202506141125 | 662.03 KB | 2026-08-21 | [📁 202506141125_HME-4_20250625175845d30f22583.rbl](firmwares/HME-4/202506141125/202506141125_HME-4_20250625175845d30f22583.rbl) | [#32](../../issues/32) |  |
| v124 | 72 KB | 2026-08-12 | [📁 124_HME-4_20250915163554648799838.bin](firmwares/HME-4/124/124_HME-4_20250915163554648799838.bin) | [#9](../../issues/9) | UDP protocol v4: fixed a UDP reset bug |
| v120 | 66 KB | 2025-08-25 | [📁 120_HME-4_202507021110400569f6547.bin](firmwares/HME-4/120/120_HME-4_202507021110400569f6547.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Optimised UDP reception and restart behaviour<br>2. Added a Bluetooth command for updating the Quectel module<br>3. Raised the number of connectable slave devices to 15 |

### HMG-50 — Marstek Venus E Gen 1/2

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v216 | 72 KB | 2025-09-08 | [📁 216_bms_HMG-50_20250902100339408038111.bin](firmwares/HMG-50/BMS/216/216_bms_HMG-50_20250902100339408038111.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Fixed SOC jumps at a low state of charge |
| v215 | 72 KB | 2025-08-25 | [📁 215_bms_HMG-50_20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/215_bms_HMG-50_20250806112046448ef9739.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Raised the full-charge hysteresis from 97 to 99 %<br>2. Improved firmware update stability |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v156 | 236 KB | 2026-07-31 | [📁 156_control_HMG-50_20251118172129117290445.bin](firmwares/HMG-50/Control/156/156_control_HMG-50_20251118172129117290445.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Bluetooth broadcasting can now be switched on and off<br>2. Added configuration for a third-party server<br>3. Improved OpenAPI interface stability |
| v155 | 232 KB | 2025-10-27 | [📁 155_control_HMG-50_202509161548003ff722863.bin](firmwares/HMG-50/Control/155/155_control_HMG-50_202509161548003ff722863.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Added cumulative tracking of charge and discharge time<br>2. The grid connection standard can now be pushed to the device |
| v153 | 222 KB | 2025-08-25 | [📁 153_control_HMG-50_202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/153_control_HMG-50_202505301136007a5b57023.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Network setup now supports open (passwordless) Wi-Fi<br>2. Fixed various known issues |

### HMJ-2 — Marstek Saturn / B2500 v2

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v110 | 146 KB | 2026-07-24 | [📁 110_HMJ-2_20250523160631745d66082.bin](firmwares/HMJ-2/110/110_HMJ-2_20250523160631745d66082.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) |  |

### VNSA-0 — Marstek Venus A

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v110.5 (Beta) | 102 KB | 2026-08-12 | [📁 1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin) | [#22](../../issues/22) | *Use only together with micro-inverter firmware V119.3 or later.*<br>1. Deep-discharge recovery of the battery via PV start, together with the inverter<br>2. Optimised the forced-charge logic |
| v109 | 102 KB | 2026-08-26 | [📁 109_bms_VNSA-0_20251226103854b52c66481.bin](firmwares/VNSA-0/BMS/109/109_bms_VNSA-0_20251226103854b52c66481.bin) | [#35](../../issues/35) | See changelog |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v150.9 (Beta) | 382 KB | 2026-09-10 | [📁 1509_control_VNSA-0_ems_app_1509_0908_093804.bin](firmwares/VNSA-0/Control/1509/1509_control_VNSA-0_ems_app_1509_0908_093804.bin) | [#40](../../issues/40) | 1. Fixed a fault when PV generation drops out during surplus feed-in<br>2. Fixed the LED blinking continuously<br>3. Improved CT connection stability and phase detection |
| v150.8 (Beta) | 378 KB | 2026-09-10 | [📁 1508_control_VNSA-0_app_1508_0819_182932.bin](firmwares/VNSA-0/Control/1508/1508_control_VNSA-0_app_1508_0819_182932.bin) | [#41](../../issues/41) | For testing only |
| v150 | 378 KB | 2026-08-26 | [📁 150_control_VNSA-0_app_0150_0811_114724.bin](firmwares/VNSA-0/Control/150/150_control_VNSA-0_app_0150_0811_114724.bin) | [#36](../../issues/36) | 1. Fixed faulty Local API transmission in Ethernet mode<br>2. Fixed failing HTTP updates in Ethernet mode<br>3. Added a peak-shaving function<br>4. Fixed data loss caused by overlong HTTP payloads<br>5. Switched the meter connection to CT_TYPE |
| v149 | 374 KB | 2026-08-12 | [📁 149_control_VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/149_control_VNSA-0_app_0149_0528_102448.bin) | [#23](../../issues/23) | 1. Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover<br>2. Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors<br>3. Added support for French electricity meters<br>4. Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)<br>5. Optimised surplus feed-in to the grid<br>6. Fixed the DOD configuration being sent incorrectly<br>7. Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA<br>8. Maximum power configuration is now supported |
| v148.7 (Beta) | 374 KB | 2026-08-12 | [📁 1487_control_VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/1487_control_VNSA-0_app_1487_0511_1_155731.bin) | [#2](../../issues/2) | 1. Added further OpenAPI functions (see the OpenAPI documentation); fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover<br>2. Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors<br>3. Added support for French electricity meters<br>4. Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)<br>5. Optimised surplus feed-in to the grid<br>6. Fixed the DOD setting being sent incorrectly from the app<br>7. Added parallel updating of several devices in Wi-Fi mode (enabled in special builds only) |
| v148 | 368 KB | 2026-09-05 | [📁 148_control_VNSA-0_app_0148_0330_104509.bin](firmwares/VNSA-0/Control/148/148_control_VNSA-0_app_0148_0330_104509.bin) | [#38](../../issues/38) | Monthly update 148 |

#### Micro

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v121.1 (Beta) | 143 KB | 2026-08-12 | [📁 1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin) | [#24](../../issues/24) | Improved the VA off-grid port's capability to drive loads behind an RCD |
| v119.3 (Beta) | 143 KB | 2026-08-12 | [📁 1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin) | [#3](../../issues/3) | *Use only together with BMS firmware V110.5.*<br>1. Optimised deep-discharge recovery |
| v119 | 143 KB | 2026-09-05 | [📁 119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin](firmwares/VNSA-0/Micro/119/119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin) | [#39](../../issues/39) | 1. Optimised the zero-crossing switching point of the grid relay<br>2. Fixed the inverter being unable to start forced charging on its own below 6 % battery SOC<br>3. Changed the off-grid port overload thresholds from 1.1 / 1.25 / 1.4× to 1.1 / 1.2×<br>4. Adjusted the LLC soft-start gain point to prevent damage to the power stage |

### VNSD-0 — Marstek Venus D

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v118 | 104 KB | 2026-08-12 | [📁 118_bms_VNSD-0_20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/118_bms_VNSD-0_20260119100535e43806957.bin) | [#25](../../issues/25) | OTA test |
| v117.7 (Beta) | 104 KB | 2026-08-12 | [📁 1177_bms_VNSD-0_20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/1177_bms_VNSD-0_20251010135647565eb2036.bin) | [#19](../../issues/19) | OTA test 117.7 |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v150 | 380 KB | 2026-08-13 | [📁 150_control_VNSD-0_app_0150_0805_115146.bin](firmwares/VNSD-0/Control/150/150_control_VNSD-0_app_0150_0805_115146.bin) | [#28](../../issues/28) | 1. Fixed faulty Local API transmission in Ethernet mode<br>2. Fixed failing HTTP updates in Ethernet mode<br>3. Added a peak-shaving function<br>4. Fixed data loss caused by overlong HTTP payloads<br>5. Switched the meter connection to CT_TYPE |
| v149.2 (Beta) | 376 KB | 2026-08-12 | [📁 1492_control_VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/1492_control_VNSD-0_app_1492_0702_142136.bin) | [#17](../../issues/17) | Fixed incorrect data display caused by missing HTTP uploads |
| v149 | 376 KB | 2026-08-12 | [📁 149_control_VNSD-0_app_0149_0521_094621.bin](firmwares/VNSD-0/Control/149/149_control_VNSD-0_app_0149_0521_094621.bin) | [#4](../../issues/4) | 1. Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover<br>2. Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors<br>3. Added support for French electricity meters<br>4. Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)<br>5. Optimised surplus feed-in to the grid<br>6. Fixed the DOD configuration being sent incorrectly<br>7. Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA<br>8. Maximum power configuration is now supported<br>9. Venus D supports a maximum power of 2500 W |
| v147 | 364 KB | 2026-08-12 | [📁 147_control_VNSD-0_202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/147_control_VNSD-0_202601281721320b2053125.bin) | [#16](../../issues/16) | *Based on the existing v147:*<br>1. Improved the connection to German electricity meters<br>2. Improved third-party server configuration in Ethernet mode<br>3. Fixed occasionally missing HTTP data uploads |

#### FC41D

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v202512040647 | 666.92 KB | 2026-08-21 | [📁 202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl](firmwares/VNSD-0/FC41D/202512040647/202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl) | [#31](../../issues/31) |  |
| v202409090159 | 663.77 KB | 2026-08-21 | [📁 202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl](firmwares/VNSD-0/FC41D/202409090159/202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl) | - | Installed 2024 baseline version of the FC41D communication module, served from the static hamedata URL. |

#### Micro

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v116 | 113 KB | 2026-08-12 | [📁 116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin) | [#18](../../issues/18) | VD 2500w |
| v115 | 113 KB | 2026-08-12 | [📁 115_micro_VNSD-0_202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/115_micro_VNSD-0_202601230921310c0e30687.bin) | [#21](../../issues/21) | Adapted to control firmware 147 |

### VNSE3-0 — Marstek Venus E 3.0

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v115 | 82 KB | 2026-08-12 | [📁 115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin) | [#26](../../issues/26) | 1. Optimised the start-up check when SOC reads 100 % or 0 %<br>2. Deep-discharge recovery together with the inverter<br>3. Fixed a bug that could prevent charging and discharging after a full charge |
| v113 | 95 KB | 2026-08-12 | [📁 113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin) | [#13](../../issues/13) | 1. Ampere-hour integration now runs in the timer interrupt using the inverter current<br>2. Added sleep-time calculation |
| v112 | 93 KB | 2026-07-07 | [📁 112_bms_VNSE3-0_20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/112_bms_VNSE3-0_20260121113157833696278.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | *Requires VNS firmware 117 and EMS firmware 147.*<br>1. The charge and discharge MOSFETs are now controlled externally |
| v110 | 89 KB | 2025-12-22 | [📁 110_bms_VNSE3-0_202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/110_bms_VNSE3-0_202512031001144fcbf8852.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Re-release of firmware 109 |
| v106 | 90 KB | 2025-10-27 | [📁 106_bms_VNSE3-0_2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/106_bms_VNSE3-0_2025081814112994acd7498.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Fixed SOC jumps on BMS units with CORNEX cells |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v150 | 366 KB | 2026-08-12 | [📁 150_control_VNSE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/150_control_VNSE3-0_app_0150_0804_151249.bin) | [#27](../../issues/27) | 1. Fixed faulty Local API transmission in Ethernet mode<br>2. Fixed failing HTTP updates in Ethernet mode<br>3. Added a peak-shaving function<br>4. Fixed data loss caused by overlong HTTP payloads<br>5. Switched the meter connection to CT_TYPE |
| v149 | 362 KB | 2026-08-12 | [📁 149_control_VNSE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/149_control_VNSE3-0_app_0149_0528_3_101940.bin) | [#12](../../issues/12) | 1. Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover<br>2. Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors<br>3. Added support for French electricity meters<br>4. Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)<br>5. Optimised surplus feed-in to the grid<br>6. Fixed the DOD configuration being sent incorrectly<br>7. Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA<br>8. Maximum power configuration is now supported |
| v148 | 358 KB | 2026-08-12 | [📁 148_control_VNSE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/148_control_VNSE3-0_app_0148_0331_093751.bin) | [#20](../../issues/20) | 1. Added data backup<br>2. Improved meter disconnection detection and phase detection<br>3. Fixed the MQTT connection flag being displayed incorrectly in Ethernet mode<br>4. Improved connection stability after an MQTT network dropout and reset<br>5. Fixed discharging becoming impossible after setting DOD a second time<br>6. Improved the third-party server connection; the timeout clearing function was removed |
| v147.6 (Beta) | 356 KB | 2026-03-13 | [📁 1476_control_VNSE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/1476_control_VNSE3-0_app_1476_0312_182736.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Improved MQTT connection stability |
| v147 | 352 KB | 2026-08-30 | [📁 147_control_VNSE3-0_202601281724177c3442083.bin](firmwares/VNSE3-0/Control/147/147_control_VNSE3-0_202601281724177c3442083.bin) | [#37](../../issues/37) | *Based on the existing v147:*<br>1. Improved the connection to German electricity meters<br>2. Improved third-party server configuration in Ethernet mode<br>3. Fixed occasionally missing HTTP data uploads |
| v144 | 346 KB | 2025-11-26 | [📁 144_control_VNSE3-0_20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/144_control_VNSE3-0_20251118161530cc2d80857.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | *New features:*<br>1. Anti-backfeed power setpoint: the power at the grid connection point can be set freely, and the device draws or feeds at that value continuously<br>2. Support for four additional meters — Netherlands: SMR-P1, Germany: SMR-IR, France: SMR-TIC, new CT002 version: TPM2-100CT<br>3. Configurable depth of discharge (DOD): the usable SOC range can be set to [(12–70 %) – 100 %]. In cold regions a higher lower limit is recommended, as it extends battery life<br>4. Device Bluetooth can be switched off via the server or the app<br>5. Third-party server connection via XID/VID, configurable in the app |

#### FC41D

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v202512040647 | 666.92 KB | 2026-09-23 | [📁 202512040647_fc41d_VNSE3-0_202512271054507d95a7957.rbl](firmwares/VNSE3-0/FC41D/202512040647/202512040647_fc41d_VNSE3-0_202512271054507d95a7957.rbl) | [#43](../../issues/43) |  |

#### Micro

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v119 | 117 KB | 2026-08-12 | [📁 119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin) | [#14](../../issues/14) | Fixed forced charging not starting below 6 % SOC |

---

**Firmware files in total:** 47
**Last updated:** 2026-09-23 08:59:44 UTC

## Contributing

Missing a version? Pull it with the [Firmware Checker](#-firmware-checker-tool) and submit
it through the [issue template](../../issues/new?template=firmware-submission.md)
— the rest happens automatically. Every submission is verified against the file
size and CRC-16/MODBUS checksum reported by Marstek before it enters the archive.

## Changelogs

- Everything: [CHANGELOG.md](CHANGELOG.md)
- Per device: `firmwares/<device>/CHANGELOG.md`
- Per module: `firmwares/<device>/<type>/CHANGELOG.md`

German versions sit next to each file as `CHANGELOG.de.md`.

## Archive layout

- **Standard devices** (VNSD-0, VNSE3-0, VNSA-0, HMG-50): `firmwares/<device>/<type>/<version>/`
- **Flat devices** (HME-3, HME-4, HMJ-2): `firmwares/<device>/<version>/`
- **Comms module** (FC41D, the Wi-Fi module): stored as a firmware type under its device, e.g. `firmwares/VNSD-0/FC41D/<version>/` — an `.rbl` file

Every version folder holds the firmware file (`.bin` or `.rbl`) and a `metadata.json`
(download URL, SHA-256, file size, release notes incl. translations, issue reference).
