<template lang='pug' src='./patient-info.pug'></template>

<script>
import Loader from 'components/loader/loader'

export default {
  name: 'patient-info',
  computed: {
    props () {
      return this.$store.state.pages['patient-info']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader
  }
}
</script>
