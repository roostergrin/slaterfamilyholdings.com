<template lang='pug' src='./form-contact.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
export default {
  data: () => {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      modal: false,
      postUrl: api + '/rg-mail/v1/contact',
      formSubmitted: false
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.onSubmit()
        }
      })
      .catch((e) => {
        console.log(e)
      })
    },
    onSubmit () {
      axios.post(this.postUrl, {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      })
      .then(res => {
        this.modal = true
        setTimeout(() => {
          this.$el.children[0].reset()
          this.modal = false
        }, 1000)
      })
      .catch(e => { console.log(e) })
    }
  }
}
</script>
