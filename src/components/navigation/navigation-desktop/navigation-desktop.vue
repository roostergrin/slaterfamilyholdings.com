<template lang='pug' src='./navigation-desktop.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  components: {
    Icon
  },
  computed: {
    links () {
      return this.$router.options.routes
    }
  },
  watch: {
    '$route' () {
      this.$store.dispatch('VIEW_NAV', this.$router.history.current.name)
    }
  }
}
</script>
