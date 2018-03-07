<template lang='pug' src='./navigation-mobile.pug'></template>

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
  data () {
    return {
      active: false
    }
  }
}
</script>
