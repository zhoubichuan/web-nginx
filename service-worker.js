/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "442b085ecf0f75cd51b10c7c19f9f4db"
  },
  {
    "url": "assets/css/0.styles.d37ec693.css",
    "revision": "453dada0abe48f932fa0b2101f769e64"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/1.75aed4bf.png",
    "revision": "75aed4bfd65086f548b18a1b588d506d"
  },
  {
    "url": "assets/img/10.ba156f63.png",
    "revision": "ba156f632db1bb320e0f0d2029d62a2e"
  },
  {
    "url": "assets/img/4.3.c4455530.png",
    "revision": "c4455530d527ab8eb2803e8724624d26"
  },
  {
    "url": "assets/img/4.ba74f5c8.png",
    "revision": "ba74f5c8686c1c5698f9b1f7e9ce6263"
  },
  {
    "url": "assets/img/6.6dbeca24.png",
    "revision": "6dbeca242f8a9e8a6710fef6d20c4f24"
  },
  {
    "url": "assets/img/image.7fb3b337.png",
    "revision": "7fb3b3374d37b302ca676200a50ab74b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a3176b7a.js",
    "revision": "16af807f4a7841dcd81045d8eb4ac7ca"
  },
  {
    "url": "assets/js/11.16bc10f6.js",
    "revision": "faa48e9cdf8e39e92dbbbcca0950980c"
  },
  {
    "url": "assets/js/12.e6f5b0e9.js",
    "revision": "58f6be87749d36a1ca43d2ade4ef4a9d"
  },
  {
    "url": "assets/js/13.8c251e82.js",
    "revision": "bbb246dc41a688e0a38703f5ed44151f"
  },
  {
    "url": "assets/js/14.aa2a6420.js",
    "revision": "408b20125c98504d30772a04cec85f71"
  },
  {
    "url": "assets/js/15.3f2e4d84.js",
    "revision": "73751de4a83805594eff75f32cb1102c"
  },
  {
    "url": "assets/js/16.cd741d65.js",
    "revision": "3feb534cfd9d96cf03f59a5995f01a86"
  },
  {
    "url": "assets/js/17.b1226e9e.js",
    "revision": "bb6a0f52300c5efc9628632ac0c778a6"
  },
  {
    "url": "assets/js/18.b19b3aa2.js",
    "revision": "f674a25f53b966df1b0f564b7ec59c67"
  },
  {
    "url": "assets/js/19.add3bd7b.js",
    "revision": "b7c05562088e9f860034aa1021c41d97"
  },
  {
    "url": "assets/js/2.71a3a2e6.js",
    "revision": "6732782b5ffe78ad9c53a1c8a17c5611"
  },
  {
    "url": "assets/js/20.5a78dfc2.js",
    "revision": "2b42ac9dabb33952f4ccbacb5b9ce308"
  },
  {
    "url": "assets/js/21.f64e1d23.js",
    "revision": "3a0d90eec40f4eed768f74dc8e5c79bd"
  },
  {
    "url": "assets/js/22.8057cc46.js",
    "revision": "67979a7de39c53e4105eac2e5436ca8c"
  },
  {
    "url": "assets/js/23.6e3bac20.js",
    "revision": "92a9c0729c06743525818245226632b4"
  },
  {
    "url": "assets/js/24.a1cfbd11.js",
    "revision": "c5d47019b3532e2b771a4743ff67399b"
  },
  {
    "url": "assets/js/25.61647db9.js",
    "revision": "50281f968c22c8c4708b5b9354c79fdb"
  },
  {
    "url": "assets/js/26.13c220c1.js",
    "revision": "8c1fff8d2e038ee3db60b57e0302f586"
  },
  {
    "url": "assets/js/27.c2c0dd80.js",
    "revision": "c1b5a3cddaa9cbd913c221fadb835520"
  },
  {
    "url": "assets/js/28.c02cf6f0.js",
    "revision": "ff7273a700b793cc2e9c12144531e12b"
  },
  {
    "url": "assets/js/29.b5384b83.js",
    "revision": "9013ff7fb7b001e2b2259172cc47c468"
  },
  {
    "url": "assets/js/3.46403c17.js",
    "revision": "b466ae5828f6721e74bec14e4328272f"
  },
  {
    "url": "assets/js/30.6901732d.js",
    "revision": "090cb7ced32647d60181bedadb7d516a"
  },
  {
    "url": "assets/js/31.d9fb7449.js",
    "revision": "04facd57df7f6d254d9cbe54e12c1a0a"
  },
  {
    "url": "assets/js/32.9a80f6da.js",
    "revision": "68b54ea1fe8e638e387c7ccb52458c04"
  },
  {
    "url": "assets/js/33.13e0affa.js",
    "revision": "549ebec0358fcd0444d6465fa7c4cd2b"
  },
  {
    "url": "assets/js/34.0d50edf9.js",
    "revision": "f7a1cf8a9d0a0febbcfcb693ed0914a7"
  },
  {
    "url": "assets/js/35.264d7aab.js",
    "revision": "0f33ef69c59b14b3da71fad6a5af0a68"
  },
  {
    "url": "assets/js/36.5fc07320.js",
    "revision": "f143331f448bd15a2481024f3c553ae2"
  },
  {
    "url": "assets/js/37.a8ab2ffe.js",
    "revision": "c965a2b8c182e0f621b649c7cfe404f3"
  },
  {
    "url": "assets/js/38.348efe82.js",
    "revision": "13288d25b0417ab79290ccc784f8a33d"
  },
  {
    "url": "assets/js/39.3c98c00d.js",
    "revision": "f63f85017067ec52b7401b68ece03019"
  },
  {
    "url": "assets/js/4.fa7b80ff.js",
    "revision": "bb558367dd898c3064b1e96ee0393d30"
  },
  {
    "url": "assets/js/40.8a848f30.js",
    "revision": "8ea36194e97999a69a6c092d5e9a03ae"
  },
  {
    "url": "assets/js/41.8b2428bf.js",
    "revision": "4a02461b7ddf216e0d4d01187e417b66"
  },
  {
    "url": "assets/js/42.1e9d4821.js",
    "revision": "cd023e7bb3681156d6fe2eb7efeaf8ad"
  },
  {
    "url": "assets/js/43.a4507ec0.js",
    "revision": "da764db280a68341faf05250e8ecf68f"
  },
  {
    "url": "assets/js/44.ae13460f.js",
    "revision": "971b220bc5991dba96e7fc92ab1b4ffd"
  },
  {
    "url": "assets/js/45.bcb0b7bb.js",
    "revision": "2821ceefe21a5459238a8f745690678e"
  },
  {
    "url": "assets/js/46.24b939f5.js",
    "revision": "6f96d980495dde8e9b44e1ac8f3d496f"
  },
  {
    "url": "assets/js/47.e47977a0.js",
    "revision": "783af06ef3823512b85fb0c18ead2613"
  },
  {
    "url": "assets/js/48.6806d6c7.js",
    "revision": "9df68da8cef0c586ef53835018ae002c"
  },
  {
    "url": "assets/js/49.3d62c047.js",
    "revision": "583418c3a49b864b435e92260dbb24e5"
  },
  {
    "url": "assets/js/5.7f3f73d3.js",
    "revision": "fbe42aab549e18bb8f4d724f3f249ee2"
  },
  {
    "url": "assets/js/50.7173ffef.js",
    "revision": "0c6cb727d46664353a7c424550c3cda6"
  },
  {
    "url": "assets/js/51.f67dc33d.js",
    "revision": "7ac3b0894d2df783d481e75ede0e2fad"
  },
  {
    "url": "assets/js/52.bf53ad32.js",
    "revision": "d3ab1d719bc6df754a8d8ac7bd09c848"
  },
  {
    "url": "assets/js/53.40a61e86.js",
    "revision": "b561cfa434b1106c8d2781540277be97"
  },
  {
    "url": "assets/js/54.4aea45bd.js",
    "revision": "eeb63850c79ce51fbe0a46ef4a50d6e8"
  },
  {
    "url": "assets/js/55.54e3163c.js",
    "revision": "5c85efe25a88997fd6ae26624033b8e3"
  },
  {
    "url": "assets/js/56.da9e1d30.js",
    "revision": "c2703ae8c0044ff54f7915a5aadf7f2e"
  },
  {
    "url": "assets/js/57.110102bb.js",
    "revision": "ab05d782949888d28f88aec34e0880e3"
  },
  {
    "url": "assets/js/58.6a37772b.js",
    "revision": "8f001bf66e136c0a25ebec1c52aad454"
  },
  {
    "url": "assets/js/59.c22a457c.js",
    "revision": "c41bd427c85e6f85155dbfa882b3e8d3"
  },
  {
    "url": "assets/js/6.62ee1e80.js",
    "revision": "9f8f0b0e34be001e8b62dc17bcab3a22"
  },
  {
    "url": "assets/js/60.e3c11ab6.js",
    "revision": "40051357b81f331feb7d25fffc2fb4bb"
  },
  {
    "url": "assets/js/61.2a238bb5.js",
    "revision": "0923f2e0a1340adc92c442bfe0ebe6ca"
  },
  {
    "url": "assets/js/7.f8e03102.js",
    "revision": "20d0f9751e32eaf46e4bedfcee0971e7"
  },
  {
    "url": "assets/js/8.5770d400.js",
    "revision": "4aa0a3644100eeb242794636438f97b2"
  },
  {
    "url": "assets/js/9.5edbe107.js",
    "revision": "359db89decc21ad9b32a0e74d58a8481"
  },
  {
    "url": "assets/js/app.7de74451.js",
    "revision": "21458fb8545d8c0a5425bf016e0d3f7e"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "c138fda2d23569be802e528c74c37e2a"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "5801e8f23ac14241e844a51de6476723"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "a13502ada3cb717d96a5a4178fc3e91e"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "448d4cfa11e63e5a1c095ef04df57c72"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "ca9f6c97c0dacc2afcc04dc95526fed8"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "04099e57d1bef162c2c8231fbfcf3f91"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "bf307df7a8d54712ddb566d260839274"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "e61454fbd72381eaeff03bb39b2c3e83"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "42a8b3eba66dc1b02ec7fc19985bb5d0"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "88aab95ac13fe413e77a01561194f34b"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "ffc5466913adf917d584ad2a3eb7a830"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "44ba6656751ed2643c55f4cb22b5d869"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "7bb16d0f7e47e67b9e9197d3a8fd54a3"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "9e7cc7786bc0758f2e55176c7ec4aa42"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "48430c95a8228d4e9d13c7fd9029c8d6"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "12034e4a7cf990b5185256ffa63f2149"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "509f2ea99c68084762e116a2bf342bc7"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "f929550794ef4c1ee02350fb23dffec4"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "73ae87dd7f477c3af290c5b91c772b5c"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "cf4ba0e5f131aaba80a3975a374d2c11"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "aa3f3e8e4d6239ee5aeff88f65246e6d"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "a14efbd2484f75a32551390142cb22a9"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "828476222f2d08973aa2e66eecabbc9c"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "cf5b822e61a4247fa22682fca1a91db1"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "d1e384379cbdb2174905f63dc8acbb59"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "0691d8df4ce1ada3804f4f2747757cec"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "dfd0531b3dc8c9547d03eec700131894"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "cc53e415790174d74f4171ca8f3220f6"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "cd783ce76eac6c042cbfe6b238f175a6"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "efdbe5322320b1c3e51c13b547f7dbae"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "6595b5063af2d9719be07cbccc8acb07"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "1768236e5bd802a12136147636e44bd5"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "aefc723fb23a2eafef9213b2dd5a33f5"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "home.svg",
    "revision": "346e12ee28bb0e5f5600d47beb4c7a47"
  },
  {
    "url": "index.html",
    "revision": "8aa3eaf18b1bcbaaa7147757163da31a"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "50540b4104a9a4205ac9c074b426e994"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "5efc881e99b2b5c3cd3603d4b63bec4f"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "41ef28285fe4b6a9f15c863513f8ff49"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "17b88558b9582296138c4f54629292fd"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "1ba152204766294bb9ee5445d0556de0"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "0942dfdee8b0f25b9bef76602bd4ee7e"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "d47402e5af639028089c7a4c94f0371c"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "2f978bea7991767e379455e04f5566de"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "5ceec3e94b4b168af84f4eb17d2870f7"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "70af5076fe89962346dc0c4fa94eb09c"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "19bb213b0734b0e9a6c9b317feb46f48"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
