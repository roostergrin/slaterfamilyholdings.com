import Vue from 'vue'
import template from './child.html'

var Child = Vue.component('child', {
  template: template,
  // data: function () {
  //   return {
  //     message: 'I\'m a child component'
  //   }
  // },
  props: ['message']
})

export default Child
