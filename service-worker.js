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
    "revision": "4ddf6fea64544279238ad164cb50fb11"
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
    "url": "assets/js/22.69c155bf.js",
    "revision": "2994e9cb55baefcac6c340dd94c5e326"
  },
  {
    "url": "assets/js/23.82ae3ab4.js",
    "revision": "8f9bbdcbf00c98380e713766394dd8cf"
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
    "url": "assets/js/28.c8040b6b.js",
    "revision": "fbb810635e7978d1d66977dfd9fde99f"
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
    "url": "assets/js/32.630f7819.js",
    "revision": "7830384d17d1a178058179788e9247fd"
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
    "url": "assets/js/40.0ae1516b.js",
    "revision": "dc7782a3665377633ecc1e3806ade0d6"
  },
  {
    "url": "assets/js/41.2e651477.js",
    "revision": "f07307832e9001ef0e883236495f5b31"
  },
  {
    "url": "assets/js/42.720d7cae.js",
    "revision": "9d284a683b0d42da2307f99e8c2de2bd"
  },
  {
    "url": "assets/js/43.bbfeba39.js",
    "revision": "ec7b79a2a31dd2b27afd2b1d239cd579"
  },
  {
    "url": "assets/js/44.7bb83071.js",
    "revision": "3cf1f25330c018079b9ebeb61c2729ee"
  },
  {
    "url": "assets/js/45.69a2fea2.js",
    "revision": "1d04cb215eb4e9e47402c3fab043ab6a"
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
    "url": "assets/js/51.2e83ad8c.js",
    "revision": "0f2186ecc7479a1f21b737a93874258a"
  },
  {
    "url": "assets/js/52.4eb7196c.js",
    "revision": "fd6083e24e3877c0025cf509b7cecaa4"
  },
  {
    "url": "assets/js/53.40a61e86.js",
    "revision": "b561cfa434b1106c8d2781540277be97"
  },
  {
    "url": "assets/js/54.7c2cb805.js",
    "revision": "ad8f51839bef2d794e6b74028dd4e2f5"
  },
  {
    "url": "assets/js/55.18bfeb4b.js",
    "revision": "a4dc8c2b3faab365069600d10b59a7e2"
  },
  {
    "url": "assets/js/56.e6612ce1.js",
    "revision": "b7e07f11a6fd89fd5b19e4d274c53896"
  },
  {
    "url": "assets/js/57.0752ce75.js",
    "revision": "d649f0f106de9199b34101b5aaa19062"
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
    "url": "assets/js/app.4d3577a7.js",
    "revision": "52876578dd618e3f69322a8b5e0c243b"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "47d027479b37eb29da2d1b1d21c5ba82"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "21a504199e396721bccc77aa352936c6"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "5bb324c400596d037f828a22763d4fc7"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "6cb1ee61febb7d2903bd1100f94fdbc8"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "34d86a5c331b4b3926e6fd9f98598804"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "8b0e308e50a4317d2fbd50bc3c84db46"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "21e0da4811549edfc5d8e28cb3bb885b"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "4feb8b9dc67c3f457b3eba0cdc95502c"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "910d0bb92e8193be0037e353fc067859"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "ff0ddca1ec16bbe8ea4b0962e4d8bc7b"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "8a1ce97a29b14c04acad5e246bacea99"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "d9d13fd8d78f3e6e309fe34ceea8d3a0"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "7de465ddbc66d793d9a193c9cde9358f"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "e8658032749823aed25127c2c0da29e4"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "0899f3b9c7dae264e78b39098ae28722"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "6a268f506462e3453e11a064927fc95a"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "e1a03daf2744f2b44f3545a31243bd63"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "1408dd2aa8b977b8e561252539b20e3a"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "7485165dcd4d2a09d19a3fedebe172f8"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "343327774d629fb739420bb3635ba35d"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "07087b852e4a2d25dd36aa0589da6a7e"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "d49a9d00e32b87715b3ad40f40e06424"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "166f7de1b11b872e53fde4ef58829e5e"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "9ba8c00f439032185b5066462f3bd0b2"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "6b61f1fa9c229766d44b1a256206a80f"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "f2ffea24b94d1876bf66feb12486a1fd"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "914792b7a159c1dc818d07dfcda75b5e"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "c2ab9bb0af54893aa72d70537b9085c0"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "90c93e21acd40d0423b3d0ae03f2895f"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "50de88dbc26a8d14a6461ddff62817bf"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "d67e871193ad932de67f65d52abd6ade"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "e86c434b5629d7db9a925c7e640b6b4b"
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
    "revision": "4446aadced876b0a98bc7c08e85e9f77"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "d790003eb7f420d965974799a60cce22"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "b4d6b4a69013cc12b9c935cb2dd2321b"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e22659aadd2e26eba57fbd17877f8993"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "91f886ab16837c8c360abe19e473b4ad"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "42584e159fafb62520615a330be1e017"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "d8ad82eb87a7ac20b975754f644aacfe"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "b368547076afd598bb8817cae4282f62"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "e356d029c3f234ddf3eb110ea2cdafbc"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "9d9157d869086092aa601bfbe60d1817"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "d5601e2a554abed5b2e7fe3f75dc6b67"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "627485b4bc57187450b8f338e9af6056"
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
