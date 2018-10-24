<template lang='pug' src='./thank-you.pug'></template>

<script>

export default {
  name: 'thank-you',
  computed: {
    props () {
      return this.$store.state.pages['thank-you']
    }
  }
}
</script>
