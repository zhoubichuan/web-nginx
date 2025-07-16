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
    "revision": "cb338ba166367544ac1bae816e3a1ef5"
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
    "url": "assets/js/13.7bd94e88.js",
    "revision": "6e92974e636de4470e46f1cfdba59420"
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
    "url": "assets/js/22.69c155bf.js",
    "revision": "2994e9cb55baefcac6c340dd94c5e326"
  },
  {
    "url": "assets/js/23.6e3bac20.js",
    "revision": "92a9c0729c06743525818245226632b4"
  },
  {
    "url": "assets/js/24.4ac5b9f5.js",
    "revision": "a8ff21d150a164650c44f36253fb3754"
  },
  {
    "url": "assets/js/25.18bf470c.js",
    "revision": "81887ede0b15eeece50083137b1bd77d"
  },
  {
    "url": "assets/js/26.bcb3f5aa.js",
    "revision": "b28d6ffc64553807449fdcba6f4df45f"
  },
  {
    "url": "assets/js/27.4beb38dd.js",
    "revision": "5838a0e9782d27f4c0179c63de2899e0"
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
    "url": "assets/js/30.13b07d79.js",
    "revision": "5b45b89a877be5427f2f40c8b9ffa061"
  },
  {
    "url": "assets/js/31.7ab3f9c8.js",
    "revision": "643794e8c0eef6e726ce4b9588ce8204"
  },
  {
    "url": "assets/js/32.d192b393.js",
    "revision": "077266d633400e52de6cb6d293292373"
  },
  {
    "url": "assets/js/33.e856d986.js",
    "revision": "b2b76da786ddf708511e31098dcd69f0"
  },
  {
    "url": "assets/js/34.748c3fcb.js",
    "revision": "bc4c4a3ff1e0aa0decce59ea2e6c5d27"
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
    "url": "assets/js/37.c3d19cb5.js",
    "revision": "b01f286a99fb996371c983b80e58c271"
  },
  {
    "url": "assets/js/38.09b1a71a.js",
    "revision": "d143b7341cccd2582d66d8e870362d09"
  },
  {
    "url": "assets/js/39.df8492b4.js",
    "revision": "ea85684d97f650ac858b0ca142f58e50"
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
    "url": "assets/js/41.ae0578d9.js",
    "revision": "6f79ba9e8f7b3b8a51fc1f3d8d5e22d8"
  },
  {
    "url": "assets/js/42.720d7cae.js",
    "revision": "9d284a683b0d42da2307f99e8c2de2bd"
  },
  {
    "url": "assets/js/43.bbfeba39.js",
    "revision": "ec7b79a2a31dd2b27afd2b1d239cd579"
  },
  {
    "url": "assets/js/44.f2be74f4.js",
    "revision": "68e79d2057d5a98147ee2705f45582e8"
  },
  {
    "url": "assets/js/45.bcb0b7bb.js",
    "revision": "2821ceefe21a5459238a8f745690678e"
  },
  {
    "url": "assets/js/46.8b076fc7.js",
    "revision": "5099a4efb092edaff5f7986b462fc0cf"
  },
  {
    "url": "assets/js/47.a40686fa.js",
    "revision": "02da4ca26136f168f008860e12cbe210"
  },
  {
    "url": "assets/js/48.d9f46376.js",
    "revision": "1cf9081f51dbcb760155b819cb34a3ad"
  },
  {
    "url": "assets/js/49.26274b2f.js",
    "revision": "4ea58161330e83922ee2cde3b159b728"
  },
  {
    "url": "assets/js/5.7f3f73d3.js",
    "revision": "fbe42aab549e18bb8f4d724f3f249ee2"
  },
  {
    "url": "assets/js/50.53236b89.js",
    "revision": "b602c49b4a5a1f2d3ddc4053edd64efd"
  },
  {
    "url": "assets/js/51.2e83ad8c.js",
    "revision": "0f2186ecc7479a1f21b737a93874258a"
  },
  {
    "url": "assets/js/52.f344c2ed.js",
    "revision": "c37919f45842f2e10751783cfa238a19"
  },
  {
    "url": "assets/js/53.b71d7cb9.js",
    "revision": "da87f7bd9ceeaff605c24791b2f0d145"
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
    "url": "assets/js/56.3bc67983.js",
    "revision": "54193b2ade2eb402b478980b1daa7e8c"
  },
  {
    "url": "assets/js/57.0752ce75.js",
    "revision": "d649f0f106de9199b34101b5aaa19062"
  },
  {
    "url": "assets/js/58.8d5dddca.js",
    "revision": "7d6628e2db14547401a1a24710e71c9b"
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
    "url": "assets/js/app.9514c453.js",
    "revision": "049e8ca496fed1073d15fc415e20541c"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "c8ddeef9748dc2f679732855bf922073"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "81d7074ce0cc570f11cc7bb0c67c9434"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "5c4a8cb254a20ec91293639ed6323f35"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "efdedd39e9cf581ef1248c4216e6696d"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "533be4eea5831e11b340ad2ec7476060"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "e770bfe90f9ac1e698044782c8a2b311"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "9f7f23a2e317219bb6b239fce4db160a"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "7187dd07e501534338b4321054a9d5cb"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "8c692cdf4cda46583c6cc1b18295370a"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "34d15dd8e292a098eebc4eec6e75a5e2"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "8eec28f5e62c6283a2c4e6c49a37e22a"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "d28ede0a24d9c75558cbda31dcf3a9d8"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "d9f0d32c50ce20a8a0948bed8748b0fe"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "ed0100a5cb724fe0c8dd23f576cca0f6"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "b054249291270c7517beb30cc5aed2e3"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "30de6c47d2bb4f02ebc7f071f6ebac15"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "bda4f0e8807318aad2b21a081beeff75"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "00c31464312b7fc6fbf366d067f8c379"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "8c2f4303f4b0a72b039f9bf67b31675a"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "b64d2f13e20c912dfb97575e35a8337c"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "58514322c7934aa03877029fa7ff0f7b"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "b2198380a88456ddc182552e845b12d4"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "8d0769913e00f8f08e4de8230d53154c"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "27252c22e31b9b933a53b104293316ff"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "fa2113095b97f87ebfaef03aa0d0d695"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "a23e0f11b99eb554e3b0bdac757dcec7"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "1de10fdb07c63ac3380b7665424397b8"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "67656dfdf2c36d8d2ada327e2d6df330"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "32349c3273f9ba123eccbcd617e09d4b"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "b4365b13c7cd21c9f102b201b39021b9"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "16503ee735e366d2bc667a9b7a191eb9"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "9d26254a92fcaa230460be7d609975db"
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
    "revision": "72384f5d4db56a1d3e40e47a2bb73650"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "33368d1f726824d869054356ad7a7334"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "fecc08f3b723b4eed697cf358fd3cde5"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6c41a95b42c416416e0f269ca8b916d5"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "4bebd2b558b4fdbe1b7011d886ef8908"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "6d07b09268f84c515e7b06f39b5396dd"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "435b2f0de925faa95be41ccd2d3871af"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "58bc934ec1a3d860c23fc831c584bb48"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "78df054f1dff363fa1185398879d7b7b"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "4cf94daa68185a91391fcea70af3cd83"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "9cceb3a950f12d5162436b3dbbea43db"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "e18d1a4775a32adefbcb1b682f423cab"
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
