<template lang="pug" src="./custom-properties-list.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      shown: [],
      inSlide: false,
      outSlide: this.fade,
      animate: false,
      animation: 'fade',
      activeCategories: [],
      current: []
    }
  },
  props: ['blog'],
  computed: {
    categories () {
      return this.$store.state.types
    },
    properties () {
      return this.$store.state.filter
    }
  },
  components: {
    Icon
  },
  async created () {
    setTimeout(() => { this.current = this.properties }, 1000)
  },
  methods: {
    select (category) {
      this.activeCategories.push(category.id)
      this.filter()

      if (this.shown.includes(category)) {
        this.shown = this.shown.filter(item => item !== category)
        for (var i = 0; i < this.shown.length; i++) {
          if (this.shown[i].parent !== 16) {
            this.shown.splice(this.shown.indexOf(this.shown[i]), i)
          }
        }
      } else {
        this.shown.push(category)
      }
    },
    filter () {
      this.current = []
      this.properties.filter((current) => {
        for (var i = 0; i < this.activeCategories.length; i++) {
          if (current.categories.includes(this.activeCategories[i])) {
            this.current.push(current)
          }
        }
      })
    }
  }
}
</script>
