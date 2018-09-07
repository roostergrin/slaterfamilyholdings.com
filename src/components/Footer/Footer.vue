<template lang="pug" src="./footer.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  computed: {
    props () {
      return {
        props: this.$store.state.app.footer
      }
    },
    links () {
      return this.$router.options.routes
    }
  },
  components: {
    Icon
  }
}
</script>
