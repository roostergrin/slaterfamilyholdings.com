import Vue from 'vue'
import template from './video.html'

var MainVideo = Vue.component('main-video', {
  template: template,
  props: ['vid']
})

export default MainVideo
