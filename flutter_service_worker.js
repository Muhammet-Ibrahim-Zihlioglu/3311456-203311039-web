'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2cf1941c2757e3875adc5caeda4d5a93",
"assets/assets/airpod3nesil.png": "c127c76fbf7c095061c25c0309344381",
"assets/assets/airpod3nesil1.png": "a4f1b715b83fa1df66950d86b73cd17e",
"assets/assets/airpod3nesil2.png": "464a9af6b68b0d667ee560c8476f7f2a",
"assets/assets/arkaplan1.png": "441ebd07757afdfb7f5952432d343dba",
"assets/assets/arkaplan2.png": "1d233e6648a139a8b30d63489e852fc8",
"assets/assets/huaweisaatkhverengi.png": "1e567be0e03cbc89f3dd609d89c35e6a",
"assets/assets/huaweisaatkhverengi1.png": "44567e16d78b0e48401cc80d4becb69c",
"assets/assets/huaweisaatkhverengi2.png": "b4305f3b4c3d430cccff01a6d0851b4d",
"assets/assets/huaweisaatsiyah.png": "ace121a62ee05dc541539a4938c6eb42",
"assets/assets/huaweisaatsiyah1.png": "3c9011435171459381d21eea182233e7",
"assets/assets/huaweisaatsiyah2.png": "a28f60b282614767318f6a7500ea54fa",
"assets/assets/ikonlar/%25C3%25B6nerilenler.png": "377e4e39c6f567168a35a6b26c5906fa",
"assets/assets/ikonlar/gerid%25C3%25B6n%25C3%25BCs.png": "8855c854737b85647265a6b3b4869ab9",
"assets/assets/ikonlar/kalp.png": "cb6cadd31e0e0e553192800898e4189c",
"assets/assets/ikonlar/kulakl%25C4%25B1k.png": "ea988b2615b2305ee5bdec8c4a812be2",
"assets/assets/ikonlar/laptop.png": "f0c8babcba985ddb397abd8f330824ad",
"assets/assets/ikonlar/laptop_arkaplan.jpg": "30fc33350ab977a2788651f1deacfd54",
"assets/assets/ikonlar/logout.png": "876ba3ccdb46aefa983cede7576e665d",
"assets/assets/ikonlar/person.png": "6d45c4977dfa768323c4377262370a48",
"assets/assets/ikonlar/sepet.png": "dcc7c0d77ae32308167eaa364970b67d",
"assets/assets/ikonlar/telefon.png": "45a0eaf11f81b131364d1be6d1e3cbff",
"assets/assets/ikonlar/watch.png": "ee500275dbf83cef67e5339c4e163123",
"assets/assets/ikonlar/y%25C4%25B1ld%25C4%25B1z.png": "5d0f055ef5c3ab4834ac9f452df580d9",
"assets/assets/ikonlar/zil.png": "d63b0154151ba5e95af09a6c5bfc5b14",
"assets/assets/indirim.png": "40787f65171c8bdc67af047696189edf",
"assets/assets/indirim1.png": "62454a8603f67210377b9aebf6a02f3d",
"assets/assets/iphone14.png": "b716148993ae23c5aabd025dc9a003cf",
"assets/assets/iphone14probeyaz.png": "16d8c917f024f47330054ff61740e2f5",
"assets/assets/iphone14progold.png": "4abadfc7fa54b94dcb2cb1ceb57bf157",
"assets/assets/iphone14progri.png": "c12549101c6f4b29e362af9a52d3eb74",
"assets/assets/iphone14prosiyah.png": "1412817dada76810e56bf91e24d5232e",
"assets/assets/LOGINLOGO.png": "30b57c1ccf895fa92081fec7cbff4b5e",
"assets/assets/LOGO.png": "163f32166ecc4acac9688a37f028a388",
"assets/assets/Monsternotebook.png": "c50e56b7adcf452f032847127cf9b789",
"assets/assets/Monsternotebook1.png": "0ae370f6e08f1c0f4fd430c606068f1c",
"assets/assets/Monsternotebook2.png": "f8fb53a0d362bbab0f8895f4fdf0ba8f",
"assets/assets/Monsternotebook3.png": "7cdad30036416d270fa7d15ba58b47d0",
"assets/assets/profil.png": "99d8bdd5906c2f8ba8e2d76f319ca099",
"assets/assets/Tik.png": "7a9c915f6a75ef521c9a48effcf71394",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1c1af7a96477dd23b121bf6b33c55714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0793705b14d023421fd97cc5ca40c8da",
"/": "0793705b14d023421fd97cc5ca40c8da",
"main.dart.js": "8c8f2d98737897ea9cd6b5ec4e33591e",
"manifest.json": "1e2c8de8bab021970147ad8fce5f3cbb",
"version.json": "4fbc1ffbf0dd9ac26af94de4dde65cc3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
