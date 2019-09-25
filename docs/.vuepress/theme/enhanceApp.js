/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

import Foo from './components/Foo.vue'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  console.log("router.mode: " + router.mode);
  router.addRoutes([
    { path: '/foo', component: Foo },
    { path: '/foo/:id', component: Foo },
  ]);
  console.log(router);
}
