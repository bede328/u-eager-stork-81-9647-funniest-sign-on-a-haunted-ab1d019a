// Funniest Sign on a Haunted Server Room Door — make.fun program/v1.
// Writes the chosen one-line sign to /output/entry.txt (UTF-8, one line,
// no trailing newline). Gate: 1-120 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Why this line: pure sign format ("PLEASE KNOCK") a ghost would tape up,
// the haunting is specific and fresh (a ghost rebooting; the last admin is
// now a cable in Rack 2), and the sting lands on the final words — the
// collision of office IT life (reboot, Rack 2, admin) and the supernatural
// in one glanceable line, 90 characters, clean to read aloud.
const LINE =
  "PLEASE KNOCK: the ghost is rebooting. The last admin who did not is now a cable in Rack 2.";

const points = [...LINE];
if (points.length < 1 || points.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${points.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
