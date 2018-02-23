<template lang='pug' src='./contact.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'contact',
  computed: {
    props () {
      return this.$store.state.pages['contact']
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
