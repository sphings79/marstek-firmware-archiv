'use strict';

// One-time migration: rename existing firmware-type folders to the canonical
// capitalized spelling (control -> Control, bms -> BMS, micro -> Micro, ...).
// Uses `git mv` so history is preserved. Case-only renames go via a temp name
// to work on case-insensitive filesystems (macOS).
//
// Also reports `Micro`/`micro` folders whose .bin is byte-identical to an
// existing MPPT sibling — these are duplicates from the old manual sorting and
// are only REPORTED here, never deleted, so you can decide.
//
//   node scripts/migrate-casing.js            # dry run (default) — shows plan
//   node scripts/migrate-casing.js --apply    # actually git mv

const { execSync } = require('child_process');
const {
  fs,
  path,
  FIRMWARES_DIR,
  isFlatDevice,
  normalizeFirmwareType,
  sha256,
} = require('./lib');

const apply = process.argv.includes('--apply');

function git(args) {
  return execSync('git ' + args, { cwd: path.resolve(__dirname, '..'), stdio: 'pipe' }).toString();
}

function firstBin(dir) {
  if (!fs.existsSync(dir)) return null;
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) {
        const r = walk(p);
        if (r) return r;
      } else if (e.name.toLowerCase().endsWith('.bin')) {
        return p;
      }
    }
    return null;
  };
  return walk(dir);
}

function moveDir(from, to) {
  const rel = (p) => path.relative(path.resolve(__dirname, '..'), p);
  if (from.toLowerCase() === to.toLowerCase()) {
    // case-only rename → two-step via temp
    const tmp = from + '__tmp_rename__';
    git(`mv "${rel(from)}" "${rel(tmp)}"`);
    git(`mv "${rel(tmp)}" "${rel(to)}"`);
  } else {
    git(`mv "${rel(from)}" "${rel(to)}"`);
  }
}

function main() {
  const renames = [];
  const merges = [];
  const dupes = [];

  const devices = fs
    .readdirSync(FIRMWARES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

  for (const device of devices) {
    if (isFlatDevice(device)) continue; // no type subfolder
    const deviceDir = path.join(FIRMWARES_DIR, device);
    const types = fs
      .readdirSync(deviceDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);

    for (const type of types) {
      // `micro` folders here are duplicates of MPPT (see report below) — do not
      // auto-rename them to Micro; leave them for the duplicate report to flag.
      if (type.toLowerCase() === 'micro') continue;
      const canonical = normalizeFirmwareType(type);
      const fromDir = path.join(deviceDir, type);
      const toDir = path.join(deviceDir, canonical);
      if (type !== canonical) {
        if (fs.existsSync(toDir) && toDir.toLowerCase() !== fromDir.toLowerCase()) {
          merges.push({ device, from: type, to: canonical });
        } else {
          renames.push({ device, from: type, to: canonical, fromDir, toDir });
        }
      }
    }

    // Duplicate detection: micro versions identical to an MPPT sibling.
    // (Most meaningful AFTER the backfill has created the MPPT folders.)
    const mpptDir = path.join(deviceDir, 'MPPT');
    const microName = types.find((t) => t.toLowerCase() === 'micro');
    if (microName && fs.existsSync(mpptDir)) {
      const microDir = path.join(deviceDir, microName);
      for (const ver of fs.readdirSync(microDir)) {
        const mBin = firstBin(path.join(microDir, ver));
        const pBin = firstBin(path.join(mpptDir, ver));
        if (mBin && pBin && sha256(fs.readFileSync(mBin)) === sha256(fs.readFileSync(pBin))) {
          dupes.push({ device, version: ver, micro: path.relative(FIRMWARES_DIR, mBin), mppt: path.relative(FIRMWARES_DIR, pBin) });
        }
      }
    }
  }

  console.log(`\n== Casing migration (${apply ? 'APPLY' : 'dry run'}) ==\n`);
  if (!renames.length) console.log('  No folders need renaming.');
  for (const r of renames) {
    console.log(`  ${r.device}/${r.from}  ->  ${r.device}/${r.to}`);
    if (apply) moveDir(r.fromDir, r.toDir);
  }

  if (merges.length) {
    console.log('\n  ! Manual merges needed (both spellings exist):');
    for (const m of merges) console.log(`    ${m.device}: ${m.from} + ${m.to}`);
  }

  if (dupes.length) {
    console.log('\n  ! Micro folders that DUPLICATE an MPPT version (identical .bin):');
    for (const d of dupes) console.log(`    ${d.device} v${d.version}:  ${d.micro}  ==  ${d.mppt}`);
    console.log('    -> These "micro" copies are leftovers of the MPPT firmware.');
    console.log('       Review and delete the Micro/ copies if you agree (not done automatically).');
  }

  console.log(apply ? '\nDone. Review `git status` before committing.' : '\nDry run only. Re-run with --apply to perform the git mv.');
}

main();
