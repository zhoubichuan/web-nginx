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
    "revision": "8f4a4cc3d15587ba90ffa971ae6a96ef"
  },
  {
    "url": "assets/css/0.styles.e85403c0.css",
    "revision": "ee2f2254b39e6fe0055ea4f16258a41a"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b42c061.js",
    "revision": "0a2a1f46b2029afcff63466f6c48b6e9"
  },
  {
    "url": "assets/js/11.b8340da1.js",
    "revision": "2da4836d1dd679c9cd3fa0de5f76b651"
  },
  {
    "url": "assets/js/12.f32239a4.js",
    "revision": "8fafab62f6bc0806dffbe79a3364dfd5"
  },
  {
    "url": "assets/js/13.2f3806c2.js",
    "revision": "dbaf9aa8e329622be23537ad067ae8b3"
  },
  {
    "url": "assets/js/14.8f06debc.js",
    "revision": "21ca30ccedc3f5d0a771bbe83a662ee0"
  },
  {
    "url": "assets/js/15.9c9df688.js",
    "revision": "422d4141c87938c2ec4ac523ed8984d5"
  },
  {
    "url": "assets/js/16.3b04d87d.js",
    "revision": "cc551616f013b8fe4e690a81c323e61f"
  },
  {
    "url": "assets/js/17.375659ea.js",
    "revision": "a76539b032669b8124628b09cb9e8f98"
  },
  {
    "url": "assets/js/18.26f2f37b.js",
    "revision": "13ee85392a32f260966a6cbb3e1168db"
  },
  {
    "url": "assets/js/19.65a72a01.js",
    "revision": "e6fdd2e879bbc3f6fac11d9d9e6c2282"
  },
  {
    "url": "assets/js/2.be949fbd.js",
    "revision": "eed828c689313c24f21cecbf44d1b5e5"
  },
  {
    "url": "assets/js/20.e198a681.js",
    "revision": "a4ba39b4057f95cfbf518a2f3ad5ceaa"
  },
  {
    "url": "assets/js/21.4cda0f34.js",
    "revision": "78ef329498ba8b84e4d09a3dac46e365"
  },
  {
    "url": "assets/js/22.ed1d5186.js",
    "revision": "84acc982cc9e7c6db776271972235b73"
  },
  {
    "url": "assets/js/23.1c2351ed.js",
    "revision": "3ebbd164c0d4cb0fc6d6690cb30f4dce"
  },
  {
    "url": "assets/js/24.e5e25c34.js",
    "revision": "dfd6cc1f72e07ee6c0562e621d602763"
  },
  {
    "url": "assets/js/25.8c76301c.js",
    "revision": "40278d7c74c7ca07b812d17f6ff7d8d6"
  },
  {
    "url": "assets/js/26.265ae8a0.js",
    "revision": "895468735c42bcb4d66207c2df14db5a"
  },
  {
    "url": "assets/js/27.4c1a04af.js",
    "revision": "88154372ebef39c0aa02972487e9a118"
  },
  {
    "url": "assets/js/28.cbbc7298.js",
    "revision": "46b004d913c5c63411ab98a87bb3a54c"
  },
  {
    "url": "assets/js/29.21ad3571.js",
    "revision": "6385f8638cae62326657e947423f80cb"
  },
  {
    "url": "assets/js/3.396e4769.js",
    "revision": "73cf4c35643a7c208c5ed73937a0b28d"
  },
  {
    "url": "assets/js/30.ecc73ff4.js",
    "revision": "2ff44c99a67e57b9964837f527d0b469"
  },
  {
    "url": "assets/js/31.3d4461c0.js",
    "revision": "ebf4d33adbb74066c69c8581748b5077"
  },
  {
    "url": "assets/js/32.0219fcee.js",
    "revision": "f2d52aa7590f8b720501edd3d7c8064d"
  },
  {
    "url": "assets/js/33.67c11a3a.js",
    "revision": "028138b58dfea9d57adbab60d9308575"
  },
  {
    "url": "assets/js/34.7e10d93d.js",
    "revision": "8b1c5a01859773e5cd41244e7c5a3c99"
  },
  {
    "url": "assets/js/35.34f11c87.js",
    "revision": "a23b4979709a77097f6d8d65f3d08180"
  },
  {
    "url": "assets/js/36.6d382257.js",
    "revision": "20ce013a1575697e51a0499431651100"
  },
  {
    "url": "assets/js/4.f4599f16.js",
    "revision": "a7531e2557c6368f5d6ee6f95c44ecff"
  },
  {
    "url": "assets/js/5.5db6b566.js",
    "revision": "ab70ec3809fe04595e9425a53f65d26f"
  },
  {
    "url": "assets/js/6.f7667029.js",
    "revision": "a5208014b70d385889446502cae29dcf"
  },
  {
    "url": "assets/js/7.c328404e.js",
    "revision": "8ad1e59a8799538914727d74185f79ff"
  },
  {
    "url": "assets/js/8.54b29323.js",
    "revision": "a0545a97fe1a7b48fd5df8ff06d31d1d"
  },
  {
    "url": "assets/js/9.4aa79cb6.js",
    "revision": "cb7b829a2885f7154bc9523b69b62ee3"
  },
  {
    "url": "assets/js/app.5380a743.js",
    "revision": "cd9f83814bc0475115175754d51af060"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "fd3a8dabace5ca31de57d9f92e78eec0"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "45bc998642f16996b6d01e556ace7c47"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "983526bf0515a9022f94150845199fcc"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "2a6453068d70ec2ab5115ccafd512b5b"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "b5533f7109eda1a23f79ab7e2e0b7a8f"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "d6cbfc618f0e3908d0768a7afd4dd9b2"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "b0ab3540e068fa5dd8478cd42e66909f"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "a552a691c9913d9a379ed3f3e8c375b4"
  },
  {
    "url": "base/build/2.service.html",
    "revision": "5c019b193ecc0c64d2b111ff1793eb0f"
  },
  {
    "url": "base/build/3.cdn.html",
    "revision": "c558d5d7b18a8f91940c91785ff15eb8"
  },
  {
    "url": "base/build/4.cache.html",
    "revision": "0dae2116618678c65382229edb7ca7ac"
  },
  {
    "url": "base/build/5.cors.html",
    "revision": "3269b8797023e784814b39fdd68ad185"
  },
  {
    "url": "base/build/6.link.html",
    "revision": "4ef3eef11f71ce7827566cf97d0fa6fe"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "615b68d8e0b4d1c2ce4b160d1f613ed8"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "0137946a685c474ba67c31f97f95e92e"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "baeed2a7837d25e2e0ae67730a7a5d4a"
  },
  {
    "url": "index.html",
    "revision": "eb8511eb1562b91f131ec2e56fca183e"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "c1fdb69f0d9400dff0f8aa44178e170e"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "861fa4a23471509b89d249c2a13fdac3"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "2c82c7830510e942ab44c447dc94a5a3"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "4a99daa8eb06959a4978623f4795e38d"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "b4d900c27a55db736e5fdcc89a71df41"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "eb17045a23b3165caf72b01ee84284f4"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "f89677c985cd0dcc3849c41db1d80654"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "92d538bfa4744e41db74d0697eca0be8"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "d531a4cc31a55e0d9a34d9bdd74cc626"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "761178420eb280701577425de5a335e8"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "4d77d043379e7fce5432bad6d051f2ef"
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
