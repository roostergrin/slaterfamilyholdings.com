import Vue from 'vue'
import template from './our-practice.html'
import Child from 'components/child/child'
import FormMain from 'components/form/form'

const OurPractice = Vue.component('our-practice', {
  name: 'OurPractice',
  template: template,
  data: function () {
    return {
      message: 'Our Practice'
    }
  },
  components: {
    Child,
    FormMain
  }
})

export default OurPractice
