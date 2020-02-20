const staticSeaLife = "pwa_sealife";
const assets = [
    "/",
    "index.html",
    "/css/style.css",
    "/js/app.js",
    
    "/images/sealife1.jpg",
    "/images/sealife2.jpg",
    "/images/sealife3.jpg",
    "/images/sealife4.jpg",
    "/images/sealife5.jpg",
    "/images/sealife6.jpg",
    "/images/sealife7.jpg",
    "/images/sealife8.jpg",
    "/images/sealife9.jpg",

];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticSeaLife).then(cache => {
            cache.addAll(assets)
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    );
  });