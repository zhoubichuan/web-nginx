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
    "revision": "85e2e0ec38080e135ce2c62859c0ccf6"
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
    "url": "assets/js/13.2aa1ad4f.js",
    "revision": "3c515c31b6fa9d748d50d585ad1b94ca"
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
    "url": "assets/js/21.69b53bcf.js",
    "revision": "3fde902463dbedf330f9867849639078"
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
    "url": "assets/js/27.817a226f.js",
    "revision": "48cb485e3b8640adeca6a238c76b910d"
  },
  {
    "url": "assets/js/28.06d12d84.js",
    "revision": "70b26cd3243d8700b88457c2813c34f6"
  },
  {
    "url": "assets/js/29.9ff7e5c8.js",
    "revision": "7097c8ecc269dde959c77b88dff72e0b"
  },
  {
    "url": "assets/js/3.c3c1415e.js",
    "revision": "18058b0c56a915459413fa21438bb254"
  },
  {
    "url": "assets/js/30.528ebdbf.js",
    "revision": "3fd2cd7a17d2fbb1da4440bc92acbc78"
  },
  {
    "url": "assets/js/31.a662a19d.js",
    "revision": "127892bc52a1e922ac495e892f5e8b4b"
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
    "url": "assets/js/34.d67ce359.js",
    "revision": "ac22f5551191ab44af47a0189cdd1869"
  },
  {
    "url": "assets/js/35.9d7f46e5.js",
    "revision": "2e4d5d3164eeba39573c1fd7c303ada2"
  },
  {
    "url": "assets/js/36.3fe54305.js",
    "revision": "cfcc439531dc576b83a8c66884a15fe8"
  },
  {
    "url": "assets/js/37.eb1e2579.js",
    "revision": "f66841aca0a5482da6a604feaa4d3cc2"
  },
  {
    "url": "assets/js/38.a1353705.js",
    "revision": "6af1bfd932edc968ba4dd364ea8cf636"
  },
  {
    "url": "assets/js/39.d6e866a6.js",
    "revision": "9861f10eed1937d3e4997113acad94d1"
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
    "url": "assets/js/41.dea1ed3b.js",
    "revision": "ff5656b55d88782c992cf831e5990d68"
  },
  {
    "url": "assets/js/42.4473b196.js",
    "revision": "ceeac7deba08986983b9ccc6b3ef3612"
  },
  {
    "url": "assets/js/43.f87b5c5b.js",
    "revision": "964cea9fd6711b7bbccfcbcb20f2fc50"
  },
  {
    "url": "assets/js/44.c38ace21.js",
    "revision": "255e04601404e8554d74f3ba3d5f9849"
  },
  {
    "url": "assets/js/45.4b74f740.js",
    "revision": "b458ad9896644d9a2e5327c8d3374098"
  },
  {
    "url": "assets/js/46.a476c939.js",
    "revision": "cd21ecd76e2feb04131fa640a54e0c25"
  },
  {
    "url": "assets/js/47.65c6e2ef.js",
    "revision": "36c74a45cadf78f134748229de964293"
  },
  {
    "url": "assets/js/48.f4e4bbcf.js",
    "revision": "0a0e46b562caaa5643a7e5b9b6b0b6f3"
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
    "url": "assets/js/50.03b9a889.js",
    "revision": "3d68de61d2ff88fb05ea7ca26ab8f3b8"
  },
  {
    "url": "assets/js/51.f58f7553.js",
    "revision": "db0b713e07fd0606730b1e72f9d180c7"
  },
  {
    "url": "assets/js/52.0a64ad17.js",
    "revision": "eddfcecd7cc1bf73efe0d3e60fd9f6fd"
  },
  {
    "url": "assets/js/53.ff882677.js",
    "revision": "feeb801e13cdc100d80647f5c4a0d72e"
  },
  {
    "url": "assets/js/54.fff0594a.js",
    "revision": "032336a669fd71bbc9a1bbc39eed1bc4"
  },
  {
    "url": "assets/js/55.83b9bfa4.js",
    "revision": "82ea1bf2d708cf283ea69d3863ac7729"
  },
  {
    "url": "assets/js/56.2b7a0df4.js",
    "revision": "d48cebc4b422638b30c954d836ee2df4"
  },
  {
    "url": "assets/js/57.446ad5a8.js",
    "revision": "18b38a1633a7e1b847f3eece93f6affc"
  },
  {
    "url": "assets/js/58.b3190ac1.js",
    "revision": "9ebca8a0567858d3539cbb5e6af60316"
  },
  {
    "url": "assets/js/59.5d637127.js",
    "revision": "88608904c25ce9450ce3a275b252b385"
  },
  {
    "url": "assets/js/6.a2d70e32.js",
    "revision": "addae34de96c57acead3f60a18fad4ba"
  },
  {
    "url": "assets/js/60.1a12c9e5.js",
    "revision": "ec3b5d307f1380e9a47977ef7b53cf4a"
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
    "url": "assets/js/app.d37e53fe.js",
    "revision": "b294ac160822c5ebed53d328f89a132d"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "bb552299d378d3e8b8f80f3669d11748"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "57be82716bca92fc44efc997c48ad408"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "8724887872b6b9ceab00ca75efaa2494"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "236be99a2ef2890a9fd0018ad05009c3"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "7af448e6c4767d4117812592862b3ac3"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "baf3dd01d6bd3a9d9ecb29d4f5dd28e7"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "ed0d59a9d5a18d0f4f84cf58a161c35e"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "5fa07c1e23cbc335448339f39df7a860"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "017792107f8e5dad6199abda1b35d995"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "c6c10945bcd9726064d216ab3b0641ec"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "e968b998f6197b7bd8e69120866e785f"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "85be2e9088b4b758548ceb73e16ae66e"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "c99fdccbccee3cabc7adcd866d27447f"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "cbfa0aab0366d64fb978028cbc73aa6d"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "466c7073df53fc56956ec713e62bddae"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "1a71b7cedce84cf738f10b9b4a0939d0"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "6cb6601b1eae23acfa0836c35445c265"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "7515611b8932319462594ddbea55f71a"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "24680a4c9d1efc1e6825653a5891ddee"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "d0a5f02dcc6fcf55659a55552aa8dbf2"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "33d9b110ea5d973bda4d7cef71bddc37"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "1a9ef5106b45993cf2d9c69f5fae7f2e"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "0a2d01ccab39a948cce5d5090f14f0fa"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "11027a919b17724024b5997db08b45ab"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "df8502c3a2906b8b6bf9d275f9531d07"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "fb49a71bbccffb0c6824370cd38cf1ca"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "88834e6e0bb7a209bfa06e17c414a66b"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "75caeff798d787cb6801cace2fa35c6d"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "88f9b4071010554d335282a6166a5c90"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "70f29ce04b62610b2bafe92242d1d6a0"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "3e115254fcd393db5e3f86c5ca7cccab"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "da0114df1ed28e2da330df9f1804a699"
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
    "revision": "bd7a2a97d55539684f702b8a8dd83463"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "bacc4317d6429a339e57195702c9aeae"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "61cdfed031b785328a682bd458ccfa05"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "48bd15f44d436a467d74a349801849d1"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "00e393c3b8f9c6d43ba60cc5eb572272"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "72835368bfed645e603ee91fb7dc948c"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "8be46a424189e6137804aec9300ea598"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "6332ce8b251ae61af48e365db10946fc"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "47f9dadb3a537f1d99d3cfd64884dd9f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "2fd4edfb7365b9f5044ddf9b0c1979c4"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "1fd8ac378c97b8b7d45d7ee167b94055"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "617f3727dc170e51f8d8f198bb2974e5"
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
