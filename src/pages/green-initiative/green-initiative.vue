<template lang='pug' src='./green-initiative.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomGreenInitiativeIntro from 'components/custom/custom-green-initiative-intro/custom-green-initiative-intro'
import BlockParallax from 'components/block/block-parallax/block-parallax'
import CustomGreenInitiativeTwoColumns from 'components/custom/custom-green-initiative-two-columns/custom-green-initiative-two-columns'
import CustomGreenInitiativeOneColumn from 'components/custom/custom-green-initiative-one-column/custom-green-initiative-one-column'
import CustomGreenInitiativeThreeColumns from 'components/custom/custom-green-initiative-three-columns/custom-green-initiative-three-columns'

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
    Loader,
    Hero,
    CustomGreenInitiativeIntro,
    BlockParallax,
    CustomGreenInitiativeTwoColumns,
    CustomGreenInitiativeOneColumn,
    CustomGreenInitiativeThreeColumns
  }
}
</script>
