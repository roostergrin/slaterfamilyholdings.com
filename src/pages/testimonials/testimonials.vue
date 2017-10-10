<template lang='pug' src='./testimonials.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'about-us',
  computed: {
    props () {
      return this.$store.state.pages['testimonials']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  }
}
</script>
