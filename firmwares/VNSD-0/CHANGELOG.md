# Changelog — VNSD-0 (Marstek Venus D)

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## FC41D v202409090159 — 2026-08-21

- Installed 2024 baseline version of the FC41D communication module, served from the static hamedata URL.

<sub>File `202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl` · SHA-256 `0d10d2a4d467…`</sub>

## FC41D v202512040647 — 2026-08-21

_No release notes._

<sub>Issue [#31](../../../../issues/31) · File `202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl` · SHA-256 `63c2f3531306…`</sub>

## Control v150 — 2026-08-13

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#28](../../../../issues/28) · File `150_control_VNSD-0_app_0150_0805_115146.bin` · SHA-256 `4140e7a6d38a…`</sub>

## Control v149.2 (Beta) — 2026-08-12

- Fixed incorrect data display caused by missing HTTP uploads

<sub>Issue [#17](../../../../issues/17) · File `1492_control_VNSD-0_app_1492_0702_142136.bin` · SHA-256 `9b24db59c4db…`</sub>

## Control v149 — 2026-08-12

- Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD configuration being sent incorrectly
- Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA
- Maximum power configuration is now supported
- Venus D supports a maximum power of 2500 W

<sub>Issue [#4](../../../../issues/4) · File `149_control_VNSD-0_app_0149_0521_094621.bin` · SHA-256 `a8e5e9285e6c…`</sub>

## Control v147 — 2026-08-12

_Based on the existing v147:_

- Improved the connection to German electricity meters
- Improved third-party server configuration in Ethernet mode
- Fixed occasionally missing HTTP data uploads

<sub>Issue [#16](../../../../issues/16) · File `147_control_VNSD-0_202601281721320b2053125.bin` · SHA-256 `3435e0b98067…`</sub>

## BMS v118 — 2026-08-12

- OTA test

<sub>Issue [#25](../../../../issues/25) · File `118_bms_VNSD-0_20260119100535e43806957.bin` · SHA-256 `fdcefaec7a8c…`</sub>

## BMS v117.7 (Beta) — 2026-08-12

- OTA test
- 7

<sub>Issue [#19](../../../../issues/19) · File `1177_bms_VNSD-0_20251010135647565eb2036.bin` · SHA-256 `69b18aa42831…`</sub>

## Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](../../../../issues/18) · File `116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin` · SHA-256 `b81bb99f8213…`</sub>

## Micro v115 — 2026-08-12

- Adapted to control firmware 147

<sub>Issue [#21](../../../../issues/21) · File `115_micro_VNSD-0_202601230921310c0e30687.bin` · SHA-256 `b2505973136f…`</sub>

