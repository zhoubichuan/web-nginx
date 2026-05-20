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
    "revision": "d1d9b485a53d22cc2fa20380dbcd9e8f"
  },
  {
    "url": "assets/css/0.styles.5992fa24.css",
    "revision": "2483677a110e43fb90603a3271344dc4"
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
    "url": "assets/js/10.4d901046.js",
    "revision": "aecf8fb0978469e6ef0ee11b84762199"
  },
  {
    "url": "assets/js/11.8e586d81.js",
    "revision": "9744f08ef64d24a3117d99617998add6"
  },
  {
    "url": "assets/js/12.7cb592ae.js",
    "revision": "f8af10154a01b4e9c57f459af9be304b"
  },
  {
    "url": "assets/js/13.d09834b3.js",
    "revision": "ea936c18d0a479f4294cb468e6301ba6"
  },
  {
    "url": "assets/js/14.4bd9f63c.js",
    "revision": "93ec2d3fa5146e14ba2469de0019f318"
  },
  {
    "url": "assets/js/15.fc50fb05.js",
    "revision": "51791bc99443e6aa0e11ccd464a02d3c"
  },
  {
    "url": "assets/js/16.e6b81e6d.js",
    "revision": "fe2fc7063a5b61c1f1bcd1b5aaa72994"
  },
  {
    "url": "assets/js/17.0840d782.js",
    "revision": "a6f7fd72ecb46e9ccee687ecb6101e92"
  },
  {
    "url": "assets/js/18.6ae82569.js",
    "revision": "2b74bcb2e97ec189fd677f895e78f312"
  },
  {
    "url": "assets/js/19.db71e78c.js",
    "revision": "a3793f7affd82184f6f9c21b1fc61a7a"
  },
  {
    "url": "assets/js/2.41517cd9.js",
    "revision": "88690debd9316e825b028503531446ea"
  },
  {
    "url": "assets/js/20.f51ab14a.js",
    "revision": "1e88ddd68ae866bb8a60e7f632212d8f"
  },
  {
    "url": "assets/js/21.12670c8f.js",
    "revision": "3e6bd2624798119c96956f49cec3a9b3"
  },
  {
    "url": "assets/js/22.1befe0d6.js",
    "revision": "6cfc8721d67db607c8d76cff7c3f28e3"
  },
  {
    "url": "assets/js/23.910581b0.js",
    "revision": "6bb19bef972d64d3419406ebd08165eb"
  },
  {
    "url": "assets/js/24.5cf28853.js",
    "revision": "fbc9832399390ac3e382eacf4ea43530"
  },
  {
    "url": "assets/js/25.cda6d4ac.js",
    "revision": "e34b8879235f8d8d78d4fa9f5998f502"
  },
  {
    "url": "assets/js/26.979bf8a9.js",
    "revision": "87e570416e8e46026cecc5b329208617"
  },
  {
    "url": "assets/js/27.660c695b.js",
    "revision": "0c06166379026a88f9a6e6985f822567"
  },
  {
    "url": "assets/js/28.73ce4558.js",
    "revision": "096433789b01575c79d0a278ab26b7d4"
  },
  {
    "url": "assets/js/29.68cff608.js",
    "revision": "d687015f5425ac96043822d618e3be4a"
  },
  {
    "url": "assets/js/3.925e3de1.js",
    "revision": "e9ec6dbfd8e1e6c004f6f9decafba44a"
  },
  {
    "url": "assets/js/30.76f685b5.js",
    "revision": "a70087cfe17a9c7d020df2d246f40c45"
  },
  {
    "url": "assets/js/31.17e76bc7.js",
    "revision": "e5eaeb45ddc336b1cc116a53c2f8218b"
  },
  {
    "url": "assets/js/32.66eef276.js",
    "revision": "211cbc67042108ac798f7b854b698fcb"
  },
  {
    "url": "assets/js/33.47c4a514.js",
    "revision": "436e75f9a6dc2e38e41aad5eec88a85f"
  },
  {
    "url": "assets/js/34.e50ce022.js",
    "revision": "93adc54ced08594ca5aa51e02cb90922"
  },
  {
    "url": "assets/js/35.b2451a1f.js",
    "revision": "ce2932acc90bd71d17a23683df7fbb43"
  },
  {
    "url": "assets/js/36.830f3b1e.js",
    "revision": "78ad34f3eb455d206734151d4014075a"
  },
  {
    "url": "assets/js/37.b9f97f36.js",
    "revision": "007b04331d5794d3246a48dc04f02b71"
  },
  {
    "url": "assets/js/38.3d3e6341.js",
    "revision": "156275c7ac674ba81fe7c3c27f5df353"
  },
  {
    "url": "assets/js/39.f0b74e22.js",
    "revision": "5dad1ec7df03f103ee8125046bff9735"
  },
  {
    "url": "assets/js/4.caa7b7d3.js",
    "revision": "c35118b9714e0fd6374a385e48cdb8b4"
  },
  {
    "url": "assets/js/40.0f44bb94.js",
    "revision": "2a450759d2e29d471cd9ae3a0ff31a16"
  },
  {
    "url": "assets/js/41.9faa9dc5.js",
    "revision": "694c4b506528abaf8c75e7325cc3e650"
  },
  {
    "url": "assets/js/42.15911670.js",
    "revision": "734824aad06c478089f6d28ec6bd5e79"
  },
  {
    "url": "assets/js/43.227a0739.js",
    "revision": "e319a6c1b880b4cd05581b06fbba52db"
  },
  {
    "url": "assets/js/44.7462c29b.js",
    "revision": "97f2ef0f92a1ad5782e54cd87c2d6da2"
  },
  {
    "url": "assets/js/45.54b26500.js",
    "revision": "502944caf3a37eba5336a6bfbb2298ad"
  },
  {
    "url": "assets/js/46.44d991af.js",
    "revision": "490488fa2b502b7bb44f17cd5d7df4d0"
  },
  {
    "url": "assets/js/47.eb8e979e.js",
    "revision": "00f08f6fe7be2066af7416173a967184"
  },
  {
    "url": "assets/js/48.97b92af3.js",
    "revision": "a551652895e47da73b3a16896af9a7b0"
  },
  {
    "url": "assets/js/49.8564ffa1.js",
    "revision": "999924f6feb9ef6099068dbe16a515e6"
  },
  {
    "url": "assets/js/5.faefa6b1.js",
    "revision": "cbc3f9110db63fc15b49a8a38b8d9c05"
  },
  {
    "url": "assets/js/50.a04fce95.js",
    "revision": "49f001e79caf75e4928762cf6d64af9e"
  },
  {
    "url": "assets/js/51.3658b13a.js",
    "revision": "8f8c5c39dc15385f0cfcb01588766bac"
  },
  {
    "url": "assets/js/52.63222cd4.js",
    "revision": "eeeaac88d9b32081560d78f39502677c"
  },
  {
    "url": "assets/js/53.b40ba1c6.js",
    "revision": "ff84142cbcca016989d27b67b7c1a700"
  },
  {
    "url": "assets/js/54.3480567c.js",
    "revision": "f9c46ca66b6d90a8bc7726693115ae68"
  },
  {
    "url": "assets/js/55.a652c010.js",
    "revision": "0b8a0b97fdcb3bf07dfe17286712b2a7"
  },
  {
    "url": "assets/js/56.a589aff4.js",
    "revision": "130edfa3e707437ad9b356e84b365b13"
  },
  {
    "url": "assets/js/57.1c48d31a.js",
    "revision": "f2b46374a646a3bb4939eb37c5fd571d"
  },
  {
    "url": "assets/js/58.286ec06f.js",
    "revision": "c9401f819db6bfd3f1b58de4f327918a"
  },
  {
    "url": "assets/js/59.97722e07.js",
    "revision": "3eca836f80f1624962cb53c70cb8de35"
  },
  {
    "url": "assets/js/6.a3927d7c.js",
    "revision": "9aa70c9ab22bf2d3fb8bf7292862832f"
  },
  {
    "url": "assets/js/60.39bba8e6.js",
    "revision": "8157b1e210865fd23f714825d0ab8061"
  },
  {
    "url": "assets/js/61.4619f819.js",
    "revision": "c0e9707b9e3edb0d5b5113ca121b9c7e"
  },
  {
    "url": "assets/js/7.ee85ad6b.js",
    "revision": "1ba28b8604f78df60ff7df7e8a08dfd4"
  },
  {
    "url": "assets/js/8.436adc9d.js",
    "revision": "49d6239bd06dbd02624ae113ffc4204d"
  },
  {
    "url": "assets/js/9.92795243.js",
    "revision": "0262161da3a7a2a8e1f7b4b2352d540e"
  },
  {
    "url": "assets/js/app.80b6cfc8.js",
    "revision": "f1b7a65585898ffc48bc13ecad795c28"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "419ae52a82520bde6c764c9c300a9c7f"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "15339189de7be009a5e6bba47c90387b"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "d012878857a2b3c48d64abb72703e701"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "225ec4c33c6defbe34b7e2a575a72c28"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "b0795ad76950a5929461a0416e4e983f"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "c8ac96fbb06bd48cd469370f8cd9642b"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "535e3eecef8663ec999436de4679e1da"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "1a510efefde9a847008fa6ea7eb37be1"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "672d3e5d283e6db13ba331c56a6455fd"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "8667220f3302edadedb695ac6f563fb3"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "0ae6854c038066f23cd379076a2fe981"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "7bc8e5108155ded1a421b54dd27e5113"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "a71a81e2d5b3c8f2cf7191d1c2c03a7a"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "8c6153b43ed1b1194e55f90736bce9f3"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "157acbcff752d2f416f27f86225f3e9c"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "e0f660e970c2d6e550cd9e984b3b7b87"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "50fbd0cc86af09d2a223a73e10043a88"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "0f1234776cf50ce4c4133ffbaefcc2f0"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "db026f54ca166dfbbeae14c984a37a90"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "52bf91127b141101969372e9d61b09c4"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "22da4e5f7f682421da6d8c878fa33427"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "fce8170a2b8fa10ba50832a9c958e724"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "de53ac6f68796eca3aee5a38da3322ed"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "e9ea91d6d82f6fd8d16527b07576a217"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "69c17b55b7ac664e1a5ce7807aaa12f2"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "017bdee6d423f4f3c5945fcadefe1faa"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "011cfb8fa4f483d0e76809927c5cbcdb"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "6a81781ce13195501c0fd1892aa6b0c3"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "373171aca2a6ffd96e42164d5e0d6ef4"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "f12dec16ff22a53ba6ad2235e59fdc72"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "c17be5c1f539f18ee1330d83e61530ef"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "7e7a94dc32607d1dfddabb65a77bb0ae"
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
    "revision": "1a6b1ea297e02f7eb1ade6db45225a07"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "b4ae8dcef318740285ba55589059284b"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "c914b032ce81e92d3f22835901dc191d"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "0db4a56ecb7f0cd5b8568e7fba75de5a"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "172e19e23f81eb4e09087395aeaf78a1"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "8c5d19cba985736f8297314f27215f43"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "fa8c9eeff64a8250a7cac9a93053b381"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "3849e392f144a86022e5fa1834f260ae"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "bacb01c8237abaa75b40f9c3301b2ccc"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "5d3fbbfbaada85a94aac25d51158a0f1"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "37fb79453a624a067d9ff387f8042321"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "a5d6957eb801c90fe77fd14f0d2c8041"
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
