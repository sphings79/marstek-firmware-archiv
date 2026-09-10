# Changelog — VNSA-0 (Marstek Venus A) / Control

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v150.9 (Beta) — 2026-09-10

- Fixed a fault when PV generation drops out during surplus feed-in
- Fixed the LED blinking continuously
- Improved CT connection stability and phase detection

<sub>Issue [#40](../../../../../issues/40) · File `1509_control_VNSA-0_ems_app_1509_0908_093804.bin` · SHA-256 `a8c58127189e…`</sub>

## v150.8 (Beta) — 2026-09-10

- For testing only

<sub>Issue [#41](../../../../../issues/41) · File `1508_control_VNSA-0_app_1508_0819_182932.bin` · SHA-256 `664623dd130c…`</sub>

## v150 — 2026-08-26

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#36](../../../../../issues/36) · File `150_control_VNSA-0_app_0150_0811_114724.bin` · SHA-256 `7dbff622f394…`</sub>

## v149 — 2026-08-12

- Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD configuration being sent incorrectly
- Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA
- Maximum power configuration is now supported

<sub>Issue [#23](../../../../../issues/23) · File `149_control_VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## v148.7 (Beta) — 2026-08-12

- Added further OpenAPI functions (see the OpenAPI documentation); fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD setting being sent incorrectly from the app
- Added parallel updating of several devices in Wi-Fi mode (enabled in special builds only)

<sub>Issue [#2](../../../../../issues/2) · File `1487_control_VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

## v148 — 2026-09-05

- Monthly update 148

<sub>Issue [#38](../../../../../issues/38) · File `148_control_VNSA-0_app_0148_0330_104509.bin` · SHA-256 `02b5088cc9cf…`</sub>

