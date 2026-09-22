---
description: GreyCat fullstack project, statically-typed GCL backend with a graph-persistent runtime. Apply when reading or writing .gcl source, when the user mentions GreyCat / project.gcl / nodeTime / nodeList / nodeIndex / nodeGeo / @expose / @library, or when the task involves running `greycat <command>`, deploying the project, or reasoning about gcdata/, lib/, files/, webroot/.
---

# GreyCat

The canonical GreyCat guidance lives in this repo and is kept in sync upstream. Read it there instead of trusting a copy:

- `skills/SKILL.md` — the full skill: workflow, anti-hallucination rules, and when to read which reference file
- `skills/reference/*.md` — per-area drill-downs (`syntax`, `types`, `stdlib`, `cli`, `runtime`, `libraries`, `idioms`, `annotations`, `lang`, `project`)
- `lib/std/*.gcl` — the stdlib source itself, the examples to imitate

## Anti-hallucination rule

GreyCat is **not** Java, Rust, Kotlin, Python, or TypeScript. It has its own conventions and a small grammar. Before writing GCL by analogy to another language, check `skills/reference/idioms.md` — most "obvious" guesses are wrong (no `new`, no ternary, no `switch`, no `import`, `private` ≠ "hidden", `->` ≠ `.`).

When uncertain about a construct: read `lib/std/*.gcl` for real examples, then run `greycat run` against a minimal `project.gcl`. The runtime is the oracle.
