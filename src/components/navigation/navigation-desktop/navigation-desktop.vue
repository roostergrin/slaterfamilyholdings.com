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
  }
}
</script>
