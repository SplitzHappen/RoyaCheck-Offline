# Stage 7B — BRACOL Deterministic Manifest and Quarantine Freeze

**Status:** BRACOL freeze complete; RoCoLe external freeze still pending before any Stage 7C training authorization.

## Source archive

- File: `coffee-datasets.zip`
- Bytes: `278741231`
- SHA-256: `e6fc32d504ae33e667475dec4c4aef710aac65ad12f16a401c706445c46c9f89`
- Provenance: owner-uploaded archive from the author/source-adjacent `esgario/lara2018` Coffee datasets route.
- Raw images are not committed to the repository.

## Archive integrity and metadata

- ZIP integrity: passed (`testzip() == None`)
- Total archive entries: `4990`
- Metadata: `coffee-datasets/leaf/dataset.csv`
- Metadata rows: `1747`
- Leaf image files: `1747`
- Image IDs: `1` through `1747`
- Missing image IDs relative to `dataset.csv`: `0`
- Extra image IDs: `0`
- Valid decoded images: `1747/1747`
- Image dimensions: `2048 x 1024`
- Image mode: `RGB`

## Stage 4 class construction

Closed Stage 4 defines a 1,685-record labelled BRACOL development source. Stage 7B therefore excludes the 62 rows with `predominant_stress == 5`.

Included counts:

| Source class | Count |
|---|---:|
| healthy | 272 |
| rust_present | 630 |
| leaf_miner_no_rust | 342 |
| brown_leaf_spot_no_rust | 346 |
| cercospora_no_rust | 95 |
| **Total** | **1685** |

Truth-group counts:

| Truth group | Count |
|---|---:|
| R | 630 |
| H | 272 |
| O | 783 |

## Duplicate grouping

- pHash algorithm: `imagehash.phash`-compatible 64-bit pHash.
- Candidate edge: Hamming distance <= 5.
- Candidate edges: `17`
- Duplicate components: `1668`
- Largest component size: `3`
- Same-leaf review trigger: component size > 2% of 1,685 = > 33.70
- Triggered: `false`
- Mixed-source-class components: `8`
- Mixed-truth-group components: `8`

No same-leaf manual review is triggered under the closed Stage 4 rule.

## Frozen split

Seed: `20261003`

| Partition | Records | R | H | O |
|---|---:|---:|---:|---:|
| train | 1180 | 441 | 190 | 549 |
| validation | 252 | 94 | 41 | 117 |
| internal_test | 253 | 95 | 41 | 117 |

Every duplicate component is assigned wholly to one partition.

## Validation gate integerization

Validation counts: `n_R=94`, `n_H=41`, `n_O=117`.

- Target-class coverage requires at least `68` of `R∪H` routed confidently.
- Rust coverage requires at least `47` rust-bearing validation leaves routed confidently.
- Healthy coverage requires at least `21` healthy validation leaves routed confidently.
- Confident miss requires at most `4` `R→NVR`.
- Other-condition to NVR requires at most `11` `O→NVR`.

Variable-denominator gates are evaluated exactly as integer inequalities:

- Selective accuracy: `100*(R_to_VR + H_to_NVR) >= 85*((R_union_H)_to_{VR_or_NVR})`
- Accepted rust recall: `100*R_to_VR >= 90*(R_to_{VR_or_NVR})`
- Accepted healthy specificity: `100*H_to_NVR >= 80*(H_to_{VR_or_NVR})`

## Internal-test frozen counts

Internal test counts: `n_R=95`, `n_H=41`, `n_O=117`.

The internal-test identifiers are frozen in `bracol_stage7b_split_ids.json`. No internal-test inference has been run.

## Boundary

This freeze did not perform training, validation performance selection, internal-test inference, RoCoLe external readout, challenge inference, MVP implementation, deployment, video production, or submission.

## Remaining before Stage 7C

RoCoLe external identifiers and metadata mapping are still pending. Stage 7C training should not be authorized until the owner accepts either:

1. a completed RoCoLe metadata/quarantine freeze, or
2. an explicit amendment deferring/removing the RoCoLe pre-training freeze requirement.
