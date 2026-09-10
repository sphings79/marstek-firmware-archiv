# Changelog — VNSD-0 (Marstek Venus D) / Control

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v150 — 2026-08-13

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#28](../../../../../issues/28) · File `150_control_VNSD-0_app_0150_0805_115146.bin` · SHA-256 `4140e7a6d38a…`</sub>

## v149.2 (Beta) — 2026-08-12

- Fixed incorrect data display caused by missing HTTP uploads

<sub>Issue [#17](../../../../../issues/17) · File `1492_control_VNSD-0_app_1492_0702_142136.bin` · SHA-256 `9b24db59c4db…`</sub>

## v149 — 2026-08-12

- Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD configuration being sent incorrectly
- Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA
- Maximum power configuration is now supported
- Venus D supports a maximum power of 2500 W

<sub>Issue [#4](../../../../../issues/4) · File `149_control_VNSD-0_app_0149_0521_094621.bin` · SHA-256 `a8e5e9285e6c…`</sub>

## v147 — 2026-08-12

_Based on the existing v147:_

- Improved the connection to German electricity meters
- Improved third-party server configuration in Ethernet mode
- Fixed occasionally missing HTTP data uploads

<sub>Issue [#16](../../../../../issues/16) · File `147_control_VNSD-0_202601281721320b2053125.bin` · SHA-256 `3435e0b98067…`</sub>

