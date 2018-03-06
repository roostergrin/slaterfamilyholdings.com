<template lang='pug' src='./property.pug'></template>

<script>
import SliderProperty from 'components/slider/slider-property/slider-property'
import PropertyMap from 'components/google-map/google-map'

export default {
  name: 'property',
  computed: {
    blog () {
      var property = this.$route.params.postID
      return this.$store.state.blog[property]
    }
  },
  components: {
    SliderProperty,
    PropertyMap
  }
}
</script>
