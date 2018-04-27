<template lang='pug' src='./private-equity.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'

export default {
  name: 'private-equity',
  computed: {
    props () {
      return this.$store.state.pages['private-equity']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero
  }
}
</script>
