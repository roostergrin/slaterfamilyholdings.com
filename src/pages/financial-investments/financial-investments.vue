<template lang='pug' src='./financial-investments.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'

export default {
  name: 'private-equity',
  computed: {
    props () {
      return this.$store.state.pages['financial-investments']
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
