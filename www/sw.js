"use strict";

const CACHE_NAME = "transl-cache-v2";

const APP_SHELL = [
    "/",
    "/index.html",
    "/manifest.json",
    "/css/style.css",
    "/js/app.js",
    "/js/auth.js",
    "/js/language.js",
    "/js/language-metadata.js",
    "/assets/transl-icon-192.png",
    "/assets/transl-icon-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", event => {
    const request = event.request;

    if (request.method !== "GET") {
        return;
    }

    event.respondWith(
        fetch(request)
            .then(response => {
                // Never cache partial/range responses.
                if (response.status === 206) {
                    return response;
                }

                // Only cache successful complete responses.
                if (response.status === 200 && response.type === "basic") {
                    const responseClone = response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => cache.put(request, responseClone))
                        .catch(error => {
                            console.warn(
                                "TransL cache write skipped:",
                                error
                            );
                        });
                }

                return response;
            })
            .catch(() => caches.match(request))
    );
});