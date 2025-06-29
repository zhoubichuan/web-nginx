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
    "revision": "9220cdbc629ad839c6d1f8d5c5efb9f3"
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
    "url": "assets/js/14.8a4a45ed.js",
    "revision": "e0c15782730db22dd4fcb9512f35d6ed"
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
    "url": "assets/js/22.d73a0927.js",
    "revision": "a0ebb02e1c01a9483c7e7eb71179719f"
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
    "url": "assets/js/25.b565b1b0.js",
    "revision": "9e97f7a368fa7ac825d10a536e3522a1"
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
    "url": "assets/js/28.5e0c3a1c.js",
    "revision": "1372f61fd6cb2a1aea133ceb5fcd73c3"
  },
  {
    "url": "assets/js/29.01648276.js",
    "revision": "2eda70aa07268304393b6e1a4452b027"
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
    "url": "assets/js/31.4f1aa4d8.js",
    "revision": "3ac93e3e7be66224880faa54b1d6ddb6"
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
    "url": "assets/js/37.c3d19cb5.js",
    "revision": "b01f286a99fb996371c983b80e58c271"
  },
  {
    "url": "assets/js/38.09b1a71a.js",
    "revision": "d143b7341cccd2582d66d8e870362d09"
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
    "url": "assets/js/41.ae0578d9.js",
    "revision": "6f79ba9e8f7b3b8a51fc1f3d8d5e22d8"
  },
  {
    "url": "assets/js/42.1e9d4821.js",
    "revision": "cd023e7bb3681156d6fe2eb7efeaf8ad"
  },
  {
    "url": "assets/js/43.9ec325ba.js",
    "revision": "1e90b8483cb9783cf8d4eebd384561ce"
  },
  {
    "url": "assets/js/44.f2be74f4.js",
    "revision": "68e79d2057d5a98147ee2705f45582e8"
  },
  {
    "url": "assets/js/45.aa8faccc.js",
    "revision": "d4ef64b9b8e33b7f88b9ef3925183504"
  },
  {
    "url": "assets/js/46.1502f2ae.js",
    "revision": "cc254306e6143f128442ef31fcbb0c49"
  },
  {
    "url": "assets/js/47.fe5ae295.js",
    "revision": "adb03388034ee2c8754fc2493d026bf0"
  },
  {
    "url": "assets/js/48.304946d0.js",
    "revision": "e7a346f19853577852d478e6aa41ec2a"
  },
  {
    "url": "assets/js/49.b34e1806.js",
    "revision": "2190acbeb5644a71e0b2893c40976e42"
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
    "url": "assets/js/52.384b5678.js",
    "revision": "a3f3703fdbd6bec06632924ed9a98bd2"
  },
  {
    "url": "assets/js/53.b71d7cb9.js",
    "revision": "da87f7bd9ceeaff605c24791b2f0d145"
  },
  {
    "url": "assets/js/54.9222b221.js",
    "revision": "302f1f0e7612148c022bfb0dfb27e5e8"
  },
  {
    "url": "assets/js/55.2f2b0a69.js",
    "revision": "6479ea07a5a0deeb7b9d771f78cd95e8"
  },
  {
    "url": "assets/js/56.e6612ce1.js",
    "revision": "b7e07f11a6fd89fd5b19e4d274c53896"
  },
  {
    "url": "assets/js/57.c63a6819.js",
    "revision": "8eec4eb5b12873bb8223c5c0fc09f121"
  },
  {
    "url": "assets/js/58.6a37772b.js",
    "revision": "8f001bf66e136c0a25ebec1c52aad454"
  },
  {
    "url": "assets/js/59.5a53391a.js",
    "revision": "d7685de459ad99f6cda4e3a0fb969a49"
  },
  {
    "url": "assets/js/6.62ee1e80.js",
    "revision": "9f8f0b0e34be001e8b62dc17bcab3a22"
  },
  {
    "url": "assets/js/60.af5ea596.js",
    "revision": "ada7323413af591a5db8959595c9c8a6"
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
    "url": "assets/js/app.97067b4a.js",
    "revision": "4ea62626bdbed9c52bf1dda1be5f2973"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "169b8b3da4cb7dad6ae1c99ea7702983"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "22ac9c96c571bdab2cd4a950490bb76e"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "c514a27ab337b604385a405ad6bb37ea"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "b0e3886c32c4fd9069e7631a72279590"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "86c40ba59a8b919b235c002964e6fd77"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "85e2b8ab7ee8bcd9fb667b7fcc3f13fa"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "670a3a7ef1c26024fef8fc17fd5605bc"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "dad705e5fc4f16a1d8526c643f308ddd"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "aa5f7836a860ae26b96f66a8b56b809f"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "00877f2f6a4ba7d3f2ef1d2a8dee4854"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "b8c0cdc2db66733d081e5537129f23f3"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "94eb24e35af21909691e484a822b79a9"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "b95591246084e124bc0bbdd102d2f9ec"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "d170136b92d478b2ecf164d0bb55740d"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "f439484c7bd51f11f2f030a7f6fbd68c"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "93cce110259a970df35041c2672de300"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "9554dcd2bf7455cb578f0366ee4fce7d"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "8b7551aab8fde74efd6b6cf03bceab0d"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "b96020517dc26ea64e3b28050616467c"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "ba0b7a62d7b30bb5890fc22fd025c599"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "6ee8247714eb43680eba7016bfe7867f"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "bf83cd47294df46ed9ee5f29d3dfb457"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "87ef3c2af1c0386d7d5f6ba8c43b67cc"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "7c162843252befe681ad3f12e3e67f73"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "123cba4112948044a03c726503ef1dc3"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "d492142e4d2066228dcf02568923e862"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "9299cc14fdf9cde294a4009112fcf388"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "099cac21b7429910f62c60e889755897"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "9e0a3a50284cb6c60b3f807843c07db9"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "3ba47e9f8b5f7c24cf27e618f6159982"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "c3ce3995f181240d810af41671959970"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "0d4ec8ebb3f7359cab02fc039719db51"
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
    "revision": "6057486ab12b755203d7401405b604b2"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "fc0a721515256100f9da278f5b8dec3a"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "cc416a2fb05881bdeb7e290cf94aa12c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f780a5578d1a1f2531c5e0a896ced9a7"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "2f6cb87a446053f44f36e2f0830afef1"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "5b0ea08fa44d09c9613ac7178306888d"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "08ef3b88fb90e9238672ee8631514d71"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "c3680babe02d7b9afe9d6afc19d789f2"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "92fa292f78d54eef68ce6987c175ef1f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "526eaf2fc66649d40cd411a53ed7619e"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "decc77bacea4a4f79dcb4d067a6027a3"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "dc1c6684427b8e0ab87f2ea0eb94f5c0"
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
