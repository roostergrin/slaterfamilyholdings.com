// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './base/app'
import router from './router'
import VeeValidate from 'vee-validate'
import * as customFilters from './shared/filters/filters'
import store from './shared/store'
import VueCookies from 'vue-cookies'
// import VueParallaxJs from 'vue-parallax-js'

// Vue config
Vue.config.productionTip = false

// Vue filters
Object.keys(customFilters).forEach(key => {
  Vue.filter(key, customFilters[key])
})

// Vue use
Vue.use(VeeValidate)
// Vue.use(VueParallaxJs)
Vue.use(VueCookies)

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  store: store,
  render: h => h(App)
}).$mount('#app')
