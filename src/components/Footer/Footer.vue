<template lang="pug" src="./footer.pug"></template>

<script>

export default {
  computed: {
    props () {
      return {
        props: this.$store.state.app.footer
      }
    }
  },
  created () {
    console.log(this.props.props)
  }
}
</script>
