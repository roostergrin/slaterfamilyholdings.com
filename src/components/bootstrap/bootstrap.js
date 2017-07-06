// doc for VueStrap
// https://yuche.github.io/vue-strap/
// github code example for modal from VueStrap
// https://github.com/yuche/vue-strap/blob/master/docs/example/modalDocs.vue

import Vue from 'vue'
import template from './bootstrap.html'
import { modal } from 'vue-strap'

const BootstrapComponent = Vue.component('bootstrap-component', {
  template: template,
  components: {
    modal
  },
  data: () => {
    return {
      showModal: false
    }
  }
})

export default BootstrapComponent
