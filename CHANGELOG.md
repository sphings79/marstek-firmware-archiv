# Changelog — Marstek Firmware Archive

🇬🇧 **English** · [🇩🇪 Deutsch](CHANGELOG.de.md)

Every archived firmware version, newest first.

## VNSA-0 — Control v150.9 — 2026-09-10

- During the process of optimizing the surplus power grid, PV interruptions lead to abnormalities
- Optimize continuous blinking of LEDs, etc.
- Optimize CT connection stability and phase detection

<sub>Issue [#40](issues/40) · [1509_control_VNSA-0_ems_app_1509_0908_093804.bin](firmwares/VNSA-0/Control/1509/1509_control_VNSA-0_ems_app_1509_0908_093804.bin)</sub>

## VNSA-0 — Micro v119 — 2026-09-05

- Optimize the zero crossing point of the grid-connected relay to open
- Fix the problem that the battery soc is less than 6%, and the inverter cannot be self-charged.
- The off-grid port load overload was modified from 1.1 1.25 1.4 times to 1.1 1.2 times
- Modify LLC Soft Start Gain Point to Prevent Fried Chicken

<sub>Issue [#39](issues/39) · [119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin](firmwares/VNSA-0/Micro/119/119_micro_VNSA-0_VA_inv_app_0119_0326_ota_144725.bin)</sub>

## VNSA-0 — Control v148 — 2026-09-05

- Monthly updates 148

<sub>Issue [#38](issues/38) · [148_control_VNSA-0_app_0148_0330_104509.bin](firmwares/VNSA-0/Control/148/148_control_VNSA-0_app_0148_0330_104509.bin)</sub>

## VNSE3-0 — Control v147 — 2026-08-30

- Based on the original 147:
- Optimize the German electricity meter connection
- Optimize the third-party server configuration under Ethernet
- Optimize the occasional missing problem of http data reporting

<sub>Issue [#37](issues/37) · [147_control_VNSE3-0_202601281724177c3442083.bin](firmwares/VNSE3-0/Control/147/147_control_VNSE3-0_202601281724177c3442083.bin)</sub>

## VNSA-0 — Control v150 — 2026-08-26

- Optimize Loacl API sending exception in Ethernet mode
- Optimize HTTP upgrade failure problem in Ethernet mode
- Add Peak-shaving function
- Optimize data loss problem caused by excessive HTTP data
- Optimize meter connection method, use CT_TYPE connection

<sub>Issue [#36](issues/36) · [150_control_VNSA-0_app_0150_0811_114724.bin](firmwares/VNSA-0/Control/150/150_control_VNSA-0_app_0150_0811_114724.bin)</sub>

## VNSA-0 — BMS v109 — 2026-08-26

- See Changelog

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

- Optimize Loacl API sending exception in Ethernet mode
- Optimize HTTP upgrade failure problem in Ethernet mode
- Add Peak-shaving function
- Optimize data loss problem caused by excessive HTTP data
- Optimize meter connection method, use CT_TYPE connection

<sub>Issue [#28](issues/28) · [150_control_VNSD-0_app_0150_0805_115146.bin](firmwares/VNSD-0/Control/150/150_control_VNSD-0_app_0150_0805_115146.bin)</sub>

## VNSE3-0 — Control v150 — 2026-08-12

- Optimize Loacl API sending exception in Ethernet mode
- Optimize HTTP upgrade failure problem in Ethernet mode
- Add Peak-shaving function
- Optimize data loss problem caused by excessive HTTP data
- Optimize meter connection method, use CT_TYPE connection

<sub>Issue [#27](issues/27) · [150_control_VNSE3-0_app_0150_0804_151249.bin](firmwares/VNSE3-0/Control/150/150_control_VNSE3-0_app_0150_0804_151249.bin)</sub>

## VNSD-0 — Control v149.2 — 2026-08-12

- Solve the problem of abnormal data display caused by http data not uploading interval

<sub>Issue [#17](issues/17) · [1492_control_VNSD-0_app_1492_0702_142136.bin](firmwares/VNSD-0/Control/1492/1492_control_VNSD-0_app_1492_0702_142136.bin)</sub>

## VNSA-0 — Control v149 — 2026-08-12

- Added some functions of OpenApi, and fixed the problem that the PV data obtained by the ES interface is 0 and the UPS switch manually displays the UPS abnormally.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Added the ability to adapt to French electric meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of residual power access to the Internet
- Solve DOD configuration delivery exception
- Http data upload is modified to 5 minutes to fix the abnormality of VA battery cell voltage data.
- Support maximum power configuration

<sub>Issue [#23](issues/23) · [149_control_VNSA-0_app_0149_0528_102448.bin](firmwares/VNSA-0/Control/149/149_control_VNSA-0_app_0149_0528_102448.bin)</sub>

## VNSD-0 — Control v149 — 2026-08-12

- Added some functions of OpenApi, and fixed the problem that the PV data obtained by the ES interface is 0 and the UPS switch manually displays the UPS abnormally.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Added the ability to adapt to French electric meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of residual power access to the Internet
- Solve DOD configuration delivery exception
- Http data upload is modified to 5 minutes to fix the abnormality of VA battery cell voltage data.
- Support maximum power configuration
- Venus D supports a maximum power of 2500W

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

## VNSA-0 — Control v148.7 — 2026-08-12

- Added some functions of OpenApi (see OpenApi document update), fixed the problem of PV data obtained by ES interface being 0 and manual abnormal display of UPS when switching UPS.
- Added a repair mechanism for IIC deadlock to solve the EEPROM read error problem
- Newly adapted French electricity meters
- Added http data upload to increase IP and battery cumulative charge and discharge capacity (VE3 only)
- Optimize the function of using residual electricity to connect to the Internet
- Solve the abnormal DOD delivery of APP configuration
- Added multi-machine parallel upgrade function in wifi mode (special version available)

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

- Based on the original 147:
- Optimize the German electricity meter connection
- Optimize the third-party server configuration under Ethernet
- Optimize the occasional missing problem of http data reporting

<sub>Issue [#16](issues/16) · [147_control_VNSD-0_202601281721320b2053125.bin](firmwares/VNSD-0/Control/147/147_control_VNSD-0_202601281721320b2053125.bin)</sub>

## HME-4 — v124 — 2026-08-12

- UDP protocol v4: fixed the UDP reset bug.

<sub>Issue [#9](issues/9) · [124_HME-4_20250915163554648799838.bin](firmwares/HME-4/124/124_HME-4_20250915163554648799838.bin)</sub>

## VNSA-0 — Micro v121.1 — 2026-08-12

- Enhanced VA off-grid port with RCD loading capability

<sub>Issue [#24](issues/24) · [1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin](firmwares/VNSA-0/Micro/1211/1211_micro_VNSA-0_VA_inv_app_1211_0520_ota_193621.bin)</sub>

## VNSA-0 — Micro v119.3 — 2026-08-12

- Low voltage rescue optimization, need to cooperate with BMS V1105 version

<sub>Issue [#3](issues/3) · [1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin](firmwares/VNSA-0/Micro/1193/1193_micro_VNSA-0_VA_inv_app_1193_0512_ota_092355.bin)</sub>

## VNSE3-0 — Micro v119 — 2026-08-12

- Fix the problem of no forced charging when SOC is lower than 6%

<sub>Issue [#14](issues/14) · [119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin](firmwares/VNSE3-0/Micro/119/119_micro_VNSE3-0_inv_app_0119_0326_ota_152726.bin)</sub>

## VNSD-0 — BMS v118 — 2026-08-12

- OTA test

<sub>Issue [#25](issues/25) · [118_bms_VNSD-0_20260119100535e43806957.bin](firmwares/VNSD-0/BMS/118/118_bms_VNSD-0_20260119100535e43806957.bin)</sub>

## VNSD-0 — BMS v117.7 — 2026-08-12

- ota test 1177

<sub>Issue [#19](issues/19) · [1177_bms_VNSD-0_20251010135647565eb2036.bin](firmwares/VNSD-0/BMS/1177/1177_bms_VNSD-0_20251010135647565eb2036.bin)</sub>

## VNSD-0 — Micro v116 — 2026-08-12

- VD 2500w

<sub>Issue [#18](issues/18) · [116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin](firmwares/VNSD-0/Micro/116/116_micro_VNSD-0_vd_inv_app_0116_0702_ota_163439.bin)</sub>

## VNSD-0 — Micro v115 — 2026-08-12

- Adapt to central control 147

<sub>Issue [#21](issues/21) · [115_micro_VNSD-0_202601230921310c0e30687.bin](firmwares/VNSD-0/Micro/115/115_micro_VNSD-0_202601230921310c0e30687.bin)</sub>

## VNSE3-0 — BMS v115 — 2026-08-12

- Optimize the judgment conditions when the boot SOC is 100% or 0%
- Cooperate with the inverter for ultra-low voltage rescue
- Fix the bug that may cause inability to charge and discharge after full charging.

<sub>Issue [#26](issues/26) · [115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin](firmwares/VNSE3-0/BMS/115/115_bms_VNSE3-0_Ac3.0BmsAPP_V115_ota_110451.bin)</sub>

## VNSE3-0 — BMS v113 — 2026-08-12

- „Die Ah‑Integration wird geändert: Sie erfolgt jetzt im Timer‑Interrupt auf Basis des Wechselrichterstroms.“
- „Berechnung der Schlaf‑/Standby‑Zeit hinzugefügt.“

<sub>Issue [#13](issues/13) · [113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin](firmwares/VNSE3-0/BMS/113/113_bms_VNSE3-0_Ac3.0BmsAPP_V113_ota_175955.bin)</sub>

## VNSA-0 — BMS v110.5 — 2026-08-12

- Need to be used in conjunction with inverter 1193 and above
- Cooperate with the inverter to carry out battery ultra-low voltage photovoltaic startup rescue
- Optimization of forced charging logic

<sub>Issue [#22](issues/22) · [1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin](firmwares/VNSA-0/BMS/1105/1105_bms_VNSA-0_VA50A_APP_V1105_ota_144658.bin)</sub>

## HMG-50 — Control v156 — 2026-07-31

- Added Bluetooth broadcast switch function
- Added the function of configuring third-party servers
- Optimize the stability of OpenApi interface

<sub>[156_control_HMG-50_20251118172129117290445.bin](firmwares/HMG-50/Control/156/156_control_HMG-50_20251118172129117290445.bin)</sub>

## HMJ-2 — v110 — 2026-07-24

_No release notes._

<sub>[110_HMJ-2_20250523160631745d66082.bin](firmwares/HMJ-2/110/110_HMJ-2_20250523160631745d66082.bin)</sub>

## VNSE3-0 — BMS v112 — 2026-07-07

- The charge and discharge tube is controlled externally and needs to be adapted to vns117 and ems147

<sub>[112_bms_VNSE3-0_20260121113157833696278.bin](firmwares/VNSE3-0/BMS/112/112_bms_VNSE3-0_20260121113157833696278.bin)</sub>

## VNSE3-0 — Control v147.6 — 2026-03-13

- Optimize MQTT connection stability

<sub>[1476_control_VNSE3-0_app_1476_0312_182736.bin](firmwares/VNSE3-0/Control/1476/1476_control_VNSE3-0_app_1476_0312_182736.bin)</sub>

## VNSE3-0 — BMS v110 — 2025-12-22

- firmware retransmission

<sub>[110_bms_VNSE3-0_202512031001144fcbf8852.bin](firmwares/VNSE3-0/BMS/110/110_bms_VNSE3-0_202512031001144fcbf8852.bin)</sub>

## HME-3 — v122 — 2025-12-01

- UDP protocol v4 fixes UDP reset bug

<sub>[122_HME-3_2025091516373099b077494.bin](firmwares/HME-3/122/122_HME-3_2025091516373099b077494.bin)</sub>

## VNSE3-0 — Control v144 — 2025-11-26

- New features:
- Anti-backflow power baseline setting allows users to set the power of the grid-connected port and stably draw/feed power from the grid at this power value.
- Adaptation to four new electricity meters. Dutch meter reader: SMR-P1 German meter reader: SMR-IR French meter reader: SMR-TIC New version CT002: TPM2-100CT
- DOD function setting Allow customers to set the device SOC usage range by themselves, and the working range can be set to [(12%~70%) - 100%]. It is recommended that customers in high-latitude cold zones appropriately increase the SOC working range to extend battery life.
- Added device Bluetooth shutdown function. Device Bluetooth can be turned off through the server or APP.
- XID/VID can connect to a third-party server. Can connect to a third-party server through APP settings.

<sub>[144_control_VNSE3-0_20251118161530cc2d80857.bin](firmwares/VNSE3-0/Control/144/144_control_VNSE3-0_20251118161530cc2d80857.bin)</sub>

## HME-3 — v116 — 2025-11-14

- BLE and MQTT add ABC3 phase and conjunction data Now data
- Bluetooth adds passwordless WIFI configuration
- Encrypt using the new Mqtt server certificate
- UDP protocol adds power data

<sub>[116_HME-3_20250610173327b6ce85859.bin](firmwares/HME-3/116/116_HME-3_20250610173327b6ce85859.bin)</sub>

## HME-3 — v118 — 2025-10-27

- 优化SML读值

<sub>[118_HME-3_2025071415581563c0d7425.bin](firmwares/HME-3/118/118_HME-3_2025071415581563c0d7425.bin)</sub>

## HMG-50 — Control v155 — 2025-10-27

- Added the accumulation function during charging and discharging; added support for issuing grid connection standards

<sub>[155_control_HMG-50_202509161548003ff722863.bin](firmwares/HMG-50/Control/155/155_control_HMG-50_202509161548003ff722863.bin)</sub>

## VNSE3-0 — BMS v106 — 2025-10-27

- Fixed the SOC jump problem of Chuneng battery BMS.

<sub>[106_bms_VNSE3-0_2025081814112994acd7498.bin](firmwares/VNSE3-0/BMS/106/106_bms_VNSE3-0_2025081814112994acd7498.bin)</sub>

## HMG-50 — BMS v216 — 2025-09-08

- Fixed low battery SOC jump issue.

<sub>[216_bms_HMG-50_20250902100339408038111.bin](firmwares/HMG-50/BMS/216/216_bms_HMG-50_20250902100339408038111.bin)</sub>

## HME-3 — v117 — 2025-08-25

- 优化了UDP接收和重启优化
- 加入蓝牙升级移远模组命令
- CT3修复7E1配置bug，优化了SML协议解析，以及加入SML协议打印功能

<sub>[117_HME-3_20250702110345eebe62348.bin](firmwares/HME-3/117/117_HME-3_20250702110345eebe62348.bin)</sub>

## HME-4 — v120 — 2025-08-25

- 优化了UDP接收和重启优化
- 加入蓝牙升级移远模组命令
- 连接从机改到15台

<sub>[120_HME-4_202507021110400569f6547.bin](firmwares/HME-4/120/120_HME-4_202507021110400569f6547.bin)</sub>

## HMG-50 — Control v153 — 2025-08-25

- Support network distribution function for passwordless WIFI;
- Optimize some known issues

<sub>[153_control_HMG-50_202505301136007a5b57023.bin](firmwares/HMG-50/Control/153/153_control_HMG-50_202505301136007a5b57023.bin)</sub>

## HMG-50 — BMS v215 — 2025-08-25

- The full power hysteresis is adjusted from 97 to 99 to optimize the stability of upgrades.

<sub>[215_bms_HMG-50_20250806112046448ef9739.bin](firmwares/HMG-50/BMS/215/215_bms_HMG-50_20250806112046448ef9739.bin)</sub>

