<template lang='pug' src='./asset-money-maker.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'asset-money-maker',
  computed: {
    props () {
      return this.$store.state.pages['asset-money-maker']
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
