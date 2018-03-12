<template lang="pug" src="./hero-property.pug"></template>

<script>
export default {
  computed: {
    blog () {
      var property = this.$route.params.postID
      return this.$store.state.blog[property]
    }
  }
}
</script>
