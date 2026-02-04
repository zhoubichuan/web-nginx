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
    "revision": "38e221ac7c6ee70a4b0a74ff1a70f96e"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0604cac8.js",
    "revision": "a0cdb0002e2aafc4fd41af6b212bc390"
  },
  {
    "url": "assets/js/11.ca590252.js",
    "revision": "9e9bd13bf903d9e71b966874b547104b"
  },
  {
    "url": "assets/js/12.c4aa2b47.js",
    "revision": "a762bd07d339cbef37c19c33662a3e58"
  },
  {
    "url": "assets/js/13.84ab0228.js",
    "revision": "eadd8baf634271c069ce4302aabf1b22"
  },
  {
    "url": "assets/js/14.88e71469.js",
    "revision": "36ab223bd9920c430bfa6ba0182911e1"
  },
  {
    "url": "assets/js/15.d1c7dac9.js",
    "revision": "1c64a75d9d1445a0623b9798e7547a1f"
  },
  {
    "url": "assets/js/16.2bc1ad5f.js",
    "revision": "b7d180b8d7bf5334bc0bdbe8e8b1bce4"
  },
  {
    "url": "assets/js/17.0a0e3777.js",
    "revision": "44a2418d92cea86bf2e4f8b8d9b6d6cb"
  },
  {
    "url": "assets/js/18.95243c4d.js",
    "revision": "6960e6a7b12a3cdfc2e21922dac9022e"
  },
  {
    "url": "assets/js/19.0d9d425f.js",
    "revision": "429673c979a97e0e752f2b317c6e9588"
  },
  {
    "url": "assets/js/2.01a67752.js",
    "revision": "3e3e6d8c32e3e59e303ab57f3c6c363b"
  },
  {
    "url": "assets/js/20.1ea253e6.js",
    "revision": "07031be1e5d106650694c6d5c470fe7f"
  },
  {
    "url": "assets/js/21.093412eb.js",
    "revision": "241899e200f1e1b6231250034d5716b3"
  },
  {
    "url": "assets/js/22.1d7a969f.js",
    "revision": "ba924643f04465c6554a57c6b0fc808a"
  },
  {
    "url": "assets/js/23.ee114553.js",
    "revision": "f9532d30860a891b95be21e1a23e1f3c"
  },
  {
    "url": "assets/js/24.f6100124.js",
    "revision": "9746e652027a03482874795e1c63b137"
  },
  {
    "url": "assets/js/25.9ff04081.js",
    "revision": "150c1cbee637c1b010ba946e1a18c075"
  },
  {
    "url": "assets/js/26.da8e4765.js",
    "revision": "3dab1f2c923d68caf2a1cd270a04dbbc"
  },
  {
    "url": "assets/js/27.8c231f9e.js",
    "revision": "7e6ae82d210246b82d07d4c1f89fb4a7"
  },
  {
    "url": "assets/js/28.667cae1d.js",
    "revision": "f4ee02d704b4fae1594916cdb88b0fb7"
  },
  {
    "url": "assets/js/29.599e753b.js",
    "revision": "aaa36717adfb6fb105eb81bc53bc2a5e"
  },
  {
    "url": "assets/js/3.1420144d.js",
    "revision": "395191201e676ff7ee1c899077e2216b"
  },
  {
    "url": "assets/js/30.09d30746.js",
    "revision": "87304fb19a39d195bc8b9e7c0d2a8893"
  },
  {
    "url": "assets/js/31.d950e62e.js",
    "revision": "a3b65edbd066e8f226de701824e8df12"
  },
  {
    "url": "assets/js/32.de1432ba.js",
    "revision": "6478ca3bf85b9b39fc9747c2f46d8a2c"
  },
  {
    "url": "assets/js/33.753b88e2.js",
    "revision": "5386a9feade88febc0b1b2cc5cea7e93"
  },
  {
    "url": "assets/js/34.6cad2f09.js",
    "revision": "e6fbc6aa5f16320e0b13c1e6eaa58315"
  },
  {
    "url": "assets/js/35.28c8a43f.js",
    "revision": "7896c2e96cdd126da1a970a6af25455f"
  },
  {
    "url": "assets/js/36.b92ddbcc.js",
    "revision": "d7b973458bb4b95a72bc86faeec1638c"
  },
  {
    "url": "assets/js/37.08eb8359.js",
    "revision": "260c206dbe529b9cf173c8c55943c10d"
  },
  {
    "url": "assets/js/38.09b1a71a.js",
    "revision": "d143b7341cccd2582d66d8e870362d09"
  },
  {
    "url": "assets/js/39.3c98c00d.js",
    "revision": "f63f85017067ec52b7401b68ece03019"
  },
  {
    "url": "assets/js/4.fc149ae4.js",
    "revision": "9385677c69334b4d55177b74b8a2bd22"
  },
  {
    "url": "assets/js/40.a779067c.js",
    "revision": "15354ac4a2f594522a3de3e4239f27d1"
  },
  {
    "url": "assets/js/41.fa3485f4.js",
    "revision": "36a44263f19e630b7c58bc396893d903"
  },
  {
    "url": "assets/js/42.ce4c0c25.js",
    "revision": "7a6d031369e9a63c2db44ebb500c9be5"
  },
  {
    "url": "assets/js/43.2046630c.js",
    "revision": "3fbc4accfedd92ee3ae4848721e8de81"
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
    "url": "assets/js/47.e47977a0.js",
    "revision": "783af06ef3823512b85fb0c18ead2613"
  },
  {
    "url": "assets/js/48.6806d6c7.js",
    "revision": "9df68da8cef0c586ef53835018ae002c"
  },
  {
    "url": "assets/js/49.4347e0dd.js",
    "revision": "c7c6edf13b5a6f0276990271d934394a"
  },
  {
    "url": "assets/js/5.9f0e61e4.js",
    "revision": "57b998f8537b5f142aba2af4461cb41d"
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
    "url": "assets/js/53.2524a09c.js",
    "revision": "e6f3d8737656e60bce28b45826a4d5d1"
  },
  {
    "url": "assets/js/54.7c2cb805.js",
    "revision": "ad8f51839bef2d794e6b74028dd4e2f5"
  },
  {
    "url": "assets/js/55.b8af4a4b.js",
    "revision": "df2e1de1ceb6013df8faf0e9c97949ab"
  },
  {
    "url": "assets/js/56.d2478541.js",
    "revision": "2a1745a50a46f7b65f7406ec599b618c"
  },
  {
    "url": "assets/js/57.110102bb.js",
    "revision": "ab05d782949888d28f88aec34e0880e3"
  },
  {
    "url": "assets/js/58.f224bdfb.js",
    "revision": "d8999f69dc0b051cb2e596edfe86700c"
  },
  {
    "url": "assets/js/59.8e032f28.js",
    "revision": "a77e226b7ade983591a358c0277ff29b"
  },
  {
    "url": "assets/js/6.9b0b40f7.js",
    "revision": "4f8fe15062e6cda113cf9a075274b32d"
  },
  {
    "url": "assets/js/60.af5ea596.js",
    "revision": "ada7323413af591a5db8959595c9c8a6"
  },
  {
    "url": "assets/js/61.3312f1bb.js",
    "revision": "bda48e1313574a6b21d0311183f9ba3f"
  },
  {
    "url": "assets/js/7.54afdd18.js",
    "revision": "9337dbace345a5dbbdb535a892bd763b"
  },
  {
    "url": "assets/js/8.b7bd38bd.js",
    "revision": "022b4839c1304270593571391e8b8cb3"
  },
  {
    "url": "assets/js/9.22cf13ce.js",
    "revision": "4adacab83f882fc8f32701033cdba0e0"
  },
  {
    "url": "assets/js/app.9ae92ade.js",
    "revision": "0036ee3f3b4f8bf5478248d098ad6362"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "853ec90e3c5e5ccb56d6fd449bbe1876"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "486a628ee9eb3e5fa04e1b484559260b"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "bbf26df54441ad617aeb2b0bdf3f5112"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "25b2775aa522210827cc9b4c9507d763"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "bf66dba94caf388e2dfc4c0c958862ce"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "ecdd649a830653dab2195e9cb5e898e5"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "d816aa99ecff50ba0c8e16c184c699f3"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "eb31afc15f4b470d8ca890d7f61bfce7"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "71316f2683a53523af574f4d58bb8603"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "c3162fa62891178e98209f290247bd94"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "14311221b71bcd5bcfca645a43201e68"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "8eabe68b9383f4a734b4e0dcb2b13436"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "13e14b33627ad1c560d7d21087034f26"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "46fd9b70ebba94fc014396dc0471f842"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "e9e5068b639a846a6e9eb401ee7e9404"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "ad98a4f9c2b1b0b9933a86fcc954e2cf"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "c5c9ed73e88eb874ac1dbb8693f22bf7"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "a933f765235b0831449f35bd06f62c1d"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "85aa588665a9c3560bc79ce7ab1e3374"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "ada651dfe114f1dc6a04df3a08832309"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "470c336e3f642a601b4637fda6bf4e0e"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "b732415e3c460ce37cc7fd0fbfa36094"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "1191c455dcec47c06a3493955abd5582"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "f8ebb774ebba4aa2cf811dce86a10a1d"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "22cc18c10ba8c6f8985dc39b8aa05528"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "97b35b2713bd15be06aea67065cf0c92"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "a121dbe7399355042aebc5bf74bb4410"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "33804925d90734e70aa695968ddf98cc"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "fc6917680dc21e79d93fb71e9f939391"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "92d5b810ecc9877e6f1b2da8fcfea7f4"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "fa5feedb473f089bc9618556e21e56a0"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "b7ecfa542fcb5a5d89021b0a45647328"
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
    "revision": "7daf21e362f46d895a4270bc8ef83a5c"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "3f46a817b48df2a62e5174545d06b462"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "d65c552048d7942138b38274b5257fa8"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "1ebef6f7908f1a5fa35578ffd9666ef2"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "089303d8469a3ea0ad4ce4585467ec4c"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "cbb5aed70c6fbdbb78dc30fb87c1dcc1"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "c8b7193b8184c98587cadaf3df92ee4f"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "15f48f6e20e8651acb9e34c42aa9356d"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "51f2995d43c27387dee6066b18ecd019"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "8253d0467f41db36daf90c9df7900177"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "0f5633364c24cecf89ad536094392930"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d31150ad57321e394bc0dcd8bdcf5f56"
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
