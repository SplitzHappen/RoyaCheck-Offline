# Supported Browser and Offline Limitations Draft

**Status:** draft; not final submission text.

## Tested browser evidence

PR #21 recorded Chromium/Playwright evidence for the browser-local inference loop. PR #22 adds review-later/fixed-string follow-up behavior and requires its own browser evidence before Ready for Review.

This document must not imply that PR #21 browser evidence covers PR #22 behavior.

## Untested browsers

The following remain untested for the PR #22 follow-up behavior:

- iOS Safari;
- Firefox;
- Android browser variants;
- low-memory mobile devices.

## First-load size and connectivity

The current cached app bundle is approximately **18.1 MB**. First load requires a working connection before offline use can be verified. This matters for low-connectivity environments.

## Offline behavior

The service worker caches the static app shell, model, preprocessing code, follow-up module, manifest, icon, and local ONNX Runtime Web assets. Offline behavior is intended for the static app after a successful first load and cache verification.

## Local storage durability

Saved observations are stored only in this browser's IndexedDB. They may be removed by browser storage eviction, private/incognito browsing, Safari/browser storage policies, clearing site data, or device/browser reset. The MVP provides no backup, sync, or export.

## Privacy boundary

The MVP is designed not to retain raw images in saved records and not to send raw images automatically. Records are text-only.
