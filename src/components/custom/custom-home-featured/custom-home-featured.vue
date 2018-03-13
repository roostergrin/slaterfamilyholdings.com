<template lang="pug" src="./custom-home-featured.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      showInfo: false,
      isFeatured: this.blog
    }
  },
  components: {
    Icon
  },
  props: ['props', 'blog'],
  methods: {
    mobileClick (i) {
      this.showInfo = i
    }
  }
}
</script>
