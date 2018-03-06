<template lang="pug" src="./form-contact.pug"></template>

<script>
export default {
  props: ['props'],
  data: () => {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
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
}
</script>
