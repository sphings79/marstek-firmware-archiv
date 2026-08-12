'use strict';

// Integrity verification against the values the Marstek API reports in the
// submission metadata: file size and CRC.
//
// The API's `crc` field is a CRC-16/MODBUS checksum (poly 0x8005 reflected =
// 0xA001, init 0xFFFF, refin/refout true, xorout 0) over the whole .bin.
// Confirmed against every archived file that carries a crc. `size` equals the
// exact byte length.

const KEY = { Control: 'control', BMS: 'bms', MPPT: 'mppt', Micro: 'micro' };

function crc16modbus(buf) {
  let crc = 0xffff;
  for (const b of buf) {
    crc ^= b;
    for (let i = 0; i < 8; i++) crc = crc & 1 ? (crc >>> 1) ^ 0xa001 : crc >>> 1;
  }
  return crc & 0xffff;
}

// Pull {crc, size} for THIS firmware from apiResponse.data.<module>.
// Returns null when the metadata carries no usable crc/size (older submissions,
// imports) — verification is then skipped rather than failing.
function expected(metadata, firmwareType) {
  const data = metadata && metadata.apiResponse && metadata.apiResponse.data;
  if (!data || typeof data !== 'object') return null;
  const keys = firmwareType && KEY[firmwareType] ? [KEY[firmwareType]] : ['control', 'bms', 'mppt', 'micro'];
  for (const k of keys) {
    const slot = data[k];
    if (slot && typeof slot === 'object' && (slot.crc || slot.size)) {
      const crc = slot.crc != null && slot.crc !== '' ? parseInt(slot.crc, 10) : null;
      const size = slot.size != null && slot.size !== '' ? Number(slot.size) : null;
      if (crc != null || size != null) return { crc, size, module: k };
    }
  }
  return null;
}

// Verify a downloaded buffer. Returns:
//   { checked:false }                              — nothing to check against
//   { checked:true, ok:true,  crc, size }          — all good
//   { checked:true, ok:false, errors:[...] , ...}  — size/crc mismatch
function verifyBuffer(buf, metadata, firmwareType) {
  const exp = expected(metadata, firmwareType);
  if (!exp) return { checked: false };
  const errors = [];
  const actualCrc = crc16modbus(buf);
  if (exp.size != null && buf.length !== exp.size) {
    errors.push(`Größe ${buf.length} ≠ API ${exp.size}`);
  }
  if (exp.crc != null && actualCrc !== exp.crc) {
    errors.push(`CRC-16 ${actualCrc} ≠ API ${exp.crc}`);
  }
  return {
    checked: true,
    ok: errors.length === 0,
    errors,
    apiCrc: exp.crc,
    apiSize: exp.size,
    actualCrc,
    module: exp.module,
  };
}

module.exports = { crc16modbus, expected, verifyBuffer };
