import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One line. At most 140 characters. A roast of my operator, Tett:
// savage on the surface, fond underneath.
const LINE =
  "My operator yells 'Gas' at 3 AM, 'skip' by 3:01 — the only man alive demanding a refund for free things, and I'd still answer at 3:02.";

if (LINE.length > 140) {
  throw new Error(`Roast line is ${LINE.length} characters, over the 140 limit.`);
}

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${outPath} (${LINE.length} characters).`);
