<template lang='pug' src='./properties.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'properties',
  computed: {
    props () {
      return this.$store.state.pages['properties']
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
