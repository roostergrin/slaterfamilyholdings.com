<template lang="pug" src="./custom-home-featured.pug"></template>

<script>
export default {
  props: ['props', 'blog'],
  mounted () {
    console.log(this.blog)
  }
}
</script>
