<template lang='pug' src='./accessibility.pug'></template>

<script>

export default {
  name: 'Accessibility',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    }
  },
  data () {
    return {
      companyName: 'Slater Family Holdings', // Fill this in
      domain: "<a href='https://slaterfamilyholdings.com'>slaterfamilyholdings.com</a>", // Fill this in
      email: "<a href='mailto:contact@slaterfamilyholdings.com'>contact@slaterfamilyholdings.com</a>", // Fill this in
      phone: "<a href='tel:+16175571799'>617-557-1799</a>, <a href='tel:+15616702027'>561-670-2027</a>", // Fill this in
      formattedEmail: ''
    }
  },
  mounted () {
    this.formatEmail()
  },
  methods: {
    formatEmail () {
      this.formattedEmail = '<a aria-label="email ' + this.email + '" href="mailto:' + this.email + '">' + this.email + '</a>'
    }
  }
}
</script>
