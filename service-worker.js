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
    "revision": "f79ce731e4b60b4206f65a5bba57134c"
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
    "url": "assets/js/12.e6f5b0e9.js",
    "revision": "58f6be87749d36a1ca43d2ade4ef4a9d"
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
    "url": "assets/js/22.5ee57c96.js",
    "revision": "6cfa1672f7cde81ed2c018ecd4aa758e"
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
    "url": "assets/js/25.21b9babf.js",
    "revision": "f08ed620bbb50526aefdf54178f88521"
  },
  {
    "url": "assets/js/26.13c220c1.js",
    "revision": "8c1fff8d2e038ee3db60b57e0302f586"
  },
  {
    "url": "assets/js/27.d735d35e.js",
    "revision": "77ac04ae5ad95a08658284d51222f250"
  },
  {
    "url": "assets/js/28.c02cf6f0.js",
    "revision": "ff7273a700b793cc2e9c12144531e12b"
  },
  {
    "url": "assets/js/29.9bad37b9.js",
    "revision": "84b18cd2faea87bf53068f39fdb8f0a6"
  },
  {
    "url": "assets/js/3.b4e04022.js",
    "revision": "19d3f5b3d34831942a9a671f3826fb8a"
  },
  {
    "url": "assets/js/30.5140fb5a.js",
    "revision": "32102e5a9ab5810892aa1e65e738fe47"
  },
  {
    "url": "assets/js/31.7ab3f9c8.js",
    "revision": "643794e8c0eef6e726ce4b9588ce8204"
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
    "url": "assets/js/34.6233c393.js",
    "revision": "fa2e6552e9ee39aa8e2249f9114b4fbc"
  },
  {
    "url": "assets/js/35.e27f2fa3.js",
    "revision": "b79e556b778b4c9cb9ff1c3e85306599"
  },
  {
    "url": "assets/js/36.5fc07320.js",
    "revision": "f143331f448bd15a2481024f3c553ae2"
  },
  {
    "url": "assets/js/37.a8ab2ffe.js",
    "revision": "c965a2b8c182e0f621b649c7cfe404f3"
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
    "url": "assets/js/40.0ae1516b.js",
    "revision": "dc7782a3665377633ecc1e3806ade0d6"
  },
  {
    "url": "assets/js/41.8b2428bf.js",
    "revision": "4a02461b7ddf216e0d4d01187e417b66"
  },
  {
    "url": "assets/js/42.1e9d4821.js",
    "revision": "cd023e7bb3681156d6fe2eb7efeaf8ad"
  },
  {
    "url": "assets/js/43.a4507ec0.js",
    "revision": "da764db280a68341faf05250e8ecf68f"
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
    "url": "assets/js/48.090aff61.js",
    "revision": "4e1026abe75b6ba8fad50f88f441cb3e"
  },
  {
    "url": "assets/js/49.93335adf.js",
    "revision": "52ab8dda43bdc43822cf6059aced647b"
  },
  {
    "url": "assets/js/5.7f3f73d3.js",
    "revision": "fbe42aab549e18bb8f4d724f3f249ee2"
  },
  {
    "url": "assets/js/50.84fc2873.js",
    "revision": "b6f4d879665c4ce6a14b4b8a2bda5315"
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
    "url": "assets/js/53.b71d7cb9.js",
    "revision": "da87f7bd9ceeaff605c24791b2f0d145"
  },
  {
    "url": "assets/js/54.9222b221.js",
    "revision": "302f1f0e7612148c022bfb0dfb27e5e8"
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
    "url": "assets/js/58.6a37772b.js",
    "revision": "8f001bf66e136c0a25ebec1c52aad454"
  },
  {
    "url": "assets/js/59.c22a457c.js",
    "revision": "c41bd427c85e6f85155dbfa882b3e8d3"
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
    "url": "assets/js/app.9117a2d1.js",
    "revision": "27d3e62196c0856d0bfa0791d0846eea"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "8459ab22970de98739ad00c470d1fd31"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "5cebbbc4452f35c7140bc29a9d48901a"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "cb06a12943ee4d848830b622666f2d10"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "b62a5909192607b651367cbd298950ab"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "d4af3b10f98ac547e02437e96586ae1f"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "379243f27c7687215d1229efc7dccc8e"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "c7f6fd2c32ca75f5ac1c740d71b71fa3"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "778a9f4fb8d698216f8f0aa4aa3cea2d"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "b94c636a5baece5e7d35087da1e39351"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "4c83d6d6585b73751ed86b762bae9241"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "8c67e8bcd1dd477bc55eb19d3805e315"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "d20ebbed711e2680af7f97cc3d63b0dc"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "5b667a8a8ba8cecf8a02d107e439f316"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "75c07a017e253af49f445feadc6d84c1"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "ce16f94403591ef9dfdc74209f0e6644"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "3fe8538df9523dcbdf05a60624fa3baf"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "452da222950d80892283f901a00d2832"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "0251c1b1bd57dcabc5deb95077e30d21"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "bbbe3d19f834c9204e3de162eb9e8f1f"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "9212642671d83bee77f46f3622c8cd8d"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "9d68a90e4dd72f1a03752aed6c9b4175"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "86b80c272fd0b25e4aefc238ea1c20bb"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "83b25164fc91b97707b3b3cad0689320"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "0f396a5e0d82424bbd8fc4603ab80004"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "c76a21393e8d126228c2f29075b70fe4"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "b2151f4b9530dd8c23d601021b29d0c6"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "34cc7e9b42f1b586d4e0e77c4650d0d5"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "6f552c536d5f3032bcde9f790eddb0e2"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "aed48658abc9adef00387aec91768c28"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "c7397ce0f8fe86be4bada6f09e1bfe9c"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "dfe86f5d1deaa12ae61f14d1fcb576ef"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "6a3664b9e2a574c87d6bc82eeb87d926"
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
    "revision": "dcc7da668a4b1124295acda665f1ca4d"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "edeb6884c76b155ab76523d850a9d082"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "5f49a5d70097007c4d81a654cd6ccf6a"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "cc167fd4e61c6c1ca503ed45ca740819"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "2a26b372ba0f8cb2a527771bbd7745cb"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "22ed2c858dd10aaddd42e3a6d7b6ec63"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "f9a59435ea3166424ecbd322c6fe2d5f"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "966447dee2a84fe873e31287ebf367b2"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "f5046f83f710006c6197dce512bf4658"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "ccde9b4f71801bf347e14641021685ca"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "f4da337660036c3ca0119dafde06645e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "cab25179b2776254e2fd15de5625dfc2"
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
