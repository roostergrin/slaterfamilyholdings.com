<template lang='pug' src='./about.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomAboutIntro from 'components/custom/custom-about-intro/custom-about-intro'

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
    Loader,
    Hero,
    CustomAboutIntro
  }
}
</script>
