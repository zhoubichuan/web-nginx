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
    "revision": "8cf21b650c3eebe21f3565029c251b2f"
  },
  {
    "url": "assets/css/0.styles.b94351f4.css",
    "revision": "963730580d098714940665ba0d18f2c0"
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
    "url": "assets/js/1.595a9062.js",
    "revision": "26f9e672c8b1706fa7b855dda4949b86"
  },
  {
    "url": "assets/js/10.afd780cb.js",
    "revision": "884de950ffba97eab1648c164c9bda8f"
  },
  {
    "url": "assets/js/11.09edb8d7.js",
    "revision": "f4538393d1d614ce205976df666b6f27"
  },
  {
    "url": "assets/js/12.3b27ae08.js",
    "revision": "cf3763a9e0c40c4ee3a415e02e3caca3"
  },
  {
    "url": "assets/js/13.2e594fad.js",
    "revision": "fcdcd698c0da330e98ec690b6e8d7c91"
  },
  {
    "url": "assets/js/14.ec84d776.js",
    "revision": "4f75af6c2e348bf65af6d5fcf99e6630"
  },
  {
    "url": "assets/js/15.5ea5a8c9.js",
    "revision": "bad78b69dfad519e08e4d475741fe7b6"
  },
  {
    "url": "assets/js/16.094ad2fa.js",
    "revision": "a289c74d24359ffbaf1648b4e539d40c"
  },
  {
    "url": "assets/js/17.24c17daa.js",
    "revision": "87cb663af29f796b79b01413c25136c4"
  },
  {
    "url": "assets/js/18.e778f005.js",
    "revision": "a5dabee723dcffba517f37fad466eebb"
  },
  {
    "url": "assets/js/19.cf66e802.js",
    "revision": "053431b9cf04a08cb6d9ede3b13a87bc"
  },
  {
    "url": "assets/js/2.050db225.js",
    "revision": "0c6e0da6ebca23f16784e4fe0b2bf091"
  },
  {
    "url": "assets/js/20.c38eb1a6.js",
    "revision": "b1545a8ed7355a02bb7cc6487ecfd13e"
  },
  {
    "url": "assets/js/21.bc08b347.js",
    "revision": "232dd6b67f9fd9a23d350037013bc64f"
  },
  {
    "url": "assets/js/22.a813cc31.js",
    "revision": "6b5b70a7e814a25653360d1a2192a7df"
  },
  {
    "url": "assets/js/23.4b7d7a64.js",
    "revision": "25cf9b37fd8854edf207fafbc270833a"
  },
  {
    "url": "assets/js/24.40d0bbdd.js",
    "revision": "7595205b54615a3dad7e7b793c33b86c"
  },
  {
    "url": "assets/js/25.fafc9afc.js",
    "revision": "28164bb9786e29d357d8909fd88937b6"
  },
  {
    "url": "assets/js/26.0d6aaefa.js",
    "revision": "ab031f3297bec293e30a401c813e70d0"
  },
  {
    "url": "assets/js/27.d937dd0f.js",
    "revision": "65c76ad72436b0e41cf85a422b3e31ec"
  },
  {
    "url": "assets/js/28.46fd41b3.js",
    "revision": "d6e5f7246aa7017d91790801c216c941"
  },
  {
    "url": "assets/js/29.7f04d5ce.js",
    "revision": "09d31027d66e37829127fdda59ffb25f"
  },
  {
    "url": "assets/js/3.54ac4c7b.js",
    "revision": "a175acad09109512066e05d5b8472daf"
  },
  {
    "url": "assets/js/30.f8ba1e60.js",
    "revision": "50906cedff698b531dda5b103f22b40f"
  },
  {
    "url": "assets/js/31.3ef318af.js",
    "revision": "6a38cb7174ab9eadd866da54ee7cf646"
  },
  {
    "url": "assets/js/32.563237c3.js",
    "revision": "acdf52aa478395b44e393ecf94a3400d"
  },
  {
    "url": "assets/js/33.ec983e9f.js",
    "revision": "8efc8f9a4d00498ced7e441d87e418df"
  },
  {
    "url": "assets/js/34.63b61346.js",
    "revision": "29f86ca9ffee0f2facfa034abea2b0ee"
  },
  {
    "url": "assets/js/35.f056114d.js",
    "revision": "304ff08e9e38dae997f7ca6bc1f887fd"
  },
  {
    "url": "assets/js/36.64c0c114.js",
    "revision": "e38b83cbed39f53348387fb1075450aa"
  },
  {
    "url": "assets/js/37.8e6d1ce6.js",
    "revision": "918c7df025389c0691e0d5345e0c3061"
  },
  {
    "url": "assets/js/38.b755dcca.js",
    "revision": "daca3b65499459b12f4cd7b6ed7972e6"
  },
  {
    "url": "assets/js/39.13b2ee9b.js",
    "revision": "3a4e970b7a1ba967b57fa18d0c6c6f4e"
  },
  {
    "url": "assets/js/4.098a8f16.js",
    "revision": "a48f1a22e25b54d23697db657e767b08"
  },
  {
    "url": "assets/js/40.a6fff9c2.js",
    "revision": "870229d074a3e0af3d1f98b2572cd84c"
  },
  {
    "url": "assets/js/41.6bad4a77.js",
    "revision": "70ab22ce6e593e54f4e37a57f845b1d7"
  },
  {
    "url": "assets/js/42.e8f2c417.js",
    "revision": "70eb724ed6fba69f1381846495e9638e"
  },
  {
    "url": "assets/js/43.03204242.js",
    "revision": "b1bc16776a9314c84a6bf1a68b45335d"
  },
  {
    "url": "assets/js/44.542ac916.js",
    "revision": "03dcde21a8d969b7e647895a315bd313"
  },
  {
    "url": "assets/js/45.ec447c51.js",
    "revision": "2af337f1b420fe77aa59f424dc3f4969"
  },
  {
    "url": "assets/js/46.7cb54be1.js",
    "revision": "317de775e9eac1641324dd57b3b9058f"
  },
  {
    "url": "assets/js/47.a2ddf1b1.js",
    "revision": "7add054bbb80eb3270cf58960780a683"
  },
  {
    "url": "assets/js/48.22abf0fb.js",
    "revision": "f54df5c1d53925bdcda6dbb76ee4aa0c"
  },
  {
    "url": "assets/js/49.4ecade7c.js",
    "revision": "0ee05bad508fbb765eee6a4aee3c0bc7"
  },
  {
    "url": "assets/js/5.7f632276.js",
    "revision": "5520e177e22de9d4abcc4d845f5794b7"
  },
  {
    "url": "assets/js/50.dd41358b.js",
    "revision": "e9327fd37f16ff3f92f5711d72e1174e"
  },
  {
    "url": "assets/js/51.8d93ef54.js",
    "revision": "29511b806f4117da689713470e5f9921"
  },
  {
    "url": "assets/js/6.f242b5b0.js",
    "revision": "6c91c3039e4227e43e608a315ce02337"
  },
  {
    "url": "assets/js/7.d4ed74d5.js",
    "revision": "7f48948eef7dcb63394b5a98945524ad"
  },
  {
    "url": "assets/js/app.8e240f0a.js",
    "revision": "7606a4d402604afde9503898f982b6a9"
  },
  {
    "url": "assets/js/vendors~docsearch.c6fe7a33.js",
    "revision": "7fef1accef46b3f10940ea40577eee20"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "05ff28fbffd0be2682d43afbb3961fd1"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "88e1c53f895f59ebce5ac5cacfa58131"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "c01adc41ebf8ff527001b9101cd2490c"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "6703578daa71287604f91fec6853a5c6"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "161328541b5f0ef34e5c1d71aa8ace0b"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "ff04e3dd7fe4f1f3b6a77f38b25700ae"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "ee639f2fc062ccc420f2fb60351292e9"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "ab8d74505415a42211f124e3693e93ff"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "67c6d9eb4590926695929600542023ca"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "8f61f55b0b41cff01ddeb63567d65658"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "4e706ac1fb22c4d658dedb626fd40bcb"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "f06c336231e4419dce61d37c88f54bb3"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "b7fb29496f5b6d7ee94d2fef38c8f293"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "f04e79fe6a3df3437433eed43c10c430"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "78a3fb3e731ac0bef60610a02d423666"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "fe01a1750ec2617ba5e351282b52a11f"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "34052518b1002cb29fe6befbca5dd4e9"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "e16b3d285e0eb340f0ec88fbc8183772"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "af22af139fee6d34f37a10cc01fe624c"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "7b155db2aa8bfb4054995aad541d1f69"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "747048aa20841ee684b31970c1ef85aa"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "f1b91d75d09f6c8957bc254f83a67fca"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "d198f797c2fb1065db6e4f468044fb55"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "f803373b4665262a4a5beaa48d136113"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "8b95ef2759a8de5e364e2da21d34850b"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "03f811ddf0f0421b42aae28cddbc9db4"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "8a225833f3e1a876177ee9cec76cacc1"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "5f3a8c12a909ba7fd71e768ddbc7b360"
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
