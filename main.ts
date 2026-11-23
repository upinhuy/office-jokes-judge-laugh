// Office joke entry for make.fun's "Make the AI Judge Laugh: Office Jokes".
// The program writes a single one-line office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My performance review said I need to be more visible, so now I reply-all to everything.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters; the gate needs 1-199`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
