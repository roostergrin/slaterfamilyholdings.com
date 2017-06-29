import Vue from 'vue'
import template from './child.html'

var Child = Vue.component('child', {
  template: template,
  props: ['say']
})

export default Child
