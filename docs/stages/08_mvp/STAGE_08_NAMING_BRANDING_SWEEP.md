# Stage 8 — Naming and Branding Sweep

## Status

This document records the Stage 8 naming/branding sweep required by the Stage 0 compliance control.

This sweep does **not** close Stage 8. It does **not** close Stage 7. It does not deploy, submit, produce video, run RoCoLe inference, run challenge-set inference, retrain, fine-tune, or change product behavior.

## Source control

The controlling Stage 0 branding rule requires:

- product-only repository naming and neutral product description;
- no organizer or partner logos or visual branding;
- avoidance of organizer or partner acronyms;
- competition or organization names only as minimum factual identification where necessary for citation or submission context;
- no implication of endorsement or official status;
- renewed naming/branding sweeps in Stages 8 and 10.

Stage 0 also records the product-only target:

- repository: `SplitzHappen/RoyaCheck-Offline`
- description: `Offline-first, browser-local coffee-leaf observation prototype with human review.`

## Scope inspected

This Stage 8 sweep inspected the following public/product-facing surfaces available on `main` after PR #27:

1. Repository identity and current `main` commit context.
2. App shell and visible UI strings:
   - `app/index.html`
3. PWA manifest metadata:
   - `app/manifest.webmanifest`
4. Bounded repository searches for organizer/partner/endorsement-risk strings:
   - `World Bank`
   - `World Bank Group`
   - `WBG`
   - `endorsement`
   - `official`

This sweep intentionally does **not** inspect private submission receipts, video files, external deployment settings, or post-repository submission forms. Those remain Stage 10 checks.

## Findings

### Product naming

PASS.

The product-facing app name remains `RoyaCheck Offline`.

Observed product surfaces:

- `app/index.html` title: `RoyaCheck Offline`.
- `app/index.html` main heading: `RoyaCheck Offline`.
- `app/manifest.webmanifest` name: `RoyaCheck Offline`.
- `app/manifest.webmanifest` short name: `RoyaCheck`.

No organizer or partner name is used as the product name.

### Product description / metadata

PASS.

The inspected metadata remains neutral and product-descriptive:

- `app/index.html` meta description: `Browser-local coffee-leaf observation prototype with human review.`
- `app/manifest.webmanifest` description: `Browser-local coffee-leaf observation prototype with human-final authority.`

This wording does not imply organizer endorsement, official status, or institutional sponsorship.

### Organizer/partner logos and visual branding

PASS.

The inspected app shell and manifest do not reference organizer or partner logos, visual marks, or brand imagery. The app uses its own local icon path:

- `./assets/icon.svg`

This sweep does not claim review of external video assets or live-hosting dashboard metadata.

### Organizer/partner acronyms and endorsement-risk wording

PASS, with Stage 10 recheck required.

Bounded repository searches on `main` returned no matches for the following endorsement-risk strings:

- `World Bank`
- `World Bank Group`
- `WBG`
- `endorsement`
- `official`

The inspected app UI and manifest also do not contain those terms.

This finding is limited to repository-visible text and does not cover final submission forms, video narration, video captions, platform fields, or deployment-provider metadata.

### Claim boundary

PASS.

The inspected UI includes explicit limitation language and avoids endorsement or official-status claims. It states that the tool:

- is not a diagnosis;
- is not treatment advice;
- does not provide field validation;
- does not claim RoCoLe external-transfer evidence;
- does not claim validated Lugisu/Lumasaba usability;
- keeps human-final authority.

These statements are consistent with the existing product and claim boundaries.

## Stage 8 closure effect

This sweep resolves the Stage 8 naming/branding sweep blocker for repository-visible and app-visible surfaces, subject to final Stage 10 recheck.

It does **not** resolve the remaining Stage 8 closure blockers:

- D4-07/D4-18 physical target evidence or explicit owner amendment;
- route-variety caveat acceptance or current-head three-route browser evidence;
- human-authority evidence caveat acceptance or current-head negative Save-gating test;
- Item 36 deferral approval as reduced-component Stage 8 closure;
- PR #21 deferral dispositions;
- handoff/consent D3-07 to D3-10 mapping confirmation;
- Claude closure audit;
- explicit owner closure decision.

## Required Stage 10 recheck

Before final submission, re-run the branding sweep against:

- public repository URL and description;
- live URL page title and metadata;
- app UI in the deployed/live environment;
- platform submission fields;
- Google Form fields, if used;
- team-introduction, product-demo, technical-walkthrough, and challenge-video narration/captions;
- any thumbnail, screenshot, team photo, or public-facing asset.

Stage 10 must continue to avoid organizer or partner logos, unnecessary acronyms, endorsement language, official-status claims, or branding that could imply institutional sponsorship.

## Non-closure statement

As of this document, Stage 8 is **not closed**.

This document records only the Stage 8 naming/branding sweep for repository-visible and app-visible surfaces. It is not a deployment record, not a submission artifact, not field validation, not treatment guidance, and not a World Bank Group endorsement claim.
