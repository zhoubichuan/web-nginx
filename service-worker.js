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
    "revision": "bd4c83bb4e55013b7074e48faee29151"
  },
  {
    "url": "assets/css/0.styles.f55d81f7.css",
    "revision": "d8f6c6088c56b38a1d5558850ce333df"
  },
  {
    "url": "assets/img/1.75aed4bf.png",
    "revision": "75aed4bfd65086f548b18a1b588d506d"
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
    "url": "assets/js/10.141eba88.js",
    "revision": "33e8e86efc8e7f03f7a2f49a930b4511"
  },
  {
    "url": "assets/js/11.eb52103c.js",
    "revision": "b956db7df7abb385572cdf817202ee56"
  },
  {
    "url": "assets/js/12.10eb4d8d.js",
    "revision": "6cf3adbc6791048cdff19dcdfc877a92"
  },
  {
    "url": "assets/js/13.eed0dfc2.js",
    "revision": "bbd1e2a3e25aff411b324e4d12c750f8"
  },
  {
    "url": "assets/js/14.ef6122fc.js",
    "revision": "fbfb8fd4980f2b7257861f8c3c07e455"
  },
  {
    "url": "assets/js/15.a917918c.js",
    "revision": "d08e5216eba069cc07c8a50cb99b132c"
  },
  {
    "url": "assets/js/16.baa7b47c.js",
    "revision": "138bfca28bed515f1bf6afe6acda6efd"
  },
  {
    "url": "assets/js/17.4329a3f5.js",
    "revision": "07c296ae5488d153a04fbd4494b2dd22"
  },
  {
    "url": "assets/js/18.cb55b29c.js",
    "revision": "0deb727caf6523e4e83c994f47b39880"
  },
  {
    "url": "assets/js/19.d95cca11.js",
    "revision": "dd5cde6f81c769a65c1e0bd4d5a5639e"
  },
  {
    "url": "assets/js/2.82475168.js",
    "revision": "0e83b9192b783ff9320f1fb929dcb38c"
  },
  {
    "url": "assets/js/20.7895150a.js",
    "revision": "a58f76d549b9de50a315e38b88b774f5"
  },
  {
    "url": "assets/js/21.d644d2c8.js",
    "revision": "7e506a48b88a21c18be60430e88cb998"
  },
  {
    "url": "assets/js/22.57922214.js",
    "revision": "e3c7e7bcb2e950a4cfca1d20c0066e00"
  },
  {
    "url": "assets/js/23.10e0845a.js",
    "revision": "8317739ac26364b2c65ee53c22bcce8a"
  },
  {
    "url": "assets/js/24.ef9e772f.js",
    "revision": "6b7ac33822338c81e491b8cfef291aaa"
  },
  {
    "url": "assets/js/25.f6fa4dc3.js",
    "revision": "7297e318825bfa04c5e62cd9936ff4d0"
  },
  {
    "url": "assets/js/26.1db73f7e.js",
    "revision": "15610ad19c7d422d2b341c0b35965a79"
  },
  {
    "url": "assets/js/27.9a81b596.js",
    "revision": "3c07cb735983aa48c8446c17a8040019"
  },
  {
    "url": "assets/js/28.15380c9c.js",
    "revision": "38fefc0c3acc4c967873462cc8332617"
  },
  {
    "url": "assets/js/29.35eab9bf.js",
    "revision": "d60487964a64dd80b2d5950739f1eb12"
  },
  {
    "url": "assets/js/3.972616e6.js",
    "revision": "85cd0b0d47c89eba4a856936e5396d1b"
  },
  {
    "url": "assets/js/30.5a6c66e6.js",
    "revision": "50278ec0ae0a0b5ba5f70ec8dfce10d3"
  },
  {
    "url": "assets/js/31.78cd2acc.js",
    "revision": "4a7aae5a86ff61d9e5436dfafb2f6139"
  },
  {
    "url": "assets/js/32.71d47095.js",
    "revision": "03b0f345df33b071b2e5083c0b5fbdbf"
  },
  {
    "url": "assets/js/33.b0ae93c2.js",
    "revision": "7b78bb654951e38fa418e7026d4263a8"
  },
  {
    "url": "assets/js/34.8dc142b9.js",
    "revision": "a75e9c1ba8595c49c0d9a437c8454608"
  },
  {
    "url": "assets/js/35.3416f3e3.js",
    "revision": "0dd6be78b7bc716d0953a6d875cb02ee"
  },
  {
    "url": "assets/js/36.fd66eb2f.js",
    "revision": "cbb3fe26dcd0fbd7845bf5eb204b4317"
  },
  {
    "url": "assets/js/4.62d091b7.js",
    "revision": "50690f14dc749eac92918fc5de236ddf"
  },
  {
    "url": "assets/js/5.bf72ff45.js",
    "revision": "c709edbaff427589f75f7836fc8f67e0"
  },
  {
    "url": "assets/js/6.45ed1738.js",
    "revision": "e24b2ade0c8284a9c430234aaaa92a3d"
  },
  {
    "url": "assets/js/7.ad94f037.js",
    "revision": "527cecff621458fce80f13a2770c5fe6"
  },
  {
    "url": "assets/js/8.7e121a5b.js",
    "revision": "048a7b15065f3538056bb98fef001a09"
  },
  {
    "url": "assets/js/9.7327400f.js",
    "revision": "c2aadd00f823750e10d229368ae8295e"
  },
  {
    "url": "assets/js/app.a87aca4f.js",
    "revision": "c58e411aa2513e0c7e5143bb2bfb3301"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "14e4e5830b9477a34cb3a119b7a3b311"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "29dde52026773453089cfc5162119411"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "ac0f7579b770de9ac0c3628df6e35d5a"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "6f6b5bff534b10bcea53b72dee65ae21"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "25299acd22497dd37d2b81618d938072"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "0a3ac1d0d19f1c4d061a2d82924bb22d"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "8cc0c3fba8638130c4edf27df818941b"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "e772142280049cbbffa6bec85962e47b"
  },
  {
    "url": "base/build/2.service.html",
    "revision": "6c0eb078123019f105cb102ae07d9477"
  },
  {
    "url": "base/build/3.cdn.html",
    "revision": "5d8eb4f1232cb6fe99ba76a8ce68f93a"
  },
  {
    "url": "base/build/4.cache.html",
    "revision": "2be9eab98adecab8f11f4525757b94bb"
  },
  {
    "url": "base/build/5.cors.html",
    "revision": "1dc65bea2182b92f97dac1f48c990b04"
  },
  {
    "url": "base/build/6.link.html",
    "revision": "fb952921f7a6f19d7f12438270126c3b"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "d74e4a739c0155872dfcc1c0d538087c"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "33d295c05947c2824298c0e2f8a4dc87"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "fa47674c3417661e04777fe0e3aaf446"
  },
  {
    "url": "index.html",
    "revision": "05238ce412e76a86a40fedd4d8011054"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "b3872bc1c24839e08755e13ec6b95523"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1d05a1e0a6c52a5d79db2c4dbfceb02a"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "6fea8dd51200808b79f7776e16880532"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "531360d5c98ced216b4d301074211153"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "f4bb468ad21e8385e5282852f4e37990"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "acd7fd15d4abe7fca15189f72726b395"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "afd72731522fd77f671c79e857bae4a1"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "d29d09236d3f7a0cafbbf068e799f67a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "e3db139085940c69dc074bc46395cce7"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "b602792cb146fdc8d04ecdb0ca36a45a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "c0709a9e6b0de9962041912e44919872"
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
