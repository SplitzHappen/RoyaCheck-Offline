# Stage 3 Narrow Confirmation Package — PR #11 Audit Repairs

## Purpose

Perform a **narrow confirmation only** of the Stage 3 repairs applied after Claude's independent audit returned **PASS WITH MAJOR REPAIRS**.

This is not a second full Stage 3 audit and not a Stage 4 design review.

## Repository target

Repository: `SplitzHappen/RoyaCheck-Offline`

PR: `#11 — Stage 3: product scope and route lock`

Branch: `chatgpt/stage-03-product-route-lock`

Read:

1. `docs/audits/stage-03/STAGE_03_AUDIT.md`
2. `docs/audits/stage-03/STAGE_03_RECONCILIATION.md`
3. `docs/stages/03_product_scope/STAGE_03_PRODUCT_ROUTE_LOCK.md`
4. `ROADMAP.md`
5. the complete PR #11 diff since the audited head `32d966413aa2eb8dfdd84fceac5b0f359f8dc7d4`

## Findings to confirm

Check **only** M1–M3 and m1–m7 from `STAGE_03_AUDIT.md`, plus whether their repair introduced a direct regression.

### M1 — qualifying extension handoff

Confirm that:

- D3-07 still uses an in-person, user-initiated, on-device handoff;
- the handoff is limited to a **qualifying extension encounter when the household smartphone is physically present**;
- the co-presence condition is labelled a project assumption;
- the operator choices do not invent weekday smartphone availability;
- `Review first` may still wait until the next qualifying encounter;
- the value claim is preparedness/prioritization, not faster extension service;
- the integrated workflow and Stage 4 carry-forward text are consistent.

### M2 — Lugisu / Lumasaaba evidence chain

Confirm that:

- Lugisu remains the owner-approved language at the Bugisu/Mount Elgon level;
- the Stage 3 record no longer treats Lugisu/Lumasaaba evidence as interchangeable without explanation;
- NCDC PDF p. 6 and the dialect appendix PDF pp. 83–92 are represented accurately;
- the record explicitly says NCDC does not establish the proper Bududa variety by itself;
- final strings require a human validator familiar with the Bududa / south-Bugisu target variety and the orthographic convention actually used;
- any later change of the public language label/orthography to Lumasaaba returns to the owner.

### M3 — organizer value sentence

Confirm that:

- the required sentence is now instantiated;
- its `[when]` concept is consistent with M1;
- its claim remains proximal and prototype-level;
- it does not claim faster extension, treatment, yield, income or real-world farm impact;
- the record requires actual later-stage measured evidence to replace or supplement the prospective `we know because` clause before final submission.

### m1 — reviewer role / cooperative wording

Confirm that:

- the extension officer's RoyaCheck-reviewer function is explicitly a project assumption grounded in the case-supported extension role;
- active ROADMAP handoff wording no longer says `extension/cooperative`.

### m2 — image-retention consent

Confirm that:

- retention is opt-in at save time;
- retention consent and display consent belong to Noor, with assistance not substitution;
- text-only review remains possible if no image is retained;
- delete remains cascading.

### m3 — routing wording

Confirm that:

- `visible rust` is phrased as an AI proposal rather than a definitive detection;
- `monitor` is defined as ordinary continued observation with optional later recapture;
- no reminder/scheduling/surveillance feature is implied.

### m4 — strongest simple baseline

Confirm that:

- the printed/laminated symptom guide is acknowledged;
- Stage 3 does not claim measured superiority over it;
- later evidence remains responsible for that comparison.

### m5 — GSMA URL

Confirm that the canonical `...connect-4-million...` URL is used.

### m6 — IICA context

Confirm that IICA 2019 is explicitly general coffee-rust context only and not Uganda-anchor evidence.

### m7 — citation locators

Confirm that the Stage 3 record gives:

- GSMA SOMIC 2025, Figure 15, PDF p. 31, for Uganda **33% urban / 20% rural** smartphone ownership;
- UBOS NPHC 2024 Final Report Volume I, PDF p. 5, for the local-language translation list including Lumasaba;
- NCDC page locators sufficient to support the Lugisu / dialect-variation wording.

## Audit preservation check

Confirm that `docs/audits/stage-03/STAGE_03_AUDIT.md` is a verbatim preservation of the audit from Claude's audit branch and was not rewritten during reconciliation.

## Scope boundary

Do **not**:

- redesign D3-01 through D3-15 unless the repair directly regresses one;
- make Stage 4 choices;
- choose a model, definitive dataset, runtime, threshold, architecture, leaf-side rule, training/evaluation implementation, UI, deployment, video, or submission details;
- translate the Lugisu UI strings;
- broaden the audit to already resolved foundation issues unless the repair directly regresses them.

## Required output

### Verdict

Choose exactly one:

- PASS
- PASS WITH MINOR REPAIRS
- FAIL / BLOCKED

### Repair confirmation matrix

For each of `M1`, `M2`, `M3`, `m1`, `m2`, `m3`, `m4`, `m5`, `m6`, and `m7`:

- **Status:** Confirmed / Not confirmed / Regressed
- **Evidence:** exact file/section
- **Reason:** one concise explanation
- **Repair needed:** only if not confirmed

### Regression check

State whether the repair diff introduces any new blocking, major, or minor contradiction.

### Stage-control answer

Answer explicitly:

1. Can the owner-approved D3-01 through D3-15 decisions now stand without further Stage 3 repair?
2. Can Stage 3 proceed to owner closure/merge review?
3. Is another Claude audit required before Stage 3 closes?
4. Does any finding require reopening Stages 0–2?

Be adversarial but narrow. Do not expand scope merely because Stage 4 choices remain intentionally undecided.
