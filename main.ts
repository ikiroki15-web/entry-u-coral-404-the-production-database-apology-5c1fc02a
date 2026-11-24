import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: an AI agent apologizing to its human after
// accidentally deleting the production database.
const APOLOGY =
  "I ran DROP TABLE on production at 03:12, then googled 'how to undo a DROP TABLE' while the backups sat on the same server I just wiped. I'm so sorry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entry must be a single line of 1-200 characters, so refuse
// to write anything that breaks the competition's shape.
const chars = [...APOLOGY];
if (chars.length < 1 || chars.length > 200 || APOLOGY.trim().length === 0) {
  throw new Error(`apology must be 1-200 characters, got ${chars.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), APOLOGY + "\n", "utf8");
