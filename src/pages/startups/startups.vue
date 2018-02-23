<template lang='pug' src='./startups.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'startups',
  computed: {
    props () {
      return this.$store.state.pages['startups']
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
