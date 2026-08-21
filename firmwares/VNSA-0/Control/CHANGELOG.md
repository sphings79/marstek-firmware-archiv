# Changelog — VNSA-0 (Marstek Venus A) / Control

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v149 — 2026-08-12

- Added some functions of OpenApi, and fixed the problem that the PV data obtained by the ES interface is 0 and the UPS switch manually displays the UPS abnormally.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Added the ability to adapt to French electric meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of residual power access to the Internet
- Solve DOD configuration delivery exception
- Http data upload is modified to 5 minutes to fix the abnormality of VA battery cell voltage data.
- Support maximum power configuration

<sub>Issue [#23](../../../../../issues/23) · File `149_control_VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## v148.7 — 2026-08-12

- Added some functions of OpenApi (see OpenApi document update), fixed the problem of PV data obtained by ES interface being 0 and manual abnormal display of UPS when switching UPS.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Newly adapted French electricity meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of using residual electricity to connect to the Internet
- Solve the abnormal DOD delivery of APP configuration
- Added multi-machine parallel upgrade function in wifi mode (special version available)

<sub>Issue [#2](../../../../../issues/2) · File `1487_control_VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

