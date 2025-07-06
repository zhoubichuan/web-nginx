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
    "revision": "2cbd4da608c328ce4843a315f383925f"
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
    "url": "assets/js/13.d6879b37.js",
    "revision": "c1dac5d43a746933e28935c8a1438b8f"
  },
  {
    "url": "assets/js/14.23597d9e.js",
    "revision": "ecdce1977fd62c8b53c88a6e1c129e93"
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
    "url": "assets/js/22.41b4eba6.js",
    "revision": "49935aaeec461e30a82070b697058b4f"
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
    "url": "assets/js/25.21b9babf.js",
    "revision": "f08ed620bbb50526aefdf54178f88521"
  },
  {
    "url": "assets/js/26.13c220c1.js",
    "revision": "8c1fff8d2e038ee3db60b57e0302f586"
  },
  {
    "url": "assets/js/27.3bbb60dc.js",
    "revision": "2bb6cf4b65645c65e9219593af05e10d"
  },
  {
    "url": "assets/js/28.635d4a6a.js",
    "revision": "515076a069725e9eaa893ef08365300b"
  },
  {
    "url": "assets/js/29.9bad37b9.js",
    "revision": "84b18cd2faea87bf53068f39fdb8f0a6"
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
    "url": "assets/js/31.d9fb7449.js",
    "revision": "04facd57df7f6d254d9cbe54e12c1a0a"
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
    "url": "assets/js/37.c3d19cb5.js",
    "revision": "b01f286a99fb996371c983b80e58c271"
  },
  {
    "url": "assets/js/38.17e4df94.js",
    "revision": "280f3591a184c1ca6d53396cc87b0d7d"
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
    "url": "assets/js/40.8a848f30.js",
    "revision": "8ea36194e97999a69a6c092d5e9a03ae"
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
    "url": "assets/js/44.d27b5370.js",
    "revision": "fb39ae6767df0dff0fc5e4bcec06f985"
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
    "url": "assets/js/47.a40686fa.js",
    "revision": "02da4ca26136f168f008860e12cbe210"
  },
  {
    "url": "assets/js/48.d9f46376.js",
    "revision": "1cf9081f51dbcb760155b819cb34a3ad"
  },
  {
    "url": "assets/js/49.26274b2f.js",
    "revision": "4ea58161330e83922ee2cde3b159b728"
  },
  {
    "url": "assets/js/5.7f3f73d3.js",
    "revision": "fbe42aab549e18bb8f4d724f3f249ee2"
  },
  {
    "url": "assets/js/50.40aaaafe.js",
    "revision": "39dd98f752e336908f282fbd5c9e4ea4"
  },
  {
    "url": "assets/js/51.e1e3a8bb.js",
    "revision": "8d99e9bdef3721aad37af22c64e35a02"
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
    "url": "assets/js/54.9222b221.js",
    "revision": "302f1f0e7612148c022bfb0dfb27e5e8"
  },
  {
    "url": "assets/js/55.54e3163c.js",
    "revision": "5c85efe25a88997fd6ae26624033b8e3"
  },
  {
    "url": "assets/js/56.48fe4b28.js",
    "revision": "fb9475b1df0ab59cbe3a26d97d8b74ee"
  },
  {
    "url": "assets/js/57.0752ce75.js",
    "revision": "d649f0f106de9199b34101b5aaa19062"
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
    "url": "assets/js/app.63d645a3.js",
    "revision": "d7220f6dac49cd99a814a335fff97b1a"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "daf10a600a66ad11c1de7af43e869d87"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "f9efc4a3cec35a7c3a9b83c279d60c1d"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "75ccdcbb501ea9c6b4656e2467832eab"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "db6f05efd6e69522cf8deac7994b0f67"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "67a837330d534e516f942a29d677af45"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "e51e6674531f8e4c8d289d784d3be6aa"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "975412e30b8f8a5d8c6d5358c6ca5f7c"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "5d49c6aeb51b31e87bc8358f0bc367ae"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "fe10b26cb01be83ff242a4720b252053"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "ec5bc88769b98e6a3208538fb1e6e640"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "642bd0a87eee1cd5e6818227f02f3bd5"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "de9fe2e693e65f727b6421a4fdaabbd2"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "43c4f84dcfe1254721d55f24b30b064c"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "e07a280a28347643f8a4a1592d7d9044"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "46ddeffbb62feaed9cb7a90c64940396"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "85eb6f77132927c32a7f0706e1a2392a"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "4bf39692df729f1520ac0c111f925d5a"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "cf4f27500b6c49495cba09fb95de2591"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "6d6b200c4e58cc24023e2210e0af4283"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "a34266f3ba1750b0454af40d33c477cc"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "34a962e8033949cdbaacd0080bf24c70"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "15db1730a293018dee36caa6d0bf953c"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "d5453a4c4a8956666c1f5527c20ba85a"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "b9fe451652b5e9e0de369ae1d8458c87"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "5cd3a3088920b87ddedfede3a7103dcd"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "41561cc03e6e66363bf8a136b91f04eb"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "2fd5c11d7702f4e76357b4ecf9fc2028"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "51eb40c538abffca7ce1a6303239760e"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "4fbb3f91092bcaa26bb96ac20f40aa05"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "20c52fdf4fb8f34447d44dffa4adb3d3"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "7848b449d82df22a9dceb6bc62a50274"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "61977ed980498ceca00d3e5faadf09ba"
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
    "revision": "0805f4b2ccc0c982b22a2e7e14949dde"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "0e43bcb6491d4a8c7ae67defa811956c"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "4e67f75519315ffd952d85515d916686"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "9526799fde50661f14b9da37dbf1ad78"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "3a8025ff6d122dd436039d4eea4388a7"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "4e079a1a1956923bd93effd566c06120"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "37187726567789d8ccc3eb25d51fc70d"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "fa4631ea69a0b365f3f7d4be6d7f1516"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "aec4df50576e43ebd949986a4f8dbae8"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "7878c2d879a07d9d956b15b3849d4f65"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5ace38c85e727e644495b1dadc3b9932"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "6f90d155eb702c69f8baaa1f1927e7bd"
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
