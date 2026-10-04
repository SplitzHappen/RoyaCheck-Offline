const CACHE_NAME = "royacheck-stage8-a0-4037c096-20261004-r2";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./followups.js",
  "./preprocess.js",
  "./manifest.webmanifest",
  "./assets/icon.svg",
  "./assets/model/royacheck_a0_fp32.onnx",
  "./vendor/onnxruntime-web/ort.wasm.min.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.mjs",
  "./vendor/onnxruntime-web/ort-wasm-simd-threaded.wasm"
];

async function precacheCoreAssets() {
  const cache = await caches.open(CACHE_NAME);
  await Promise.all(CORE_ASSETS.map(async (asset) => {
    const response = await fetch(new Request(asset, { cache: "reload" }));
    if (!response || response.status !== 200 || response.type === "opaque") {
      throw new Error(`Precache failed for ${asset}`);
    }
    await cache.put(asset, response);
  }));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    precacheCoreAssets().then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(new Request(event.request, { cache: "no-cache" })).then((response) => {
      if (!response || response.status !== 200 || response.type === "opaque") return response;
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request))
  );
});
