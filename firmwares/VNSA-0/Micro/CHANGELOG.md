# Changelog — VNSA-0 (Marstek Venus A) / Micro

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v121.1 (Beta) — 2026-08-12

- Improved the VA off-grid port's capability to drive loads behind an RCD

<sub>Issue [#24](../../../../../issues/24) · File `1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin` · SHA-256 `277611ea8982…`</sub>

## v119.3 (Beta) — 2026-08-12

_Use only together with BMS firmware V110.5._

- Optimised deep-discharge recovery

<sub>Issue [#3](../../../../../issues/3) · File `1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin` · SHA-256 `4735bbe75d69…`</sub>

## v119 — 2026-09-05

- Optimised the zero-crossing switching point of the grid relay
- Fixed the inverter being unable to start forced charging on its own below 6 % battery SOC
- Changed the off-grid port overload thresholds from 1.1 / 1.25 / 1.4× to 1.1 / 1.2×
- Adjusted the LLC soft-start gain point to prevent damage to the power stage

<sub>Issue [#39](../../../../../issues/39) · File `119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin` · SHA-256 `b00254c28127…`</sub>

