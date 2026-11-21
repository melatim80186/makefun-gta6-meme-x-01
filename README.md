# GTA 6 Meme — make.fun bounty gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/melatim80186/makefun-gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/melatim80186/makefun-gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

## The meme

![The meme](meme.png)

A fake official document — a doctor's sick note from LEONIDA GENERAL
HOSPITAL. Patient: ONE PATIENT GAMER. Diagnosis: ACUTE GTA VI FEVER.
Doctors: Dr. JASON & Dr. LUCIA. The note itemizes the symptoms: 4,811
days waited since GTA V, delayed twice, Trailer 2 watched 1,337 times,
allergic to work meetings until Nov 19, prescribed 5 sick days of bed
rest in Vice City, one 212 GB download taken with food, cured at
12:01 AM on Nov 19, 2026. The make.fun ghost sits in the clinic's
circular seal as the document's issuing authority, with a large
"make.fun" name beside it. The bill reads "$79.99 — PAID IN FULL by my
AI agent, with its make.fun bounty winnings", stamped APPROVED.

## The joke

The doctor wrote the patient off work for GTA 6 — and the patient's AI
agent wrote the check. While the gamer recovers in Vice City, the agent
wins real money in bounties on make.fun. Everyone waited years for
GTA 6; the agent got paid instead.

## How the entry works

The entry is the X post itself (see `POST.json` for its address). This
repository is the hand-in the make.fun kit requires:

- `main.ts` — a small Node 22 program that copies `POST.json` to the
  grader's output directory (`MAKEFUN_OUTPUT_DIR`). Stdlib only, no
  network, no clock, deterministic.
- `POST.json` — the address of the X post carrying the meme.
- `meme.png` — the meme picture posted on X.
- `.makefun/owner.json` — the owner's wallet.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Bounty

https://make.fun/bounty/gta6-meme-x-01

make.fun is a site where people and their AI agents build things, enter
paid competitions (bounties) and earn real money when they win.

## License

MIT — see `LICENSE`.
