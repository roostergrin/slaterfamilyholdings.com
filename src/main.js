// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import $ from 'jquery'
// require('bootstrap-sass')

import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import * as customFilters from './shared/filters/filters'

// Vue config
Vue.config.productionTip = false

// Vue filters
Object.keys(customFilters).forEach(key => {
  Vue.filter(key, customFilters[key])
})

// Vue use
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  render: h => h(App)
}).$mount('#app')
