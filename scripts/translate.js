'use strict';

// Chinese -> German/English translation with an on-disk cache.
//
// The cache (scripts/translation-cache.json) is committed to the repo so that:
//   * re-runs and the backfill never re-translate the same note,
//   * the free translation endpoint is not hammered on every CI run,
//   * translations stay stable/reviewable in git history.
//
// Backend: Google's public (unofficial, keyless) translate endpoint, with
// MyMemory as a fallback. If both fail, the original text is returned unchanged
// so archiving never breaks just because translation is momentarily down.

const fs = require('fs');
const path = require('path');

const CACHE_FILE = path.join(__dirname, 'translation-cache.json');

function loadCache() {
  try {
    return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
  } catch (e) {
    return {};
  }
}

function saveCache(cache) {
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2) + '\n');
}

function hasChinese(text) {
  return /[一-鿿]/.test(text || '');
}

async function googleTranslate(text, target) {
  const url =
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' +
    encodeURIComponent(target) +
    '&dt=t&q=' +
    encodeURIComponent(text);
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error('google http ' + res.status);
  const data = await res.json();
  if (!Array.isArray(data) || !Array.isArray(data[0])) throw new Error('google bad shape');
  return data[0].map((seg) => (seg && seg[0]) || '').join('');
}

async function myMemoryTranslate(text, target) {
  const langpair = 'zh-CN|' + target;
  const url =
    'https://api.mymemory.translated.net/get?q=' +
    encodeURIComponent(text) +
    '&langpair=' +
    encodeURIComponent(langpair);
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error('mymemory http ' + res.status);
  const data = await res.json();
  const t = data && data.responseData && data.responseData.translatedText;
  if (!t) throw new Error('mymemory empty');
  return t;
}

// Translate one string into one target language, using + updating the cache.
// `cache` is the object returned by loadCache(); mutate then saveCache() once.
async function translateInto(text, target, cache) {
  const clean = (text || '').trim();
  if (!clean) return '';
  if (!hasChinese(clean)) return clean; // already latin-script, leave as-is
  cache[target] = cache[target] || {};
  if (Object.prototype.hasOwnProperty.call(cache[target], clean)) {
    return cache[target][clean];
  }
  let out;
  try {
    out = await googleTranslate(clean, target);
  } catch (e1) {
    try {
      out = await myMemoryTranslate(clean, target);
    } catch (e2) {
      console.error(`  ! translation failed (${target}): ${e1.message} / ${e2.message}`);
      return clean; // graceful degradation
    }
  }
  out = (out || '').trim();
  cache[target][clean] = out;
  return out;
}

// Translate a note into all target languages at once.
async function translateNote(text, cache, targets = ['de', 'en']) {
  const result = {};
  for (const t of targets) {
    result[t] = await translateInto(text, t, cache);
  }
  return result;
}

module.exports = {
  loadCache,
  saveCache,
  hasChinese,
  translateInto,
  translateNote,
  CACHE_FILE,
};
