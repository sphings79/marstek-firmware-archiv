# Changelog — VNSA-0 (Marstek Venus A)

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## Control v150.8 (Beta) — 2026-09-10

- For testing only

<sub>Issue [#41](../../../../issues/41) · File `1508_control_VNSA-0_app_1508_0819_182932.bin` · SHA-256 `664623dd130c…`</sub>

## Control v150.9 (Beta) — 2026-09-10

- Fixed a fault when PV generation drops out during surplus feed-in
- Fixed the LED blinking continuously
- Improved CT connection stability and phase detection

<sub>Issue [#40](../../../../issues/40) · File `1509_control_VNSA-0_ems_app_1509_0908_093804.bin` · SHA-256 `a8c58127189e…`</sub>

## Micro v119 — 2026-09-05

- Optimised the zero-crossing switching point of the grid relay
- Fixed the inverter being unable to start forced charging on its own below 6 % battery SOC
- Changed the off-grid port overload thresholds from 1.1 / 1.25 / 1.4× to 1.1 / 1.2×
- Adjusted the LLC soft-start gain point to prevent damage to the power stage

<sub>Issue [#39](../../../../issues/39) · File `119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin` · SHA-256 `b00254c28127…`</sub>

## Control v148 — 2026-09-05

- Monthly update 148

<sub>Issue [#38](../../../../issues/38) · File `148_control_VNSA-0_app_0148_0330_104509.bin` · SHA-256 `02b5088cc9cf…`</sub>

## Control v150 — 2026-08-26

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#36](../../../../issues/36) · File `150_control_VNSA-0_app_0150_0811_114724.bin` · SHA-256 `7dbff622f394…`</sub>

## BMS v109 — 2026-08-26

- See changelog

<sub>Issue [#35](../../../../issues/35) · File `109_bms_VNSA-0_20251226103854b52c66481.bin` · SHA-256 `ceabe476044b…`</sub>

## Control v149 — 2026-08-12

- Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD configuration being sent incorrectly
- Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA
- Maximum power configuration is now supported

<sub>Issue [#23](../../../../issues/23) · File `149_control_VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## Control v148.7 (Beta) — 2026-08-12

- Added further OpenAPI functions (see the OpenAPI documentation); fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD setting being sent incorrectly from the app
- Added parallel updating of several devices in Wi-Fi mode (enabled in special builds only)

<sub>Issue [#2](../../../../issues/2) · File `1487_control_VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

## Micro v121.1 (Beta) — 2026-08-12

- Improved the VA off-grid port's capability to drive loads behind an RCD

<sub>Issue [#24](../../../../issues/24) · File `1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin` · SHA-256 `277611ea8982…`</sub>

## Micro v119.3 (Beta) — 2026-08-12

_Use only together with BMS firmware V110.5._

- Optimised deep-discharge recovery

<sub>Issue [#3](../../../../issues/3) · File `1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin` · SHA-256 `4735bbe75d69…`</sub>

## BMS v110.5 (Beta) — 2026-08-12

_Use only together with micro-inverter firmware V119.3 or later._

- Deep-discharge recovery of the battery via PV start, together with the inverter
- Optimised the forced-charge logic

<sub>Issue [#22](../../../../issues/22) · File `1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin` · SHA-256 `c642c7ea1e84…`</sub>

