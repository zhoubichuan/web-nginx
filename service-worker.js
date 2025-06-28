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
    "revision": "1b7b6013c808bb473dc888eda404e531"
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
    "url": "assets/js/13.d6879b37.js",
    "revision": "c1dac5d43a746933e28935c8a1438b8f"
  },
  {
    "url": "assets/js/14.f1bd01ea.js",
    "revision": "5ccc09ef998be02bb0eeb562c4e4c84c"
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
    "url": "assets/js/22.3648c913.js",
    "revision": "8db056178dd2ff7e4eb3b3b2f10722e9"
  },
  {
    "url": "assets/js/23.6e3bac20.js",
    "revision": "92a9c0729c06743525818245226632b4"
  },
  {
    "url": "assets/js/24.537f9919.js",
    "revision": "adab982c404985259d74258bf448fb1c"
  },
  {
    "url": "assets/js/25.61647db9.js",
    "revision": "50281f968c22c8c4708b5b9354c79fdb"
  },
  {
    "url": "assets/js/26.1f260aa2.js",
    "revision": "68df6c9731a0809c5c985f36f538d610"
  },
  {
    "url": "assets/js/27.6eae4055.js",
    "revision": "d6ae4417235cea07ed4861ff9e21e92b"
  },
  {
    "url": "assets/js/28.c02cf6f0.js",
    "revision": "ff7273a700b793cc2e9c12144531e12b"
  },
  {
    "url": "assets/js/29.02c4fdf8.js",
    "revision": "114e873ee5ed56370aaa7d3ae5e5a416"
  },
  {
    "url": "assets/js/3.913b294e.js",
    "revision": "9067f54d2af1356b95915a0269f07357"
  },
  {
    "url": "assets/js/30.13b07d79.js",
    "revision": "5b45b89a877be5427f2f40c8b9ffa061"
  },
  {
    "url": "assets/js/31.4f1aa4d8.js",
    "revision": "3ac93e3e7be66224880faa54b1d6ddb6"
  },
  {
    "url": "assets/js/32.41bcffd4.js",
    "revision": "aa8e1cfc5b3d7555982e93be6f45d49f"
  },
  {
    "url": "assets/js/33.512548db.js",
    "revision": "ea556fa6cc2ec338dbe02b45459581f6"
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
    "url": "assets/js/37.c3d19cb5.js",
    "revision": "b01f286a99fb996371c983b80e58c271"
  },
  {
    "url": "assets/js/38.7da69dc0.js",
    "revision": "ccb8f1d51978a2343e68040789e94ec3"
  },
  {
    "url": "assets/js/39.f2bfd1d4.js",
    "revision": "016ef000462c6145e8927ee426a3df69"
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
    "url": "assets/js/45.2eb16978.js",
    "revision": "7da7ed5d33c9b7e07999264a9a04fe71"
  },
  {
    "url": "assets/js/46.1502f2ae.js",
    "revision": "cc254306e6143f128442ef31fcbb0c49"
  },
  {
    "url": "assets/js/47.e47977a0.js",
    "revision": "783af06ef3823512b85fb0c18ead2613"
  },
  {
    "url": "assets/js/48.3e52843e.js",
    "revision": "9383ddc3df2639f585027ebe69c4adbc"
  },
  {
    "url": "assets/js/49.93335adf.js",
    "revision": "52ab8dda43bdc43822cf6059aced647b"
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
    "url": "assets/js/51.2e83ad8c.js",
    "revision": "0f2186ecc7479a1f21b737a93874258a"
  },
  {
    "url": "assets/js/52.337dc6bd.js",
    "revision": "dd3bf0f5fb3d71535b3b3907efeef26c"
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
    "url": "assets/js/55.1ccee8ed.js",
    "revision": "9de87877872d06994b114f7700884731"
  },
  {
    "url": "assets/js/56.d2478541.js",
    "revision": "2a1745a50a46f7b65f7406ec599b618c"
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
    "url": "assets/js/app.d55f4538.js",
    "revision": "d709f87b8f2d8e7c9bebfbe4f20cb305"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "543ae6f651dbb0aa2794f365a0122df5"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "e9c787f2920dc6e7ef90046973209053"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "b5d1486d72a3a6018a8c56832b4f729f"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "41588296982ba5146ba127644f3d1d9c"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "4e75302206048f8e603e7db05df634d9"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "ba90d46942aa61ccaec03cc7c4d5fc6c"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "c73a78dd8d9ae0df7d485fae0256a1e2"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "c6aa1d96dcb356e7a0f0c96826fa621c"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "84d55f8bbd4c7d95d0887d308763269f"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "9038a67d4a4dabc94ac289b587d0c128"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "b6eb9b2aabb969cf5c74cef40a464cb9"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "48e68bf2a7354e03cd3364e00048dd29"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "c584bff97c8f17413ce2cde4c3b55def"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "09358585c59a4e77f82472f5d529fcc2"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "fec069d90617ea720d59c33b35e8cc3e"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "3515eb1ffe75d9907f346b58f8e2c16c"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "e5c8a18ed6bb81dd0dc9294867028a30"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "979877cdb510adb93fc5dae6c9562f8e"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "0896ab4d704aef6f30d0dbb1fe3c6ea6"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "0bdb18240e96b8e176f495815fa86c70"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "a87bc5fedd2bb31b43cb9e867259c5da"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "3ff3cc53ed043f495f79ad26ce3f11d3"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "fd160391722e2a12a2d8a7a6ac1a25af"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "3d310f9c166df556da1e282d251a8866"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "1793a8371860bdcdf47b16be2486c0f1"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "a93f8b8f189b30bd6738973026be56c1"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "23bb46f492a0bddc87b421ebc0d11bae"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "b204aba9d272f30a8c64cc62865300fb"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "2af950846e2c73cc55381197a4a3bea3"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "fd70fd006d1b8f94f47abaac62c34f5c"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "ae5e5e67d2071a7ffe2bf09f25e5c883"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "decf3d048a04ed36d993d056b96da3ee"
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
    "revision": "d28eab32afb791c5f6c760cc821692ea"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "68d28b24ca24a03519e1f28348d8c027"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "e20a5993e700d1c7f4f5820466a93c07"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6368e994af53d8a2d9acd2b8764c50e0"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "24cb5aa77b5c9760acbeb6d789e8e078"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "326869eaa93024a1948f2982958b4c39"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "aebecceb5f1f9148bb52d7fbb410f077"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "251df54f5787e4301f529336b74d35d3"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "b4660591def16946387d4a347c9ec24d"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "c73d11dbb34e3601e922b81c5ac01379"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "0012f6a603a3ac081dbade240aa2435c"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "75d419fe2ffbfbe1069813dc0b19f0eb"
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
