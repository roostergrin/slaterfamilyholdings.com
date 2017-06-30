import Vue from 'vue'
import template from './child.html'

const Child = Vue.component('child', {
  template: template,
  props: ['message']
})

export default Child
