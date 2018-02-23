<template lang='pug' src='./green-initiative.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'green-initiative',
  computed: {
    props () {
      return this.$store.state.pages['green-initiative']
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
