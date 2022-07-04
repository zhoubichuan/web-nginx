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
    "revision": "e2ed6070e54277966d72f8e79e2d1880"
  },
  {
    "url": "assets/css/0.styles.2221ad8b.css",
    "revision": "e251d32d5d88e17e913d896517ee5646"
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
    "url": "assets/js/10.be5a33e5.js",
    "revision": "b0836fe149c9ebbb765f61d71a4cbd05"
  },
  {
    "url": "assets/js/11.a33749aa.js",
    "revision": "317e08741b5fa9fc859a8489841d3082"
  },
  {
    "url": "assets/js/12.d62a4de9.js",
    "revision": "ac393b9cb5f5c64ca4de72498cf3df3e"
  },
  {
    "url": "assets/js/13.dc6ce155.js",
    "revision": "a3b875b23a2389b5b428e81a323bb601"
  },
  {
    "url": "assets/js/14.61719066.js",
    "revision": "992f5a38e3c38403e1d7dd5fd044671d"
  },
  {
    "url": "assets/js/15.a6c85dac.js",
    "revision": "4f4c6f2f17d13f187ff55e8a7e9c1053"
  },
  {
    "url": "assets/js/16.4120346c.js",
    "revision": "c1af777069360592ab9be6d5624e6129"
  },
  {
    "url": "assets/js/17.a50cf975.js",
    "revision": "923e84936e935cfd4c5bd9ddf0233255"
  },
  {
    "url": "assets/js/18.41784601.js",
    "revision": "01acb4a8310573d311372286538f3a85"
  },
  {
    "url": "assets/js/19.b91d4c39.js",
    "revision": "ec2ebf737eedb48cfd201b4d05106535"
  },
  {
    "url": "assets/js/2.724dc956.js",
    "revision": "3c0f2e3f80e85bc59933b3598bc51060"
  },
  {
    "url": "assets/js/20.2fca6a8c.js",
    "revision": "dca23d98e9a759cba77676162f17fac7"
  },
  {
    "url": "assets/js/21.8351ce79.js",
    "revision": "4bb98adb2dcf4e7c61a8125250f5fb6d"
  },
  {
    "url": "assets/js/22.ec02b90a.js",
    "revision": "a75ec1260cc237f1727752315091670b"
  },
  {
    "url": "assets/js/23.5bb9c995.js",
    "revision": "e0d2f29c30a5109a8dc7f21d61e5b4ba"
  },
  {
    "url": "assets/js/24.e78bde29.js",
    "revision": "00794ace5bc11e271c227ec77d3f3d51"
  },
  {
    "url": "assets/js/25.8c3a229a.js",
    "revision": "b0c524179ffba6c80957c9efa89e5ce9"
  },
  {
    "url": "assets/js/26.395f4bfb.js",
    "revision": "5378f42014ed6dbf46e5f87a2941336f"
  },
  {
    "url": "assets/js/27.384b3fed.js",
    "revision": "1ec923cf7f02900e0e4b2cb4cc426545"
  },
  {
    "url": "assets/js/28.776b1a9b.js",
    "revision": "52677190ff72407be40001801ff03329"
  },
  {
    "url": "assets/js/29.112692bd.js",
    "revision": "5152ba9eef0f89f6ba241391427a2af5"
  },
  {
    "url": "assets/js/3.a67dd42f.js",
    "revision": "fc5f86cd48c4fd1a304ae946890d767e"
  },
  {
    "url": "assets/js/30.400c261f.js",
    "revision": "cdf75a9b0c945882d535f3d870eb7311"
  },
  {
    "url": "assets/js/31.475cfff9.js",
    "revision": "0913806f4ba60d3ab31a236e1890a535"
  },
  {
    "url": "assets/js/32.37fb35e3.js",
    "revision": "95131169f1916894bc2bdf710063b091"
  },
  {
    "url": "assets/js/33.4d5f99ba.js",
    "revision": "c8d3c75a1c7fa10442f7dfc43dba0798"
  },
  {
    "url": "assets/js/34.6d08968c.js",
    "revision": "6f9917ffa423c124b67e102081c3866c"
  },
  {
    "url": "assets/js/35.2238792c.js",
    "revision": "e806b93eb53fab81d427f65cf6728edd"
  },
  {
    "url": "assets/js/36.f927db2e.js",
    "revision": "7149746d378d843925966cab97764bcb"
  },
  {
    "url": "assets/js/4.cfbb98bf.js",
    "revision": "ac37dff1280709c1dcb90dbc3bcf3c02"
  },
  {
    "url": "assets/js/5.4c3e6964.js",
    "revision": "336910964b231d6865f9465964c93ed7"
  },
  {
    "url": "assets/js/6.86f448f0.js",
    "revision": "3dfd47c8512f4d6ae0b8f554d0392e31"
  },
  {
    "url": "assets/js/7.223f3f93.js",
    "revision": "301451558eca0d326da8f39819df1e11"
  },
  {
    "url": "assets/js/8.565ac3d6.js",
    "revision": "7bfc1ab10f90bed87bccf090e7afd655"
  },
  {
    "url": "assets/js/9.afc735ed.js",
    "revision": "0b9d8fcab3f68befa7a671c78f10d858"
  },
  {
    "url": "assets/js/app.99d0ff51.js",
    "revision": "569d1c9709b24820b277107bc28d0d3c"
  },
  {
    "url": "base/build/1.config.html",
    "revision": "2393f5d75c80fa5b4d12cb156c5a017a"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "4eadc82533510655d78ca7dbc7c4e808"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "aad4af1f21ee0bd1ad242d96fdfee6db"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "d29515acf303b309fd970c4c57f23b6e"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "d41b48b5cb63511e0cc7d1d00a556832"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "648643316c37a7255efd1633ee335a18"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "f1ccdd334b1fc998d1aa7fc38091fc5e"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "fd5e08665a8a424d630c406d2887b919"
  },
  {
    "url": "base/build/2.service.html",
    "revision": "8b29badd48f8ee26e4b6e36175c6adde"
  },
  {
    "url": "base/build/3.cdn.html",
    "revision": "e9733842843779c7d263f9c564646681"
  },
  {
    "url": "base/build/4.cache.html",
    "revision": "06253cf2b1d725b7014a3a33d0e4257c"
  },
  {
    "url": "base/build/5.cors.html",
    "revision": "59598a3cd846b990adf357b7a56ab2d8"
  },
  {
    "url": "base/build/6.link.html",
    "revision": "7a4e9a2ce451da5361cff0758e7a0f9b"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "e233cda2d8ce55d1ecc36e91f6017e05"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "1f144469c34e2857f8b3e15db85e7752"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "fbcf3ff37a3e766bfcc1a03147d1b84a"
  },
  {
    "url": "index.html",
    "revision": "4671397d32224945a333fc480214c76a"
  },
  {
    "url": "senior/use/1.index.html",
    "revision": "fbecf351768a639209c2aac1652c984c"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "ba14800743b723445457887722069362"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "0557915cfd1114b9dba705e0d3f76387"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "291c334615c18c1065aeb81ad06b8869"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "ac324652fb770ce4adde766b4bca7a6b"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "75a934d2460407bb89e5092e134d6bba"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "0d63dc9bea8d288926bc756ca92cb842"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "7c71850b898591ddf3e58175e8862377"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "063dc0f4c164b26559d7dff6953eda43"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "142600a73f63a8b9b91553af68af25de"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "fde297af934943c1ed2bbac65790fb97"
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
