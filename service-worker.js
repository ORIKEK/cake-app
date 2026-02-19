self.addEventListener('install', (event) => {
  console.log('Orikek Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // This is a basic pass-through to satisfy PWA requirements
  event.respondWith(fetch(event.request));
});
