// TUSOME offline support.
// Caches the learner-facing pages and local assets for repeat visits.
// First visit still needs an internet connection so the cache can be installed.

const CACHE_NAME = "tusome-static-v4";
const CORE_FILES = [
  "./",
  "./index.html",
  "./subjects.html",
  "./english.html",
  "./biology.html",
  "./chemistry.html",
  "./physics.html",
  "./curriculum.html",
  "./mathematics.html",
  "./mathematics-practice.html",
  "./lesson.html",
  "./practice.html",
  "./onboarding.html",
  "./dashboard.html",
  "./progress.html",
  "./style.css",
  "./data.js",
  "./english-data.js",
  "./storage.js",
  "./app.js",
  "./demo.js",
  "./home.js",
  "./subjects.js",
  "./english.js",
  "./biology.js",
  "./chemistry.js",
  "./physics.js",
  "./subject-engine.js",
  "./curriculum.js",
  "./lesson.js",
  "./practice.js",
  "./onboarding.js",
  "./dashboard.js",
  "./progress.js",
  "./mathematics.js",
  "./mathematics-learning.js"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CORE_FILES);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (key) {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener("fetch", function (event) {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // For page navigation, prefer fresh content but fall back to the cached page.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then(function (response) {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, copy);
          });
        }
        return response;
      }).catch(function () {
        return caches.match(request).then(function (cached) {
          return cached || caches.match(request, { ignoreSearch: true }).then(function (page) { return page || caches.match("./index.html"); });
        });
      })
    );
    return;
  }

  // Local styles/scripts are served from cache first, then refreshed from network.
  event.respondWith(
    caches.match(request).then(function (cached) {
      if (cached) return cached;
      return fetch(request).then(function (response) {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(request, copy);
          });
        }
        return response;
      });
    })
  );
});
