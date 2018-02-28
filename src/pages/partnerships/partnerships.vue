<template lang='pug' src='./partnerships.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomPartnershipsIntro from 'components/custom/custom-partnerships-intro/custom-partnerships-intro'
import BlockParallax from 'components/block/block-parallax/block-parallax'
import CustomPartnershipsTwoColumns from 'components/custom/custom-partnerships-two-columns/custom-partnerships-two-columns'
import CustomPartnershipsOneColumn from 'components/custom/custom-partnerships-one-column/custom-partnerships-one-column'
import CustomPartnershipsThreeColumns from 'components/custom/custom-partnerships-three-columns/custom-partnerships-three-columns'

export default {
  name: 'partnerships',
  computed: {
    props () {
      return this.$store.state.pages['partnerships']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    CustomPartnershipsIntro,
    BlockParallax,
    CustomPartnershipsTwoColumns,
    CustomPartnershipsOneColumn,
    CustomPartnershipsThreeColumns
  }
}
</script>
