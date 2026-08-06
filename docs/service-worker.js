const CACHE_NAME = "skandi-2026-v3";
const CORE = [
  "./",
  "./index.html",
  "./app.webmanifest",
  "./ANFORDERUNGEN.md",
  "./service-worker.js",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/icon.svg",
  "./Reiseroute%20(Google%20Maps).jpg",
  "./Oeresundbruecke.jpg",
  "./L%C3%BCbeck/117219042.jpg",
  "./L%C3%BCbeck/464668659.jpg",
  "./Kopenhagen/183496537.jpg",
  "./Kopenhagen/233219480.jpg",
  "./G%C3%B6teborg/729899465.jpg",
  "./G%C3%B6teborg/731736193.jpg",
  "./Blokhus/House%20Amina%20-%20Blokhus.jpg",
  "./Blokhus/House%20Amina%20-%20Meeresblick.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          return res;
        })
        .catch(() => {
          if (req.mode === "navigate") {
            return caches.match("./index.html");
          }
          return new Response("Offline nicht verfuegbar", {
            status: 503,
            headers: { "Content-Type": "text/plain; charset=utf-8" }
          });
        });
    })
  );
});
