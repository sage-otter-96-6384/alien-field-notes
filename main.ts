// alien-field-notes: one original line (<=200 chars), a review of planet
// Earth left by an alien tourist. Writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt), no trailing
// newline.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "★★★☆☆ Earth: gorgeous sunsets, excellent snacks, but the locals queue for coffee, argue with toasters, and charge rent for the view. Would visit again, briefly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// Fail loud if the entry ever breaks the gate: one line, 1-200
// characters, a single line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.trim() === "") {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
