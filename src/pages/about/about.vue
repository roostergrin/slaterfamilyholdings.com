<template lang='pug' src='./about.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import AboutIntro from 'components/custom/custom-about-intro/custom-about-intro'
import AboutGallery from 'components/custom/custom-about-gallery/custom-about-gallery'

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
    AboutIntro,
    AboutGallery
  }
}
</script>
