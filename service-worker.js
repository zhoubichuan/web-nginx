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
    "revision": "ca9bd31bf3839ee227deea8565f29a6a"
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
    "url": "assets/js/12.98a9dc1e.js",
    "revision": "25dd8e58ad3af7f67c64a81231acf52f"
  },
  {
    "url": "assets/js/13.42e980fc.js",
    "revision": "f47d94c4c980dd110b1b05d36f395b96"
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
    "url": "assets/js/26.d7e12af0.js",
    "revision": "26fc1f6adadcd139560fe08af5da5b89"
  },
  {
    "url": "assets/js/27.63c391f7.js",
    "revision": "14a4871cb0c2faba99267c38038102e5"
  },
  {
    "url": "assets/js/28.73ce4558.js",
    "revision": "096433789b01575c79d0a278ab26b7d4"
  },
  {
    "url": "assets/js/29.813cf6d3.js",
    "revision": "ff47c2de1f39c7cb34a3ce856388b525"
  },
  {
    "url": "assets/js/3.bae924f2.js",
    "revision": "78be51b72c1ce2d183447f81355ccea1"
  },
  {
    "url": "assets/js/30.7de646ad.js",
    "revision": "8dd1e2e81dc350997537cf4907b73859"
  },
  {
    "url": "assets/js/31.5ff857ee.js",
    "revision": "9b1c33ceda11ac1810f75a456a52cad9"
  },
  {
    "url": "assets/js/32.5c7042b4.js",
    "revision": "4e4beec204cddd633efad1e799a35a3f"
  },
  {
    "url": "assets/js/33.47c4a514.js",
    "revision": "436e75f9a6dc2e38e41aad5eec88a85f"
  },
  {
    "url": "assets/js/34.fa4353e1.js",
    "revision": "679555cb38a89fea8ea3fae7dd6f7eb9"
  },
  {
    "url": "assets/js/35.42832bea.js",
    "revision": "7113db932d2ff44b69dcf91d27089f6d"
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
    "url": "assets/js/38.17e4df94.js",
    "revision": "280f3591a184c1ca6d53396cc87b0d7d"
  },
  {
    "url": "assets/js/39.df8492b4.js",
    "revision": "ea85684d97f650ac858b0ca142f58e50"
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
    "url": "assets/js/41.1e745979.js",
    "revision": "bc6d1b1d2f08929876d61a5de51d535d"
  },
  {
    "url": "assets/js/42.542226bd.js",
    "revision": "c8f6ef915de539b6b91d0c10692f3144"
  },
  {
    "url": "assets/js/43.2eae5baa.js",
    "revision": "bdd14a7e7b376ea1e149365efab30c1a"
  },
  {
    "url": "assets/js/44.40b18cfa.js",
    "revision": "26e7c189f503038ea3fbb90bc497f36d"
  },
  {
    "url": "assets/js/45.44169836.js",
    "revision": "af348e61bb8bdeadb1eec648c41f1321"
  },
  {
    "url": "assets/js/46.72adafaa.js",
    "revision": "50d4d37da47fe2c13feaad77a38755d5"
  },
  {
    "url": "assets/js/47.eb8e979e.js",
    "revision": "00f08f6fe7be2066af7416173a967184"
  },
  {
    "url": "assets/js/48.e5b42eca.js",
    "revision": "93770eaffadeab250c7470c3f34173bf"
  },
  {
    "url": "assets/js/49.aade79f5.js",
    "revision": "93395dc02d2db3b6ef6f3bda9c86b4ce"
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
    "url": "assets/js/51.6345f861.js",
    "revision": "cb9e6efdd7dd13a91154cc1ea11ab562"
  },
  {
    "url": "assets/js/52.fe0de221.js",
    "revision": "68dc819fcc078dc825820803d22727ea"
  },
  {
    "url": "assets/js/53.5c022774.js",
    "revision": "0ba3400baa7d409b154ada5f6f1ef36a"
  },
  {
    "url": "assets/js/54.5f6e3b8d.js",
    "revision": "3b365f45d50599e93649449a6fedf96f"
  },
  {
    "url": "assets/js/55.d5e24efe.js",
    "revision": "b90fe4346d72f57ae004c3b7bbead081"
  },
  {
    "url": "assets/js/56.01575315.js",
    "revision": "a41945fb9ed80b7fe06782d72cbd5334"
  },
  {
    "url": "assets/js/57.424e3007.js",
    "revision": "6ded7ca48900a2836b24ecf10c533467"
  },
  {
    "url": "assets/js/58.286ec06f.js",
    "revision": "c9401f819db6bfd3f1b58de4f327918a"
  },
  {
    "url": "assets/js/59.57660f55.js",
    "revision": "576412693f850fdfbb0a70a752a71834"
  },
  {
    "url": "assets/js/6.a3927d7c.js",
    "revision": "9aa70c9ab22bf2d3fb8bf7292862832f"
  },
  {
    "url": "assets/js/60.cfc792cf.js",
    "revision": "0d0f65d30357466a2e6e45da6ecbd572"
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
    "url": "assets/js/app.74a7b134.js",
    "revision": "842e01700e1a81a257a16c9828cdc8e7"
  },
  {
    "url": "base/config/1.config.html",
    "revision": "74be607650e85a795bcc2d16aa1a2509"
  },
  {
    "url": "base/config/1.index.html",
    "revision": "fca34f3138a5887f82771baadcf45d0e"
  },
  {
    "url": "base/config/10.ui.html",
    "revision": "60b12ed39fc290ff357af89d2781759e"
  },
  {
    "url": "base/config/11.data.html",
    "revision": "bd26f1f495de941f74d093b3f6fee546"
  },
  {
    "url": "base/config/12.skill.html",
    "revision": "713835330d3ea94abb355d67d6db4bd6"
  },
  {
    "url": "base/config/13.com.html",
    "revision": "fb70ea4dec94855a0c48d03cdc66fbdb"
  },
  {
    "url": "base/config/14.data.html",
    "revision": "89aada4b95756c4eb194fc9b1895a61f"
  },
  {
    "url": "base/config/15.api.html",
    "revision": "f114cb8d295f0b6847d156771a4abc56"
  },
  {
    "url": "base/config/2.static.html",
    "revision": "715648d62b6661b574a9bc5e3d6225f7"
  },
  {
    "url": "base/config/3.cdn.html",
    "revision": "0f3c734df565d14b8ce8332963974822"
  },
  {
    "url": "base/config/4.cache.html",
    "revision": "25f8d8bbdac48645b915ed7756966f2d"
  },
  {
    "url": "base/config/5.cors.html",
    "revision": "a124197cd658db9f4a068418859dde9a"
  },
  {
    "url": "base/config/6.link.html",
    "revision": "6d03969ca344ec888191306daa2258c5"
  },
  {
    "url": "base/config/7.module.html",
    "revision": "6e5cace9eb6225fb148f98bf78169988"
  },
  {
    "url": "base/config/8.project.html",
    "revision": "d55a28a958e03188fdc42901cb949f54"
  },
  {
    "url": "base/config/9.utils.html",
    "revision": "1f861f6d5e4e17e8781aa64ac95cbba9"
  },
  {
    "url": "base/nginx/1.config.html",
    "revision": "63a053f10189753fecc9933fabbea538"
  },
  {
    "url": "base/nginx/1.index.html",
    "revision": "e5b53c8d0136e2b09964eec25963a720"
  },
  {
    "url": "base/nginx/10.ui.html",
    "revision": "d84d196ef70f513c3b891e6e30fbaecb"
  },
  {
    "url": "base/nginx/11.data.html",
    "revision": "9c88a87d6f10d38237e87c2e013423f2"
  },
  {
    "url": "base/nginx/12.skill.html",
    "revision": "adeaf2f21fbe3854d76155efe6a85bf3"
  },
  {
    "url": "base/nginx/13.com.html",
    "revision": "147f2608579ffb0216d1c4394caaaa46"
  },
  {
    "url": "base/nginx/14.data.html",
    "revision": "d39de418eac61767ef9753d3294a16a6"
  },
  {
    "url": "base/nginx/15.api.html",
    "revision": "052490b3e02c5097f1eef8ba50594c04"
  },
  {
    "url": "base/nginx/2.static.html",
    "revision": "8af3965db4463abb738ea4747068b7ee"
  },
  {
    "url": "base/nginx/3.cdn.html",
    "revision": "b53c90133024dbd2878768ce671e09e2"
  },
  {
    "url": "base/nginx/4.cache.html",
    "revision": "c482f32743d584c1fcc742dd9b0a6a21"
  },
  {
    "url": "base/nginx/5.cors.html",
    "revision": "b48e56a47ccc368e0944b63c35161cc4"
  },
  {
    "url": "base/nginx/6.link.html",
    "revision": "7a7598c41d1c47745890cd946c846e0d"
  },
  {
    "url": "base/nginx/7.module.html",
    "revision": "706d22bb2da9e896231feb3fe2b55edd"
  },
  {
    "url": "base/nginx/8.project.html",
    "revision": "cd3731a57bb257a9a0951fc89b646dca"
  },
  {
    "url": "base/nginx/9.utils.html",
    "revision": "495586699133903e57d1efbcc09fcdbe"
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
    "revision": "e9b3745305a14e07eb3b9153045050ec"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "8c97372094568e0b6a6f81b0ac4e6207"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "75892b8c4db0b82278fab061e9e54a81"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "cacdd44e8d3d6d5410f0434aad22cddb"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "3327c660ed651286a8ed53eae0af90ca"
  },
  {
    "url": "senior/use/3.config.html",
    "revision": "b30005602e0079cd61d715e264d67700"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "65ffd089bb475c744d10b381b2323bba"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "5d4239d3ab5a82695aabb90fef4c8b92"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "b240e9d8e6e3255d4a75d37a23c7d879"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "4ea88c4c669ea5858d5df17e4a75e2f3"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "85580e8cdde59a5f5d5a4f3ec8d41d6a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "05805505f571d0149565149e76e6102d"
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
