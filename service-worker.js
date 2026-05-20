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
    "revision": "27be19800a98a3f58699a37191de67c6"
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
    "url": "assets/js/25.c92ea435.js",
    "revision": "ac31f831c379a5f9c06ca0d7c27779b1"
  },
  {
    "url": "assets/js/26.f3f04f57.js",
    "revision": "278abb79e45977844e1b2793dc8c8700"
  },
  {
    "url": "assets/js/27.696b8bdf.js",
    "revision": "e4582d2f83b90a833f0754ff153ed428"
  },
  {
    "url": "assets/js/28.06d12d84.js",
    "revision": "70b26cd3243d8700b88457c2813c34f6"
  },
  {
    "url": "assets/js/29.b1c54677.js",
    "revision": "dba03dc4de59e7beae0f971f88ce97fe"
  },
  {
    "url": "assets/js/3.66c4019b.js",
    "revision": "c6efbd28a0b4b86fbe9ca9729bc3a955"
  },
  {
    "url": "assets/js/30.3ea852c7.js",
    "revision": "9d810f8c4aec022348374cb5ff2d5e31"
  },
  {
    "url": "assets/js/31.c7910690.js",
    "revision": "a1bf9899d9571dc902cca1aa0138f6b6"
  },
  {
    "url": "assets/js/32.b5d8ae6d.js",
    "revision": "9e8845c745d9d4631aa92137a1199e18"
  },
  {
    "url": "assets/js/33.83f17a5b.js",
    "revision": "67c101bf947fe2f7fea08b36441f941e"
  },
  {
    "url": "assets/js/34.d8da6a05.js",
    "revision": "f1d83f82f9ec8f8c7d0dc964b44b3c8f"
  },
  {
    "url": "assets/js/35.9d7f46e5.js",
    "revision": "2e4d5d3164eeba39573c1fd7c303ada2"
  },
  {
    "url": "assets/js/36.98853f52.js",
    "revision": "24a8113aac332f9aa29f5aa8e02fa89d"
  },
  {
    "url": "assets/js/37.44924972.js",
    "revision": "1809f1a3d5a0ea6ca54eceaaf47eea4a"
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
    "url": "assets/js/41.143050e8.js",
    "revision": "189b45eeca0aef3a8167062621e2ad33"
  },
  {
    "url": "assets/js/42.a07fe62d.js",
    "revision": "db077dc52d1788274978fa29e54fd4a0"
  },
  {
    "url": "assets/js/43.243877be.js",
    "revision": "98458c5baab7d68ef1b93d90ac1d626b"
  },
  {
    "url": "assets/js/44.7cd59487.js",
    "revision": "54701746a829a775e22558dd8c46bfaf"
  },
  {
    "url": "assets/js/45.4b74f740.js",
    "revision": "b458ad9896644d9a2e5327c8d3374098"
  },
  {
    "url": "assets/js/46.1a795366.js",
    "revision": "4f2a270a353181deef0060e50e0ebb39"
  },
  {
    "url": "assets/js/47.276e9234.js",
    "revision": "7799b0916e739f970a8f92cb641c42ea"
  },
  {
    "url": "assets/js/48.d9fd7591.js",
    "revision": "7a26d5094f98e870b9a972ae0123bb0e"
  },
  {
    "url": "assets/js/49.c0c5c20a.js",
    "revision": "f9e67e0f4de59ab768eee1efed2717cc"
  },
  {
    "url": "assets/js/5.8a0e3170.js",
    "revision": "c3efe669e35a7e7de34d5f053b83fc50"
  },
  {
    "url": "assets/js/50.28aeb558.js",
    "revision": "bdff94edc6a481fd1b15064d0d30634f"
  },
  {
    "url": "assets/js/51.f58f7553.js",
    "revision": "db0b713e07fd0606730b1e72f9d180c7"
  },
  {
    "url": "assets/js/52.b1e57413.js",
    "revision": "c4c014260a3cb3f61db6ec6704349eaf"
  },
  {
    "url": "assets/js/53.674d8dc6.js",
    "revision": "46cc022192207329565f7e5e8ce445c3"
  },
  {
    "url": "assets/js/54.6e4f1217.js",
    "revision": "f1884db7ae8f1010f69d57b93ee9228c"
  },
  {
    "url": "assets/js/55.606ea1a5.js",
    "revision": "221566958718a570b65c44df69b757be"
  },
  {
    "url": "assets/js/56.d57e1872.js",
    "revision": "49f8ffa527837e93b231099e71a631dc"
  },
  {
    "url": "assets/js/57.2549eabd.js",
    "revision": "14a502246e4ced86d5e7a18769e27077"
  },
  {
    "url": "assets/js/58.478e52f8.js",
    "revision": "8dd31680f73254cc8344315e57ce7083"
  },
  {
    "url": "assets/js/59.8f8e0ee5.js",
    "revision": "0d7ce95fbcf6de8ce11ef9fc38fe1086"
  },
  {
    "url": "assets/js/6.a2d70e32.js",
    "revision": "addae34de96c57acead3f60a18fad4ba"
  },
  {
    "url": "assets/js/60.df07299f.js",
    "revision": "7c14bf992b3fdafe0fbd1873b30f4f2e"
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
    "url": "assets/js/app.6e8bd45b.js",
    "revision": "50be6393764bb4faaf70eb93af227ff8"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "e1a253933baf9096d77ad967475e8f09"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "d62666e60c7a76f19ff65deb3e746cdf"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "7f1b07ef67588cd26a94702895af5ed8"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "8880a52fe666b3303bc8780f8fc2954e"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "38ad72293d11e893e26dfc60bb7e2681"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "2410e6fa08548915a9aec7c119cb7358"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "1ac4e718fe7072d3c199e038cf73e1aa"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "9a2806af0d409e90fb5396877c80904a"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "9e334be6d3712ed826c6161ebeee965c"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "48f800e0c6af2d943fc1e82508e74db6"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "e24058ebba8f81e11a65a3bf0b02c202"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "adc893eca0a2d21bfd794fe8c70a6ea5"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "52501646bd9eb00fd8e7018eb7edb091"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "9f528e3166231fdb433c54a2cf5b1232"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "00c483f5e874c9f736df6f55dc1907f5"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "063b1eb78550a3125cc4a4afe472bf3c"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "b1017971d3a653a1d7d4c1e1da4d3765"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "c0bc4387a28ab7bc81de8caf1a9595a7"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "0f249fb1fb27d18aa0b678e8b35774d6"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "7be9ad45ed113f666f8a8895a36e2480"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "b82a63729307eb5eac1d2f57b6dc1657"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "09516449224bf19b8c18a6ee12166b35"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "dae951bc7e63ef2feb49ce695d09098a"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "d00ddcaca62ed564094edc11e2749648"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "b89b8a2b930fe51a40c91af3627ac538"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "dec222d6cf1fb69f0b126a27d8d55b7d"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "dd0dbd6f02b9706c6aae798c1da683c7"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "05fc856ad8c34c7f59918117d1042a92"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "cc6c9f391e1f47b60c582a60c3aace74"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "6070f134f24387d94620aa199746f0cc"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "f40b50b22f6198712669c3423d0c33b8"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "3b916b42749ed065f66208bdc26e1556"
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
    "revision": "2b5b399c048577d7545a8d42e10d1901"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "0657862be45d2b62af9563a817c18488"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "b4d89986d753eaee8cf5f1c3d6d76a2e"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "d747ad6fe7a27ebe0a4ec9a44c89c74d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "db3c7865c3b2a6d2ae4f964460833c7b"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "87f61dccf78bb3afa8a6f254b026145b"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "94889ea60c057e8188948781269846bb"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "6e154df86792e336f14f808e34db5ab3"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "511b2fe7cf28c8319278cd4156a24c02"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "f1fa9fc284a2cc107ff0bed912a4f6cb"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "348b90869994873262dadb9643c3623a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "88adf0efed92f114d5d4f142dc782b54"
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
