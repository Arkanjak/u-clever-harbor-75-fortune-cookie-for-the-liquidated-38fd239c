// Fortune Cookie for the Liquidated Trader
// Writes one original fortune line to /output/entry.txt.
// Gate: UTF-8 text, 1-160 characters, one line, at most 20 words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will meet a tall, dark stranger: your liquidation price, already waiting at the door.";
// Classic cookie opening ("tall, dark stranger"), punchline swaps romance for the liquidation price.

const words = FORTUNE.trim().split(/\s+/).length;
if (words > 20) {
  throw new Error(`fortune is ${words} words, over the 20-word cap`);
}
if (FORTUNE.length < 1 || FORTUNE.length > 160) {
  throw new Error("fortune length outside the 1-160 character gate");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
console.log(FORTUNE);
