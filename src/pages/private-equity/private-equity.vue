<template lang='pug' src='./private-equity.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomPrivateEquityDirect from 'components/custom/custom-private-equity-direct/custom-private-equity-direct'
import CustomPrivateEquityParticipation from 'components/custom/custom-private-equity-participation/custom-private-equity-participation'

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
    Hero,
    CustomPrivateEquityDirect,
    CustomPrivateEquityParticipation
  }
}
</script>
