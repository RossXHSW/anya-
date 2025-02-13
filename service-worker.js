const cacheName = 'valentine-cache-v1';
const staticAssets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './heart.gif', // Replace with your heart GIF
  './icon-192x192.png',
  './icon-512x512.png'
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});