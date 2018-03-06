<template lang='pug' src='./property.pug'></template>

<script>
export default {
  name: 'property',
  computed: {
    blog () {
      var property = this.$route.params.postID
      return this.$store.state.blog[property]
    }
  },
  created () {
    // console.log(this.$route.params.postID)
    // console.log(this.blog)
  }
}
</script>
