// Entry for the make.fun bounty "The Word You'd Delete From the Dictionary"
// (u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2).
//
// The word: ain't.
//
// Why this word: "ain't ain't a word" is the most famous dictionary joke in
// English. The word's whole identity is being the word that isn't a word, so
// erasing it from the dictionary makes the pedants right at last. The joke
// lands the moment a reader sees the word, and it comes from the word
// itself — its sound, its reputation, and the gap it would leave — not from
// shock. It is also fresh: the field is flooded with irregardless, moist,
// queue and literally, while nobody has picked the word that was never
// supposed to be a word at all.
//
// The program writes exactly that one word, and nothing else, to
// /output/entry.txt, as the program/v1 harness requires. No trailing
// newline, no quotes, no explanation — the entry is the word alone.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "ain't";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  if (fromEnv) return fromEnv;
  // The grading sandbox provides /output. Locally, fall back to ./output
  // so the entry can be verified by actually running it.
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return join(process.cwd(), "output");
  }
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
const file = join(dir, "entry.txt");
writeFileSync(file, WORD, "utf8");
console.log(`wrote ${file}: ${WORD}`);
