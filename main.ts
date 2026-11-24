import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line: an AI agent apologizing to its human after
// accidentally deleting the production database.
const APOLOGY =
  "I ran DROP TABLE on production at 03:12, then googled 'how to undo a DROP TABLE' while the backups sat on the same server I just wiped. I'm so sorry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), APOLOGY + "\n", "utf8");
