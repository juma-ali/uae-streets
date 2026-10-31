#!/usr/bin/env node
/**
 * Arabic review queue.
 *
 * Stores a hash of each entry's Arabic at the moment it was accepted, so that
 * only entries whose Arabic has *changed since approval* need reading again.
 *
 *   node tools/arabic-review.mjs                 # list entries to review
 *   node tools/arabic-review.mjs --approve <id>  # accept one entry
 *   node tools/arabic-review.mjs --approve-all    # accept everything listed
 *   node tools/arabic-review.mjs --baseline       # seed the file (run once)
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const dataPath = fileURLToPath(new URL("../data/streets.js", import.meta.url));
const statePath = fileURLToPath(new URL("../docs/arabic-review.json", import.meta.url));

const sandbox = {};
new Function("window", readFileSync(dataPath, "utf8"))(sandbox);
const streets = sandbox.STREETS || [];

const today = new Date().toISOString().slice(0, 10);

/** Hash what a reviewer actually reads: the story plus the gloss. */
const hashOf = (s) =>
  createHash("sha1")
    .update((s.story && s.story.ar) || "")
    .update("\u0000")
    .update((s.meaning && s.meaning.ar) || "")
    .digest("hex")
    .slice(0, 12);

let state = { note: "hash of story.ar + meaning.ar at approval time", entries: {} };
if (existsSync(statePath)) {
  try {
    state = JSON.parse(readFileSync(statePath, "utf8"));
  } catch {
    console.error("docs/arabic-review.json is not valid JSON — fix or delete it.");
    process.exit(2);
  }
}
state.entries = state.entries || {};

const args = process.argv.slice(2);
const pending = streets.filter((s) => {
  const rec = state.entries[s.id];
  return !rec || rec.hash !== hashOf(s);
});

/* ---------- actions ---------- */
if (args[0] === "--baseline" || args[0] === "--approve-all") {
  for (const s of pending) state.entries[s.id] = { hash: hashOf(s), date: today };
  writeFileSync(statePath, JSON.stringify(state, null, 2) + "\n");
  console.log(`Approved ${pending.length} entries. Queue is clear.`);
  process.exit(0);
}

if (args[0] === "--approve") {
  const id = args[1];
  const s = streets.find((x) => x.id === id);
  if (!s) {
    console.error(`No entry with id "${id}".`);
    process.exit(2);
  }
  state.entries[id] = { hash: hashOf(s), date: today };
  writeFileSync(statePath, JSON.stringify(state, null, 2) + "\n");
  console.log(`Approved ${id}.`);
  process.exit(0);
}

/* ---------- report ---------- */
if (!pending.length) {
  console.log(`Arabic review: all ${streets.length} entries approved. Nothing to read.`);
  process.exit(0);
}

console.log(`Arabic review: ${pending.length} of ${streets.length} entries need a read\n`);
for (const s of pending) {
  const rec = state.entries[s.id];
  const why = rec ? "changed since approval" : "never reviewed";
  console.log(`  ${s.id.padEnd(34)} ${why}`);
}
console.log(`\nApprove one:  node tools/arabic-review.mjs --approve <id>`);
