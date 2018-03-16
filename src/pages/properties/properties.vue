<template lang='pug' src='./properties.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomPropertiesList from 'components/custom/custom-properties-list/custom-properties-list'

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
    },
    filtering () {
      return this.$store.state.app['property-filter']
    }
  },
  components: {
    Loader,
    Hero,
    CustomPropertiesList
  }
}
</script>
