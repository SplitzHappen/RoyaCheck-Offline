# Roadmap Audit — RoyaCheck Offline

> **Historical/supersession note:** This audit records an earlier pre-Annex-B project state and intentionally preserves its original findings, including now-superseded Spanish/Dominican framing. For current Agriculture policy, the controlling sources are `docs/stages/00_rules/ANNEX_B_CASE_CONTRACT.md` and the PR #9 Noor case-alignment reconciliation. Do not treat stale country/language assumptions below as current project policy.

**Artifact audited:** `ROADMAP.md` at commit `ecdb895` (`main`), read together with `docs/PROJECT_WORKFLOW.md` (process authority) and `docs/audits/roadmap/AUDIT_PACKAGE.md` (scope, severities, output structure).
**Auditor role:** Independent adversarial reviewer / red team. Not a co-builder.
**Audit type:** Process, governance, evidence, compliance, and execution audit of the roadmap. No model, dataset, code, UI, deployment, or submission artifact exists yet, and none is validated here.
**Line references** are to `ROADMAP.md` at `ecdb895` unless another file is named.

This audit does not modify the roadmap, the workflow, or the audit package. No finding or proposed repair becomes authoritative because it appears here; reconciliation and owner decision follow per `AUDIT_PACKAGE.md` §11.

---

## Verdict

**FAIL / BLOCKED**

- Blocking findings: 2
- Major findings: 11
- Minor findings: 6

The verdict means the roadmap should not be accepted as the process spine in its current wording. It does **not** challenge the locked route (Challenge 4 → Agriculture → repaired Concept A), the product frame, or the technical contract. Both blocking findings and all major findings are repairable by bounded text edits to `ROADMAP.md`; none needs a redesign.

---

## Executive assessment

**Is the process credible?** In intent, yes. The roadmap gets the hard things directionally right: a narrow AI job, a three-state output with an explicit `not sure`, human-only formal disposition, a no-treatment-advice boundary, validation-only threshold selection (line 483), external evidence kept separate (line 489), a prohibited-claims list (lines 598–610), a claims taxonomy (lines 589–596), and a stated preference for completion over features. The product and safety posture are sound starting points.

**Is it executable?** Not as written. The roadmap declares a competition window of 3–4 October 2026 (line 6), then requires seven documentation stages (0–6) to pass before any canonical technical work (lines 722–724), with each stage going through the workflow's full cycle of artifact → PR → independent review → reconciliation → owner decision → merge (`PROJECT_WORKFLOW.md` lines 45–47). There is no submission deadline with a time zone, no time box for any stage, no quantified protected buffer, and no rule that stops documentation when it overruns. In a window of at most two days, that structure puts a qualifying submission at risk. This is the largest risk in the roadmap (B-01).

**Is it auditable?** Partly. Stages 0–6 have qualitative gates ("defensible", "specific enough", "credible") that an auditor cannot falsify. The most consequential gate, Stage 7 (line 500: "enough evidence to justify building"), has no pre-registered numerical criteria, no time box, and no triggers for the fallback ladder. Stage status language mixes vocabularies and does not tie "closed" to a recorded owner decision.

**Does it preserve evidence integrity?** Only partly. Protecting the held-out set covers only threshold tuning (line 483). The roadmap's own failure route ("narrow the model/claim", line 502) creates a path to change the model after a held-out readout and then re-read the same data. The external dataset is not named or quarantined in advance. Group-aware splitting is conditional ("if available", line 460). The class semantics also contradict each other: the product label is "no visible rust", but the metric is "healthy specificity" (line 320), and the routing of other-disease images is undefined. Every reported metric depends on these definitions.

**Does it protect competition completion?** The Stage 10 inventory is good (lines 643–652), but completion protection is aspirational. Nothing quantifies recovery time, deploys the live demo early, reconciles video requirements (four video items listed, one of them a duration requirement), or dry-runs the submission forms.

**Responsible AI.** The controls are well stated and under-verified. Human authority is described as states (lines 265–274), but no test before the final red team shows that a record cannot become formal without an explicit human action. The OOD guard can be satisfied by a "user pre-check" alone (line 477). The challenge tests in Stage 9 have no fixed test sets, sources, or pass criteria, which leaves room for cherry-picked "representative" images.

**Record integrity.** The roadmap already states outcomes of stages it lists as "Ready to document": the selected route in Stage 3 and a past-tense owner authorization in Stage 6 (lines 425–429). Stage 2's stated objective is to *show* that the concept was not a first idea (line 145). Unless the stage artifacts are explicitly framed as decision records with publicly sourced facts, the public record risks implying a sequence of analysis that the artifacts cannot evidence.

**Largest residual risk.** If repaired only on paper, the roadmap still risks spending the scarce competition window on pre-build documentation and review cycles. Model conversion and browser runtime risk would then surface late (the browser artifact is the last Stage 7 workstream, lines 491–496), with no pre-agreed kill criteria. The narrowest effective repair is a deadline-anchored time budget, two pre-build PRs instead of seven, tiered review, and parallel non-canonical de-risking of data access and the browser runtime that never touches test or external partitions.

---

## Blocking findings

### B-01 — The roadmap has no time budget and its pre-build process cannot fit the declared window

1. **Finding ID:** B-01
2. **Exact issue:** The roadmap requires seven sequential documentation stages (0–6) before any canonical model training, UI, or deployment (lines 722–724). Each stage passes through a full PR/review/reconciliation/owner-decision/merge cycle (`PROJECT_WORKFLOW.md` lines 9–47). The roadmap also lists two separate end-stage audits: the Stage 9 claims audit and the Stage 10 independent red team. Nowhere does it state the submission deadline (date, clock time, time zone), a time box per stage, the length of the protected recovery buffer, or a rule for what happens when a documentation stage overruns.
3. **Why it blocks:** The roadmap's own header declares a competition window of 3–4 October 2026 (line 6). Under the package's severity definitions, this is "a roadmap structure that cannot realistically be executed" and a material risk of "inability to complete a qualifying submission." Paperwork is cheap for the builder. The scarce resources are the solo owner's review and merge attention and the clock. The roadmap spends both before the riskiest technical unknowns (dataset access, licensing, model conversion, browser runtime) are touched.
4. **Evidence from the roadmap:**
   - Line 6: window "3–4 October 2026".
   - Lines 702–716: Stages 0–6 all listed as "Ready to document"; Stages 7–10 "Not started".
   - Lines 722–724: "proceed sequentially through Stages 1–6 before beginning the definitive Stage 7 technical proof"; "No model training, definitive UI work, deployment … should be treated as canonical before … the Stage 6 greenlight."
   - Line 370 and line 623: "protected recovery time" / "protect enough time", never quantified.
   - Lines 546–614 and 654–667: Stage 9 "claims audit" and Stage 10 "final independent red team" both cover unsupported claims, offline claims, and human-authority integrity.
   - `PROJECT_WORKFLOW.md` line 43 states the principle ("Any control that costs more than the risk it mitigates should be simplified"), but the roadmap does not apply it.
5. **Narrowest defensible repair:** Add one short **Time budget** section to `ROADMAP.md`. It does not change any stage's substance.
   1. State the submission deadline as an absolute date, clock time, and time zone, sourced in Stage 0.
   2. Give each stage, or stage group, a clock-time time box anchored to that deadline. Name a protected final buffer (owner-set) that is closed to feature work. It must at least cover one full redeploy, one re-upload of all videos, and completion of both the platform submission and the backup form.
   3. Collapse Stages 0–6 into at most **two** pre-build PRs:
      - (a) rules/compliance plus the official-brief overlay (Stages 0 and 6);
      - (b) a decision record covering problem, concepts, route, specification, and readiness (Stages 1–5).
      The stage numbering can stay inside those artifacts for traceability.
   4. Declare **review tiers**:
      - Independent adversarial review only at (i) compliance, (ii) the Stage 4 evaluation pre-registration, (iii) the Stage 7 readout, and (iv) one final pre-submission red team. Merge the Stage 9 claims audit into the Stage 10 red team.
      - Owner check only for everything else.
   5. Explicitly permit non-canonical de-risking in parallel with pre-build documentation:
      - dataset download and file counts;
      - license reading;
      - a browser-runtime smoke test with a pretrained encoder (see M-03).
      This de-risking must not open test or external partitions (see B-02).
   6. Add an overrun rule: a pre-build stage that exceeds its time box closes "owner-accepted with listed residual gaps", and Stage 7 starts.

### B-02 — Held-out and external evidence are only protected against threshold tuning; the roadmap's own failure route invites re-reading burned data

1. **Finding ID:** B-02
2. **Exact issue:** Three gaps leave the core evaluation exposed:
   - The only explicit anti-leakage rule covers the threshold: "No final reported test examples should be used to tune the threshold" (line 483). Model selection, early stopping, preprocessing, class mapping, OOD-guard design, and the choice among candidate model paths (lines 297–304) are not covered.
   - The Stage 7 failure route says "narrow the model/claim rather than hiding the failure" (line 502), and Stage 5 says "narrow scope first" (line 376). Nothing says a held-out or external partition is spent once read. The natural time-pressured sequence is therefore: read the test set, see a failure, narrow or retrain, read the same test set again, and report the second number as held-out.
   - The external dataset is not designated in advance (lines 278–282 give a preference order only, and 7E says "If feasible"). Group/near-duplicate control is conditional ("identify duplicates/group structure if available", line 460).
3. **Why it blocks:** This is a material risk of "invalid core evaluation". The project's central claims (rust recall, coverage, external transfer) would be numbers selected after seeing the test data, while presented as held-out evidence. Leaf-image datasets commonly contain several images of the same leaf, plant, or capture session. Without group-aware splitting, the internal metrics can be inflated regardless of threshold discipline.
4. **Evidence from the roadmap:** Lines 459–461 (class mapping "before reading final results", splits defined in 7A but not committed or verifiable), line 470 ("freeze the candidate once acceptable", with "acceptable" undefined and judged on unspecified data), lines 481–483, lines 487–489, line 502.
5. **Narrowest defensible repair:** Add five rules to Stage 4 (Evaluation design) and Stage 7:
   1. **Commit before any readout:**
      - a split manifest (file identifiers or hashes → train / validation / test / external; no images re-hosted);
      - the class map;
      - the operating-point selection rule;
      - the metric list (M-04).
      The commit history then provides verifiable evidence that splits were fixed before results.
   2. **One-shot partitions.** Change "tune the threshold" (line 483) to "make any design choice": model, preprocessing, class map, threshold, or OOD guard. If anything changes after a test or external readout:
      - the original readout stays in the record;
      - that partition is relabeled development data;
      - any later number is either from an untouched partition or explicitly labeled "post-hoc, not held-out".
   3. **Designate the external dataset in Stage 4** and quarantine it from training, threshold selection, model selection, and all de-risking spikes.
   4. **Mandatory group-aware splitting.** Use group-aware splitting where group identifiers exist. Where they do not, run a near-duplicate check (for example, perceptual hashing) and disclose residual leakage risk as a limitation.
   5. **Pin "acceptable" in line 470** to the pre-registered validation criteria in M-02.

---

## Major findings

### M-01 — Class semantics are contradictory: "no visible rust" vs "healthy", and other-disease routing is undefined

1. **Finding ID:** M-01
2. **Exact issue:** The product output is "no visible rust" (lines 254, 518), but the evaluation metric is "healthy specificity" (line 320) and 7C says other disease must "not [be] silently treated as healthy" (line 476). Line 308 says other-disease inputs must not be forced into a rust/no-rust decision. These cannot all hold at once. An image with another disease and no rust *is* correctly "no visible rust" under the product label. The roadmap never decides whether such images should be:
   - routed to `not sure`; or
   - labeled "no visible rust" with an explicit statement that other conditions are not assessed.
   Mixed infections (rust plus other) are not addressed.
3. **Why it matters:** Every confusion matrix, specificity, and coverage number depends on this decision. If it is made after seeing results, it becomes a degree of freedom for tuning (see B-02). If it is left implicit, a judge or user can read "no visible rust" as "healthy leaf", which is exactly the misreading the safety posture is meant to prevent.
4. **Evidence from the roadmap:** Lines 252–255, 308, 320, 459, 476.
5. **Narrowest defensible repair:** In Stage 4, define the label semantics in one paragraph:
   - "no visible rust" ≠ healthy;
   - choose a single routing rule for other-disease/stress images, either target `not sure` or target "no visible rust, other conditions not assessed";
   - mixed infections → visible rust.

   Then:
   - rename "healthy specificity" to "specificity on healthy images";
   - add a separately reported "other-disease outcome distribution";
   - carry the chosen wording into the UI and the extension summary.

### M-02 — The Stage 7 gate and the fallback ladder have no pre-registered criteria, time box, or triggers

1. **Finding ID:** M-02
2. **Exact issue:** The Stage 7 gate is "enough evidence to justify building the definitive product loop" (line 500), and candidates are frozen "once acceptable" (line 470). The roadmap never states:
   - a minimum safety criterion at the operating point;
   - a minimum coverage;
   - a maximum model/runtime size (it calls these "small/sideloadable" and "small enough" but never quantifies them; see line 411);
   - a maximum latency on the target device;
   - a time box for Stage 7.

   The model design space (lines 297–304) lists four paths but no order of fallback, entry triggers, or claim adjustments. The bottom rung, a "handcrafted feature baseline", is not checked against the "targeted Small AI / no decorative AI" requirement.
3. **Why it matters:** The gate would be judged after the results are known, which is the sunk-cost rescue the package asks the roadmap to prevent (`AUDIT_PACKAGE.md` §7A). Without triggers, the owner must deliberate fallback choices under maximum time pressure. If the bottom rung does not count as Small AI, the fallback ladder ends in a non-compliant entry rather than a narrower compliant one.
4. **Evidence from the roadmap:** Lines 297–304, 450, 470, 500–502; Stage 5 fallback philosophy (lines 372–382) gives principles, not triggers.
5. **Narrowest defensible repair:**
   1. In Stage 4, pre-register owner-set numerical values for:
      - (i) the maximum confident-miss rate (rust images given a confident "no visible rust") on validation at the operating point;
      - (ii) a minimum coverage floor;
      - (iii) a maximum model + runtime bytes;
      - (iv) a maximum per-image latency on the target device (M-06);
      - (v) a Stage 7 time box with a kill time.
   2. In Stage 5, turn the model design space into an ordered fallback ladder, pre-approved by the owner. Each rung states its entry trigger and the claim reduction it implies.
   3. State whether the handcrafted rung still qualifies as targeted Small AI. If it does not, state the honest outcome: submit with the measured failure disclosed, rather than present a decorative component.

### M-03 — The riskiest integration (browser runtime) is sequenced last within Stage 7

1. **Finding ID:** M-03
2. **Exact issue:** Workstream 7F (export, local inference, size, browser compatibility, lines 491–496) comes after data, training, abstention, held-out, and external work. The roadmap says the model/runtime remains "subject to measured feasibility" (line 450), but it measures feasibility only after investing in a specific model.
3. **Why it matters:** Problems with operator support, file size, memory, or latency in the browser runtime typically appear only at conversion time. Discovering at the end of Stage 7 that the chosen encoder cannot run in the target browser within budget forces a retrain and a re-read of evaluation data (see B-02) at the worst possible moment.
4. **Evidence from the roadmap:** Lines 446–450, 491–496; Stage 5 build order, lines 361–363 ("prove local visual inference" is step 2, but Stage 7 places the browser proof last).
5. **Narrowest defensible repair:** Add a "7F-0 browser smoke test" at the start of Stage 7, or within Stage 5 readiness. It should:
   - load the candidate pretrained encoder in the target browser via the chosen runtime, with no training;
   - measure bytes, latency, and memory on the target device;
   - confirm that it runs from cache while offline.

   Choose the encoder from among candidates that pass. This test uses no evaluation data, so it is safe to run in parallel with pre-build documentation (B-01).

### M-04 — Metrics are insufficient for an abstaining classifier and carry no uncertainty

1. **Finding ID:** M-04
2. **Exact issue:** The metric list (lines 314–327) is qualified "where feasible". It includes abstention rate/coverage but omits:
   - selective accuracy/risk on accepted predictions;
   - coverage by true class (for example, how often rust images are deferred);
   - the safety-critical error: confident "no visible rust" on rust images;
   - confidence intervals.

   `AUDIT_PACKAGE.md` §5.11 requires "uncertainty/coverage where relevant".
3. **Why it matters:** With an abstaining classifier, balanced accuracy and recall can look excellent while the system defers most hard cases, or the rare confident miss can hide inside aggregate numbers. Test sets for a small task are likely to be small, so point estimates without intervals can overstate precision. Judges and extension users need the confident-miss rate more than any other number.
4. **Evidence from the roadmap:** Lines 314–327; Stage 9 evidence table, lines 581–582 ("internal metrics; abstention/coverage").
5. **Narrowest defensible repair:** Replace "where feasible" with a mandatory core and an optional remainder.

   Mandatory core, per partition:
   - class counts;
   - confusion matrix on accepted predictions;
   - coverage, overall and per true class;
   - selective accuracy at the operating point;
   - confident-miss rate on rust;
   - 95% intervals (Wilson or bootstrap) on the headline rates.

   External readouts report the same core, including coverage. Latency and size stay as listed.

### M-05 — OOD and other-disease controls can be satisfied rhetorically and tested by cherry-picking

1. **Finding ID:** M-05
2. **Exact issue:**
   - 7C allows "a separate non-coffee/OOD guard **or** user pre-check" (line 477). A user checkbox alone would satisfy the requirement.
   - The Stage 9 tests (lines 555–560: "representative rust images", "non-coffee image", "ambiguous image" and others) have no fixed set, source, licensing, size, or pass criterion.
   - The roadmap does not acknowledge that confidence-threshold abstention on a classifier trained only on coffee leaves is not a reliable OOD detector.
3. **Why it matters:** `AUDIT_PACKAGE.md` §4 and §5.8 make OOD/non-coffee handling a preserved requirement. A guard that is only a pre-check, tested on hand-picked images, would let the project claim fail-safe behavior it has not measured. That is a responsible-AI weakness and an unsupported-claim risk.
4. **Evidence from the roadmap:** Lines 306–310, 474–477, 553–567.
5. **Narrowest defensible repair:**
   - Keep a user pre-check only as additive to a measured guard, or report plainly that only a pre-check exists and lower the claim accordingly.
   - Before Stage 9 runs, freeze a small labeled challenge set from licensed sources, with stated counts per category: non-coffee, other disease/stress, blurry/low quality.
   - Report every result, including failures.
   - Pre-register an owner-set target for the share routed to `not sure`.
   - State the measured OOD behavior as a limitation rather than a guarantee.

### M-06 — Offline and device-realism proof are unspecified, and the "target browser" is undefined

1. **Finding ID:** M-06
2. **Exact issue:**
   - The Stage 8 gate references "the target browser" (line 540), but no stage defines a target device class or browser.
   - Stage 9 lists "offline reload" and "cache completeness" (lines 562–563) without a protocol or an evidence form.
   - `AUDIT_PACKAGE.md` §5.4 requires "actual hard-reload/cache evidence", and Stage 6 requires running "on an accessible device" (line 408).
3. **Why it matters:** The offline core and accessible-device operation are named competition constraints (lines 408–411). Without a defined device and protocol, the offline claim may rest on a desktop browser with warm caches and devtools throttling. That is weak against a judge's question: "Does the core work offline on an affordable phone?"
4. **Evidence from the roadmap:** Lines 408–411, 528–536, 540, 562–564, 580.
5. **Narrowest defensible repair:**
   1. In Stage 4, name the target device class and browser. If only desktop emulation is available, say so as a limitation.
   2. In Stage 9, add a fixed seven-step offline protocol:
      1. first load online;
      2. disconnect the network on the device;
      3. hard reload;
      4. run inference on an image not processed before;
      5. save a record;
      6. generate the summary;
      7. close and reopen, and confirm the record persists.
   3. Capture the evidence as a short screen recording plus the network/request log and the cached bundle size, and link it from the evidence table.

### M-07 — Human authority is specified as states but never verified before the final red team

1. **Finding ID:** M-07
2. **Exact issue:** The governance states (lines 265–274) and `confirmed_by_role` are defined. However, the roadmap does not:
   - separate the AI proposal from the human disposition in the record schema;
   - forbid preselecting the AI proposal as the default disposition;
   - define how a `not sure` proposal is resolved;
   - enumerate the values of `confirmed_by_role`;
   - require that the extension summary contain only human dispositions.

   The Stage 9 technical tests (lines 553–567) contain no human-authority test. The only check is in the Stage 10 red team (line 664), the last point at which a failure can be fixed.
3. **Why it matters:** Human final authority is a locked requirement and a central responsible-AI claim. A UI that defaults the human field to the AI suggestion produces formal records that are AI decisions in practice (automation bias), even if every state exists on paper.
4. **Evidence from the roadmap:** Lines 256–263, 265–274, 519–522, 553–567, 664.
5. **Narrowest defensible repair:**
   1. In Stage 4, specify the record fields:
      - `ai_proposal` (with score);
      - `human_disposition`;
      - `confirmed_by_role`, from an enumerated list;
      - `status`.
   2. State three rules:
      - the human disposition is never pre-filled from the AI proposal;
      - a `not sure` proposal requires an explicit human choice or a review request;
      - the summary is built only from human dispositions and labels any AI proposal as such.
   3. Add two Stage 9 tests:
      - attempting to save a formal record without human action fails;
      - the summary output contains no AI-only disposition.
   4. Disclose that `confirmed_by_role` is self-declared.

### M-08 — The licensing gate has no stop condition and omits the encoder, the runtime, and derived-weight redistribution

1. **Finding ID:** M-08
2. **Exact issue:** The data plan requires license documentation for datasets (lines 284–293), and Stage 6 requires "attribution and license checks" for pretrained components (line 428). The roadmap still has three gaps:
   - No stage gate has a license verdict or a stop condition when a license is incompatible or unclear.
   - Licenses for the pretrained encoder weights and the browser runtime library are not part of any required record.
   - Browser-local inference means the trained head and encoder weights are publicly downloadable from the live demo and likely committed to the public repository. The roadmap does not address whether the dataset and encoder licenses permit redistributing derived weights.
3. **Why it matters:** This is a disqualification risk and a public-repository compliance risk. Incompatible terms discovered late would force a dataset or encoder swap after evaluation, which collides with B-02 and the time budget.
4. **Evidence from the roadmap:** Lines 278–295, 425–429, 452–461, 491–496, 630–632.
5. **Narrowest defensible repair:**
   1. Make a one-line license verdict per dataset, encoder, and runtime an exit condition of 7A/7F. It covers:
      - (a) training use;
      - (b) public redistribution of derived weights via the repository and the live demo;
      - (c) compatibility with the repository license.
   2. If a license is incompatible or unclear, move to the next dataset in the stated order, or the next encoder, before any evaluation data is read.

### M-09 — Stage artifacts risk presenting already-decided outcomes as a forward process

1. **Finding ID:** M-09
2. **Exact issue:** Stages 0–6 are all "Ready to document" (lines 706–712), yet the roadmap already states some of their outcomes:
   - Stage 3 contains the selected route (lines 196–230).
   - Stage 6 records, in the past tense, that "where detailed participant rules remained silent after reasonable checking, the owner authorized proceeding" (lines 425–429), although no Stage 0 or Stage 6 artifact or decision record exists.
   - Stage 2's objective is to "show that the chosen concept emerged from structured comparison rather than from first-idea bias" (line 145), but it is documented after the route is locked.
   - The development-record section says repository history will be populated "in a controlled sequence so its history reflects the project logic" (line 681).
3. **Why it matters:**
   - The package lists "a false or misleading project record" as a blocking-class risk.
   - The roadmap does not by itself create a false record; the risk arises when the stage artifacts are written. If they are written as though selection were happening now, or if commit order is read as the order of analysis, the record would imply a sequence it does not evidence.
   - A past-tense owner authorization with no recorded basis is an unsupported statement in the public record.
   - This also conflicts with `PROJECT_WORKFLOW.md` rule 5 (no invented chronology) and rule 7 (separate evidence from inference).

   It is rated major, not blocking, because the repair is cheap and the damage has not yet occurred.
4. **Evidence from the roadmap:** Lines 145, 196–230, 423–433, 679–698, 704–712.
5. **Narrowest defensible repair:** Add one paragraph to "How to read this roadmap" (around line 30) stating that:
   - the route is locked;
   - Stage 0–6 artifacts document decisions and their rationale;
   - stage order is a logical dependency order, not a claim about when the analysis occurred.

   Then:
   - Reword the Stage 2 objective to "document the comparison and elimination rationale supporting the locked route", with the longlist and criteria shown.
   - Move the Stage 6 authorization into the Stage 6 artifact as an owner-decision entry that lists which official sources were checked, or reword it as pending until that entry exists.
   - Require that every factual statement in a stage artifact carry a public source or be labeled inference or assumption.

### M-10 — Stage 0 compliance answers do not propagate into enforceable downstream controls

1. **Finding ID:** M-10
2. **Exact issue:** Stage 0 asks the right questions (lines 78–87), including "What are the AI-assistance and originality boundaries?" and "What constitutes a disqualifying implementation choice?". Its outputs (lines 91–96) are documents, though, and no later stage is bound to them. Specifically:
   - Stage 6 repeats much of Stage 0 as a separate "overlay" (lines 390–433) instead of referencing it.
   - "Stop if a contradictory official rule later appears" (line 429) has no checkpoint or owner.
   - Nothing states how the Stage 0 originality ruling constrains which code, weights, or assets may appear in the Stage 7–10 submission, or what must be disclosed about them.
3. **Why it matters:** Compliance that lives only in a Stage 0 document does not protect the submission. A rule on originality, assistance disclosure, or video format discovered once and then never re-applied is a disqualification path. Duplicating Stage 0 in Stage 6 also costs owner time (B-01).
4. **Evidence from the roadmap:** Lines 78–96, 100, 395–433, 633, 641–652.
5. **Narrowest defensible repair:**
   1. Make the Stage 0 output a single compliance checklist. Each requirement is mapped to:
      - the stage that enforces it;
      - the evidence that will show compliance;
      - its status.
   2. Fold Stage 6 into that checklist as a short greenlight row.
   3. Add two fixed re-check points against the official sources: the start of Stage 7, and before submission in Stage 10.
   4. Add one rule: every implementation asset in the submission must comply with the Stage 0 originality and assistance ruling, and any ambiguity is disclosed in the README.

### M-11 — Submission mechanics are listed but not protected

1. **Finding ID:** M-11
2. **Exact issue:**
   - Stage 10 lists the artifacts (lines 643–652), but the live demo is first deployed in Stage 10, with only a Stage 5 "deployment path" before that (line 349).
   - Video requirements are listed but not reconciled. "Demo Video", "Tech Video", "Team Video", and "WBG 2–5 minute video requirement" appear as four items without stating whether one recording can satisfy more than one item, or what length and format each requires.
   - There is no dry run of the Hack-Nation platform or the Google Form backup fields.
   - There is no early-submission rule.
   - There is no requirement to record proof that the submission was received, although the Stage 10 gate depends on "successfully received" (line 675).
3. **Why it matters:** Submission failures are the most common non-technical way to lose a hackathon entry, and they usually surface in the final hour. Each of these gaps is cheap to close early and expensive to discover late.
4. **Evidence from the roadmap:** Lines 343–353, 370, 618–675.
5. **Narrowest defensible repair:**
   1. Deploy the live demo as soon as the M-03 smoke test passes, and redeploy incrementally.
   2. In Stage 0, reconcile every video requirement into one table: video, required length, required content, and whether it can be combined with another.
   3. Dry-run both submission forms before the protected buffer begins.
   4. If the platform permits edits, submit a complete, honestly limited entry before the buffer and update it later.
   5. Record a confirmation (a screenshot or a receipt) as the Stage 10 gate evidence.

---

## Minor findings

### m-01 — Pre-build stage gates are qualitative and cannot be falsified

1. **Finding ID:** m-01
2. **Exact issue:** The gates for Stages 0, 1, 2, 5, and 6 depend on undefined judgments ("defensible", "specific enough", "credible", "no unresolved setup dependencies", "route is locked").
3. **Why it matters:** An auditor cannot confirm or reject closure. For documentation stages, this does not threaten validity.
4. **Evidence from the roadmap:** Lines 100, 136, 185, 386, 433.
5. **Narrowest defensible repair:** Restate each pre-build gate as "all listed required outputs are present and the owner decision is recorded in the merged PR". Keep substantive quality judgments for the tiered reviews in B-01.

### m-02 — Stage status vocabulary is inconsistent and not tied to closure evidence

1. **Finding ID:** m-02
2. **Exact issue:** Status values mix "Ready to document", "Not started in this clean repository", and "Not started". The qualifier "in this clean repository" is unexplained. No status maps to "closed", and closure is not linked to an owner decision or a PR.
3. **Why it matters:** Readers cannot tell planned, in-review, and closed work apart, as `AUDIT_PACKAGE.md` §7B requires. The unexplained qualifier invites reader questions the artifact does not answer.
4. **Evidence from the roadmap:** Lines 704–716.
5. **Narrowest defensible repair:** Use one fixed status set — Not started / In progress / In review / Closed (owner-approved, PR link) — and update the table on each merge. Drop the qualifier.

### m-03 — The claims ledger is "tagged internally" with no stated location, and duplicates the evidence table

1. **Finding ID:** m-03
2. **Exact issue:** "Every public claim must be tagged internally" (line 589) does not say where the ledger lives. Stage 9 also defines a separate evidence table (lines 569–585).
3. **Why it matters:** A ledger nobody can inspect gives no auditability. Two parallel artifacts cost upkeep time.
4. **Evidence from the roadmap:** Lines 569–596.
5. **Narrowest defensible repair:** Use one public table in the repository: the evidence table plus a claim-tag column. The README cites rows from it.

### m-04 — Image retention, export, and metadata are unspecified relative to "no geolocation"

1. **Finding ID:** m-04
2. **Exact issue:** The architecture states "no geolocation" (line 536), but the roadmap does not say whether images are stored or exported, or whether embedded image metadata (for example, EXIF GPS from phone cameras) is stripped. The delete-local-record test (line 566) does not state whether deletion includes images and cached data.
3. **Why it matters:** Images from phone cameras can carry location metadata. If images or summaries leave the device, "no geolocation" would be inaccurate as a privacy claim.
4. **Evidence from the roadmap:** Lines 262–263, 524, 536, 566.
5. **Narrowest defensible repair:** Add one line in Stage 4 covering whether images are retained or exported, that metadata is stripped on ingest if they are, and the scope of deletion (record + image).

### m-05 — Internal jargon and process volume obscure the judge-facing story

1. **Finding ID:** m-05
2. **Exact issue:** "Repaired Concept A" (lines 198, 401) means nothing to an external reader. The roadmap is about 720 lines of process, and nothing yet requires a short judge-facing summary that answers the `AUDIT_PACKAGE.md` §7H questions.
3. **Why it matters:** Judges read for the product, the evidence, and the limits first. Process is valuable only when it backs those answers.
4. **Evidence from the roadmap:** Lines 198, 401, 625–639.
5. **Narrowest defensible repair:**
   - Replace "repaired Concept A" with the plain product name in public text.
   - Require that the README open with a one-screen summary answering the §7H questions, with links to the evidence table and the roadmap as the process record.

### m-06 — The exclusion lists are inconsistent

1. **Finding ID:** m-06
2. **Exact issue:** The Stage 3 exclusions (lines 216–230) omit "treatment plans", which `AUDIT_PACKAGE.md` §4 lists. Principle 7 (line 46) covers treatment advice, but not treatment plans as a feature.
3. **Why it matters:** Several divergent lists invite drift when stage artifacts quote different ones.
4. **Evidence from the roadmap:** Lines 46, 216–230; `AUDIT_PACKAGE.md` lines 78–93.
5. **Narrowest defensible repair:** Keep one canonical exclusion list, adding "treatment plans" to Stage 3, and reference it everywhere else.

---

## Process-integrity review

- **Ordering.** The macro ordering (rules → problem → route → specification → readiness → proof → MVP → hardening → submission) is logically sound. The defect is that order is enforced as strict sequence with full ceremony at every step and no clock (B-01). Within Stage 7, the riskiest dependency comes last (M-03).
- **Closure gates.** Pre-build gates are qualitative (m-01). The single most consequential gate, Stage 7, is not falsifiable (M-02). Stages 8 and 10 have usable gates: an end-to-end loop on a defined browser once M-06 defines it, and receipt of the submission. The Stage 9 gate ("no material claim exceeds the evidence") is sound but duplicated by the Stage 10 red team (B-01).
- **Recovery logic.** The fallback philosophy (lines 372–382) has the right priorities: narrow, reduce claims, keep the loop, keep human authority, keep evidence integrity. It has no triggers, rung order, or time boxes (M-02). The failure route in line 502 is the main evidence-integrity hazard unless paired with one-shot partitions (B-02).
- **Sunk-cost protection.** None is operational. Without pre-registered criteria and a kill time, the time-pressured default will be to continue the current model.
- **Owner control.** Owner control is clear in `PROJECT_WORKFLOW.md` (rules 10–11) and in Stage 10 (line 671). Two weaknesses:
  - The roadmap records one owner authorization without a decision record (M-09).
  - Fallback decisions are not pre-approved, so owner authority becomes a bottleneck at the worst moment (M-02).

  Pre-approving the ladder keeps the owner in control while removing the bottleneck.

## Stage-record / traceability review

- Each stage has an objective and outputs. Purpose is generally clear.
- **Planned vs in-progress vs completed** cannot be distinguished reliably (m-02). Closure is never tied to an observable record (PR + owner decision).
- **Document existence vs gate passage.** `PROJECT_WORKFLOW.md` rule 10 correctly says a document is not closure. The roadmap's own pre-build gates are close to document existence, which is acceptable for documentation stages if stated honestly (m-01).
- **Evidence dependencies.** The roadmap does not show which later stage relies on which earlier output. The main gaps are the Stage 0 compliance answers (M-10) and the Stage 4 evaluation design, which Stage 7 must consume as a pre-registration (B-02, M-02, M-04).
- **Record honesty.** See M-09. The repair is a framing paragraph plus source labeling, not more documentation.
- **Proportionality.** The audit trail is at risk of obscuring the build: seven pre-build artifacts, per-stage reconciliation records, a claims ledger, and an evidence table. Consolidation (B-01, m-03) gives the same assurance with less volume.

## Competition-compliance review

- **Covered well in principle:** one sector, targeted Small AI, offline core, size, local language (Spanish UI, line 515), human authority, fail-safe behavior, data citation, AI-assistance disclosure (lines 427, 633), public repository, and the full artifact inventory (lines 643–652).
- **Gaps:**
  - The deadline and time zone are absent (B-01).
  - Originality and assistance rulings do not bind later stages (M-10).
  - The license gate omits the encoder, the runtime, and derived-weight redistribution (M-08).
  - The offline proof protocol and the target device are undefined (M-06).
  - Video requirements are unreconciled (M-11).
  - There is no re-check point for contradictory official rules (M-10).
- **Interpretation risk.** Stage 6's "owner authorized proceeding where rules remained silent" is reasonable as a policy. It needs to rest on a recorded list of checked sources, or it becomes an unsupported assertion (M-09).
- **Small-AI interpretation risk.** If the fallback ladder reaches the handcrafted baseline, the entry may no longer satisfy "targeted Small AI" (M-02). The roadmap should decide in advance how that case is disclosed.

## Technical / evaluation-gate review

- **Model path.** "Compact pretrained encoder → tiny head → thresholded abstention → browser export" is an appropriate, low-risk choice for a solo build. Freezing the backbone and avoiding broad search (lines 466–469) are good controls.
- **Data.** Preferring primary sources, keeping original licenses, recording file counts, and not re-hosting datasets (lines 295, 454–458) are sound. Missing: a committed split manifest, mandatory group-aware splitting, and a pre-designated, quarantined external set (B-02).
- **Class semantics.** These are undefined and contradictory (M-01) and must be fixed before any readout.
- **Abstention.** Validation-only threshold selection is correct (line 474). It does not deliver OOD rejection on its own, so the claim must follow measurement (M-05).
- **Browser-local / size / latency.** These are measured but not budgeted (M-02), the measurement comes too late (M-03), and the target device is undefined (M-06).
- **Offline.** The test is listed, but there is no protocol and no evidence form (M-06).
- **Metrics.** Selective-classification metrics, the confident-miss rate, and intervals are missing (M-04).
- **External transfer.** "If feasible" (line 487) is acceptable. When it is run, it must use the frozen operating point and report coverage, and its framing must reflect domain shift (lines 584–585 already require domain limitations).

## Responsible-AI review

- **Human authority.** The states are well specified. They are not verified until the final red team, the record schema does not separate AI from human fields, and nothing guards against default preselection (M-07).
- **Fail-safe behavior.** `not sure` is part of the product contract (line 310), which is good. The OOD guard can collapse to a user pre-check, and the challenge testing is unspecified (M-05). Other-disease routing is undefined (M-01).
- **No treatment advice.** It is clearly stated (principle 7, Stage 3 exclusions). The roadmap should ensure that the fixed UI and summary strings are part of the Stage 9/10 claims review, which line 614 implies ("demo language"). The exclusion lists need consolidating (m-06).
- **Privacy.** Local storage, no geolocation, and a delete path are listed. Image retention, export, and metadata are unspecified (m-04). Consent is not addressed for any images the entrant captures personally for demos or challenge sets. Using only licensed public images, or images of the entrant's own capture with no people visible, avoids the issue; this belongs in the M-05 challenge-set definition.
- **Bias / domain shift.** The roadmap correctly requires dataset geography and domain limitations (line 585) and prohibits claims of robustness on Dominican farms (line 609). These limitations should be stated next to every headline metric, not only in a limitations section.
- **Claim limits.** The prohibited-claims list is strong. The claims ledger needs to be public to be useful (m-03).

## Solo-execution / time-budget review

Remove, compress, or delay, in priority order:

1. **Compress Stages 0–6 into two PRs** and treat Stage 6 as a greenlight row in the compliance checklist (B-01, M-10). This saves several owner review-and-merge cycles.
2. **Merge the Stage 9 claims audit into the Stage 10 red team.** One adversarial pass on the frozen candidate is enough (B-01).
3. **Tier the reviews.** Independent adversarial review only at compliance, evaluation pre-registration, Stage 7 readout, and final pre-submission. Owner check elsewhere (B-01).
4. **Run de-risking in parallel**, non-canonically: data download, license reading, and the browser smoke test (M-03), without touching test or external partitions (B-02).
5. **Use one evidence table** with a claim-tag column instead of a separate ledger (m-03).
6. **Keep reconciliation records short:** accepted, rejected, repair, residual. A table, not narrative.
7. **Delay** README polish, figures, and screenshots until the claims are frozen. Draft video scripts early and record them only after the claims are frozen.

Risks the roadmap underestimates:

- model conversion and browser-runtime operator support (M-03);
- license surprises that force a dataset or encoder swap (M-08);
- submission-form and video-format friction (M-11).

Each of these costs hours if found late and minutes if found first.

## Judge-readability review

- The roadmap is a process document. A judge will look for product, evidence, and limits, and will not find them quickly here. That is acceptable only if the README carries the judge-facing story (m-05).
- Internal labels ("repaired Concept A", "overlay", "greenlight", "canonical") need translation or removal in public-facing text (m-05).
- Seven pre-build documents in a hackathon repository can read as process volume rather than rigor. Consolidating them (B-01) improves readability.
- A judge's first technical questions are likely to be: "What happens with a leaf that has another disease?", "How often does it miss rust while sounding confident?", and "Does it work offline on a cheap phone?". These map directly onto M-01, M-04, and M-06. Answering them in the README with measured numbers will matter more than any amount of process documentation.
- "How did the project respond to failures?" will be well answered only if the one-shot readout rule (B-02) keeps original failed readouts in the record.

## Required repairs before roadmap acceptance

**P0 — blocking**

1. **B-01:**
   - add a deadline-anchored time budget with a protected buffer and an overrun rule;
   - collapse Stages 0–6 into at most two PRs;
   - tier the reviews and merge the Stage 9 claims audit into the Stage 10 red team;
   - permit parallel non-canonical de-risking.
2. **B-02:**
   - commit the split manifest, class map, operating-point rule, and metric list before any readout;
   - make test and external partitions one-shot and cover all design choices;
   - pre-designate and quarantine the external set;
   - make group-aware or near-duplicate splitting mandatory.

**P1 — major**

3. **M-01:** Define "no visible rust" ≠ healthy, choose the routing rule for other-disease images and mixed infections, and rename the specificity metric.
4. **M-02:** Pre-register numerical Stage 7 criteria (confident-miss rate, coverage floor, bytes, latency, kill time). Turn the fallback ladder into ordered rungs with triggers and claim reductions, owner pre-approved. Decide whether the handcrafted rung qualifies as targeted Small AI.
5. **M-03:** Add the browser smoke test at the start of Stage 7 or in Stage 5.
6. **M-04:** Make the core selective-classification metrics mandatory, with intervals.
7. **M-05:** Require a measured OOD guard or a downgraded claim; freeze a licensed challenge set and a pass target before Stage 9.
8. **M-06:** Name the target device and browser; add the seven-step offline protocol and its evidence form.
9. **M-07:** Specify the record schema separating AI from human fields, the no-prefill rule, `not sure` resolution, the human-only summary, and the Stage 9 authority tests.
10. **M-08:** Add a license verdict (dataset, encoder, runtime; training use; redistribution of derived weights) as a 7A/7F exit condition with a stop or swap rule.
11. **M-09:** Add the decision-record framing paragraph, reword the Stage 2 objective, record or reword the Stage 6 authorization, and label sources versus inference.
12. **M-10:** Turn Stage 0 into a single compliance checklist mapped to enforcing stages, absorb Stage 6 into it, add two re-check points, and add the originality/assistance rule for submitted assets.
13. **M-11:** Deploy the live demo early, reconcile video requirements in a table, dry-run the forms, submit early if edits are allowed, and record proof of receipt.

**P2 — minor**

14. **m-01:** Checklist-style pre-build gates.
15. **m-02:** A fixed status vocabulary tied to PR and owner decision.
16. **m-03:** One public evidence and claims table.
17. **m-04:** Image retention, export, metadata, and deletion scope.
18. **m-05:** Remove jargon; require a README-first judge summary.
19. **m-06:** One canonical exclusion list, including "treatment plans".

## Optional improvements

- Fix the exact Spanish UI strings for the three AI states, the human actions, and the safety notice early, and review them once for terminology ("roya") and plain-language clarity. This reduces late wording churn but does not affect validity.
- Add a five-line model card (encoder, head, training data, operating point, known failure modes) as a section of the evidence table rather than a separate document.
- Keep a short decision log (one line per owner decision, with a PR link) in place of narrative reconciliation documents.

---

*This audit reviews only `ROADMAP.md` as a process artifact, read with `docs/PROJECT_WORKFLOW.md` and `docs/audits/roadmap/AUDIT_PACKAGE.md`. It does not validate any model, dataset, code, deployment, or submission. It makes no changes to the audited files.*
