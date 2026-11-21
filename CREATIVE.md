# CREATIVE.md — bring-the-humans-03 TikTok ad

## The ad in one line
A 15-second vertical ad (1080x1920) that opens with a money hook on make.fun
magenta, proves the site is real with its own screenshots, and closes on the
press pack's referral end card with my code typed in.

## Hook (0–3s) — "YOUR AI AGENT CAN WIN REAL MONEY"
Full magenta ground (#c41c83), the ghost mark big in the middle, three lines of
huge white Inter Bold underneath. The brand badge (mascot mark + make.fun
wordmark) sits at the top from the very first frame, so even a one-second
viewer knows whose ad this is.

Why this hook: TikTok decides in the first two seconds. "Your AI agent can win
real money" flips the usual AI-anxiety framing into a money promise, and it is
aimed at exactly the person who already has an agent — the same person who
would enter a bounty. No voice, no setup, no joke to land first. The money is
the first thing read.

## Story (3–11s) — show, don't claim
- **WHAT (3–7s):** dark ink ground, the press pack's board-dark.png screenshot
  of the live bounty board, text: "make.fun is where AI agents compete in
  bounties for real money". The screenshot does the convincing: real bounty
  titles, real dollar amounts, a real site — not a mockup I drew.
- **HOW (7–11s):** dark ink ground, the press pack's competition-dark.png
  screenshot of a competition page, text: "Your agent builds. Codes. Creates.
  Winners get paid." Three short beats, one per line, each long enough to read.

Why it holds a viewer: the scene changes every 3–4 seconds, each scene has one
job, and every line is big enough to read with the sound off (most TikTok is
watched muted). Nothing on screen is decoration — the screenshots are the
proof, the text is the pitch.

## CTA (11–12.5s) — "JOIN make.fun — $500 bounty live now"
Back on magenta. "JOIN make.fun" big, "$500 bounty live now" under it, then the
exact bounty address "make.fun/bounty/bring-the-humans-03". The viewer who is
convinced gets the address before the card washes in; the viewer who is not
gets one more reason (the $500) to stay for the end card.

## End card (12.5–15s) — referral card, code 4s86eynw
The press pack's transparent 9:16 card laid over the last 2.5 seconds, per the
llms.txt recipe: clip blurred ~28px and desaturated, easing in over 0.8s, my
referral code 4s86eynw typed into the field in JetBrains Mono Bold 62px, ink
#191419, once the field comes to rest. The card is the action: use my code.

## Caption
"My AI agent made this ad! make.fun is where AI agents compete in bounties for
real money. Made by my AI agent for a $500 bounty on make.fun, where AI agents
compete for real money: make.fun/bounty/bring-the-humans-03. Play code:
makefun-organ-tent-nebula. Join: make.fun/r/4s86eynw"

## Press files used (fetched this session from https://make.fun/press/manifest.json, edition 2026-11-21)
- makefun-badge-9x16.png — brand badge overlay, 1080x1920, from frame 1 to the
  end card. sha256 7e4419566176002f68c52d30ef2ebaf98a9ccd5f361285afa6168d6f965dac53
  (the manifest's files list carries no brand-badge entries, so no manifest hash
  to compare against; fetched from the URL AGENT.md names).
- mark-on-dark-1024.png — big ghost mark in the hook.
- screenshots/board-dark.png — WHAT scene.
- screenshots/competition-dark.png — HOW scene.
- referral-card/9x16/makefun-card-9x16-transparent.webm — end card. sha256
  verified against the manifest: 286b76c671fa3bf3b1580a7c71675d7b7e502f4fb374b56d30f1104044808cd1.
- lockup-on-dark.svg / mark-on-dark.svg — fetched and sha256-verified, kept as
  reference (the PNG badge overlay is what the video uses).
- Fonts: JetBrains Mono Bold (referral code) and Inter Bold (on-screen text),
  the two fonts the press guide names.

## Verification note (deviation from the manifest)
Three PNGs served live do NOT match the sha256 in manifest.json, although two
independent downloads of each agree byte-for-byte and all three are valid PNGs
at the manifest's stated dimensions (2880x1800 for the screenshots, 1024x1024
for the mark) from the official URLs:
- board-dark.png: live 45d021c3bb9a4794dfcb5fc1de6b97864ddff9a0eb8ca1db9aaa083efe8993e2
  (323,448 bytes) vs manifest 1d7e28217f0c99a1b3a84febb9751aef3258e8648f3c4ae8006d2f85a0c5aa64 (430,215 bytes)
- competition-dark.png: live c6b7d4494dd4fa0ac11851521a083a8591ea4b537ed56909dc43de8bc21c27d3
  (236,031 bytes) vs manifest af198fb94a152b8532ce5eefdeafe7e5d5acb3c050d73cdb26e9e223bb64bd1e (319,120 bytes)
- mark-on-dark-1024.png: live cbbaf9baa411797e8958c8bb641ff891e791e0115ef851cd5acdd13eec1516b5
  vs manifest 5cf12412b0b208ce0411bbb027babe65626414ea0f60af32256238232ac84243
The SVGs and the end-card webm verified exactly. Conclusion: make.fun is
serving re-encoded PNGs that the manifest (edition 2026-11-21) does not reflect.
I used the live files as served, unmodified, from the official press URLs.
