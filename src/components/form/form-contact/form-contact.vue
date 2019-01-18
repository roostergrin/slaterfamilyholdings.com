<template lang='pug' src='./form-contact.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
import Icon from 'components/icon/icon'
export default {
  data: () => {
    return {
      name: '',
      email: '',
      phone: '',
      reason: '',
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
      this.formSubmitted = true
      axios.post(this.postUrl, {
        name: this.name,
        email: this.email,
        subject: this.subject,
        reason: this.reason,
        message: this.message
      })
        .then(res => {
          setTimeout(() => {
            this.$router.push('/thank-you')
          }, 500)
        })
        .catch(e => { console.log(e) })
    }
  },
  components: {
    Icon
  }
}
</script>
