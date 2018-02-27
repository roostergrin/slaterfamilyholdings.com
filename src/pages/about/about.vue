<template lang='pug' src='./about.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomAboutIntro from 'components/custom/custom-about-intro/custom-about-intro'
import BlockParallax from 'components/block/block-parallax/block-parallax'
import CustomAboutTwoColumns from 'components/custom/custom-about-two-columns/custom-about-two-columns'
import CustomAboutOneColumn from 'components/custom/custom-about-one-column/custom-about-one-column'
import CustomAboutThreeColumns from 'components/custom/custom-about-three-columns/custom-about-three-columns'

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
    CustomAboutIntro,
    BlockParallax,
    CustomAboutTwoColumns,
    CustomAboutOneColumn,
    CustomAboutThreeColumns
  }
}
</script>
