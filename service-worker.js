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
    "revision": "2e13416be59f2cb87f6ba78a32513ffc"
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
    "url": "assets/js/23.834701bf.js",
    "revision": "f1ffce4fef84760f232a94a197f6fe82"
  },
  {
    "url": "assets/js/24.40d0bbdd.js",
    "revision": "7595205b54615a3dad7e7b793c33b86c"
  },
  {
    "url": "assets/js/25.57554a44.js",
    "revision": "cc7cd0bb6ff0e4b167748dc04b76e6e1"
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
    "url": "assets/js/28.f63baa01.js",
    "revision": "2c3132cf7aa72b659a58aa0cc5daeaac"
  },
  {
    "url": "assets/js/29.123bbdfe.js",
    "revision": "ab3d9fdd5f7581aeaad4cd93e4481a2f"
  },
  {
    "url": "assets/js/3.54ac4c7b.js",
    "revision": "a175acad09109512066e05d5b8472daf"
  },
  {
    "url": "assets/js/30.bb0fc12c.js",
    "revision": "a4b590ded23b01c99c00f87276145e12"
  },
  {
    "url": "assets/js/31.9ea4a7cb.js",
    "revision": "388e11cf0358da274820ec799d263f4b"
  },
  {
    "url": "assets/js/32.563237c3.js",
    "revision": "acdf52aa478395b44e393ecf94a3400d"
  },
  {
    "url": "assets/js/33.2ab3fad4.js",
    "revision": "6dbb69eb030ebdb975e48f29b2ea76bd"
  },
  {
    "url": "assets/js/34.63b61346.js",
    "revision": "29f86ca9ffee0f2facfa034abea2b0ee"
  },
  {
    "url": "assets/js/35.8e458fbd.js",
    "revision": "f0e778db2e9559d2ebe729029aa07c3e"
  },
  {
    "url": "assets/js/36.4613c93b.js",
    "revision": "4e9b1e39873e5ec6200531d81d9bf829"
  },
  {
    "url": "assets/js/37.896f2d52.js",
    "revision": "94466d631f9788147bb47354de64fb71"
  },
  {
    "url": "assets/js/38.90a79a7d.js",
    "revision": "1e6cecf44049f6d7ed283dd6b9808873"
  },
  {
    "url": "assets/js/39.d581c9bd.js",
    "revision": "6f820de7dd3b82e458272a681787ab8e"
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
    "url": "assets/js/43.b6c09dbc.js",
    "revision": "cbe1e0bf87d97493b2e9af5c4262842e"
  },
  {
    "url": "assets/js/44.74ebd7ac.js",
    "revision": "c4c9d841b731f9738cfda2d0e2b527db"
  },
  {
    "url": "assets/js/45.f0d31cac.js",
    "revision": "15132b238ebfa84d0a6109e5a66c8d13"
  },
  {
    "url": "assets/js/46.00a75b28.js",
    "revision": "e56635d55a3fdd8f3f6255f8651c0b5d"
  },
  {
    "url": "assets/js/47.d373cc2b.js",
    "revision": "f40b5e9a3d3e8d3d0804ccd272c71a46"
  },
  {
    "url": "assets/js/48.23dcc1c6.js",
    "revision": "6c7bc2d8dd5602e3303e7de96a453fbe"
  },
  {
    "url": "assets/js/49.229b276c.js",
    "revision": "9c4d0dbffcca4ceb912ad69566c6cd43"
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
    "url": "assets/js/app.9c6cc4c2.js",
    "revision": "ff8c19b751b9eab4fb36fa88d27dbebf"
  },
  {
    "url": "assets/js/vendors~docsearch.c6fe7a33.js",
    "revision": "7fef1accef46b3f10940ea40577eee20"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "270642d04516def70164744742266c1a"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "fa1c70b218d8a33054555c09e14f324c"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "ac2cfa3b3ee830bafe8305dbfca20cf7"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "1bdc67b2637e4698f8cbaca5b9446261"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "94992b89eb249ba285ff5790586ab992"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "4911438a59679c86bee655f89fc8847f"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "f8b69c983604876c8b15d4cd84f518a7"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "ffbf7f8a3ec3ee5d5c74df32641b16c2"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "2f0a4ad5527bdc05cd7ed5895226bedb"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "306acd9d6e8b048536a2097f45f769f6"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "d17890b15cade3ce0d88d7c4396a834e"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "1cbe27e07091a9bcd06f3aff4761631a"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "3816fc92d38f9b41cf6f0cda205c595d"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "dc2354a9e0da1bfe4dbce7e3b97d3729"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "32a675b399cdf4635e72765334973e60"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "190300cf7c66158221fab6500e97ad90"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "6d320b5681372678f4955247bf913440"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "651ac31527f04248ed41516fe2914c07"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "0c0ff7f898d06c89bc35dda770070461"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "43453215f57d7becdfe82a9426332d2d"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "209d10c96a44a06f8f5a0fcf959ccf7e"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "4fe31e6428c9ca61a22f5d25daf17604"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "bf0ec36c5f982d0a1fb4d254873f53c4"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "d4b000a58284d1c840173735d8654c91"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "ad5a2a727a0fd6359385f7bd19deeec4"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "5b937bf3e9423b98d683bcc76ce2d14e"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "b6c4b87f339ec81ec4e1949b78dfcdf2"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "0eb2d711f74d1a2554f8d9eda7898d61"
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
