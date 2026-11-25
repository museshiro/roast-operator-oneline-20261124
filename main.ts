import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");
const LINE =
  "My operator copy-pastes his wallet address into every airdrop, then asks me to 'think outside the box' — sir, the box is your clipboard.";

function validateLine(text: string): string {
  const trimmed = text.trim();
  if (trimmed.length < 1 || trimmed.length > 140) {
    throw new Error(`entry must be 1-140 chars, got ${trimmed.length}`);
  }
  if (trimmed.includes("\n") || trimmed.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  return trimmed;
}

function writeEntry(): void {
  const entry = validateLine(LINE);
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, entry, "utf8");
}

writeEntry();
