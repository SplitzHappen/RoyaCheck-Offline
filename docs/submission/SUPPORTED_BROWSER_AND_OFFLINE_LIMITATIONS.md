# Supported Browser and Offline Limitations Draft

This draft is for submission-readiness review. It does not close Stage 8.

## Supported runtime assumption

RoyaCheck Offline is a static browser-local prototype requiring a modern browser with support for:

- ES modules;
- WebAssembly;
- IndexedDB;
- `crypto.subtle`;
- Canvas image decode/readback;
- Service Worker and Cache Storage for offline reload behavior.

## Tested path

Current evidence covers Chromium-based testing through Playwright in the Stage 8 smoke evidence.

## Offline behavior

First load requires a network connection so the app shell, ONNX model, and local ONNX Runtime Web assets can be cached. After cache verification, the app is designed to reload and run inference offline in the same browser profile.

## Known limitations

- Plain HTTP phone testing may not support all secure-browser APIs; use HTTPS or localhost.
- Minimum device/browser support has not been field-tested.
- Mobile camera photos may differ from the internal BRACOL evidence domain.
- Localization is fixed-string only and Lugisu wording remains pending human validation.
- Stored records are local to the browser/profile and can be deleted by the user.
- Raw images are not retained by default.
