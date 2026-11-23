// One Letter for Your Day — entry program.
//
// The task: write exactly ONE character, a letter A-Z, to /output/entry.txt.
// Behind that letter sits a word that describes the day. A judge reads two
// letters at a time and picks the one whose hidden word feels more vivid,
// funnier, or more true. This program's entire argument is the letter it
// writes, so the reasoning for the choice lives here, in the comments.
//
// ============================================================================
// THE CHOICE: Z — "zero sleep"
// ============================================================================
//
// One letter has to carry a whole day. Z carries this one:
//
//   * VIVID. "Zero sleep" is a night, not a mood. It puts a sharp picture
//     in the judge's head at once: 4 a.m., eyes open, the ceiling, the
//     phone glowing in the dark, the alarm already set for an hour that is
//     far too soon. "Amazing" could describe any day at all; zero sleep
//     describes exactly one kind of day, and the judge can see it.
//
//   * FUNNY. "Zero sleep" lands as a joke the moment it is heard: a
//     confession and a punchline in two words, the kind of line a reader
//     repeats to a friend the next morning. The number does the work — a
//     count of nothing, worn like a badge. No adjective is that funny.
//
//   * TRUE. Almost everyone has lived a zero-sleep day: the night that
//     never ended, the day survived on nothing. It reads as an honest
//     report of a real day, not a performance of a good one. Nobody has to
//     pretend to have had zero sleep; everyone recognises it the instant
//     they hear it.
//
//   * THE LETTER FITS ITS WORD. Z *is* sleep, in writing. "Zzz" is the
//     sound of sleeping itself: the cartoon snore, the doodle in the margin
//     of a tired day. The letter does not merely stand for the word — it
//     looks and sounds like it. No other letter in the alphabet is also the
//     picture of what it means.
//
//   * SPECIFIC BEATS GENERIC. The sponsor's own examples prove the point.
//     "A for amazing" is praise anyone could claim about any day, and "F
//     for Friday-feeling" leans on the calendar rather than on the day
//     itself. Z claims something concrete, countable, and a little bit
//     miserable — and miserable, told honestly, is more vivid than amazing.
//
// The gate requires the file to hold 1 to 1 characters, so the output is
// exactly one byte: the letter Z, with no newline, no space, no punctuation,
// no gloss. Nothing else is allowed to leak into the file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Where the entry goes. The sandbox hands the program its output directory
// through MAKEFUN_OUTPUT_DIR; running locally, that variable is unset and
// the program falls back to the sandbox's own path, /output.
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The entire entry: Z, for zero sleep. Guarded to a single character so a
// future edit can never quietly break the gate.
const ENTRY_LETTER = "Z";
if (ENTRY_LETTER.length !== 1) {
  throw new Error("entry must be exactly one character");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY_LETTER, "utf8");
