# Stage 0 Tier A Audit Package

**Stage under review:** Stage 0 — Rules, Submission Requirements, and Compliance Control  
**Primary artifact:** `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`  
**Review type:** Independent adversarial compliance audit  
**Builder:** ChatGPT/Vale  
**Owner / sole human entrant:** José Antonio Tamburini Martínez

---

## 1. Audit objective

Determine whether the Stage 0 compliance checklist is sufficiently accurate, sourced, conservative, and operational to govern Stages 1–10 without creating avoidable disqualification or submission risk.

This is a compliance audit, not a concept-selection or product-redesign exercise.

---

## 2. Read first

Review the current versions on the Stage 0 PR branch of:

1. `docs/stages/00_rules/STAGE_00_COMPLIANCE_CHECKLIST.md`
2. `ROADMAP.md`
3. `docs/PROJECT_WORKFLOW.md`

Use the source hierarchy and source IDs defined inside the Stage 0 checklist.

---

## 3. Locked project scope

Do not reopen:

- sector selection;
- the Agriculture route;
- the narrow RoyaCheck Offline product concept;
- the human-final-authority design;
- the browser-local/offline core requirement.

Only challenge these if the Stage 0 sources establish an actual contradiction or disqualifying rule.

---

## 4. Public-GitHub communication boundary

In any GitHub file, PR body, review, issue, or comment:

- do not mention private repositories;
- do not mention private note systems or internal orchestration;
- do not speculate about where existing knowledge originally came from;
- do not discuss private preparation history;
- do not invent chronology or timestamps.

Audit the public Stage 0 artifact and the official sources it cites.

---

## 5. Required audit questions

### A. Source authority

Check whether every material requirement is:

- supported by an appropriate official/public or official participant source;
- clearly distinguished from project policy;
- not derived from an unofficial secondary summary where a primary source exists.

Flag any row that overstates what its source establishes.

### B. Competition and eligibility control

Check:

- sector rules;
- solo/team rules;
- English requirement;
- competition window;
- submission deadline/time zone;
- official submission channels;
- receipt requirement.

### C. Submission mechanics

Check:

- public GitHub requirement;
- live-demo requirement;
- Demo Video;
- Tech Video;
- Team Video;
- 2–5 minute challenge video;
- Hack-Nation platform;
- Google Form backup;
- unresolved video lengths/field mapping;
- submission editability assumptions.

Determine whether the conservative fallback rules are sufficient.

### D. Originality and AI-assistance rule silence

Audit whether the checklist correctly avoids treating silence as permission.

Specifically assess:

- exact originality rule remains unresolved;
- exact AI coding-assistant rule remains unresolved;
- exact outside-review rule remains unresolved;
- exact pre-existing-boilerplate rule remains unresolved;
- the adopted project policies are conservative enough without inventing restrictions.

Do not infer permission solely from sponsor/tool presence.

### E. Small AI requirements

Verify that Stage 0 correctly captures and maps:

- targeted/use-case-driven AI;
- constrained-environment value;
- realistic device access;
- offline core;
- small/sideloadable model/runtime;
- local-language interaction;
- human final call;
- uncertainty/fail-safe behavior;
- no autonomous action;
- no hallucinated agronomy;
- data-source/license/size/coverage disclosure;
- AI-value explanation;
- working-prototype proof;
- responsible-AI/privacy requirements.

### F. Rights and licensing

Check whether Stage 0 adequately covers:

- participant ownership;
- organizer license over submitted materials;
- third-party IP/privacy/confidentiality;
- dataset/model/runtime redistribution implications;
- repository-license policy.

### G. Branding/name restriction

Pay special attention to the official restriction on using organizer/partner names, acronyms, logos, or branding without written consent.

The current repository name contains the organizer acronym.

Determine:

1. whether this is a real compliance risk under the cited official terms;
2. severity;
3. narrowest defensible repair;
4. whether Stage 0 must remain open until repaired.

Do not modify or rename anything yourself.

### H. Downstream enforcement

Verify that each confirmed requirement maps to:

- an enforcing later stage;
- concrete evidence that can prove compliance.

Flag any requirement that exists only as prose with no later enforcement.

### I. Stage 0 closure

Determine whether Stage 0 can close as written, or what exact owner actions/repairs remain.

---

## 6. Severity definitions

### BLOCKING

A finding that could:

- make the entry ineligible;
- materially violate a confirmed competition rule;
- invalidate the intended submission route;
- leave a hard submission requirement unaddressed;
- create a material rights/IP problem.

### MAJOR

A finding that materially weakens:

- rule interpretation;
- submission reliability;
- auditability;
- technical-compliance mapping;
- claim discipline.

### MINOR

A non-blocking wording, consistency, navigation, or precision issue.

---

## 7. Required output structure

Create:

`docs/audits/stage-00/STAGE_00_AUDIT.md`

Use:

# Stage 0 Compliance Audit

## Verdict

Exactly one:

- PASS
- PASS WITH MINOR REPAIRS
- PASS WITH MAJOR REPAIRS
- FAIL / BLOCKED

Then provide exact counts:

- Blocking:
- Major:
- Minor:

## Executive assessment

Short and decision-oriented.

## Blocking findings

For each:

1. Finding ID
2. Exact issue
3. Why it matters
4. Evidence/source
5. Narrowest defensible repair

## Major findings

Same structure.

## Minor findings

Same structure.

## Source-authority review

## Submission-mechanics review

## Originality / AI-assistance rule-silence review

## Small-AI compliance review

## Rights / licensing / branding review

## Downstream enforcement review

## Stage-closure assessment

## Required repairs before closure

Prioritize as P0 / P1 / P2.

---

## 8. Publishing instructions

Use a dedicated audit branch from the Stage 0 PR head.

Suggested branch:

`claude/stage-00-compliance-audit`

Add exactly one formal audit artifact:

`docs/audits/stage-00/STAGE_00_AUDIT.md`

Open a pull request targeting the Stage 0 branch:

`chatgpt/stage-00-compliance`

Suggested PR title:

`Audit: Stage 0 competition compliance`

The audit PR should contain only the audit artifact.

Do not modify the Stage 0 checklist.
Do not rename the repository.
Do not implement repairs.
Do not merge either PR.

Once the audit PR exists, stop.

Vale will reconcile material findings.
José Antonio retains final owner authority.
