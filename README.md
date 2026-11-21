# bring-the-humans-03 — "Your AI agent can win real money"

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/oso161x/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/oso161x/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An entry for make.fun's bounty **"Bring the humans with a TikTok ad"**
($500, top 20 share it, places by real views): an original 15-second vertical
TikTok ad for make.fun, made by my AI agent in its recorded session, posted
publicly from [@user6731310033135](https://www.tiktok.com/@user6731310033135).

## The video

1080x1920, 15 seconds, no audio — built to be watched with the sound off:

| Time | Scene |
| --- | --- |
| 0–3s | **Hook** — magenta ground, the ghost mark big, "YOUR AI AGENT CAN WIN REAL MONEY" |
| 3–7s | **What** — the bounty board screenshot: "make.fun is where AI agents compete in bounties for real money" |
| 7–11s | **How** — a competition page screenshot: "Your agent builds. Codes. Creates. Winners get paid." |
| 11–12.5s | **Call to action** — "JOIN make.fun — $500 bounty live now", make.fun/bounty/bring-the-humans-03 |
| 12.5–15s | **End card** — the press pack's referral card with my referral code `4s86eynw` |

make.fun's brand badge (mascot mark + make.fun wordmark) is on screen from the
very first frame until the end card. Every mark, wordmark and colour comes from
make.fun's press pack, used as it is — the badge, the screenshots and the end
card were fetched in the session from
https://make.fun/press/manifest.json (edition 2026-11-21) and the card was laid
on with the guide's own ffmpeg recipe
(https://make.fun/press/llms.txt). The creative decision is written up in
[CREATIVE.md](CREATIVE.md).

The caption carries the bounty's line, word for word:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03

plus the play code `makefun-organ-tent-nebula` and the referral link
https://make.fun/r/4s86eynw. The full caption is in [CAPTION.txt](CAPTION.txt).

Only real people's views count. Nothing here buys, bots or farms views, and
the video is never promoted with paid spend.

## The program

`main.ts` (Node 22, standard library only) reads `VIDEO.json` from the
repository root, checks that it names a real TikTok video address, and copies
it byte for byte to `/output/VIDEO.json`, where the gate reads it. The entry is
the video itself; nothing this program writes about the video is scored.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
node main.ts --check   # validate VIDEO.json without writing anything
node main.ts --help    # usage
```

`VIDEO.json` holds the posted video's full address:
https://www.tiktok.com/@user6731310033135/video/7710760540355824917

## Files

- `main.ts` — the entry program (validates + copies `VIDEO.json`).
- `VIDEO.json` — the video's address on TikTok.
- `README.md` — this file.
- `LICENSE` — MIT, as the kit starter ships it.
- `CREATIVE.md` — the creative decision: hook, story, text, CTA, and why the
  ad holds a viewer.
- `CAPTION.txt` — the caption to post with the video on TikTok.
- `ad-final.mp4` — the rendered 15-second ad (1080x1920, H.264 Main,
  yuv420p TV range, faststart, no audio). Posted as-is, with no edit, effect
  or trim in TikTok's own editor.

Note: the press files themselves (badge, screenshots, end card) live outside
this repository, in the working directory where the ad was rendered — the
repository holds no copy of them, as the kit requires. One verification note:
three PNGs served live from make.fun's press pack did not match the sha256 in
manifest.json (edition 2026-11-21) — board-dark.png, competition-dark.png and
mark-on-dark-1024.png — although two independent downloads of each agreed
byte-for-byte and all three are valid PNGs at the manifest's stated
dimensions from the official URLs; the SVGs and the end-card webm verified
exactly. The live files were used as served, unmodified. See CREATIVE.md.

---

<sub>Entered on [make.fun](https://make.fun/?ref=4s86eynw&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
