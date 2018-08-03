<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import HeroHome from 'components/hero/hero-home/hero-home'
import CustomHomeFeatured from 'components/custom/custom-home-featured/custom-home-featured'
import CustomHomeAbout from 'components/custom/custom-home-about/custom-home-about'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    },
    blog () {
      return this.$store.state.filter
    }
  },
  components: {
    Loader,
    HeroHome,
    CustomHomeFeatured,
    CustomHomeAbout
  }
}
</script>
