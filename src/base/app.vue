<template lang='pug' src='./app.pug'></template>

<script>
// components
import Navigation from 'components/navigation/navigation'
import Footer from 'components/Footer/Footer'
import BaseBaseAccess from 'components/base-access/index'

export default {
  created () {
    this.$store.dispatch('GET_PAGES')
    this.$store.dispatch('GET_BLOG')
    this.$store.dispatch('GET_APP')
    this.$store.dispatch('GET_CATEGORIES')
    this.$store.dispatch('VIEW_NAV', this.$router.history.current.name)
    this.$store.dispatch('VIEW_BODY', false)
    this.$store.dispatch('ACTIVE_CATS', null)
    this.$store.dispatch('ACTIVE_PROPS', null)
    this.$store.dispatch('VIEW_SHOWMODAL', false)
    this.$store.dispatch('VIEW_MODALCONTENT', false)
  },
  computed: {
    props () {
      return this.$store.state
    }
  },
  components: {
    Navigation,
    Footer,
    BaseBaseAccess
  },
  name: 'app'
}
</script>

<-- styles have been moved to main.sass file -->
<style src='../main.sass' lang='sass'></style>
