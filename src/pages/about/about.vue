<template lang='pug' src='./about.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'about',
  computed: {
    props () {
      return this.$store.state.pages['about']
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
