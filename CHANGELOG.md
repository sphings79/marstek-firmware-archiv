# Changelog — Marstek Firmware Archive

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

Every archived firmware version, newest first.

## VNSA-0 — Control v150.8 (Beta) — 2026-09-10

- For testing only

<sub>Issue [#41](issues/41) · [1508_control_VNSA-0_app_1508_0819_182932.bin](firmwares/VNSA-0/Control/1508/1508_control_VNSA-0_app_1508_0819_182932.bin)</sub>

## VNSA-0 — Control v150.9 (Beta) — 2026-09-10

- Fixed a fault when PV generation drops out during surplus feed-in
- Fixed the LED blinking continuously
- Improved CT connection stability and phase detection

<sub>Issue [#40](issues/40) · [1509_control_VNSA-0_ems_app_1509_0908_093804.bin](firmwares/VNSA-0/Control/1509/1509_control_VNSA-0_ems_app_1509_0908_093804.bin)</sub>

## VNSA-0 — Micro v119 — 2026-09-05

- Optimised the zero-crossing switching point of the grid relay
- Fixed the inverter being unable to start forced charging on its own below 6 % battery SOC
- Changed the off-grid port overload thresholds from 1.1 / 1.25 / 1.4× to 1.1 / 1.2×
- Adjusted the LLC soft-start gain point to prevent damage to the power stage

<sub>Issue [#39](issues/39) · [119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin](firmwares/VNSA-0/Micro/119/119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin)</sub>

## VNSA-0 — Control v148 — 2026-09-05

- Monthly update 148

<sub>Issue [#38](issues/38) · [148_control_VNSA-0_app_0148_0330_104509.bin](firmwares/VNSA-0/Control/148/148_control_VNSA-0_app_0148_0330_104509.bin)</sub>

## VNSE3-0 — Control v147 — 2026-08-30

_Based on the existing v147:_

- Improved the connection to German electricity meters
- Improved third-party server configuration in Ethernet mode
- Fixed occasionally missing HTTP data uploads

<sub>Issue [#37](issues/37) · [147_control_VNSE3-0_202601281724177c3442083.bin](firmwares/VNSE3-0/Control/147/147_control_VNSE3-0_202601281724177c3442083.bin)</sub>

## VNSA-0 — Control v150 — 2026-08-26

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#36](issues/36) · [150_control_VNSA-0_app_0150_0811_114724.bin](firmwares/VNSA-0/Control/150/150_control_VNSA-0_app_0150_0811_114724.bin)</sub>

## VNSA-0 — BMS v109 — 2026-08-26

- See changelog

<sub>Issue [#35](issues/35) · [109_bms_VNSA-0_20251226103854b52c66481.bin](firmwares/VNSA-0/BMS/109/109_bms_VNSA-0_20251226103854b52c66481.bin)</sub>

## VNSD-0 — FC41D v202409090159 — 2026-08-21

- Installed 2024 baseline version of the FC41D communication module, served from the static hamedata URL.

<sub>[202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl](firmwares/VNSD-0/FC41D/202409090159/202409090159_fc41d_VNSD-0_HM_HIE_FC41D_remote_ota.rbl)</sub>

## HME-4 — v202506141125 — 2026-08-21

_No release notes._

<sub>Issue [#32](issues/32) · [202506141125_HME-4_20250625175845d30f22583.rbl](firmwares/HME-4/202506141125/202506141125_HME-4_20250625175845d30f22583.rbl)</sub>

## VNSD-0 — FC41D v202512040647 — 2026-08-21

_No release notes._

<sub>Issue [#31](issues/31) · [202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl](firmwares/VNSD-0/FC41D/202512040647/202512040647_fc41d_VNSD-0_202512271054507d95a7957.rbl)</sub>

## VNSD-0 — Control v150 — 2026-08-13

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#28](issues/28) · [150_control_VNSD-0_app_0150_0805_115146.bin](firmwares/VNSD-0/Control/150/150_control_VNSD-0_app_0150_0805_115146.bin)</sub>

## VNSE3-0 — Control v150 — 2026-08-12

- Fixed faulty Local API transmission in Ethernet mode
- Fixed failing HTTP updates in Ethernet mode
- Added a peak-shaving function
- Fixed data loss caused by overlong HTTP payloads
- Switched the meter connection to CT_TYPE

<sub>Issue [#27](issues/27) · [150_control_VNSE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/150_control_VNSE3-0_app_0150_0804_151249.bin)</sub>

## VNSD-0 — Control v149.2 (Beta) — 2026-08-12

- Fixed incorrect data display caused by missing HTTP uploads

<sub>Issue [#17](issues/17) · [1492_control_VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/1492_control_VNSD-0_app_1492_0702_142136.bin)</sub>

## VNSA-0 — Control v149 — 2026-08-12

- Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD configuration being sent incorrectly
- Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA
- Maximum power configuration is now supported

<sub>Issue [#23](issues/23) · [149_control_VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/149_control_VNSA-0_app_0149_0528_102448.bin)</sub>

## VNSD-0 — Control v149 — 2026-08-12

- Added further OpenAPI functions; fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD configuration being sent incorrectly
- Changed the HTTP upload interval to 5 minutes; fixed incorrect cell voltage readings on the VA
- Maximum power configuration is now supported
- Venus D supports a maximum power of 2500 W

<sub>Issue [#4](issues/4) · [149_control_VNSD-0_app_0149_0521_094621.bin](firmwares/VNSD-0/Control/149/149_control_VNSD-0_app_0149_0521_094621.bin)</sub>

## VNSE3-0 — Control v149 — 2026-08-12

- Neue OpenAPI‑Teilfunktionen hinzugefügt; Fehler behoben, bei dem die ES‑Schnittstelle PV‑Daten mit 0 zurückgab sowie ein Anzeigefehler bei manuellem UPS‑Umschalten.
- Neue Wiederherstellungsmechanismen bei I²C‑(IIC‑)Deadlocks implementiert, um fehlerhafte EEPROM‑Lesevorgänge zu vermeiden.
- Unterstützung für französische Stromzähler hinzugefügt.
- HTTP‑Datenupload erweitert: IP‑Adresse und kumulierte Batterie‑Lade/Entlade‑Energiemenge werden nun mit übertragen (nur VE3).
- Einspeisung von Überschussenergie ins Netz („Selbstverbrauch mit Überschusseinspeisung“) optimiert.
- Fehler bei der Verteilung/Übertragung der DOD‑Konfiguration (Depth of Discharge) behoben.
- Intervall für HTTP‑Datenupload auf 5 Minuten geändert; Fehler bei VA‑Zellspannungsdaten korrigiert.
- Unterstützung für die Konfiguration der maximalen Ausgangsleistung hinzugefügt.

<sub>Issue [#12](issues/12) · [149_control_VNSE3-0_app_0149_0528_3_101940.bin](firmwares/VNSE3-0/Control/149/149_control_VNSE3-0_app_0149_0528_3_101940.bin)</sub>

## VNSA-0 — Control v148.7 (Beta) — 2026-08-12

- Added further OpenAPI functions (see the OpenAPI documentation); fixed the ES interface returning PV data as 0 and UPS being displayed incorrectly after a manual switchover
- Added a recovery mechanism for I²C deadlocks, fixing EEPROM read errors
- Added support for French electricity meters
- Extended the HTTP upload with the IP address and the cumulative battery charge/discharge energy (VE3 only)
- Optimised surplus feed-in to the grid
- Fixed the DOD setting being sent incorrectly from the app
- Added parallel updating of several devices in Wi-Fi mode (enabled in special builds only)

<sub>Issue [#2](issues/2) · [1487_control_VNSA-0_app_1487_0511_1_155731.bin](firmwares/VNSA-0/Control/1487/1487_control_VNSA-0_app_1487_0511_1_155731.bin)</sub>

## VNSE3-0 — Control v148 — 2026-08-12

- Neue Datenbackup-Funktion hinzugefügt.
- Erkennung von Stromzählertrennung und Phasenlage weiter optimiert.
- Anzeigeproblem des MQTT-Verbindungsstatus im Ethernet-Modus behoben.
- Stabilität der MQTT-Verbindung nach Netztrennung und anschließendem Neustart verbessert.
- Problem behoben, bei dem nach einer zweiten DOD-Konfiguration keine Entladung mehr möglich war.
- Verbindung zu Drittservern optimiert; Timeout-bedingtes automatisches Löschen deaktiviert.

<sub>Issue [#20](issues/20) · [148_control_VNSE3-0_app_0148_0331_093751.bin](firmwares/VNSE3-0/Control/148/148_control_VNSE3-0_app_0148_0331_093751.bin)</sub>

## VNSD-0 — Control v147 — 2026-08-12

_Based on the existing v147:_

- Improved the connection to German electricity meters
- Improved third-party server configuration in Ethernet mode
- Fixed occasionally missing HTTP data uploads

<sub>Issue [#16](issues/16) · [147_control_VNSD-0_202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/147_control_VNSD-0_202601281721320b2053125.bin)</sub>

## HME-4 — v124 — 2026-08-12

- UDP protocol v4: fixed the UDP reset bug.

<sub>Issue [#9](issues/9) · [124_HME-4_20250915163554648799838.bin](firmwares/HME-4/124/124_HME-4_20250915163554648799838.bin)</sub>

## VNSA-0 — Micro v121.1 (Beta) — 2026-08-12

- Improved the VA off-grid port's capability to drive loads behind an RCD

<sub>Issue [#24](issues/24) · [1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin)</sub>

## VNSA-0 — Micro v119.3 (Beta) — 2026-08-12

_Use only together with BMS firmware V110.5._

- Optimised deep-discharge recovery

<sub>Issue [#3](issues/3) · [1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin)</sub>

## VNSE3-0 — Micro v119 — 2026-08-12

- Fixed forced charging not starting below 6 % SOC

<sub>Issue [#14](issues/14) · [119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin)</sub>

## VNSD-0 — BMS v118 — 2026-08-12

- OTA test

<sub>Issue [#25](issues/25) · [118_bms_VNSD-0_20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/118_bms_VNSD-0_20260119100535e43806957.bin)</sub>

## VNSD-0 — BMS v117.7 (Beta) — 2026-08-12

- OTA test
- 7

<sub>Issue [#19](issues/19) · [1177_bms_VNSD-0_20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/1177_bms_VNSD-0_20251010135647565eb2036.bin)</sub>

## VNSD-0 — Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](issues/18) · [116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin)</sub>

## VNSD-0 — Micro v115 — 2026-08-12

- Adapted to control firmware 147

<sub>Issue [#21](issues/21) · [115_micro_VNSD-0_202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/115_micro_VNSD-0_202601230921310c0e30687.bin)</sub>

## VNSE3-0 — BMS v115 — 2026-08-12

- Optimised the start-up check when SOC reads 100 % or 0 %
- Deep-discharge recovery together with the inverter
- Fixed a bug that could prevent charging and discharging after a full charge

<sub>Issue [#26](issues/26) · [115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin)</sub>

## VNSE3-0 — BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](issues/13) · [113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin)</sub>

## VNSA-0 — BMS v110.5 (Beta) — 2026-08-12

_Use only together with micro-inverter firmware V119.3 or later._

- Deep-discharge recovery of the battery via PV start, together with the inverter
- Optimised the forced-charge logic

<sub>Issue [#22](issues/22) · [1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin)</sub>

## HMG-50 — Control v156 — 2026-07-31

- Bluetooth broadcasting can now be switched on and off
- Added configuration for a third-party server
- Improved OpenAPI interface stability

<sub>[156_control_HMG-50_20251118172129117290445.bin](firmwares/HMG-50/Control/156/156_control_HMG-50_20251118172129117290445.bin)</sub>

## HMJ-2 — v110 — 2026-07-24

_No release notes._

<sub>[110_HMJ-2_20250523160631745d66082.bin](firmwares/HMJ-2/110/110_HMJ-2_20250523160631745d66082.bin)</sub>

## VNSE3-0 — BMS v112 — 2026-07-07

_Requires VNS firmware 117 and EMS firmware 147._

- The charge and discharge MOSFETs are now controlled externally

<sub>[112_bms_VNSE3-0_20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/112_bms_VNSE3-0_20260121113157833696278.bin)</sub>

## VNSE3-0 — Control v147.6 (Beta) — 2026-03-13

- Improved MQTT connection stability

<sub>[1476_control_VNSE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/1476_control_VNSE3-0_app_1476_0312_182736.bin)</sub>

## VNSE3-0 — BMS v110 — 2025-12-22

- Re-release of firmware 109

<sub>[110_bms_VNSE3-0_202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/110_bms_VNSE3-0_202512031001144fcbf8852.bin)</sub>

## HME-3 — v122 — 2025-12-01

- UDP protocol v4: fixed a UDP reset bug

<sub>[122_HME-3_2025091516373099b077494.bin](firmwares/HME-3/122/122_HME-3_2025091516373099b077494.bin)</sub>

## VNSE3-0 — Control v144 — 2025-11-26

_New features:_

- Anti-backfeed power setpoint: the power at the grid connection point can be set freely, and the device draws or feeds at that value continuously
- Support for four additional meters — Netherlands: SMR-P1, Germany: SMR-IR, France: SMR-TIC, new CT002 version: TPM2-100CT
- Configurable depth of discharge (DOD): the usable SOC range can be set to [(12–70 %) – 100 %]. In cold regions a higher lower limit is recommended, as it extends battery life
- Device Bluetooth can be switched off via the server or the app
- Third-party server connection via XID/VID, configurable in the app

<sub>[144_control_VNSE3-0_20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/144_control_VNSE3-0_20251118161530cc2d80857.bin)</sub>

## HME-3 — v116 — 2025-11-14

- BLE and MQTT now report live values for phases A, B, C and the combined total
- Added Bluetooth setup for open (passwordless) Wi-Fi networks
- Encryption now uses the new MQTT server certificate
- UDP protocol extended with energy meter readings

<sub>[116_HME-3_20250610173327b6ce85859.bin](firmwares/HME-3/116/116_HME-3_20250610173327b6ce85859.bin)</sub>

## HME-3 — v118 — 2025-10-27

- Optimised SML meter readings

<sub>[118_HME-3_2025071415581563c0d7425.bin](firmwares/HME-3/118/118_HME-3_2025071415581563c0d7425.bin)</sub>

## HMG-50 — Control v155 — 2025-10-27

- Added cumulative tracking of charge and discharge time
- The grid connection standard can now be pushed to the device

<sub>[155_control_HMG-50_202509161548003ff722863.bin](firmwares/HMG-50/Control/155/155_control_HMG-50_202509161548003ff722863.bin)</sub>

## VNSE3-0 — BMS v106 — 2025-10-27

- Fixed SOC jumps on BMS units with CORNEX cells

<sub>[106_bms_VNSE3-0_2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/106_bms_VNSE3-0_2025081814112994acd7498.bin)</sub>

## HMG-50 — BMS v216 — 2025-09-08

- Fixed SOC jumps at a low state of charge

<sub>[216_bms_HMG-50_20250902100339408038111.bin](firmwares/HMG-50/BMS/216/216_bms_HMG-50_20250902100339408038111.bin)</sub>

## HME-3 — v117 — 2025-08-25

- Optimised UDP reception and restart behaviour
- Added a Bluetooth command for updating the Quectel module
- CT3: fixed a bug in the 7E1 configuration, improved SML parsing and added SML protocol logging

<sub>[117_HME-3_20250702110345eebe62348.bin](firmwares/HME-3/117/117_HME-3_20250702110345eebe62348.bin)</sub>

## HME-4 — v120 — 2025-08-25

- Optimised UDP reception and restart behaviour
- Added a Bluetooth command for updating the Quectel module
- Raised the number of connectable slave devices to 15

<sub>[120_HME-4_202507021110400569f6547.bin](firmwares/HME-4/120/120_HME-4_202507021110400569f6547.bin)</sub>

## HMG-50 — Control v153 — 2025-08-25

- Network setup now supports open (passwordless) Wi-Fi
- Fixed various known issues

<sub>[153_control_HMG-50_202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/153_control_HMG-50_202505301136007a5b57023.bin)</sub>

## HMG-50 — BMS v215 — 2025-08-25

- Raised the full-charge hysteresis from 97 to 99 %
- Improved firmware update stability

<sub>[215_bms_HMG-50_20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/215_bms_HMG-50_20250806112046448ef9739.bin)</sub>

