<template lang='pug' src='./navigation.pug'></template>

<script>
import Icon from 'components/icon/icon'
import NavigationDesktop from 'components/navigation/navigation-desktop/navigation-desktop'
import NavigationMobile from 'components/navigation/navigation-mobile/navigation-mobile'

export default {
  components: {
    Icon,
    NavigationDesktop,
    NavigationMobile
  },
  computed: {
    links () {
      return this.$router.options.routes
    }
  }
}
</script>
