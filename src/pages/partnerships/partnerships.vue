<template lang='pug' src='./partnerships.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'partnerships',
  computed: {
    props () {
      return this.$store.state.pages['partnerships']
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
