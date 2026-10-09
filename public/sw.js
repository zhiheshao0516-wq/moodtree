/* MoodTree Service Worker
 * 策略：
 *  - /api/ 请求一律直连网络（不缓存），离线时让调用方走自身的失败提示
 *  - 应用外壳与静态资源采用 stale-while-revalidate：先回缓存保证秒开，后台异步更新
 *  - 版本升级时 activate 清理旧缓存
 */
const CACHE = 'moodtree-shell-v7';
const SHELL = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/icons/apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()).catch(() => {})
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;       // 跨域资源不托管
  if (url.pathname.startsWith('/api/')) return;          // API 永远走网络

  const isHtml = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (isHtml) {
    e.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.ok) caches.open(CACHE).then((cache) => cache.put(req, res.clone())).catch(() => {});
          return res;
        })
        .catch(() => caches.open(CACHE).then((cache) => cache.match(req, { ignoreSearch: true })).then((cached) => cached || Response.error()))
    );
    return;
  }

  e.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: url.pathname === '/index.html' });
      const fetching = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone()).catch(() => {});
          return res;
        })
        .catch(() => cached || Response.error());
      return cached || fetching;
    })
  );
});
