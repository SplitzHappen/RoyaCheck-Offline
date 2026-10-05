# Supported Browser and Offline Limitations

This notice documents the public MVP's browser, offline, storage, and localization limits. It is a limitation notice, not a claim of production readiness or complete cross-browser validation.

## Canonical public demo

The canonical public demo is:

```text
https://royacheck-offline-current.onrender.com
```

The repository is a static browser app, but the active public submission surface is the Render-hosted demo above. GitHub Pages is not the canonical deployment surface for this submission.

## Tested evidence status

Repository evidence supports a browser-local inference MVP and a static app flow. Evidence remains bounded to the recorded hackathon tests and browser/runtime checks.

The evidence does not establish:

- field validation;
- full mobile-device coverage;
- full iOS Safari coverage;
- full Firefox coverage;
- low-end Android performance coverage;
- validated Lugisu/Lumasaba localization;
- coffee-leaf verification or general crop-diagnosis capability.

## Browser support

Evidence so far is primarily Chromium-based. iOS Safari, Firefox, and lower-end Android browsers remain untested unless later evidence is added.

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

Offline behavior is browser-dependent and can fail if service-worker installation fails, if the browser evicts storage, if a private/incognito profile is used, or if the device/browser disables required APIs.

## Local storage limits

Saved observations are stored only in the current browser's IndexedDB. They may be removed by browser storage eviction, private/incognito browsing, clearing site data, device storage pressure, operating-system cleanup, or browser privacy policies.

The MVP provides no cloud backup, export, synchronization, account login, server recovery, or cross-device transfer mechanism.

Raw images are not retained in saved records.

## Localization limits

The app includes a fixed-string local-language scaffold, but actual Lugisu/Lumasaba wording is pending fluent human validation. Validated localized usability has not been established.

The public submission should describe this as a local-language scaffold, not as verified Lugisu/Lumasaba localization.
