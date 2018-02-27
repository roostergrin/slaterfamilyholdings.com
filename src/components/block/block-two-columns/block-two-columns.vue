<template lang="pug" src="./block-two-columns.pug"></template>

<script>
export default {
  props: ['props'],
  mounted () {
    console.log(this.props)
  }
}
</script>
