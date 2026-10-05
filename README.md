# RoyaCheck Offline

RoyaCheck Offline is a hackathon MVP for browser-local coffee-leaf observation. It lets a user select or capture a coffee-leaf image, run a compact local AI proposal on the device, review that proposal, choose a human disposition, and save a text-only local observation. The prototype is designed for low-connectivity field contexts where small AI should support human review without pretending to replace it.

- **Live demo:** https://royacheck-offline-current.onrender.com
- **Public repository:** https://github.com/SplitzHappen/RoyaCheck-Offline

## What it does

RoyaCheck Offline accepts one image at a time and proposes one of three outputs:

- `visible_rust`
- `no_visible_rust`
- `not_sure`

The AI output is only a proposal. The user must review the image, choose a human disposition, confirm that choice, and save the local observation. Only the human disposition is treated as the formal local record.

## How to use the live demo

1. Open the live demo link.
2. Select a coffee-leaf image from a computer, or on mobile choose an image from the gallery or take a new picture.
3. Run the local AI check.
4. Review the AI proposal and the image.
5. Choose the human disposition.
6. Confirm the human decision.
7. Save the text-only local observation.

## Run locally

This is a static browser app. From the repository root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/app/
```

The repository also defines a convenience script:

```bash
npm run serve:app
```

## Architecture summary

- Static browser application under `app/`.
- Local ONNX inference in the browser.
- ONNX Runtime Web is served with the app.
- No backend inference API is required.
- The browser-local workflow separates the AI proposal, the human disposition, and the saved local record.
- Local storage is used for saved text-only observations in the MVP flow.

## Data and privacy note

The selected image is processed locally for inference. In this MVP, saved observations are text-only local records. The raw image is not saved with the record.

## Human-final authority

RoyaCheck Offline is intentionally designed so that the model does not make the final decision. The model proposes; the human signs the record. The saved local observation is based on the human disposition, not automatic acceptance of the AI output.

## Submission notices

The public submission notices are maintained under `docs/submission/`:

- `AI_TOOLING_DISCLOSURE.md`
- `THIRD_PARTY_NOTICES.md`
- `SUPPORTED_BROWSER_AND_OFFLINE_LIMITATIONS.md`

The canonical public deployment is the Render-hosted live demo linked above. GitHub Pages is not the canonical deployment surface for this submission.

## Safety and claim boundaries

This prototype does **not**:

- diagnose a plant;
- recommend treatment;
- recommend pesticide use;
- claim field validation;
- claim WBG or World Bank Group endorsement;
- verify that the image is a coffee leaf;
- replace qualified human review.

The local-language component is a fixed-string scaffold only and remains pending fluent human validation.

## Status

This is a hackathon prototype / MVP, not production software. Stage 7 and Stage 8 evidence records exist in the repository, but this README does not claim formal closure of those stages or add new validation, field-performance, or deployment-readiness claims.
