<template lang='pug' src='./asset-money-maker.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomAssetMoneyMakerIntro from 'components/custom/custom-asset-money-maker-intro/custom-asset-money-maker-intro'
import BlockParallax from 'components/block/block-parallax/block-parallax'
import CustomAssetMoneyMakerTwoColumns from 'components/custom/custom-asset-money-maker-two-columns/custom-asset-money-maker-two-columns'
import CustomAssetMoneyMakerOneColumn from 'components/custom/custom-asset-money-maker-one-column/custom-asset-money-maker-one-column'
import CustomAssetMoneyMakerThreeColumns from 'components/custom/custom-asset-money-maker-three-columns/custom-asset-money-maker-three-columns'

export default {
  name: 'asset-money-maker',
  computed: {
    props () {
      return this.$store.state.pages['asset-money-maker']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    CustomAssetMoneyMakerIntro,
    BlockParallax,
    CustomAssetMoneyMakerTwoColumns,
    CustomAssetMoneyMakerOneColumn,
    CustomAssetMoneyMakerThreeColumns
  }
}
</script>
