const timestamp = 1638160654603;
const build = [
  "/_app/start-a928099e.js",
  "/_app/assets/start-808c0b29.css",
  "/_app/pages/__layout.svelte-47f3a9a6.js",
  "/_app/assets/pages/__layout.svelte-d7ad1588.css",
  "/_app/error.svelte-5995508b.js",
  "/_app/pages/index.svelte-d9c924f6.js",
  "/_app/assets/pages/index.svelte-898adf1e.css",
  "/_app/pages/portfolio.svelte-432ba4da.js",
  "/_app/pages/services.svelte-f0ef5daa.js",
  "/_app/assets/pages/services.svelte-2e513cab.css",
  "/_app/pages/aboutus.svelte-ecea4caa.js",
  "/_app/pages/contact.svelte-ddbd71c6.js",
  "/_app/pages/tariffs.svelte-88c99fb7.js",
  "/_app/pages/diffs.svelte-bd8025fe.js",
  "/_app/pages/windi.svelte-c299ee34.js",
  "/_app/pages/auth/signin.svelte-6617bc40.js",
  "/_app/pages/auth/signup.svelte-db98b79b.js",
  "/_app/pages/test.svelte-1bcf34e4.js",
  "/_app/chunks/vendor-c371bb65.js",
  "/_app/assets/vendor-886ef551.css",
  "/_app/chunks/preload-helper-ec9aa979.js",
  "/_app/chunks/Container-44b784c2.js",
  "/_app/chunks/Section-63d5955b.js",
  "/_app/assets/Section-3873c5eb.css",
  "/_app/chunks/rolly.esm-c05281fb.js",
  "/_app/chunks/Swipe-2d46060e.js",
  "/_app/assets/Swipe-bed73967.css",
  "/_app/chunks/SwipeItem-8533ea71.js",
  "/_app/assets/SwipeItem-714a3cb2.css",
  "/_app/chunks/loopTypewriter-2a163f9d.js",
  "/_app/chunks/getRandomElement-20df41a3.js",
  "/_app/chunks/writeEffect-ad25c0cc.js",
  "/_app/chunks/typingInterval-b805e32c.js",
  "/_app/chunks/scramble-fa1afc2b.js",
  "/_app/chunks/isInRange-d476866c.js",
  "/_app/chunks/typewriter-4aea602c.js",
  "/_app/chunks/onAnimationEnd-c4ef4008.js",
  "/_app/chunks/index-91a20ed4.js"
];
const files = [
  "/css/font-awesome.css",
  "/css/montserrat.css",
  "/css/rolly.css",
  "/css/svg-with-js.min.css",
  "/favicon.ico",
  "/fonts/FontAwesome/fa-brands-400.woff2",
  "/fonts/FontAwesome/fa-duotone-900.woff2",
  "/fonts/FontAwesome/fa-light-300.woff2",
  "/fonts/FontAwesome/fa-regular-400.woff2",
  "/fonts/FontAwesome/fa-solid-900.woff2",
  "/fonts/FontAwesome/fa-thin-100.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-100.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-100.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-200.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-200.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-300.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-300.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-500.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-500.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-600.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-600.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-700.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-700.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-800.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-800.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-900.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-900.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-italic.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-italic.woff2",
  "/fonts/Montserrat/montserrat-v14-cyrillic-regular.woff",
  "/fonts/Montserrat/montserrat-v14-cyrillic-regular.woff2",
  "/images/logo-vector.svg",
  "/images/main/fixed.jpg",
  "/images/main/headerInfo/comp.png",
  "/images/main/headerInfo/icons/1.png",
  "/images/main/headerInfo/icons/2.png",
  "/images/main/headerInfo/icons/3.png",
  "/images/main/headerInfo/icons/4.png",
  "/images/main/hero.jpg",
  "/images/main/howWeCanHelp/how-we-can-help.png",
  "/images/main/reasonsWhyUs/icons/handshake.png",
  "/images/main/reasonsWhyUs/icons/quality.png",
  "/images/main/reasonsWhyUs/icons/speed.png",
  "/images/main/reasonsWhyUs/icons/warranty.png",
  "/images/services/computer-bg.png",
  "/images/services/header-fast.jpg",
  "/images/services/header-lazy.jpg",
  "/images/tariffs/header-fast.jpg",
  "/images/tariffs/header-lazy.jpg",
  "/images/themesdev-logo-dark.svg",
  "/images/user.jpg",
  "/js/fontawesome/brands.js",
  "/js/fontawesome/fontawesome.js",
  "/js/fontawesome/light.js",
  "/js/fontawesome/regular.js",
  "/js/fontawesome/solid.js",
  "/logo_512.png",
  "/manifest.json",
  "/robots.txt"
];
const ASSETS = `cache${timestamp}`;
const to_cache = build.concat(files);
const staticAssets = new Set(to_cache);
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
    self.skipWaiting();
  }));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then(async (keys) => {
    for (const key of keys) {
      if (key !== ASSETS)
        await caches.delete(key);
    }
    self.clients.claim();
  }));
});
async function fetchAndCache(request) {
  const cache = await caches.open(`offline${timestamp}`);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (err) {
    const response = await cache.match(request);
    if (response)
      return response;
    throw err;
  }
}
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || event.request.headers.has("range"))
    return;
  const url = new URL(event.request.url);
  const isHttp = url.protocol.startsWith("http");
  const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
  const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
  const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
  if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
    event.respondWith((async () => {
      const cachedAsset = isStaticAsset && await caches.match(event.request);
      return cachedAsset || fetchAndCache(event.request);
    })());
  }
});
