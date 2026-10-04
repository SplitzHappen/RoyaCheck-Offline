# Stage 7B — RoCoLe External-Source Freeze Attempt

**Stage:** 7B  
**Status:** Partial / not sufficient for full RoCoLe identifier freeze  
**Date:** 2026-10-04  
**Branch:** `chatgpt/stage-07-pretraining-gates`

---

## 1. Purpose

José Antonio authorized a compact RoCoLe external-source metadata/identifier freeze before Stage 7C. That strict pre-training freeze did not complete through available automated routes. José Antonio later authorized a clock-preserving amendment allowing A0 training to proceed on frozen BRACOL only, while requiring exact RoCoLe identifiers/metadata before any Stage 7F RoCoLe external readout.

The intended purpose remains to freeze RoCoLe as the sole external-transfer readout without producing model performance evidence or allowing RoCoLe to influence model development.

---

## 2. Boundaries preserved

This attempt did **not**:

- train A0 or A1;
- run inference on RoCoLe;
- inspect any RoCoLe model outcome;
- inspect internal-test outcomes;
- inspect challenge outcomes;
- change the BRACOL split;
- select thresholds;
- change architecture, preprocessing, augmentation, fallback or claims.

Subsequent A0 training used only frozen BRACOL train/validation data and did not use RoCoLe.

---

## 3. Source facts frozen from Stage 7A metadata

RoCoLe v2 remains the planned external-transfer source.

Known source/provenance record:

- DOI/version: `10.17632/c5yvn32dzg.2`
- licence: CC BY 4.0 per Mendeley source page and Stage 6 record
- official Mendeley Download-All metadata bytes: `2,245,588,288`
- official/observed SHA-256 from prior Stage 7A acquisition: `31daa765fb0cc27d4b9b897fa6350aacf0087ee5771d3c7599d2ac7041b866ff`
- folder metadata:
  - `Annotations` folder id: `201c7329-268c-48fb-a452-d9b435817774`
  - `Photos` folder id: `1ca51fea-39e6-483f-a3f4-7e54cf3b4fd8`
- public Mendeley page states the Photos folder contains `1,560` `.jpg` images.

Stage 4 mapping remains:

- healthy → `H`
- rust levels 1–4 → `R`
- red-spider-mite → `O-unseen`, reported separately
- explicit state/classification conflicts, if confirmed before external readout, are excluded and disclosed

---

## 4. Attempted freeze route

A temporary GitHub Actions workflow was created to use the Mendeley public API rather than downloading or inspecting image pixels.

Attempted endpoints included:

- `https://api.data.mendeley.com/datasets/c5yvn32dzg/versions`
- `https://api.data.mendeley.com/datasets/c5yvn32dzg/zip?version=2`
- public file-list endpoints for the `Annotations` and `Photos` folder ids.

The workflow failed before producing the identifier artifact because the API request returned an HTTP 403 Cloudflare challenge page from the GitHub Actions environment.

A previous direct S3 ZIP URL from Mendeley metadata also returned HTTP 403 in GitHub Actions.

Therefore the compact exact RoCoLe image-identifier list could not be produced through the available automated route in this pass.

Temporary workflow files were removed after the probe. The failed run history remains in GitHub Actions.

---

## 5. Gate interpretation

The attempted compact RoCoLe freeze is **not equivalent** to a full Stage 7B external identifier freeze.

What is frozen now:

- RoCoLe v2 source identity;
- DOI/version;
- licence/provenance facts;
- official archive byte/hash metadata from prior Stage 7A;
- folder ids;
- planned metadata mapping;
- quarantine/no-model-use rule.

What is **not** yet frozen:

- exact RoCoLe image identifier list;
- exact external metadata table committed to the repo;
- confirmed list of explicit state/classification conflicts.

---

## 6. Consequence

BRACOL is ready and A0 validation has passed.

RoCoLe remains quarantined. Its full compact identifier freeze is still pending and must be completed before any Stage 7F RoCoLe external readout, unless José Antonio explicitly revises that rule later.

No RoCoLe inference or external performance readout has occurred.
