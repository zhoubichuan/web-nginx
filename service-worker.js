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
    "revision": "709cd1e87ccd6c9ef0f903b830e36221"
  },
  {
    "url": "assets/css/0.styles.15a0e227.css",
    "revision": "5b5882487207bdde108309db87791f1a"
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
    "url": "assets/js/10.db485649.js",
    "revision": "443f7353e616bf63871b5c0349df76bc"
  },
  {
    "url": "assets/js/11.a70fbdf2.js",
    "revision": "09e82d9cd036da594fb73b2a4205be47"
  },
  {
    "url": "assets/js/12.8c4cb420.js",
    "revision": "b6bed10be633e5966dd6a78bcf7ca72c"
  },
  {
    "url": "assets/js/13.574142f7.js",
    "revision": "3e16223301d3bf3a2637d87c5cf60ca7"
  },
  {
    "url": "assets/js/14.cf6f7bf7.js",
    "revision": "39f231c5e25258cd0a0c77ba3441aed9"
  },
  {
    "url": "assets/js/15.9ff3b778.js",
    "revision": "a21f159b926531bec7a5943f1c34e5fc"
  },
  {
    "url": "assets/js/16.fa618892.js",
    "revision": "a30e3d0667601ca321769ea861af096f"
  },
  {
    "url": "assets/js/17.e0ec1c63.js",
    "revision": "1b4553da5945665220b91f3c26af787e"
  },
  {
    "url": "assets/js/18.b67724f3.js",
    "revision": "d41424b844cf7dfc5b55fa0d63e8b2ca"
  },
  {
    "url": "assets/js/19.54690f0a.js",
    "revision": "6fec7c7ae04ab31bf3d7e038225e4a7a"
  },
  {
    "url": "assets/js/2.f16a1cef.js",
    "revision": "a59d2eca760d7d695e733b3314e467f1"
  },
  {
    "url": "assets/js/20.15a500d2.js",
    "revision": "5c623d1cb0543f2df08a9f44ba21e929"
  },
  {
    "url": "assets/js/21.1ba760d0.js",
    "revision": "f4822e25b3444c26ddc7b3111109f4a3"
  },
  {
    "url": "assets/js/22.d0b2f2ca.js",
    "revision": "55fb1974c876fae73feeb1e1a9af3255"
  },
  {
    "url": "assets/js/23.b51aabcc.js",
    "revision": "68c34522eedc787e99f14580961790e5"
  },
  {
    "url": "assets/js/24.2a4c6130.js",
    "revision": "0f83eaf221f457db6e7d813990ea3bc1"
  },
  {
    "url": "assets/js/25.5169160e.js",
    "revision": "cee90195ed083fec79a76bf4f518df61"
  },
  {
    "url": "assets/js/26.4f273484.js",
    "revision": "bc9915216489f82ad6921ceaebb0bfed"
  },
  {
    "url": "assets/js/27.f49af231.js",
    "revision": "7e8ef9d566a05c97537d515ba55c3c08"
  },
  {
    "url": "assets/js/28.32642ed8.js",
    "revision": "74b4a559e5bc050e4a65ee22e1af4183"
  },
  {
    "url": "assets/js/29.1db39ca0.js",
    "revision": "03d2a0723d757759c550d7079ceedd79"
  },
  {
    "url": "assets/js/3.15305bb4.js",
    "revision": "171114ece46c0286cd1bf85cc78611ce"
  },
  {
    "url": "assets/js/30.087cb73d.js",
    "revision": "b5d789c02a1e54243c562460254cad47"
  },
  {
    "url": "assets/js/31.5c8ba43b.js",
    "revision": "c14bdaed3fae58e41dba08eb03778418"
  },
  {
    "url": "assets/js/32.053b927c.js",
    "revision": "28b8fe4eee4930399b63df8dd7b4908e"
  },
  {
    "url": "assets/js/33.bceea7b5.js",
    "revision": "4d19979b1b5bef6e093423c5210ca993"
  },
  {
    "url": "assets/js/34.6ae25a23.js",
    "revision": "6c33a4cda25bdebe9dfdca516a3e83b8"
  },
  {
    "url": "assets/js/35.4a45d3c6.js",
    "revision": "631c37d7616590e28b9de5ceeece690e"
  },
  {
    "url": "assets/js/36.f927db2e.js",
    "revision": "7149746d378d843925966cab97764bcb"
  },
  {
    "url": "assets/js/4.38ea0b5e.js",
    "revision": "0b16c550c67b674ba89463e6173aea94"
  },
  {
    "url": "assets/js/5.29665866.js",
    "revision": "8de0a1b05342882eb7e00831cb606548"
  },
  {
    "url": "assets/js/6.1235cb9b.js",
    "revision": "3dfd47c8512f4d6ae0b8f554d0392e31"
  },
  {
    "url": "assets/js/7.e952fb13.js",
    "revision": "3e6c1fdec2de33a22f7b0c706d88bb72"
  },
  {
    "url": "assets/js/8.a80c5ebf.js",
    "revision": "16b57b2c56aa28365c9153e3efd3cd2d"
  },
  {
    "url": "assets/js/9.3d7b1722.js",
    "revision": "3a6ad4ed35db1a5cac05bb63563be623"
  },
  {
    "url": "assets/js/app.8025f8d6.js",
    "revision": "c5f1bd50b5d33edb3c5121b953da2426"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "f2eced5d6a2e04ba7859844798fa39cd"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "a513a14c14d2515be122fe5d1bd08b12"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "43fc06dc79a24c03c31ca1a8d56faa30"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "6a9cb9228b2402235616ef3a5fe08328"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "4875efe4e7cfadf8db24dbd9fa1be980"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "01a7b51b7853acdb7aafc3e946c1e0f2"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "3911020b908be0d5a7545b5057b7725b"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "15b35b088401e50db1718f03a314b768"
  },
  {
    "url": "base/build/2.service.html",
    "revision": "75099f77cb56dca1c69a9e2b03fe9260"
  },
  {
    "url": "base/build/3.cdn.html",
    "revision": "350bbe473b2f174a3545161aec1d8d0e"
  },
  {
    "url": "base/build/4.cache.html",
    "revision": "22fdbdefc5312236fa9ccb0412046b36"
  },
  {
    "url": "base/build/5.cors.html",
    "revision": "0591cbff7887bbfdbd11e170665a0a32"
  },
  {
    "url": "base/build/6.link.html",
    "revision": "b8f870076b529e35b6744a3106fbca58"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "71d83d5a318c54cf5a7a1d8e14cd841d"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "4c4da8c7ec9f7f86c07b9524f2f1b6b9"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "dca0d55e62636023616ca3b24e868639"
  },
  {
    "url": "index.html",
    "revision": "017db812535bae85db58a83691fc5037"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "f7665a7636432de83b7714ced6134e1d"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "5157fea9f23b1259086dc52f851ab408"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "b09163dc57f4e5bf7fada4d84d43890b"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "b01ad52d07fc9982b5857614586d8e50"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "9c4baf7e9fefdc928853e2bc9a74b59a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "f158e69096ece40ec72eedeec54844b6"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "07bdbd5b7148006fc7ee0b7108487603"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f778a0872406dce623b3816d367d8f07"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "d205a9a3142adef894e694eb5eb07524"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "df751aeaf9083439e73762f5d491bcfd"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "fe0dbb16320b51ffd808541853d9de28"
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
