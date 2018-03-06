<template lang="pug" src="./slider-property.pug"></template>

<script>
import SliderPropertyDirective from './slider-property.directive'

export default {
  props: ['blog'],
  directives: {
    SliderPropertyDirective
  },
  created () {
    console.log(this.blog)
  }
}
</script>
