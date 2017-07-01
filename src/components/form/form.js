import Vue from 'vue'
import template from './form.html'

const FormMain = Vue.component('form-main', {
  template: template,
  data: () => {
    return {
      name: '',
      email: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
        .then(result => {
          if (result) {
            // alert('Form Submitted!')
            this.formSubmitted = true
          } else {
            alert('Correct them errors!')
          }
        })
        .catch(() => {
          alert('Correct them errors!')
        })
    }
  }
})

export default FormMain
