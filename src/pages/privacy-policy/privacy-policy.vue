<template lang='pug' src='./privacy-policy.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomPrivacyPolicy from 'components/custom/custom-privacy-policy/custom-privacy-policy'

export default {
  name: 'private-policy',
  computed: {
    props () {
      return this.$store.state.pages['privacy-policy']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    CustomPrivacyPolicy
  }
}
</script>
