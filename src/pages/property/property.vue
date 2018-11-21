<template lang='pug' src='./property.pug'></template>

<script>
import HeroProperty from 'components/hero/hero-property/hero-property'
import SliderProperty from 'components/slider/slider-property/slider-property'
import PropertyMap from 'components/google-map/google-map'

export default {
  name: 'property',
  computed: {
    blog () {
      var property = this.$route.params.postID
      console.log(property)
      console.log(this.$store.state.blog)
      return this.$store.state.blog[property]
    }
  },
  components: {
    HeroProperty,
    SliderProperty,
    PropertyMap
  }
}
</script>
