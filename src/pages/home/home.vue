<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroHome from 'components/hero/hero-home/hero-home'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    HeroHome
  }
}
</script>
