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
    "revision": "57f33ce5ca10c3b28b11c28a4ea4eb8c"
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
    "url": "assets/js/12.61c29c16.js",
    "revision": "86d181a2c48ab3685648288a7046a338"
  },
  {
    "url": "assets/js/13.8c251e82.js",
    "revision": "bbb246dc41a688e0a38703f5ed44151f"
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
    "url": "assets/js/22.f6a67447.js",
    "revision": "41c77c54453314a22501114d1f365515"
  },
  {
    "url": "assets/js/23.7ee43b51.js",
    "revision": "197759743f690cfc17554e605bde828e"
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
    "url": "assets/js/26.1f260aa2.js",
    "revision": "68df6c9731a0809c5c985f36f538d610"
  },
  {
    "url": "assets/js/27.c2c0dd80.js",
    "revision": "c1b5a3cddaa9cbd913c221fadb835520"
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
    "url": "assets/js/3.506677a0.js",
    "revision": "d27525e2edfd05784ac86eabffefb1bf"
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
    "url": "assets/js/35.fcab9d13.js",
    "revision": "c809c39068d829bb98e597bdb5c20f35"
  },
  {
    "url": "assets/js/36.65d5a523.js",
    "revision": "d25401c1dd3f5187655cf3d57a02ba52"
  },
  {
    "url": "assets/js/37.08eb8359.js",
    "revision": "260c206dbe529b9cf173c8c55943c10d"
  },
  {
    "url": "assets/js/38.7da69dc0.js",
    "revision": "ccb8f1d51978a2343e68040789e94ec3"
  },
  {
    "url": "assets/js/39.84b41e38.js",
    "revision": "ee4be19ff9d6b0cf203a93c8853e9451"
  },
  {
    "url": "assets/js/4.fa7b80ff.js",
    "revision": "bb558367dd898c3064b1e96ee0393d30"
  },
  {
    "url": "assets/js/40.a779067c.js",
    "revision": "15354ac4a2f594522a3de3e4239f27d1"
  },
  {
    "url": "assets/js/41.ae0578d9.js",
    "revision": "6f79ba9e8f7b3b8a51fc1f3d8d5e22d8"
  },
  {
    "url": "assets/js/42.17fc5914.js",
    "revision": "4979fed07e48d7a2f64f318971c6e976"
  },
  {
    "url": "assets/js/43.a4507ec0.js",
    "revision": "da764db280a68341faf05250e8ecf68f"
  },
  {
    "url": "assets/js/44.51821036.js",
    "revision": "118fb08aaa7c903f375249fc51675470"
  },
  {
    "url": "assets/js/45.aa8faccc.js",
    "revision": "d4ef64b9b8e33b7f88b9ef3925183504"
  },
  {
    "url": "assets/js/46.8b076fc7.js",
    "revision": "5099a4efb092edaff5f7986b462fc0cf"
  },
  {
    "url": "assets/js/47.fe5ae295.js",
    "revision": "adb03388034ee2c8754fc2493d026bf0"
  },
  {
    "url": "assets/js/48.6806d6c7.js",
    "revision": "9df68da8cef0c586ef53835018ae002c"
  },
  {
    "url": "assets/js/49.aade79f5.js",
    "revision": "93395dc02d2db3b6ef6f3bda9c86b4ce"
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
    "url": "assets/js/52.337dc6bd.js",
    "revision": "dd3bf0f5fb3d71535b3b3907efeef26c"
  },
  {
    "url": "assets/js/53.5a02a372.js",
    "revision": "bd5e6f76f1a4739201259b5849570707"
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
    "url": "assets/js/56.da9e1d30.js",
    "revision": "c2703ae8c0044ff54f7915a5aadf7f2e"
  },
  {
    "url": "assets/js/57.110102bb.js",
    "revision": "ab05d782949888d28f88aec34e0880e3"
  },
  {
    "url": "assets/js/58.8fa0e886.js",
    "revision": "8195f8e9ad5daf50d512c81b9b5b3363"
  },
  {
    "url": "assets/js/59.8e032f28.js",
    "revision": "a77e226b7ade983591a358c0277ff29b"
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
    "url": "assets/js/app.04acdf1b.js",
    "revision": "2012112d53e1889110532c8d53c41f09"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "2fa5f24c80fa95112af53ebfe77cb288"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "e9ac4cf70bd0c5c425636d761037e301"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "25bf06fe03db6f231c3386ef91378def"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "a240c5f3b5f7e1fbaedcda6dc8395dab"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "6cff1a5381ccd035d1f8d82b12352006"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "89d7e9d0174299a1bd719fb6b7bce70f"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "9eb0cc17befa1b96e413722a5dbf6679"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "e363105453b68914408f9bbd1dc3d591"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "14a282c7f5f859f44dd12c48804d3dfd"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "243c8dd2ccae61fc147cdb4bf8df1776"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "4e0a212f8d035b9941b5b3ea627b3705"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "a8ec5ffa0be0804dde61cc204eaa83e9"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "595d5dffcac5a7b501a319b6adaf7207"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "91cd7eefa9de9878166ccd60c7969940"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "9808e41c2bbe4e134e1dcb222811cec9"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "eb5910a70150d844d284ee77e484cb9a"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "43a68b183d0feea98e121cd77846eec4"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "eda5b2cdb35cde92b1162b3504f8b953"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "aa5fcc5cf314ce71ecef51574b551896"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "d696d1c2ef22040b6895edf484c15b5f"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "c8e201b5be3d73b0b59d574b163a6a96"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "ed285c00c1bedb1e516a853c41e9bfac"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "129f0147bd0764fb831d83005912e9df"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "9ad3ed476ad3b678a08b618314d75c0f"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "21616587c6976578f4d71b41bde873a2"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "954f388767ccac2143889d89c76cac8a"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "6227546da9f8f88a43fda493650d3c8e"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "d01c1985a533009c222913c66d185da9"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "c161ec048dce537d96f6b65cf42a37f4"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "6b62e94faedf4ab516d0f11525fed4ac"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "2873828546f80da072de96b5fa748e8d"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "44c2741ef03d854296d2fd378ad3ee41"
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
    "revision": "ecf8cfa2ba7db8564eefcfad109c843f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "c7319f5a8427a87c388ae1859488a7f7"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "a65ea676560ba33dbb3a928399c07935"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "5602af024cafe74c45f8cc201cd4bfef"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "4382cbb78d299b4756efbcada5878279"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "43086233a7674ad8b72e2f13d684f8b5"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "93d10f25d0b74d70b6c553b20be242df"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "87004bad1968c0afb83a3371ea5d8568"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f4a76a316ebfbecb84eb29d8116e2bb8"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "b41df3dec66e5a3f5003399e2e3efe2e"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "bcf711ca461e27d921d4d3e4e9991d26"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "7a9d9b3f29aa1a2335c226c343037e18"
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
