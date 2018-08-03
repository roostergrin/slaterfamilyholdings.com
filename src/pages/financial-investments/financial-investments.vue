<template lang='pug' src='./financial-investments.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomFinancialInvestmentsIntro from 'components/custom/custom-financial-investments-intro/custom-financial-investments-intro'
import BlockParallax from 'components/block/block-parallax/block-parallax'
import CustomFinancialInvestmentsInvestment from 'components/custom/custom-financial-investments-investment/custom-financial-investments-investment'
import CustomFinancialInvestmentsPhilosophy from 'components/custom/custom-financial-investments-philosophy/custom-financial-investments-philosophy'

export default {
  name: 'financial-investments',
  computed: {
    props () {
      return this.$store.state.pages['financial-investments']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    CustomFinancialInvestmentsIntro,
    BlockParallax,
    CustomFinancialInvestmentsInvestment,
    CustomFinancialInvestmentsPhilosophy
  }
}
</script>
