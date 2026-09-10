# Changelog — VNSE3-0 (Marstek Venus E 3.0) / BMS

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## v115 — 2026-08-12

- Optimised the start-up check when SOC reads 100 % or 0 %
- Deep-discharge recovery together with the inverter
- Fixed a bug that could prevent charging and discharging after a full charge

<sub>Issue [#26](../../../../../issues/26) · File `115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin` · SHA-256 `cb50cc792e24…`</sub>

## v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](../../../../../issues/13) · File `113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin` · SHA-256 `da7ebe26b679…`</sub>

## v112 — 2026-07-07

_Requires VNS firmware 117 and EMS firmware 147._

- The charge and discharge MOSFETs are now controlled externally

<sub>File `112_bms_VNSE3-0_20260121113157833696278.bin` · SHA-256 `b3193ced35dd…`</sub>

## v110 — 2025-12-22

- Re-release of firmware 109

<sub>File `110_bms_VNSE3-0_202512031001144fcbf8852.bin` · SHA-256 `7ea97e0fb136…`</sub>

## v106 — 2025-10-27

- Fixed SOC jumps on BMS units with CORNEX cells

<sub>File `106_bms_VNSE3-0_2025081814112994acd7498.bin` · SHA-256 `bf28fb5c786a…`</sub>

