# Changelog — VNSA-0 (Marstek Venus A) / Micro

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v121.1 — 2026-08-12

- Enhanced VA off-grid port with RCD loading capability

<sub>Issue [#24](../../../../../issues/24) · File `1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin` · SHA-256 `277611ea8982…`</sub>

## v119.3 — 2026-08-12

- Low voltage rescue optimization, need to cooperate with BMS V1105 version

<sub>Issue [#3](../../../../../issues/3) · File `1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin` · SHA-256 `4735bbe75d69…`</sub>

## v119 — 2026-09-05

- Optimize the zero crossing point of the grid-connected relay to open
- Fix the problem that the battery soc is less than 6%, and the inverter cannot be self-charged.
- The off-grid port load overload was modified from 1.1 1.25 1.4 times to 1.1 1.2 times
- Modify LLC Soft Start Gain Point to Prevent Fried Chicken

<sub>Issue [#39](../../../../../issues/39) · File `119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin` · SHA-256 `b00254c28127…`</sub>

