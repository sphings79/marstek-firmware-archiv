# Changelog — VNSEMINI-0 (Marstek Venus E Mini)

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

## Control v309 — 2026-11-19

- Optimized the reliability of Local API usage within the local area network
- Optimized zero-point current calibration (for use with DC versions V269 or V513)
- Added EcoTracker P1 and HomeWizard P1 meters
- Added forced charging logic (when the grid is online and the SoC is below 5%, any mode will charge to 10%)
- Added the function to restore factory settings by pressing and holding the button for ten seconds.

<sub>Issue [#70](../../../../issues/70) · File `309_control_VNSEMINI-0_PMU_V135_186556_42_FF_152925.bin` · SHA-256 `8b5e8ce6a7fe…`</sub>

## Micro v270 — 2026-10-29

- Add grid-connected charging power limit 800W/1500W (available after the app is adapted)
- Optimize temperature control to improve thermal management performance

<sub>Issue [#55](../../../../issues/55) · File `270_micro_VNSEMINI-0_INV_V10E_100904_AA_FF_111659.bin` · SHA-256 `395e31ef8bce…`</sub>

