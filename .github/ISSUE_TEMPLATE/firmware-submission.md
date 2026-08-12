---
name: Firmware Submission
about: Neue Firmware-Version zum Archiv hinzufügen
title: "[Firmware Submission] <Gerät> <Typ> v<Version>"
labels: ["firmware-submission"]
---

## Firmware Submission Request

**Device Type:** <z.B. VNSD-0>

**Firmware Type:** <Control | BMS | MPPT | Micro — bei HME-3/HME-4/HMJ-2 leer lassen>
**Version:** <z.B. 150>

### Firmware Metadata
```json
{
  "deviceType": "VNSD-0",
  "firmwareType": "Control",
  "version": 150,
  "url": "https://.../firmware.bin",
  "remark": "Release Notes (Original, z.B. Chinesisch)"
}
```
