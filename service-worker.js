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
    "revision": "a0efb143ffa4216a8a80de87c38e53d0"
  },
  {
    "url": "assets/css/0.styles.5992fa24.css",
    "revision": "2483677a110e43fb90603a3271344dc4"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.37dfa98c.js",
    "revision": "9b1b330378510150a5f566d162ec1125"
  },
  {
    "url": "assets/js/11.9626e1fe.js",
    "revision": "5174443f0161e7c8f895f6c735113766"
  },
  {
    "url": "assets/js/12.89db799a.js",
    "revision": "aa5314323ac5b9d6cee355d7fcfaf1c6"
  },
  {
    "url": "assets/js/13.6eedacc6.js",
    "revision": "984da5a0015d4cdb04640012a63d9f6d"
  },
  {
    "url": "assets/js/14.fb44f284.js",
    "revision": "4ec254c120494ec1eab5ae085d0bfc1d"
  },
  {
    "url": "assets/js/15.ff034e76.js",
    "revision": "7d5deb1b14a602986f79d439a4d6d38c"
  },
  {
    "url": "assets/js/16.dec3d964.js",
    "revision": "272f1df62633c7ad8329ee8d392af5d1"
  },
  {
    "url": "assets/js/17.269ee497.js",
    "revision": "75e4b26ccc2b407a7be121c461c24460"
  },
  {
    "url": "assets/js/18.0223516f.js",
    "revision": "8c46268ca68bf115b7e2e06d09f053fe"
  },
  {
    "url": "assets/js/19.becfa8cf.js",
    "revision": "ca9dcf02ef9f7d224d68df8e8bf63062"
  },
  {
    "url": "assets/js/2.447abacb.js",
    "revision": "50a54ee51ef1399ffaec0d91ea2fbef0"
  },
  {
    "url": "assets/js/20.d973dfaf.js",
    "revision": "c7f5e1308d5db2ec8b0ac25d69846016"
  },
  {
    "url": "assets/js/21.094c594a.js",
    "revision": "3b956782267c4ea69b5972174bb48ee7"
  },
  {
    "url": "assets/js/22.93277437.js",
    "revision": "80b14a1aa857d7cae6b93bda7b8beec7"
  },
  {
    "url": "assets/js/23.aa8d79bd.js",
    "revision": "16fe881f099db864a7e423222af0d3f2"
  },
  {
    "url": "assets/js/24.c18fd35c.js",
    "revision": "76be047ba8a0e70793b16e5db8899085"
  },
  {
    "url": "assets/js/25.543c9435.js",
    "revision": "126e21e868cc5672c6ac8b140655a804"
  },
  {
    "url": "assets/js/26.8ee74afc.js",
    "revision": "052b8b4f5b6c068b7f5a36085648647e"
  },
  {
    "url": "assets/js/27.0e7c136b.js",
    "revision": "4dd1ba6df0640f7cb492abf7d2b0828b"
  },
  {
    "url": "assets/js/28.c29303e0.js",
    "revision": "881b37eb1a9811bd13b3f359c7be3f05"
  },
  {
    "url": "assets/js/29.24ed1994.js",
    "revision": "1f278d235e03f85736f4a7bb5d320ee8"
  },
  {
    "url": "assets/js/3.c3c1415e.js",
    "revision": "18058b0c56a915459413fa21438bb254"
  },
  {
    "url": "assets/js/30.1069a896.js",
    "revision": "d00ccdcafab53576e666bbe7faab15d1"
  },
  {
    "url": "assets/js/31.6dd5688a.js",
    "revision": "1141271a474eb12119ea476ba76e0e6a"
  },
  {
    "url": "assets/js/32.d3576a34.js",
    "revision": "35c6ab905475adc51148daa458466abf"
  },
  {
    "url": "assets/js/33.493e6bfa.js",
    "revision": "3e01415126c9daacec124575fe9c42be"
  },
  {
    "url": "assets/js/34.9e39281d.js",
    "revision": "200eae935778fdb5e50871fd3e74d3ad"
  },
  {
    "url": "assets/js/35.f5d92f41.js",
    "revision": "8f144b3e7624633d40d6f5f0d3e5cfd5"
  },
  {
    "url": "assets/js/36.baaff218.js",
    "revision": "e9664bdd1d3c3db33f8baaac4a491097"
  },
  {
    "url": "assets/js/37.a6c0fa5b.js",
    "revision": "869be0f2d563f3dc6a89607e7824cd00"
  },
  {
    "url": "assets/js/38.a1353705.js",
    "revision": "6af1bfd932edc968ba4dd364ea8cf636"
  },
  {
    "url": "assets/js/39.6cd91188.js",
    "revision": "f410cbb188fdb09e431e129855f22ed7"
  },
  {
    "url": "assets/js/4.b4ba3dc0.js",
    "revision": "d36470e21d434e3b0001492da8c2d5ac"
  },
  {
    "url": "assets/js/40.01d06693.js",
    "revision": "33765c37de02e8882b2a1e480169cc73"
  },
  {
    "url": "assets/js/41.da1f4ff4.js",
    "revision": "da0d278f9f21f17d9ccc4b8e6396dcf7"
  },
  {
    "url": "assets/js/42.80e75e77.js",
    "revision": "35809b5a4c9fd93f3bd48b6c07f2bfd3"
  },
  {
    "url": "assets/js/43.df3136a5.js",
    "revision": "0065cee020a12e8a94aa3982cf7bd1ee"
  },
  {
    "url": "assets/js/44.5b54261b.js",
    "revision": "0f0db0328aaeee1d52988446aa64f4c7"
  },
  {
    "url": "assets/js/45.b28eed12.js",
    "revision": "469b16f89d9c049c5c6e949ad1324511"
  },
  {
    "url": "assets/js/46.cb207732.js",
    "revision": "e2bade49de4f0fceed3947a2736cd759"
  },
  {
    "url": "assets/js/47.7e10b188.js",
    "revision": "e421f4f25309e9fb008430570642ea9e"
  },
  {
    "url": "assets/js/48.66f0230d.js",
    "revision": "59da8404f793d3be15c9b89498be1dc8"
  },
  {
    "url": "assets/js/49.34c34824.js",
    "revision": "b88cfdd4a74136ccf6944d220c8f515e"
  },
  {
    "url": "assets/js/5.8a0e3170.js",
    "revision": "c3efe669e35a7e7de34d5f053b83fc50"
  },
  {
    "url": "assets/js/50.3a697227.js",
    "revision": "ff8c13d2422bbd7b72d7ae0e15bcc097"
  },
  {
    "url": "assets/js/51.a68cd683.js",
    "revision": "eef1724804bd5f4020b6410a91d44429"
  },
  {
    "url": "assets/js/52.6c63bd31.js",
    "revision": "3d63bad50b0ac9c519ed779299d74ae0"
  },
  {
    "url": "assets/js/53.43a91b0b.js",
    "revision": "2786fa15f3fa24bd3dc40a50319e8b68"
  },
  {
    "url": "assets/js/54.86f540eb.js",
    "revision": "e8bbd73ad5a9de387a46e50fd2795a7d"
  },
  {
    "url": "assets/js/55.7812b0d8.js",
    "revision": "9d96f649802c5a16d686e86e0fc5f8dc"
  },
  {
    "url": "assets/js/56.3b21a7d7.js",
    "revision": "91f9699725eae6da0e593c41e6f38c68"
  },
  {
    "url": "assets/js/57.df9b5472.js",
    "revision": "59cc394a9326c36070973179d56ec14b"
  },
  {
    "url": "assets/js/58.5eac858c.js",
    "revision": "79245502409d53e563a5bf464d60ea99"
  },
  {
    "url": "assets/js/59.9c2ac0bf.js",
    "revision": "3b61d6fac8af6e9f84e3b8caf7cde80c"
  },
  {
    "url": "assets/js/6.a2d70e32.js",
    "revision": "addae34de96c57acead3f60a18fad4ba"
  },
  {
    "url": "assets/js/60.f2356302.js",
    "revision": "c93c195b0f94fa936ee007a63c5ce0e7"
  },
  {
    "url": "assets/js/61.49d6940c.js",
    "revision": "a9331573f7b62983cc002c23a3760b2f"
  },
  {
    "url": "assets/js/7.80b6d60a.js",
    "revision": "9f9470654db6fac7e1885635c9a160c5"
  },
  {
    "url": "assets/js/8.19a7b15d.js",
    "revision": "b573a2c9493f545796d6f2fb7bbbaf90"
  },
  {
    "url": "assets/js/9.19e7bb15.js",
    "revision": "18ecd9ab8fe078d0dc03cf83b1837652"
  },
  {
    "url": "assets/js/app.9fde10d6.js",
    "revision": "68d380688fc5910588f7eb58ecd513ef"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "975a9428e5c9bd69adea73ca4c17dde4"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "56d1f5b9b6adf3cd11d6e7d5fbe69c63"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "8fdd3fb9af0d5888417b7cbd4db98630"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "8659a7f60f237540a01b5570e8d62304"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "eeb12a2f06d82791d9eec7efdd0aa139"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "fb4eb9815d5b2b1891efa3c9228d4631"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "fdb84850d0668143a61d182532221e39"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "a6485dff031e141f0fcc42d7ed7cd3a1"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "faff2a817c0a9bbf37ec03e3cf93b348"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "68539d1595c47262b60e5e1d80b7ddb4"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "618d37d88330975eb17ff2525c063aff"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "f499ce32cb74a30e79d556263024720f"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "8a1dfbce3ae4a42fc76949cad89d9d4a"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "448223278261e4b25e07a722a5ae6f2b"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "97a797223d5f09d449bb8e807d8f1f50"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "b213973bd05c008aa9d7e50021ef6524"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "04c314eb3fa59f60822ae1ac8a3ec8eb"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "8dbd45f3977d6aff802606aa85541657"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "ad9b6197778e268dc257e71b1c6112a6"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "904a07f18df00155f00eed2cab827e71"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "3e7a14f53dd79463d9e6d9b57f76c7bf"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "2599d5099fc7667a054b28f93e62a093"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "d30dbf243a253c32afac4b10768207a4"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "158cb19663d963f9dd86ff023daac102"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "4ed0e45e732e846327d25f5b55df13a0"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "0315722aee213b1430baf9f69f468e20"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "3f49c7284790290fd0420989b46f77d6"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "4609e68b7236e6903a0a4f242d6fdab5"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "02d2406659d2b56fef7e4c5cfb552755"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "0a483bbc2b52dbcc29f5c9b1355313df"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "4e84d27050d862f2fb02689ffb89a9f4"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "aaa1e1858e38da9f4db0379a6667add1"
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
    "revision": "a196df1d089f6a0a17277665dcf60e32"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "0516f03382755a4e0edede20c4033863"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "74fc3f1d5ebee0f853acfb39ce187fe7"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "40c3eb47695579f1707f54898da496ed"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "3dc0985af3f967f1ddd3f56c7f1ce236"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "16ffe30accb411eb8e8959dc63f619af"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "cd73f0b8c626e69e4cbad8755814c085"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "fc11f7f8449449d0a06ad1835d3f553f"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "d2a73c1386f762207f7902640a718c05"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "004411b0744d91fec67c3f1404e368ac"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "fae5b7a9415ece3b66a0254b36dcd1b2"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "5db74b1c33cb29e347936ed96a7e075c"
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
