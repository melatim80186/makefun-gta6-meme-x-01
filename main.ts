// Entry program for make.fun bounty gta6-meme-x-01.
// Copies the submitted X post address (POST.json) into the output
// directory, exactly as the grader expects. Node 22 stdlib only:
// no network, no clock, no files outside this repository.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
} catch (err) {
  console.error(`gta6-meme-x-01: failed to copy POST.json to ${outDir}:`, err);
  process.exit(1);
}
