// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import $ from 'jquery'
// import bootstrap from 'bootstrap-sass'

import Vue from 'vue'
import App from './App'
import router from './router'
import { LoadingState } from './config/loading-state'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  render: h => h(App),
  created () {
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading
    })
  }
}).$mount('#app')
