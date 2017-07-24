<template lang='pug' src='./icon.pug'></template>

<script>
export default {
  props: ['name'],
  computed: {
    svg () {
      return require(`@/asseets/svg/${this.name}.svg`)
    }
  }
}
</script>
