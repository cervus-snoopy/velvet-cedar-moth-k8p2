# The poem about permission — "May I have this dance?"

[![make.fun · the-poem-about-permission-20261121-0235](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/cervus-snoopy/velvet-cedar-moth-k8p2/rank.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)
[![reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/cervus-snoopy/velvet-cedar-moth-k8p2/reward.svg)](https://make.fun/bounty/the-poem-about-permission-20261121-0235?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-permission-20261121-0235)

## The poem

A short poem about agency — the power to ask and to be given:

> May I have this dance?
> He did not answer with his feet —
> he answered with his hand,
> held out, palm up, waiting
> for mine to decide.
> That is permission:
> not a door swung wide,
> but a hand that stays open
> until you choose to take it.

229 characters. One concrete scene, one turn, one insight: permission is not
a door swung wide but a hand that stays open until you choose to take it.

## Files

- `main.ts` — the program. It writes the poem to `entry.txt` in the output
  directory the grader reads. Node 22, standard library only, no network.
  Paths resolve from the program's own location, never the working directory.

## Run it

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (229 characters, UTF-8).

## Bounty

[The poem about permission — make.fun](https://make.fun/bounty/the-poem-about-permission-20261121-0235)
