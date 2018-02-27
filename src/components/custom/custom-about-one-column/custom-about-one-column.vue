<template lang="pug" src="./custom-about-one-column.pug"></template>

<script>
export default {
  props: ['props'],
  mounted () {
    console.log(this.props)
  }
}
</script>
