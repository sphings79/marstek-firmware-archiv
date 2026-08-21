# Changelog — VNSD-0 (Marstek Venus D)

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## FC41D v202409090159 — 2026-08-21

- Installed 2024 baseline version of the FC41D communication module, served from the static hamedata URL.

<sub>File `202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl` · SHA-256 `0d10d2a4d467…`</sub>

## FC41D v202512040647 — 2026-08-21

_No release notes._

<sub>Issue [#31](../../../../issues/31) · File `202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl` · SHA-256 `63c2f3531306…`</sub>

## Control v150 — 2026-08-13

- Optimize Loacl API sending exception in Ethernet mode
- Optimize HTTP upgrade failure problem in Ethernet mode
- Add Peak-shaving function
- Optimize data loss problem caused by excessive HTTP data
- Optimize meter connection method, use CT_TYPE connection

<sub>Issue [#28](../../../../issues/28) · File `150_control_VNSD-0_app_0150_0805_115146.bin` · SHA-256 `4140e7a6d38a…`</sub>

## Control v149.2 — 2026-08-12

- Solve the problem of abnormal data display caused by http data not uploading interval

<sub>Issue [#17](../../../../issues/17) · File `1492_control_VNSD-0_app_1492_0702_142136.bin` · SHA-256 `9b24db59c4db…`</sub>

## Control v149 — 2026-08-12

- Added some functions of OpenApi, and fixed the problem that the PV data obtained by the ES interface is 0 and the UPS switch manually displays the UPS abnormally.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Added the ability to adapt to French electric meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of residual power access to the Internet
- Solve DOD configuration delivery exception
- Http data upload is modified to 5 minutes to fix the abnormality of VA battery cell voltage data.
- Support maximum power configuration
- Venus D supports a maximum power of 2500W

<sub>Issue [#4](../../../../issues/4) · File `149_control_VNSD-0_app_0149_0521_094621.bin` · SHA-256 `a8e5e9285e6c…`</sub>

## Control v147 — 2026-08-12

- Based on the original 147:
- Optimize the German electricity meter connection
- Optimize the third-party server configuration under Ethernet
- Optimize the occasional missing problem of http data reporting

<sub>Issue [#16](../../../../issues/16) · File `147_control_VNSD-0_202601281721320b2053125.bin` · SHA-256 `3435e0b98067…`</sub>

## BMS v118 — 2026-08-12

- OTA test

<sub>Issue [#25](../../../../issues/25) · File `118_bms_VNSD-0_20260119100535e43806957.bin` · SHA-256 `fdcefaec7a8c…`</sub>

## BMS v117.7 — 2026-08-12

- ota test 1177

<sub>Issue [#19](../../../../issues/19) · File `1177_bms_VNSD-0_20251010135647565eb2036.bin` · SHA-256 `69b18aa42831…`</sub>

## Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](../../../../issues/18) · File `116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin` · SHA-256 `b81bb99f8213…`</sub>

## Micro v115 — 2026-08-12

- Adapt to central control 147

<sub>Issue [#21](../../../../issues/21) · File `115_micro_VNSD-0_202601230921310c0e30687.bin` · SHA-256 `b2505973136f…`</sub>

