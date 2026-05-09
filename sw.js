const CACHE_NAME = 'delivery-geral-v3';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './firebase-config.js',
  './auth.js',
  './pix.js',
  './notifications.js',
  './entregador.html',
  './lojista.html',
  './admin.html',
  './manifest.json',
  './icon-192.svg',
  './icon-512.svg',
  'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => {
      if (resp.ok && e.request.method === 'GET') {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
      }
      return resp;
    }).catch(() => caches.match('/index.html'))
    )
  );
});

// ===== PUSH NOTIFICATIONS (FCM Background) =====
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.notification?.title || 'Delivery Geral';
  const options = {
    body: data.notification?.body || 'Voce tem uma nova atualizacao!',
    icon: './icon-192.svg',
    badge: './icon-192.svg',
    tag: data.notification?.tag || 'delivery-geral',
    data: data.data || {},
    requireInteraction: true,
    actions: [
      { action: 'open', title: 'Abrir app' }
    ]
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(windowClients => {
      if (windowClients.length > 0) {
        windowClients[0].focus();
      } else {
        clients.openWindow('./index.html');
      }
    })
  );
});
