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
    "revision": "7b7311cf3f9f869689b0ef101c2153dd"
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
    "url": "assets/js/12.d32c7264.js",
    "revision": "fbc597d629315e876be800e04002000c"
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
    "url": "assets/js/22.dec62a1b.js",
    "revision": "cf36f23b518c3efad60cf09a2009dc5c"
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
    "url": "assets/js/26.bcb3f5aa.js",
    "revision": "b28d6ffc64553807449fdcba6f4df45f"
  },
  {
    "url": "assets/js/27.3bbb60dc.js",
    "revision": "2bb6cf4b65645c65e9219593af05e10d"
  },
  {
    "url": "assets/js/28.21357a61.js",
    "revision": "5da38d492c668f149f173880435fd383"
  },
  {
    "url": "assets/js/29.b5384b83.js",
    "revision": "9013ff7fb7b001e2b2259172cc47c468"
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
    "url": "assets/js/31.6b6730c4.js",
    "revision": "14950b9383ddfaa3e009c14357cba969"
  },
  {
    "url": "assets/js/32.02249e38.js",
    "revision": "44d72ef7845767fe47d93c9481d729f5"
  },
  {
    "url": "assets/js/33.0ff3dbd6.js",
    "revision": "ac18e1d31dde93505ad0896caab55f42"
  },
  {
    "url": "assets/js/34.748c3fcb.js",
    "revision": "bc4c4a3ff1e0aa0decce59ea2e6c5d27"
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
    "url": "assets/js/42.1e9d4821.js",
    "revision": "cd023e7bb3681156d6fe2eb7efeaf8ad"
  },
  {
    "url": "assets/js/43.2eae5baa.js",
    "revision": "bdd14a7e7b376ea1e149365efab30c1a"
  },
  {
    "url": "assets/js/44.0e533cf1.js",
    "revision": "1b39d7c3f0a504832e9ed7bfda723941"
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
    "url": "assets/js/58.3c9b73a7.js",
    "revision": "9b02c2b2db8c5a33db96df0aa8444a10"
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
    "url": "assets/js/app.27b928bc.js",
    "revision": "8a21de7234a27091453089ff2953073b"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "a78c60ba1d8db57cd31ea4ac77b831fb"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "b2a25fe69f6586a33785dd85e2886991"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "c6794e00ba0308b33f6c5ec18b21ebd1"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "7524848efad9a97edd56527e103664c1"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "438f768d341c448588d25cc6f3750399"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "7e2339419f64c738d2b6d311a7bc6297"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "0d7f1ee166c746c3f048aa60d504e86e"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "e3bb8274eb09a4ac4efbe0a26d39d1dd"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "c889e1c42b8322e3b9feff3a947c17a6"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "0609c196abfaa4723c707c84d716ad21"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "0254a53be004cfe9bfdc7c15b3108d04"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "10cf0e62a825df1a5b723ee3b2a48e12"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "0c04d9bf34e78c3b7cb3b60633bec87e"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "003476b44180085fba977fa2e26f49f7"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "c16cdcb5d7a3b59144e42d0cce27a29b"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "c45bbd660c375e9f1dad3cc22816e8dc"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "385005fc07a192efafcc7e0c156e07dd"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "2da58f8899d0b89c8021952a74efc8b2"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "f73d8e6b6cbab0b37bbb52285f783aa2"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "6fc4ed316fff834f2215f280ec393de8"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "5248ba904365c35757d85fd84d33fd2a"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "d17f84c567e689f9313a61c32fb07b82"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "b0229ce63714976df04aa059145545ec"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "f0a7c55cb990c52970598debcf6fa226"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "3ab8bcd9d50076dce8ac083d14ce6293"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "a5b4693dbf1063de301890d29ffb57e2"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "032cc888d1567e2fca76f0ffccaaccb5"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "2273efa0ae13b8f9f50571cec78f9f47"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "1bdbe4867909833ae3dc9af113341806"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "ee8f7a32f42062ca2c9f52bb47c20e19"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "f46298c304a56ad3e1b6b557efe72a4b"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "23a05e1411ad8efb4aff95c7e26360f7"
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
    "revision": "da6e15666b28d9bcbea5ca6b2cf793fa"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "2efc1ba831982e7fd266516476d77ffc"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "b7c7068c9f21ebedd004fd7d87bfe9ae"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "2b2eaabd677c8e23c94647e471c0f156"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "6716629026c7bb03dbb3947576992738"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "5c5d1e84624572b52e0123267d651a0d"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "20be82b151aab07379d4bcb552179317"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "62380bfb611a9820b2711d623602bd3c"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "8f5d634465a83e0deb02d02a621c5f7c"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "6f2605815a6d1cc0b2b309c8842eb645"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "fbffd7f1eb030013c4d8403c4b5ba8db"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "fb4e2b755e52c7a75d829df78a2e95c6"
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
