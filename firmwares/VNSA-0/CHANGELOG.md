# Changelog — VNSA-0 (Marstek Venus A)

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## Control v149 — 2026-08-12

- Added some functions of OpenApi, and fixed the problem that the PV data obtained by the ES interface is 0 and the UPS switch manually displays the UPS abnormally.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Added the ability to adapt to French electric meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of residual power access to the Internet
- Solve DOD configuration delivery exception
- Http data upload is modified to 5 minutes to fix the abnormality of VA battery cell voltage data.
- Support maximum power configuration

<sub>Issue [#23](../../../../issues/23) · File `149_control_VNSA-0_app_0149_0528_102448.bin` · SHA-256 `f14fede53a07…`</sub>

## Control v148.7 — 2026-08-12

- Added some functions of OpenApi (see OpenApi document update), fixed the problem of PV data obtained by ES interface being 0 and manual abnormal display of UPS when switching UPS.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Newly adapted French electricity meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of using residual electricity to connect to the Internet
- Solve the abnormal DOD delivery of APP configuration
- Added multi-machine parallel upgrade function in wifi mode (special version available)

<sub>Issue [#2](../../../../issues/2) · File `1487_control_VNSA-0_app_1487_0511_1_155731.bin` · SHA-256 `338151c19b98…`</sub>

## Micro v121.1 — 2026-08-12

- Enhanced VA off-grid port with RCD loading capability

<sub>Issue [#24](../../../../issues/24) · File `1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin` · SHA-256 `277611ea8982…`</sub>

## Micro v119.3 — 2026-08-12

- Low voltage rescue optimization, need to cooperate with BMS V1105 version

<sub>Issue [#3](../../../../issues/3) · File `1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin` · SHA-256 `4735bbe75d69…`</sub>

## BMS v110.5 — 2026-08-12

- Need to be used in conjunction with inverter 1193 and above
- Cooperate with the inverter to carry out battery ultra-low voltage photovoltaic startup rescue
- Optimization of forced charging logic

<sub>Issue [#22](../../../../issues/22) · File `1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin` · SHA-256 `c642c7ea1e84…`</sub>

