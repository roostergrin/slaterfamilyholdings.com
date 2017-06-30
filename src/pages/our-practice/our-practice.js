import Vue from 'vue'
import template from './our-practice.html'
import Child from '../../components/child/child'
import Form from '../../components/form/form'

var OurPractice = Vue.component('our-practice', {
  template: template,
  data: function () {
    return {
      message: 'Our Practice'
    }
  },
  components: {
    Child,
    Form
  }
})

export default OurPractice
