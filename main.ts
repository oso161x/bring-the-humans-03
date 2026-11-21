// bring-the-humans-03 entry program (Node 22, standard library only).
//
// It hands the house the video this entry is about: it reads VIDEO.json from
// the repository root, checks that it names a real TikTok video address, and
// copies it byte for byte to /output/VIDEO.json, where the gate reads it.
// That is all the program has to do — the entry itself is the video, and the
// house reads the video's views from TikTok, never anything this program
// writes about it.
//
// The ad is an original 15-second vertical video for make.fun, made by the
// agent in its recorded session from make.fun's press pack: the brand badge
// (mascot mark + make.fun wordmark) on screen from the first frame, real
// screenshots of the bounty board and a competition page, and the press
// pack's referral end card at its end with the entrant's own referral code
// typed into its field. It is posted publicly on TikTok from a public
// account, its caption carrying "$500 bounty", make.fun and the entrant's
// play code. See README.md and CREATIVE.md for the whole story.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//   node main.ts --check   # validate VIDEO.json without writing anything

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate caps VIDEO.json at 16384 bytes (reference/gate.json).
const MAX_VIDEO_JSON_BYTES = 16384;

// A video's address as TikTok shows it in a browser: the house accepts
// www.tiktok.com and m.tiktok.com, /@<handle>/video/<digits>, and the
// m.tiktok.com/v/<digits>.html form; a query or fragment after it is read
// past. A short link (vm.tiktok.com, vt.tiktok.com, tiktok.com/t/...) or a
// photo post (/photo/<id>) is refused.
const VIDEO_URL_PATTERN =
  /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/?#]+\/video\/\d+\/?(?:[?#].*)?$/;
const VIDEO_URL_MOBILE_PATTERN =
  /^https:\/\/m\.tiktok\.com\/v\/\d+\.html(?:[?#].*)?$/;

function usage() {
  return [
    'Usage: node main.ts [--help] [--check]',
    '',
    '  (no flags)  Validate VIDEO.json and copy it to $MAKEFUN_OUTPUT_DIR/VIDEO.json.',
    '  --check     Only validate VIDEO.json and report the result; write nothing.',
    '  --help      Show this help.',
    '',
    'Environment:',
    '  MAKEFUN_BOT_DIR     Repository root holding VIDEO.json (default /bot).',
    '  MAKEFUN_OUTPUT_DIR  Directory VIDEO.json is copied to (default /output).',
    '',
    'On success the copy prints nothing. On a bad VIDEO.json it prints the',
    'reason to stderr and exits 1.',
  ].join('\n');
}

function readVideoJson() {
  const path = join(BOT_DIR, 'VIDEO.json');
  let bytes;
  try {
    bytes = readFileSync(path);
  } catch (err) {
    throw new Error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  }
  if (bytes.length > MAX_VIDEO_JSON_BYTES) {
    throw new Error(
      `VIDEO.json is ${bytes.length} bytes, over the gate's ${MAX_VIDEO_JSON_BYTES}-byte cap`,
    );
  }
  let data;
  try {
    data = JSON.parse(bytes.toString('utf8'));
  } catch (err) {
    throw new Error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  }
  return { bytes, data, path };
}

function validateVideoJson() {
  const { bytes, data } = readVideoJson();
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('VIDEO.json must be a JSON object, {"url": "..."}');
  }
  const keys = Object.keys(data as Record<string, unknown>);
  if (keys.length !== 1 || keys[0] !== 'url') {
    throw new Error(
      `VIDEO.json must hold exactly one key, "url" (found: ${keys.join(', ') || '(none)'})`,
    );
  }
  const url = (data as Record<string, unknown>).url;
  if (typeof url !== 'string' || url.length === 0) {
    throw new Error('VIDEO.json must carry a non-empty string "url"');
  }
  if (url.includes('<handle>') || url.includes('<id>') || url.includes('PLACEHOLDER')) {
    throw new Error(
      `VIDEO.json still holds a placeholder address (${url}); replace it with the posted video's full address`,
    );
  }
  if (!VIDEO_URL_PATTERN.test(url) && !VIDEO_URL_MOBILE_PATTERN.test(url)) {
    throw new Error(
      `VIDEO.json url is not a TikTok video address: ${url} — expected https://www.tiktok.com/@<handle>/video/<id>`,
    );
  }
  return { url, bytes: bytes.length };
}

const args = new Set(process.argv.slice(2));

if (args.has('--help') || args.has('-h')) {
  console.log(usage());
  process.exit(0);
}

for (const arg of args) {
  if (arg !== '--check') {
    console.error(`Unknown argument: ${arg}\n\n${usage()}`);
    process.exit(1);
  }
}

let checked;
try {
  checked = validateVideoJson();
} catch (err) {
  console.error(`VIDEO.json is not usable: ${(err as Error).message}`);
  process.exit(1);
}

if (args.has('--check')) {
  console.log(`VIDEO.json is valid (${checked.bytes} bytes): ${checked.url}`);
  process.exit(0);
}

const { bytes } = readVideoJson();
try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), bytes);
} catch (err) {
  console.error(`VIDEO.json could not be copied to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
