/*
 * عامل الخدمة (service worker) لموقع ملوك الطرنيب: يحفظ الموقع على الجهاز ليُفتح اللعب الفردي بلا إنترنت.
 *
 * هذا قالب: scripts/build.mjs يملأ رقم الإصدار وقائمة الملفات ويكتب النتيجة في dist/public/sw.js.
 *
 * القواعد:
 *  - عند التثبيت تُحفظ كل ملفات الموقع الثابتة دفعة واحدة؛ فشل أي ملف يُلغي التثبيت (لا نسخة ناقصة).
 *  - تغيير أي ملف يغيّر رقم الإصدار فيُثبَّت عامل جديد بنسخته الخاصة، وتُحذف النسخ القديمة عند تفعيله.
 *  - الصفحتان "/" و"/play": الشبكة أولًا (فيصلك آخر إصدار)، وإن لم تردّ خلال مهلة قصيرة أو فشلت أو ردّ الخادم
 *    بخطأ 5xx (مثل خادم مجاني نائم) نفتح النسخة المحفوظة. نحفظ ملفات الموقع عند التثبيت فقط، فلا تتخالف الصفحة مع ملفاتها.
 *  - ملفات /assets/ مُجزّأة بالمحتوى وتُقدَّم من الحفظ أولًا.
 *  - اتصال اللعب الجماعي (/ws) و/healthz والطلبات إلى مواقع أخرى لا نتدخل فيها إطلاقًا.
 */
'use strict';

const VERSION = '6e1076cc0f92';
const CACHE = 'molook-' + VERSION;
const PRECACHE = [
  "/apple-touch-icon.png",
  "/assets/main-2Z55DZIL.css",
  "/assets/main-QZYSNFBS.js",
  "/boot.js",
  "/characters/brown-front.webp",
  "/characters/brown-three.webp",
  "/characters/classic-front.webp",
  "/characters/classic-three.webp",
  "/characters/ghutra-front.webp",
  "/characters/ghutra-three.webp",
  "/characters/turban-front.webp",
  "/characters/turban-three.webp",
  "/favicon.svg",
  "/flag.webp",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "/index.html",
  "/manifest.webmanifest",
  "/pattern-suits.svg",
  "/theme/palm.svg",
  "/theme/swords.svg"
];
const PAGES = ['/', '/play'];
const NAVIGATION_TIMEOUT_MS = 4000;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE.map((url) => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.filter((name) => name.startsWith('molook-') && name !== CACHE).map((name) => caches.delete(name))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === '/ws' || url.pathname === '/healthz' || url.pathname === '/sw.js') return;

  if (request.mode === 'navigate') {
    const path = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, '') : url.pathname;
    if (PAGES.includes(path)) event.respondWith(page(event));
    return;
  }
  if (PRECACHE.includes(url.pathname)) event.respondWith(fromCache(request));
});

async function fromCache(request) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(request, { ignoreVary: true, ignoreSearch: true });
  return hit || fetch(request);
}

async function page(event) {
  const saved = async () => (await caches.open(CACHE)).match('/index.html', { ignoreVary: true });

  // الطلب والمهلة يبدآن فورًا (قبل أي انتظار)، فلا يتأخر وصول الصفحة بسبب فتح الحفظ.
  const network = fetch(event.request);
  // نبقي العامل حيًّا حتى ينتهي طلب الشبكة ولو سبقته النسخة المحفوظة (لا يُرفض منه شيء).
  event.waitUntil(network.then(() => undefined, () => undefined));

  let timer;
  const timeout = new Promise((resolve) => {
    timer = setTimeout(() => resolve(null), NAVIGATION_TIMEOUT_MS);
  });
  try {
    const response = await Promise.race([network, timeout]);
    if (response && (response.ok || response.type === 'opaqueredirect' || response.status < 500)) return response;
    // مهلة انتهت، أو الخادم ردّ بخطأ 5xx: النسخة المحفوظة إن وُجدت، وإلا ننتظر الشبكة كما هي.
    return (await saved()) || response || network;
  } catch (error) {
    const fallback = await saved();
    if (fallback) return fallback;
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
