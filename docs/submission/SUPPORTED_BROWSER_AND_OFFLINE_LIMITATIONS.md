# Supported Browser and Offline Limitations Draft

This draft supports the Stage 8 follow-up PR and is not final submission copy.

## Tested evidence status

PR #21 browser smoke evidence covered the browser-local inference MVP at an earlier head. It did **not** cover PR #22's saved-record list, per-record delete, local-language scaffold, or r1-to-r2 service-worker upgrade behavior.

PR #22 now includes `tests/browser-followups.mjs`, but that test must still be run and recorded on the final candidate SHA before Ready for Review.

## Browser support

Evidence so far is Chromium-based. iOS Safari, Firefox, and lower-end Android browsers remain untested unless later evidence is added.

The app relies on browser features including:

- ES modules;
- WebAssembly through ONNX Runtime Web;
- IndexedDB;
- Service Worker and Cache Storage;
- `crypto.subtle` for runtime model hash verification.

Plain HTTP is not sufficient for typical mobile testing because service workers and some browser APIs require HTTPS or localhost.

## Offline behavior

The first load requires a network connection. After successful service-worker installation, the app attempts to cache the static shell, ONNX model, ONNX Runtime Web WASM assets, preprocessing code, and follow-up UI code.

Approximate first-load cached payload remains about 18.1 MB. This is material in low-connectivity environments.

The current service worker attempts to reduce stale-code upgrade risk by:

- fetching precache assets with `cache: "reload"`;
- using `cache: "no-cache"` for runtime network fetches before cache fallback;
- versioning the cache as `royacheck-stage8-a0-4037c096-20261004-r2`.

The r1-to-r2 upgrade repair still requires a clean browser upgrade test before merge.

## Local storage limits

Saved observations are stored only in this browser's IndexedDB. They may be removed by browser storage eviction, private/incognito browsing, clearing site data, device storage pressure, or browser privacy policies.

The MVP provides no cloud backup, export, synchronization, or recovery mechanism.

Raw images are not retained in the saved records.

## Localization limits

The app includes a fixed-string local-language scaffold, but actual Lugisu/Lumasaba wording is pending fluent human validation. Validated localized usability has not been established.
