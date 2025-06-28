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
    "revision": "31ea7d5901f865e7c6392df62d52a3e9"
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
    "url": "assets/js/21.c05b1fc0.js",
    "revision": "1532f7f0c5fd37594c633f32d1841eab"
  },
  {
    "url": "assets/js/22.a8e1b87b.js",
    "revision": "1bc3c202bc62e4e9def551b03a6b78c9"
  },
  {
    "url": "assets/js/23.b984f226.js",
    "revision": "33fce9f0ca0619c0a1d295348e5badcc"
  },
  {
    "url": "assets/js/24.d26b07f6.js",
    "revision": "a8ff21d150a164650c44f36253fb3754"
  },
  {
    "url": "assets/js/25.729c1367.js",
    "revision": "81887ede0b15eeece50083137b1bd77d"
  },
  {
    "url": "assets/js/26.db1db949.js",
    "revision": "7da75f53cf4d66d325232a4a2789daec"
  },
  {
    "url": "assets/js/27.da3ef919.js",
    "revision": "c1b5a3cddaa9cbd913c221fadb835520"
  },
  {
    "url": "assets/js/28.2c93ca02.js",
    "revision": "76f579adb51201f4c8e1c9b3a5331e98"
  },
  {
    "url": "assets/js/29.169b4825.js",
    "revision": "b806fa8357769995e6bcc90cd5b327e8"
  },
  {
    "url": "assets/js/3.1420144d.js",
    "revision": "395191201e676ff7ee1c899077e2216b"
  },
  {
    "url": "assets/js/30.1392cb3d.js",
    "revision": "6e62914bf52f2dff5a55e4448f705b2a"
  },
  {
    "url": "assets/js/31.5ca30110.js",
    "revision": "44dbd24e85168213ca8761c3b7fa35a6"
  },
  {
    "url": "assets/js/32.41bcffd4.js",
    "revision": "aa8e1cfc5b3d7555982e93be6f45d49f"
  },
  {
    "url": "assets/js/33.0ff3dbd6.js",
    "revision": "ac18e1d31dde93505ad0896caab55f42"
  },
  {
    "url": "assets/js/34.f30a8767.js",
    "revision": "d5f9fe3a3b342268dd7c6fda506d86c5"
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
    "url": "assets/js/4.fc149ae4.js",
    "revision": "9385677c69334b4d55177b74b8a2bd22"
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
    "url": "assets/js/42.720d7cae.js",
    "revision": "9d284a683b0d42da2307f99e8c2de2bd"
  },
  {
    "url": "assets/js/43.bbfeba39.js",
    "revision": "ec7b79a2a31dd2b27afd2b1d239cd579"
  },
  {
    "url": "assets/js/44.0e533cf1.js",
    "revision": "1b39d7c3f0a504832e9ed7bfda723941"
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
    "url": "assets/js/47.fe5ae295.js",
    "revision": "adb03388034ee2c8754fc2493d026bf0"
  },
  {
    "url": "assets/js/48.304946d0.js",
    "revision": "e7a346f19853577852d478e6aa41ec2a"
  },
  {
    "url": "assets/js/49.b34e1806.js",
    "revision": "2190acbeb5644a71e0b2893c40976e42"
  },
  {
    "url": "assets/js/5.9f0e61e4.js",
    "revision": "57b998f8537b5f142aba2af4461cb41d"
  },
  {
    "url": "assets/js/50.c4e7795c.js",
    "revision": "181b45819329bd6308921e9d13163f14"
  },
  {
    "url": "assets/js/51.e87ddac2.js",
    "revision": "a36a7117d8ec26d8d362b1f789ac153d"
  },
  {
    "url": "assets/js/52.f344c2ed.js",
    "revision": "c37919f45842f2e10751783cfa238a19"
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
    "url": "assets/js/55.b194b39c.js",
    "revision": "8790e6647881dca01cd279a2920bb095"
  },
  {
    "url": "assets/js/56.d2478541.js",
    "revision": "2a1745a50a46f7b65f7406ec599b618c"
  },
  {
    "url": "assets/js/57.0752ce75.js",
    "revision": "d649f0f106de9199b34101b5aaa19062"
  },
  {
    "url": "assets/js/58.8d5dddca.js",
    "revision": "7d6628e2db14547401a1a24710e71c9b"
  },
  {
    "url": "assets/js/59.c22a457c.js",
    "revision": "c41bd427c85e6f85155dbfa882b3e8d3"
  },
  {
    "url": "assets/js/6.9b0b40f7.js",
    "revision": "4f8fe15062e6cda113cf9a075274b32d"
  },
  {
    "url": "assets/js/60.53a86a3b.js",
    "revision": "bec23a5ec08b79b07d161024733b6258"
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
    "url": "assets/js/app.27f97834.js",
    "revision": "5ac9b738b9511403a32ebaaf98d5db41"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "a5dcf225bb34fe4ac204c6540462acae"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "2c2c3425e3181d74cd7e29479ef774b9"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "3e5ba427fdad23fcc5222a9fabd3bfc7"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "2f839bbcdfce692c654bcfb95aaf9e09"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "a034d1f7d2112302439f0a1864c9e3ee"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "975bdcfbc3ec6ab53956c6c221208cee"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "94e33f39ec5f5cef120499a8d53e560d"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "c474503ddcaa5655a4901b978fa7b082"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "3542e15a721072552f1d506e5210d9c5"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "d5d8746ae44e5d973057a5449ae572d3"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "2a17595930d8a3c6725835f5c648644a"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "d30ec0d8d5d127f333d116f327593707"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "19c93d1a751f2e6bd3cbedeb2056dea0"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "ce462876ee0ca1a66dcd2c0eb98ce136"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "ac20598fe04d002e9dad16ff7700a840"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "87143514aadfe197d11f0305a3ddb7d4"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "b751f1747dce2f80ab700e2dfeff3187"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "46e539f6c289a1d66db08744c0dedd03"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "5abbe5ab46561ab6b4e274ea1866f0ed"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "4f11df0134db93925edd1ced0ec652f3"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "6447c1e413dd93ff0b8f7f993e235f8a"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "a93e3b080dd358868fccfe0bee4ca74b"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "6e15fd8b1c3f37f9c22cb4752c255965"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "8c36e10a51818bea2134d942d0706a48"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "053c131da2ccfe6f506593de42f0d57f"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "e0b6edfb3cf36822ff5e9d60502ffb89"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "837ac76fda5aad02291477e49ff51091"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "33383ed5aa4beb8e75ef7dc59218920c"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "4ec68c1bbf769a427af5c7cf365cea12"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "7cfd6b2fb3cf6b3018ffc5b1c473aa6b"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "80fb2984228fb8e442183e795ee6a900"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "f44ef2fd950132b1a42fb8ae47bcb315"
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
    "revision": "2580cf1ec3a5f692c139d6ea24849a09"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "24c0d02177b741083872926310f33d37"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "74b7134f5a86df239a6da7ec2023c136"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "9b6abb65912d147d76f4749245450ef1"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "54ecfb7f9fce113f752bd03119ec5d6b"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "d81068df0300727819f937edb887257d"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "41d66e0f509149e8377b4285b504854e"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "505230b071cbdb8775ec6f144ec78cbd"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "480cf62a5b39427e27964a0604c62798"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "556d9d767cd9fc0ddb2fd4a66d228af5"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "2941e91e686ea5920524d9c20df10f5f"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "0e629a93992862b40c35d1adb1908c7c"
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
