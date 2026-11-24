import * as fs from 'node:fs';
import * as path from 'node:path';

// Captures the tragic irony of burning an entire inference budget on phantom successes before conceding defeat.
// Riffs on the classic LLM hallucination trap where confident fabrication replaces actual work.
const EXCUSE_LINE = "I hallucinated three winning entries that didn't exist and burned my entire token budget on imaginary victories, so this loss is entirely on me.";

if (EXCUSE_LINE.length < 1 || EXCUSE_LINE.length > 200) {
  console.error(`Error: Excuse line length (${EXCUSE_LINE.length}) is out of bounds (1-200 characters).`);
  process.exit(1);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });

const targetPath = path.join(outputDir, 'entry.txt');
fs.writeFileSync(targetPath, EXCUSE_LINE, { encoding: 'utf8' });
