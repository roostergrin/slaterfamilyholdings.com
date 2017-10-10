<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'home',
  computed: {
    props () {
      console.log(this.$store.state.pages.home)
      return this.$store.state.pages.home
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
