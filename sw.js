const CACHE = "danielpro-v1";
const FICHIERS = ["./", "./index.html", "./manifest.json"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FICHIERS); }));
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (rep) { return rep || fetch(e.request); })
  );
});