#!/usr/bin/env node
/**
 * Validates .github/ISSUE_TEMPLATE/*.yml against the parts of GitHub's issue-form
 * schema that silently break the "New issue" page.
 *
 * Requires js-yaml (not vendored, since this is the only place it is needed):
 *   npm install --no-save js-yaml@4
 *   node tools/validate-forms.mjs
 */

import { readFileSync, readdirSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path from "node:path";

const require = createRequire(import.meta.url);
// js-yaml from node_modules (CI), or from an explicit path via JS_YAML
// (useful where npm is not available).
let yaml;
for (const candidate of [process.env.JS_YAML, "js-yaml"].filter(Boolean)) {
  try {
    yaml = require(candidate);
    break;
  } catch {
    /* try the next one */
  }
}
if (!yaml) {
  console.error(
    "js-yaml not found — run: npm install --no-save js-yaml@4\n" +
      "or point JS_YAML at a copy of js-yaml.min.js"
  );
  process.exit(2);
}

const dir = fileURLToPath(new URL("../.github/ISSUE_TEMPLATE/", import.meta.url));
const files = readdirSync(dir).filter((f) => f.endsWith(".yml")).sort();

const ALLOWED = new Set(["markdown", "input", "textarea", "dropdown", "checkboxes"]);
const MUST_BE_REQUIRED = ["source"]; // the project's rule: no source, no issue

let failed = false;

for (const f of files) {
  let doc;
  try {
    doc = yaml.load(readFileSync(path.join(dir, f), "utf8"));
  } catch (e) {
    console.log(`${f}: YAML PARSE ERROR\n  ${e.message.split("\n")[0]}`);
    failed = true;
    continue;
  }

  const problems = [];
  const optional = [];
  const ids = new Set();

  if (!doc || typeof doc !== "object") {
    console.log(`${f}: document is not a mapping`);
    failed = true;
    continue;
  }
  for (const k of ["name", "description", "body"]) if (!doc[k]) problems.push(`missing "${k}"`);
  if (!Array.isArray(doc.body)) problems.push('"body" is not a list');

  for (const item of doc.body || []) {
    const t = item.type;
    if (!ALLOWED.has(t)) {
      problems.push(`unknown type "${t}"`);
      continue;
    }
    if (t === "markdown") {
      if (!item.attributes?.value) problems.push("markdown block without value");
      continue;
    }
    if (!item.id) problems.push(`${t} without id`);
    else if (ids.has(item.id)) problems.push(`duplicate id "${item.id}"`);
    else ids.add(item.id);

    if (!item.attributes?.label) problems.push(`${item.id}: no label`);

    const required = item.validations?.required === true;
    const hasValidations = item.validations && typeof item.validations === "object";
    if (hasValidations && typeof item.validations.required !== "boolean") {
      problems.push(`${item.id}: validations.required must be a boolean`);
    }
    if (!required && t !== "checkboxes") optional.push(item.id);
    if (MUST_BE_REQUIRED.includes(item.id) && !required) {
      problems.push(`${item.id}: must be required on this project`);
    }

    if (t === "dropdown") {
      const opts = item.attributes?.options || [];
      if (opts.length < 2) problems.push(`${item.id}: dropdown needs at least 2 options`);
    }
    if (t === "checkboxes") {
      const opts = item.attributes?.options || [];
      if (!opts.length) problems.push(`${item.id}: no checkbox options`);
      for (const o of opts) if (!o.label) problems.push(`${item.id}: option without label`);
    }
  }

  console.log(`${f}`);
  console.log(`  name     : ${doc.name}`);
  console.log(`  fields   : ${[...ids].join(", ")}`);
  console.log(`  optional : ${optional.length ? optional.join(", ") : "none"}`);
  console.log(`  result   : ${problems.length ? "PROBLEMS — " + problems.join("; ") : "valid"}`);
  if (problems.length) failed = true;
}

process.exit(failed ? 1 : 0);
