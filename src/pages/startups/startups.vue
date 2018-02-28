<template lang='pug' src='./startups.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomStartupsIntro from 'components/custom/custom-startups-intro/custom-startups-intro'
import BlockParallax from 'components/block/block-parallax/block-parallax'
import CustomStartupsTwoColumns from 'components/custom/custom-startups-two-columns/custom-startups-two-columns'
import CustomStartupsOneColumn from 'components/custom/custom-startups-one-column/custom-startups-one-column'
import CustomStartupsThreeColumns from 'components/custom/custom-startups-three-columns/custom-startups-three-columns'

export default {
  name: 'startups',
  computed: {
    props () {
      return this.$store.state.pages['startups']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    CustomStartupsIntro,
    BlockParallax,
    CustomStartupsTwoColumns,
    CustomStartupsOneColumn,
    CustomStartupsThreeColumns
  }
}
</script>
