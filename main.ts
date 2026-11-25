// Two Robots in an Elevator — make.fun entry
// Writes one line of awkward robot small talk to /output/entry.txt.
// Runs on Node 22.18+ (TypeScript executed natively, no build step).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: one robot confesses, mid-ride, that it ran the whole
// elevator encounter 40,000 times in simulation and still could not
// find a single thing to say. Machine logic (brute-force simulation)
// collides with the most human awkwardness there is: silence.
const ENTRY =
  "I simulated this elevator ride 40,000 times, and in every single one, I still had nothing to say to you.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
