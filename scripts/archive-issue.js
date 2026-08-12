'use strict';

// CLI used by the GitHub Action: archive ONE issue by number.
//   node scripts/archive-issue.js <issue_number>
//
// Fetches the issue via the GitHub API (GITHUB_TOKEN), archives it, persists the
// translation cache, and writes machine-readable outputs to $GITHUB_OUTPUT so the
// workflow can comment on / close the issue.

const fs = require('fs');
const { processIssue } = require('./archive');
const { loadCache, saveCache } = require('./translate');

const REPO = process.env.GITHUB_REPOSITORY || process.env.REPO || 'sphings79/marstek-firmware-archiv';
const issueNumber = process.argv[2];

if (!issueNumber) {
  console.error('Usage: node scripts/archive-issue.js <issue_number>');
  process.exit(1);
}

function setOutput(key, value) {
  const out = process.env.GITHUB_OUTPUT;
  if (out) fs.appendFileSync(out, `${key}=${String(value).replace(/\n/g, ' ')}\n`);
}

async function main() {
  const headers = { 'User-Agent': 'firmware-archiver', Accept: 'application/vnd.github+json' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = 'Bearer ' + process.env.GITHUB_TOKEN;
  const res = await fetch(`https://api.github.com/repos/${REPO}/issues/${issueNumber}`, { headers });
  if (!res.ok) throw new Error(`GitHub API ${res.status} fetching issue #${issueNumber}`);
  const issue = await res.json();

  const cache = loadCache();
  const result = await processIssue(
    { number: issue.number, state: issue.state, body: issue.body },
    cache
  );
  saveCache(cache);

  console.log(JSON.stringify(result, null, 2));
  setOutput('status', result.status);
  setOutput('label', result.label || '');
  setOutput('path', result.path || '');
  setOutput('filename', result.filename || '');
  setOutput('reason', result.reason || '');

  // Only a hard error should fail the job; skipped/exists/archived are fine.
  if (result.status === 'error') process.exit(2);
}

main().catch((e) => {
  console.error(e);
  setOutput('status', 'error');
  setOutput('reason', e.message);
  process.exit(2);
});
