<template lang='pug' src='./properties.pug'></template>

<script>
import Loader from 'components/loader/loader'
import PropertyHero from 'components/hero/hero-property/hero-property'
import PropertiesList from 'components/custom/custom-properties-list/custom-properties-list'

export default {
  name: 'properties',
  computed: {
    props () {
      return this.$store.state.pages['properties']
    },
    loading () {
      return this.$store.state.loading
    },
    blog () {
      return this.$store.state.filter
    }
  },
  components: {
    Loader,
    PropertyHero,
    PropertiesList
  },
  created () {
    console.log(this.blog)
  }
}
</script>
