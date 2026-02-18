self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('cake-app').then(function(cache) {
      return cache.addAll(['index.html']);
    })
  );
});
