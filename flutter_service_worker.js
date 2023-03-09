'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "53fb59e54fb87bb44dba7c2200e1dead",
"index.html": "be0b014d1787cbb63fdfe86064faa6bf",
"/": "be0b014d1787cbb63fdfe86064faa6bf",
"main.dart.js": "f7084b5fbd40b516f06f234d82f32967",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ace26d0c71a6ddf01f5f72671a426a89",
".git/config": "57cb4c3f89a3ad836b0decb695824e4e",
".git/objects/66/21df32815c62ab96ca0b96931fc2202c2e6912": "e5167549c7c2b09ea066e88176f11b30",
".git/objects/3b/6c1070db9cc595ad84a0bb975aec01d6a38403": "701df626d2bee40b98b0d03fe3a1a538",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/3c/68fbcdda3496de9111c793948d7a2e82df19af": "4f61867f9d402a306d891e867062f9da",
".git/objects/3c/f695c6f54e75e1a9d365e667784ed4dad9815a": "12a2a47fd6e885fd3b820360b61f5931",
".git/objects/3c/f69c233abaa449cd04eda40e427c917d653655": "f6e8ecbcb7711969d95dc698dca8d5e8",
".git/objects/51/0a27a0e896d51068bb609ab09d9c26c085305c": "d890466c5812ef8352075edafeaf8791",
".git/objects/0e/1ffe58551141c3b818189dcf6813bd5863c30a": "c3417dc464eda131ca23ff9ee03aae38",
".git/objects/ad/478d94ee387ce384689999126fde54b7cf959c": "a95df35a17614e3c4e9a59ca64032de7",
".git/objects/da/ddd521431eee2087e751478e61568e77a41a36": "97f56146c9dc271f296fbc85c4b23a79",
".git/objects/a2/41f7a5794b4115022eeeb4f0ff460448368998": "b798855ae499540d27c357b77cd2c6ba",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/684d19ec1cd9b95c2b1bd93d58af8e7d896ca0": "b091bbf82012a955ad7cca1a924ae0dc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/61f61ae4f6398cc0732be2f62bdbe169f83772": "b1fa2de993839aa1f12b50f39ded62b3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a6b378ddac7eb507ff3e4b44b492e270ebb88f": "2eafd84c8df50d9259d4c3ed54491406",
".git/objects/c8/bc8bd442cd5d947dd97f243a76884f27908bd8": "ac37f14ce5142b10cdcafa7898365e46",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/1a/d80b5217c0476ac1ee8d43ec3810e56345fc1a": "f9241e7c202e8bee646afb0bd8622dd7",
".git/objects/7b/f01cbe99d606aca4155e7249820946363742fb": "6ceff25f164dff1caf2d7e381ed354b9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/1e85ca88bd68841259fbb452b215e823cad89d": "e8622c19edabd184ae7ddff975259ed8",
".git/objects/75/7711dd2a45ed8489b423938a5d511413ee0760": "0906e4048837646c531d2aaeef121fa7",
".git/objects/81/bec25a50d784c29b6f724bbd6e6799756fe248": "b7c1dd687671ab71a390077766e7a557",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/6ed57b8eadbbcde698e8010126675d99fdc64e": "bd4e107cce1be47a0cbf7e0b951bf461",
".git/objects/9a/f4bfde35d436db3b9882431fd178e61ab9e53d": "a01927d5462b6ded9a52011178c707b6",
".git/objects/09/fe77d5de3d53da611176d8659affac0d64d31e": "4c2e7ca2116b0c567ebf5596e9def0da",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/7a66408a9c2ce6f644df58a136607d3d30fa88": "834cb8dd5141be51bd2636c2af4984de",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/0abe0d20fc66495a9de91d6a0f3d1ada02110b": "1a2368b2417d9b413e76b492f523337b",
".git/objects/63/4f018f82dc3e8cd4ef032a4ffb012e82e05991": "f8669fcb19b6ae169e9e106a51649dba",
".git/objects/64/b7b06412bc00587ee705b45b0f294cc995e57c": "9cb18d24298921cb6205f27722c58db4",
".git/objects/d4/19bafb4a5d55656b5998263b56363dcce8c0d1": "a95c6d027dfef21f495d4120158446e6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5d49eac54af3b4eb7a0e0173298f438c084903": "61eb85db178747ff9fe1f411ab221c99",
".git/objects/db/ad86a7c4a096a8f19a998dbfe67ab9b3e7fbb9": "bc2e7c95c45f1d3599a5ba1d53d5c4ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/5d62142219aff141ba8fc461dff45a87c6147b": "fa98807eb4c0ebd424279f366baa39cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/4a/ae6df68a3eca95d4dca3866283d84debce111b": "cba61684090aa952e0d3defff4f234be",
".git/objects/4a/432bafc961b13260bbbb541c2c623cdd70a233": "7aaac5f14cdd3152eec818d99629703d",
".git/objects/8d/14d8363565afe03ead9f36a65884173c62c975": "6a3de242edb921375619b84504fd4853",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/16c51da8ee4ffe73971197a4e7a863d77042b4": "8ba74df481c39abff8e1655061332b85",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/0c4670d73422d74e0a50faea2815af2d462d41": "96d23ea0bf153d3b391df0d2c9d41541",
".git/objects/1c/70bb04be843c6bb73976ed60fb5db88f9c48d5": "536660e0f391d91b130dc5cda005c76d",
".git/objects/82/35f17edaaf44091b75cfe59484946d5d9d7d50": "9923307965b281a8b7cad3d9ff2096ef",
".git/objects/40/01099655cef94ba76d1916346f872dbb1e5e14": "fb563b1ae467182a4b30ab011a47946e",
".git/objects/8b/eba32fbd964d013594f218c5bf0cc3dd28ef52": "e8e3552476fdb210a7ead9bf5def46b6",
".git/objects/7a/336cb5b391a360c1a2bfc9a4225bd432fd44fc": "615b00ed1923689fb6a9bd088f220134",
".git/objects/8e/65741110f7621c18de8244af86f99a8e885e38": "5db139668f1f361cc3eae5f18aff096a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3973f0a41f1407d9f72b2a8dc0afd39b",
".git/logs/refs/heads/main": "3973f0a41f1407d9f72b2a8dc0afd39b",
".git/logs/refs/remotes/origin/main": "b9a3fd8c1de66ac1aa6d7ff88f75e87f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4dc3a87e6550642276d9d87620469909",
".git/refs/remotes/origin/main": "4dc3a87e6550642276d9d87620469909",
".git/index": "217a2a3110edbfe4e7500f2c37c78afb",
".git/COMMIT_EDITMSG": "0beef1c1bbd5085ecf5e84d96d2d4844",
"assets/AssetManifest.json": "8f4245ab2092b6da7b0805e1cd0ea343",
"assets/NOTICES": "188fc9e526cfaa0d17535f928a526fbe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/y.jpg": "754549a6240437472d7980e00736cc81",
"assets/assets/images/bag_4.png": "0d85b194c8a5c71c60f84d899de86c31",
"assets/assets/images/bag_5.png": "3144272695836710191b7f953cc6fb7e",
"assets/assets/images/bag_6.png": "c51f90dc78a7bc817fd14f20d6567d94",
"assets/assets/images/bag_2.png": "1d5fd0aaf3e6cbf6b8fa23aed72b0523",
"assets/assets/images/bag_3.png": "d069787fd88889b6d9c0d3b7a054e0bd",
"assets/assets/images/bag_1.png": "e9506b6861af2660221107684bbebd97",
"assets/assets/images/b.jpg": "619e4e883a20c75be12879eddfadc518",
"assets/assets/images/r.jpg": "cdbf95b8016b3a85ef995b8cc26521bd",
"assets/assets/icons/search.svg": "654e22ab2ad459d56cff69b1e077c53f",
"assets/assets/icons/bag_1.svg": "63e5245b06f0a2341dba8d0d9f81014b",
"assets/assets/icons/cart.svg": "fd320d807686c8432b2e449a583296b1",
"assets/assets/icons/back.svg": "1b13e0b59c27ec75d6f5051e5d66e8d9",
"assets/assets/icons/add_to_cart.svg": "0eb1a5e481ee24dba9de843a9dacdde1",
"assets/assets/icons/heart.svg": "1c996a5addb1570d53d2093a229b8ac8",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
