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
    "revision": "68ca9f70836b0faa4513b94f53a6a196"
  },
  {
    "url": "assets/css/0.styles.e35792d2.css",
    "revision": "36acb019147e1598b4a8459475459dfa"
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
    "url": "assets/js/13.99ffaf06.js",
    "revision": "29ef9c2ed50be8f345aea1f51bf2842c"
  },
  {
    "url": "assets/js/14.9e28f387.js",
    "revision": "d4f425b3ce573faa4bcf316b53c5e2e4"
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
    "url": "assets/js/22.8057cc46.js",
    "revision": "67979a7de39c53e4105eac2e5436ca8c"
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
    "url": "assets/js/30.13b07d79.js",
    "revision": "5b45b89a877be5427f2f40c8b9ffa061"
  },
  {
    "url": "assets/js/31.d9fb7449.js",
    "revision": "04facd57df7f6d254d9cbe54e12c1a0a"
  },
  {
    "url": "assets/js/32.9a80f6da.js",
    "revision": "68b54ea1fe8e638e387c7ccb52458c04"
  },
  {
    "url": "assets/js/33.157af3bd.js",
    "revision": "f1671f577b662025eaae3bd695e8033c"
  },
  {
    "url": "assets/js/34.748c3fcb.js",
    "revision": "bc4c4a3ff1e0aa0decce59ea2e6c5d27"
  },
  {
    "url": "assets/js/35.e27f2fa3.js",
    "revision": "b79e556b778b4c9cb9ff1c3e85306599"
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
    "url": "assets/js/43.2046630c.js",
    "revision": "3fbc4accfedd92ee3ae4848721e8de81"
  },
  {
    "url": "assets/js/44.ae13460f.js",
    "revision": "971b220bc5991dba96e7fc92ab1b4ffd"
  },
  {
    "url": "assets/js/45.bcb0b7bb.js",
    "revision": "2821ceefe21a5459238a8f745690678e"
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
    "url": "assets/js/49.6e6027c7.js",
    "revision": "10894ba395b662c3c7fae243897ce646"
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
    "url": "assets/js/51.2e83ad8c.js",
    "revision": "0f2186ecc7479a1f21b737a93874258a"
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
    "url": "assets/js/55.b4af27e7.js",
    "revision": "bcbb337cc63f8b59019b7be4ce6bbfeb"
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
    "url": "assets/js/58.8fa0e886.js",
    "revision": "8195f8e9ad5daf50d512c81b9b5b3363"
  },
  {
    "url": "assets/js/59.8e59632c.js",
    "revision": "a55496408c32445e4bbf4abccc6e5a86"
  },
  {
    "url": "assets/js/6.62ee1e80.js",
    "revision": "9f8f0b0e34be001e8b62dc17bcab3a22"
  },
  {
    "url": "assets/js/60.53a86a3b.js",
    "revision": "bec23a5ec08b79b07d161024733b6258"
  },
  {
    "url": "assets/js/61.2a238bb5.js",
    "revision": "0923f2e0a1340adc92c442bfe0ebe6ca"
  },
  {
    "url": "assets/js/7.31f11c84.js",
    "revision": "2b00b8d0cc465b4d8cdd54667f532ad4"
  },
  {
    "url": "assets/js/8.4713eee0.js",
    "revision": "9aa7fd197802991d7dfcb61c946ff7cc"
  },
  {
    "url": "assets/js/9.5edbe107.js",
    "revision": "359db89decc21ad9b32a0e74d58a8481"
  },
  {
    "url": "assets/js/app.1818be2a.js",
    "revision": "c0c6728e1e298e07203de0bd39479692"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "31e4d06b17f343b26114e59c335aec79"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "9422cf6ccd5a5abd10b444a45f3675ec"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "4999adbefe0ee0c738e52fac51d2ae9f"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "f56391ba082eaa12fa951811336953f4"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "a37d9e381d8e34ab9f161c0890c36571"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "cf053420a2e22ed23b3e423811ba2d57"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "2b95df3acc89c11ab5df4a4a8cd1ad0d"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "5b911fb2d6dcc4a2c7cae80fc602b732"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "a310352e3fa071938eff82ab55cf9750"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "04cff699018e0b0962a31214f757b01a"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "36a1a9f9ff9af117d070b5d400c28179"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "e37729455c9686aa2dfc795da7a0c0e6"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "317a34a8af9b1a726412bc87a2ccbb4d"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "c0dfce76aa0b43c4bae171886879e2a8"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "1a336bbd5f15959154352554aa5b7021"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "c20b69138e6af093b1d11992b3d96ff3"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "b91f3bd09039ffacea9f68a732eafe03"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "1a265aef0fa9ef6e01c090d47b3ff039"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "f44e62807687fa19268ea82f44ab6948"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "eeff0c1e923e24be3f54a85d91bf26ea"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "7a56af3fef99d443799b8ae2e364aab5"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "59b3ef92b90eff1188ba196503bcb015"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "be3120d7e327dd8a1224f1d1be3ad57e"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "0a067b98b66057f122e16bc67e450933"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "ad52b9ca051879bae785765ee37826a1"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "405f3ec027bddd6d4dd59066c6b4c278"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "085d9326f51c699a99b60e6672854ec8"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "11f18913c01894568698499a5ee41d33"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "3070449faadc414d8d5a962c8104aced"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "2f5bbecfc1bff247b91892b69c869cf0"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "89c4b9fcdf8b130321e3c417037bcbd7"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "d3641a919b58d529feb7f41293046225"
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
    "revision": "c84e63a969dc49de2a478148128761e3"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "9de9f4f191ebca5889324760ff479fda"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "2ac041215333115ee5fe0d4ef556e220"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "7c2c4463b073ca70f2f6c6f63ed52795"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "b54ed7dba257b5696a15b74a23e28dad"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "1c07a1892db35a6a1722a794a2d34a8e"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "5cd91b7f09ae62992f7d6f62248db25c"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "dde86fda6303b071449546f3bacf75dd"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "005404324c3e12fafac124be827de63e"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "0021dedeb2ba9679dd0be8f435737a89"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "645d8c7cb4aaebd19906af182f108c97"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "f5473c7d60da7cc80c3406763926c04b"
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
