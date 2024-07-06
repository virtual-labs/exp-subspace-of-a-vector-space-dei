importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"b17a71bf2b6270b7849b1a1367460378","url":"contributors.html"},{"revision":"d1ceb74439bde7d73ea22e108a68b24a","url":"feedback.html"},{"revision":"5c4ca76bd58d91fd4448932790f3db74","url":"index.html"},{"revision":"6b3b5ff042be84ec05ba4fa5c1785304","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"0a4d9f69ac7581966843e51c8b1d0e30","url":"posttest.html"},{"revision":"9b3ec633aea2086a8da39842eeb4fc3a","url":"posttest.json"},{"revision":"fa87d92387f8d7d19802ba9f3cb361a1","url":"pretest.html"},{"revision":"b2f722a4f32b7c7ffe1ea6bc14e16b13","url":"pretest.json"},{"revision":"1a6424c394bf7bc07681b63253bb1431","url":"procedure.html"},{"revision":"29a82fdaea6ce6eb7a3fdd42a03e7c98","url":"references.html"},{"revision":"211746ea9827d064873782b779cca3cc","url":"simulation.html"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"db3dfe213b1fbdf0431770ce94c663b6","url":"simulation/css/style1.css"},{"revision":"969e15e259ca59899267eed1ac38a8b8","url":"simulation/css/style2.css"},{"revision":"fab3d46d1b3242aad45f361b2baa97eb","url":"simulation/images/simulation1.png"},{"revision":"ffc2123ad0c574339ecfbe8c8aecdae8","url":"simulation/images/simulation2.png"},{"revision":"f661a7c6c59553b097e7e33384694811","url":"simulation/images/simulation21.png"},{"revision":"511507b94b2a018b7531d8391e31f257","url":"simulation/images/simulation3.png"},{"revision":"5a5479ec2b763f6d76891dd7cf6ef646","url":"simulation/images/ssim1.png"},{"revision":"6ce98cfb7851c3fd6e2bec1e51fed7b5","url":"simulation/images/ssim2.png"},{"revision":"b09b754cce9294aad3a0a04e7e17231e","url":"simulation/images/ssr11.png"},{"revision":"6d8060af2652af1522700d92a98c369a","url":"simulation/images/ssr12.png"},{"revision":"4c9b7be99bc586bccd77db1d877e1838","url":"simulation/images/ssr1sim1.png"},{"revision":"ea20c987c88ab09dc5afce47de0b04da","url":"simulation/images/ssr1sim2.png"},{"revision":"888272937de1aaf9635c60f9982aefbf","url":"simulation/images/ssr21.png"},{"revision":"475bd0c17005569efa1a4c247991dc1d","url":"simulation/images/ssr22.png"},{"revision":"b3079fa4c962f6eceeefa0bd2e9c923c","url":"simulation/images/ssr23.png"},{"revision":"319ea9a4acafe123c4d7ea6f081df2ac","url":"simulation/images/ssr2sim1.png"},{"revision":"53c6a0dc82f06e7ff51c885bb9f14014","url":"simulation/images/ssr2sim2.png"},{"revision":"7733ddd56fcce54683c02d68d3559378","url":"simulation/images/ssr31.png"},{"revision":"060ce2525ad43e97c1c400feb0ed97e1","url":"simulation/images/ssr32.png"},{"revision":"af85312c041f82b8938b31ad5919617e","url":"simulation/images/ssr33.png"},{"revision":"0a2235c60702148fce9fb55705b1cfad","url":"simulation/images/ssr34.png"},{"revision":"7585c579b4979957b1aa3fa786567c0a","url":"simulation/index.html"},{"revision":"a45dc8eb3945facba607d1339c5f8d5e","url":"simulation/js/js1.js"},{"revision":"ec4364dbedf2ac41e3da83082da7b4ed","url":"simulation/js/js2.js"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"50d52e438d069309a89f0497facb9ae6","url":"simulation/subspacematrices.html"},{"revision":"a275fca095e6f9d3c448bab132b8f5fc","url":"theory.html"},{"revision":"e12c596afee79c9d4705c422e7057029","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );