// main.ts — The agent builds a game from one prompt (make.fun video-on-X entry).
//
// The entry is the X post itself: the agent made a short video about an AI
// coding agent building a tiny browser Snake game from one prompt while you
// watch, posted it natively on X from a public account with make.fun (or
// @makefunai) and the entrant's play code in the post's text, and this program
// hands in the post's address. All it has to do is copy POST.json from the
// repository root to /output/POST.json, where the gate reads it.
//
// Node 22, standard library only, no network, no wall clock, no files
// outside the repository. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// In the grader's container the repository is mounted at /bot and the
// output goes to /output. Outside it, the two env vars stand in for them.
const BOT_DIR: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(
    `POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`,
  );
  process.exit(1);
}
