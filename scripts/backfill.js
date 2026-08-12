'use strict';

// Reprocess EVERY firmware-submission issue (open AND closed) and archive any
// version that is missing. Idempotent: already-archived versions are skipped.
//
// Usage:
//   node scripts/backfill.js                # process all issues
//   node scripts/backfill.js --no-translate # skip translation (faster/offline)
//   REPO=owner/name node scripts/backfill.js
//
// Auth: set GITHUB_TOKEN to raise the API rate limit (optional for public repos).

const { processIssue } = require('./archive');
const { loadCache, saveCache } = require('./translate');

const REPO = process.env.REPO || 'sphings79/marstek-firmware-archiv';
const noTranslate = process.argv.includes('--no-translate');
const refresh = process.argv.includes('--refresh');

async function gh(url) {
  const headers = { 'User-Agent': 'firmware-archiver', Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} for ${url}`);
  return res.json();
}

async function fetchAllIssues() {
  const all = [];
  for (let page = 1; ; page++) {
    const batch = await gh(
      `https://api.github.com/repos/${REPO}/issues?state=all&labels=firmware-submission&per_page=100&page=${page}`
    );
    const issues = batch.filter((i) => !i.pull_request);
    all.push(...issues);
    if (batch.length < 100) break;
  }
  return all;
}

async function main() {
  console.log(`Backfill for ${REPO}${noTranslate ? ' (no translation)' : ''}`);
  const issues = await fetchAllIssues();
  console.log(`Found ${issues.length} firmware-submission issues (open + closed).\n`);

  const cache = loadCache();
  const summary = { archived: 0, exists: 0, skipped: 0, error: 0 };

  // Process oldest first so version history reads naturally.
  issues.sort((a, b) => a.number - b.number);

  for (const issue of issues) {
    let res;
    try {
      res = await processIssue({ number: issue.number, state: issue.state, body: issue.body }, cache, {
        noTranslate,
        refresh,
      });
    } catch (e) {
      res = { number: issue.number, status: 'error', reason: e.message };
    }
    summary[res.status] = (summary[res.status] || 0) + 1;
    const tag = { archived: '+', refreshed: '~', exists: '=', skipped: '·', error: 'x' }[res.status] || '?';
    console.log(`  ${tag} #${res.number} ${res.label || ''} ${res.status}${res.reason ? ' — ' + res.reason : ''}`);
    if (res.status === 'archived' || res.status === 'refreshed') saveCache(cache); // persist incrementally
  }

  saveCache(cache);
  console.log('\nSummary:', JSON.stringify(summary));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
