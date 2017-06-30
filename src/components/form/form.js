import Vue from 'vue'
import template from './form.html'
import { required, minLength, email } from 'vuelidate/lib/validators'

const FormMain = Vue.component('form-main', {
  template: template,
  data: () => {
    return {
      name: '',
      emailValue: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(1)
    },
    emailValue: {
      required,
      email
    }
  }
})

export default FormMain
