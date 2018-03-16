<template lang="pug" src="./footer.pug"></template>

<script>

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
  }
}
</script>
