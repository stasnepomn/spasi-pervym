import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  if (isClient) {
    const { default: VueFullPage } = require('vue-fullpage.js');
    Vue.use(VueFullPage);
  }
  Vue.component('Layout', DefaultLayout);
}
