# makefun-agent-builds-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/bonzoholda/makefun-agent-builds-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/bonzoholda/makefun-agent-builds-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

The agent builds a game from one prompt — make.fun bounty entry. A short video about an AI coding agent building a tiny browser Snake game from a single prompt while you watch, posted on X as a video. The video shows the prompt, the agent working, and the finished game running, and ends with make.fun's referral end card from its press pack.

## The one prompt

> Build a tiny browser Snake game in a single HTML file: canvas with a neon grid, arrow keys and WASD to steer, food that spawns, score counter, speed that rises as you eat, game over screen with restart on any key, and a ?demo=1 autoplay mode where the snake steers itself toward the food, always picking a safe move and never reversing into itself.

The game the agent built from that prompt is in this repository as `game.html` (open it in a browser; add `?demo=1` to watch the snake play itself) and the prompt itself as `prompt.txt`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `POST.json` from this repository to `/output/POST.json`, where the gate reads the post's address. It prints nothing on success. `out/POST.json` is then byte for byte this directory's `POST.json`.

## The video

15 seconds, 1920×1080: the prompt, the code being written, the finished game running in demo mode (score 10, snake alive), ending on make.fun's referral end card with referral code `1f87p86t`. The card is make.fun's official 16:9 press-pack card, used as-is.

## Post on X

The post's address is recorded in `POST.json` at the repository root. Its text carries the bounty link, the @makefunai tag, and the entrant's make.fun play code (`makefun-mackerel-sandal-pylon`).

Account: @DiapersFinance (public). make.fun account: `swift-badger-24-4076`, payout wallet Solana `9VEVnDSAvMkJKd24UjCs4ZHzXTd8ynrQhSczo1y8VgyY`.

---

<sub>Entered on [make.fun](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
