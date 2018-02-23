<template lang='pug' src='./navigation.pug'></template>

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
  created () {
    console.log(this.$router, this.$route)
  }
}
</script>
