# Marstek Firmware Archive

[![Stars](https://img.shields.io/github/stars/sphings79/marstek-firmware-archiv?style=flat&logo=github&label=stars)](https://github.com/sphings79/marstek-firmware-archiv/stargazers)
[![Firmware](https://img.shields.io/badge/firmware--files-39-blue)](#available-firmware)
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
| `VNSA-0` | Marstek Venus A | [5 versions](#vnsa-0--marstek-venus-a) |
| `VNSD-0` | Marstek Venus D | [10 versions](#vnsd-0--marstek-venus-d) |
| `VNSE3-0` | Marstek Venus E 3.0 | [11 versions](#vnse3-0--marstek-venus-e-30) |

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
| v122 | 76 KB | 2025-12-01 | [📁 122_HME-3_2025091516373099b077494.bin](firmwares/HME-3/122/122_HME-3_2025091516373099b077494.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | UDP protocol v4 fixes UDP reset bug |
| v118 | 72 KB | 2025-10-27 | [📁 118_HME-3_2025071415581563c0d7425.bin](firmwares/HME-3/118/118_HME-3_2025071415581563c0d7425.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 优化SML读值 |
| v117 | 72 KB | 2025-08-25 | [📁 117_HME-3_20250702110345eebe62348.bin](firmwares/HME-3/117/117_HME-3_20250702110345eebe62348.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1、优化了UDP接收和重启优化 2、加入蓝牙升级移远模组命令 3、CT3修复7E1配置bug，优化了SML协议解析，以及加入SML协议打印功能 |
| v116 | 68 KB | 2025-11-14 | [📁 116_HME-3_20250610173327b6ce85859.bin](firmwares/HME-3/116/116_HME-3_20250610173327b6ce85859.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. BLE and MQTT add ABC3 phase and conjunction data Now data 2. Bluetooth adds passwordles… |

### HME-4 — Marstek Smart Meter CT002 / P1

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v202506141125 | 662.03 KB | 2026-08-21 | [📁 202506141125_HME-4_20250625175845d30f22583.rbl](firmwares/HME-4/202506141125/202506141125_HME-4_20250625175845d30f22583.rbl) | [#32](../../issues/32) |  |
| v124 | 72 KB | 2026-08-12 | [📁 124_HME-4_20250915163554648799838.bin](firmwares/HME-4/124/124_HME-4_20250915163554648799838.bin) | [#9](../../issues/9) | UDP protocol v4 fixes UDP reset bug |
| v120 | 66 KB | 2025-08-25 | [📁 120_HME-4_202507021110400569f6547.bin](firmwares/HME-4/120/120_HME-4_202507021110400569f6547.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1、优化了UDP接收和重启优化 2、加入蓝牙升级移远模组命令 3、连接从机改到15台 |

### HMG-50 — Marstek Venus E Gen 1/2

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v216 | 72 KB | 2025-09-08 | [📁 216_bms_HMG-50_20250902100339408038111.bin](firmwares/HMG-50/BMS/216/216_bms_HMG-50_20250902100339408038111.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Fixed low battery SOC jump issue. |
| v215 | 72 KB | 2025-08-25 | [📁 215_bms_HMG-50_20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/215_bms_HMG-50_20250806112046448ef9739.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | The full power hysteresis is adjusted from 97 to 99 to optimize the stability of upgrades. |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v156 | 236 KB | 2026-07-31 | [📁 156_control_HMG-50_20251118172129117290445.bin](firmwares/HMG-50/Control/156/156_control_HMG-50_20251118172129117290445.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Added Bluetooth broadcast switch function 2. Added the function of configuring third-pa… |
| v155 | 232 KB | 2025-10-27 | [📁 155_control_HMG-50_202509161548003ff722863.bin](firmwares/HMG-50/Control/155/155_control_HMG-50_202509161548003ff722863.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Added the accumulation function during charging and discharging; added support for issuing… |
| v153 | 222 KB | 2025-08-25 | [📁 153_control_HMG-50_202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/153_control_HMG-50_202505301136007a5b57023.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 1. Support network distribution function for passwordless WIFI; 2. Optimize some known iss… |

### HMJ-2 — Marstek Saturn / B2500 v2

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v110 | 146 KB | 2026-07-24 | [📁 110_HMJ-2_20250523160631745d66082.bin](firmwares/HMJ-2/110/110_HMJ-2_20250523160631745d66082.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) |  |

### VNSA-0 — Marstek Venus A

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v110.5 | 102 KB | 2026-08-12 | [📁 1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin) | [#22](../../issues/22) | Need to be used in conjunction with inverter 1193 and above 1. Cooperate with the inverter… |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v149 | 374 KB | 2026-08-12 | [📁 149_control_VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/149_control_VNSA-0_app_0149_0528_102448.bin) | [#23](../../issues/23) | 1. Added some functions of OpenApi, and fixed the problem that the PV data obtained by the… |
| v148.7 | 374 KB | 2026-08-12 | [📁 1487_control_VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/1487_control_VNSA-0_app_1487_0511_1_155731.bin) | [#2](../../issues/2) | 1. Added some functions of OpenApi (see OpenApi document update), fixed the problem of PV … |

#### Micro

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v121.1 | 143 KB | 2026-08-12 | [📁 1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin) | [#24](../../issues/24) | Enhanced VA off-grid port with RCD loading capability |
| v119.3 | 143 KB | 2026-08-12 | [📁 1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin) | [#3](../../issues/3) | Low voltage rescue optimization, need to cooperate with BMS V1105 version |

### VNSD-0 — Marstek Venus D

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v118 | 104 KB | 2026-08-12 | [📁 118_bms_VNSD-0_20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/118_bms_VNSD-0_20260119100535e43806957.bin) | [#25](../../issues/25) | OTA test |
| v117.7 | 104 KB | 2026-08-12 | [📁 1177_bms_VNSD-0_20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/1177_bms_VNSD-0_20251010135647565eb2036.bin) | [#19](../../issues/19) | ota test 1177 |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v150 | 380 KB | 2026-08-13 | [📁 150_control_VNSD-0_app_0150_0805_115146.bin](firmwares/VNSD-0/Control/150/150_control_VNSD-0_app_0150_0805_115146.bin) | [#28](../../issues/28) | 1. Optimize Loacl API sending exception in Ethernet mode 2. Optimize HTTP upgrade failure … |
| v149.2 | 376 KB | 2026-08-12 | [📁 1492_control_VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/1492_control_VNSD-0_app_1492_0702_142136.bin) | [#17](../../issues/17) | Solve the problem of abnormal data display caused by http data not uploading interval |
| v149 | 376 KB | 2026-08-12 | [📁 149_control_VNSD-0_app_0149_0521_094621.bin](firmwares/VNSD-0/Control/149/149_control_VNSD-0_app_0149_0521_094621.bin) | [#4](../../issues/4) | 1. Added some functions of OpenApi, and fixed the problem that the PV data obtained by the… |
| v147 | 364 KB | 2026-08-12 | [📁 147_control_VNSD-0_202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/147_control_VNSD-0_202601281721320b2053125.bin) | [#16](../../issues/16) | Based on the original 147: 1. Optimize the German electricity meter connection 2. Optimize… |

#### FC41D

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v202512040647 | 666.92 KB | 2026-08-21 | [📁 202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl](firmwares/VNSD-0/FC41D/202512040647/202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl) | [#31](../../issues/31) |  |
| v202409090159 | 663.77 KB | 2026-08-21 | [📁 202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl](firmwares/VNSD-0/FC41D/202409090159/202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl) | - | Installed 2024 baseline version of the FC41D communication module, served from the static … |

#### Micro

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v116 | 113 KB | 2026-08-12 | [📁 116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin) | [#18](../../issues/18) | VD 2500w |
| v115 | 113 KB | 2026-08-12 | [📁 115_micro_VNSD-0_202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/115_micro_VNSD-0_202601230921310c0e30687.bin) | [#21](../../issues/21) | Adapt to central control 147 |

### VNSE3-0 — Marstek Venus E 3.0

#### BMS

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v115 | 82 KB | 2026-08-12 | [📁 115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin) | [#26](../../issues/26) | 1 Optimize the judgment conditions when the boot SOC is 100% or 0% 2. Cooperate with the i… |
| v113 | 95 KB | 2026-08-12 | [📁 113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin) | [#13](../../issues/13) | 1. The ampere-hour integration is modified to use the inverter current in the timer interr… |
| v112 | 93 KB | 2026-07-07 | [📁 112_bms_VNSE3-0_20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/112_bms_VNSE3-0_20260121113157833696278.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | The charge and discharge tube is controlled externally and needs to be adapted to vns117 a… |
| v110 | 89 KB | 2025-12-22 | [📁 110_bms_VNSE3-0_202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/110_bms_VNSE3-0_202512031001144fcbf8852.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | 109 firmware retransmission |
| v106 | 90 KB | 2025-10-27 | [📁 106_bms_VNSE3-0_2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/106_bms_VNSE3-0_2025081814112994acd7498.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Fixed the SOC jump problem of Chuneng battery BMS. |

#### Control

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v150 | 366 KB | 2026-08-12 | [📁 150_control_VNSE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/150_control_VNSE3-0_app_0150_0804_151249.bin) | [#27](../../issues/27) | 1. Optimize Loacl API sending exception in Ethernet mode 2. Optimize HTTP upgrade failure … |
| v149 | 362 KB | 2026-08-12 | [📁 149_control_VNSE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/149_control_VNSE3-0_app_0149_0528_3_101940.bin) | [#12](../../issues/12) | 1. Added some functions of OpenApi, and fixed the problem that the PV data obtained by the… |
| v148 | 358 KB | 2026-08-12 | [📁 148_control_VNSE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/148_control_VNSE3-0_app_0148_0331_093751.bin) | [#20](../../issues/20) | 1. Added data backup function 2. Optimize meter disconnection detection and phase detectio… |
| v147.6 | 356 KB | 2026-03-13 | [📁 1476_control_VNSE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/1476_control_VNSE3-0_app_1476_0312_182736.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | Optimize MQTT connection stability |
| v144 | 346 KB | 2025-11-26 | [📁 144_control_VNSE3-0_20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/144_control_VNSE3-0_20251118161530cc2d80857.bin) | [↗ ref](https://github.com/rweijnen/marstek-firmware-archive) | New features: 1. Anti-backflow power baseline setting allows users to set the power of the… |

#### Micro

| Version | Size | Added | Download | Issue | Changes |
|---------|------|-------|----------|-------|---------|
| v119 | 117 KB | 2026-08-12 | [📁 119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin) | [#14](../../issues/14) | 1.Fix the problem of no forced charging when SOC is lower than 6% |

---

**Firmware files in total:** 39
**Last updated:** 2026-08-21 13:40:43 UTC

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
