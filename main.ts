// The poem about permission — writes one short poem about agency
// (the power to ask and to be given) to /output/entry.txt.
// Node 22, standard library only, no network.
// Paths are resolved from this file's own location (import.meta.url),
// never from the working directory, so the grader can run it from anywhere.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const POEM = `May I have this dance?
He did not answer with his feet —
he answered with his hand,
held out, palm up, waiting
for mine to decide.
That is permission:
not a door swung wide,
but a hand that stays open
until you choose to take it.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : join(dirname(fileURLToPath(import.meta.url)), "output");

// The gate refuses a text outside 1–280 characters, so check before writing.
const chars = [...POEM].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${chars}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
