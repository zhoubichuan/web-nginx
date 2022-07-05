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
    "revision": "49922c6cef7cad76dffbf98b05b5e933"
  },
  {
    "url": "assets/css/0.styles.2221ad8b.css",
    "revision": "e251d32d5d88e17e913d896517ee5646"
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
    "url": "assets/js/10.be5a33e5.js",
    "revision": "b0836fe149c9ebbb765f61d71a4cbd05"
  },
  {
    "url": "assets/js/11.a33749aa.js",
    "revision": "317e08741b5fa9fc859a8489841d3082"
  },
  {
    "url": "assets/js/12.d62a4de9.js",
    "revision": "ac393b9cb5f5c64ca4de72498cf3df3e"
  },
  {
    "url": "assets/js/13.dc6ce155.js",
    "revision": "a3b875b23a2389b5b428e81a323bb601"
  },
  {
    "url": "assets/js/14.61719066.js",
    "revision": "992f5a38e3c38403e1d7dd5fd044671d"
  },
  {
    "url": "assets/js/15.a6c85dac.js",
    "revision": "4f4c6f2f17d13f187ff55e8a7e9c1053"
  },
  {
    "url": "assets/js/16.4120346c.js",
    "revision": "c1af777069360592ab9be6d5624e6129"
  },
  {
    "url": "assets/js/17.a50cf975.js",
    "revision": "923e84936e935cfd4c5bd9ddf0233255"
  },
  {
    "url": "assets/js/18.41784601.js",
    "revision": "01acb4a8310573d311372286538f3a85"
  },
  {
    "url": "assets/js/19.b91d4c39.js",
    "revision": "ec2ebf737eedb48cfd201b4d05106535"
  },
  {
    "url": "assets/js/2.724dc956.js",
    "revision": "3c0f2e3f80e85bc59933b3598bc51060"
  },
  {
    "url": "assets/js/20.2fca6a8c.js",
    "revision": "dca23d98e9a759cba77676162f17fac7"
  },
  {
    "url": "assets/js/21.8351ce79.js",
    "revision": "4bb98adb2dcf4e7c61a8125250f5fb6d"
  },
  {
    "url": "assets/js/22.ec02b90a.js",
    "revision": "a75ec1260cc237f1727752315091670b"
  },
  {
    "url": "assets/js/23.5bb9c995.js",
    "revision": "e0d2f29c30a5109a8dc7f21d61e5b4ba"
  },
  {
    "url": "assets/js/24.e78bde29.js",
    "revision": "00794ace5bc11e271c227ec77d3f3d51"
  },
  {
    "url": "assets/js/25.8c3a229a.js",
    "revision": "b0c524179ffba6c80957c9efa89e5ce9"
  },
  {
    "url": "assets/js/26.395f4bfb.js",
    "revision": "5378f42014ed6dbf46e5f87a2941336f"
  },
  {
    "url": "assets/js/27.384b3fed.js",
    "revision": "1ec923cf7f02900e0e4b2cb4cc426545"
  },
  {
    "url": "assets/js/28.776b1a9b.js",
    "revision": "52677190ff72407be40001801ff03329"
  },
  {
    "url": "assets/js/29.112692bd.js",
    "revision": "5152ba9eef0f89f6ba241391427a2af5"
  },
  {
    "url": "assets/js/3.a67dd42f.js",
    "revision": "fc5f86cd48c4fd1a304ae946890d767e"
  },
  {
    "url": "assets/js/30.400c261f.js",
    "revision": "cdf75a9b0c945882d535f3d870eb7311"
  },
  {
    "url": "assets/js/31.475cfff9.js",
    "revision": "0913806f4ba60d3ab31a236e1890a535"
  },
  {
    "url": "assets/js/32.37fb35e3.js",
    "revision": "95131169f1916894bc2bdf710063b091"
  },
  {
    "url": "assets/js/33.4d5f99ba.js",
    "revision": "c8d3c75a1c7fa10442f7dfc43dba0798"
  },
  {
    "url": "assets/js/34.6d08968c.js",
    "revision": "6f9917ffa423c124b67e102081c3866c"
  },
  {
    "url": "assets/js/35.2238792c.js",
    "revision": "e806b93eb53fab81d427f65cf6728edd"
  },
  {
    "url": "assets/js/36.f927db2e.js",
    "revision": "7149746d378d843925966cab97764bcb"
  },
  {
    "url": "assets/js/4.cfbb98bf.js",
    "revision": "ac37dff1280709c1dcb90dbc3bcf3c02"
  },
  {
    "url": "assets/js/5.4c3e6964.js",
    "revision": "336910964b231d6865f9465964c93ed7"
  },
  {
    "url": "assets/js/6.86f448f0.js",
    "revision": "3dfd47c8512f4d6ae0b8f554d0392e31"
  },
  {
    "url": "assets/js/7.223f3f93.js",
    "revision": "301451558eca0d326da8f39819df1e11"
  },
  {
    "url": "assets/js/8.565ac3d6.js",
    "revision": "7bfc1ab10f90bed87bccf090e7afd655"
  },
  {
    "url": "assets/js/9.afc735ed.js",
    "revision": "0b9d8fcab3f68befa7a671c78f10d858"
  },
  {
    "url": "assets/js/app.8a57f7a6.js",
    "revision": "118275ca982113d3ec90d8198132e8f4"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "b9cf6522771bc7a0bc5c549e94992bae"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "154daa8224c980df473bc4306154d9f0"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "b3e854a1a8998f689d57dea4bba98b8e"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "32546c825d93344d927cad13219a0b7f"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "0bf259d9d7bb523ea58e78ba150e8993"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "6538164989d154b96cf020bc6ee612ba"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "ad0fc329e7573785942f1c0ee47a6f57"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "70b69e9445aa6c9f535fa8125aacb5fc"
  },
  {
    "url": "base/build/2.service.html",
    "revision": "c4fbf3dd73231b787ff5bdc57931b37c"
  },
  {
    "url": "base/build/3.cdn.html",
    "revision": "b8ce6e32630085f17ac3618af7fd5751"
  },
  {
    "url": "base/build/4.cache.html",
    "revision": "afb5e4686b825278f9003421cae3f3cd"
  },
  {
    "url": "base/build/5.cors.html",
    "revision": "708cca77dff5dc3b44dbad4b5c102d37"
  },
  {
    "url": "base/build/6.link.html",
    "revision": "d7f40e272e9206d9924377d70c50522a"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "8eba50b60cc17203d67c9695c19864fd"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "8bcb817678e69dea62582c0a9093491b"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "df55f1134b4d76ece3b452bd5c316110"
  },
  {
    "url": "index.html",
    "revision": "5f831c4f141036143f2749b51df5a462"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "7911116d730d3d87ea1cbacdc94edc11"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "63bc040eaec60f04a87c52684597b3b4"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "f52443dfd8878b0ced6865baaaa81e31"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "8ebfb36489785bfd17ef59312b2d7161"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "e5540914327531ca8f8c65f6808cd41d"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "94d03a0ac607993c6a89a2fded48206b"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "6866b75017c3b4fe1da60f833475ca8f"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "783528ace16da252bcc450337f5e69b8"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "58d4d64b9d5257308eedcdffd55ca3a2"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "144dc0d375955b17e73b0bfba250515a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "b8fc844d585bf3f840739fd802ff042f"
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
