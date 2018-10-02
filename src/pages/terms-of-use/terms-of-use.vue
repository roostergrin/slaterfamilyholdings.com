<template lang='pug' src='./terms-of-use.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomTermsUse from 'components/custom/custom-terms-use/custom-terms-use'

export default {
  name: 'terms-of-use',
  computed: {
    props () {
      return this.$store.state.pages['terms-of-use']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    CustomTermsUse
  }
}
</script>
