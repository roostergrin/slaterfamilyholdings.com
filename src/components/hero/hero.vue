<template lang="pug" src="./hero.pug"></template>

<script>
export default {
  props: ['props'],
  created () {
    console.log(this.props)
  }
}
</script>
