<template lang="pug" src="./hero-home.pug"></template>

<script>
import Icon from 'components/icon/icon'
export default {
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000
        },
        navigation: {
          nextEl: '.hero-home__right',
          prevEl: '.hero-home__left'
        }
      }
    }
  },
  props: ['props'],
  components: {
    Icon
  }
}
</script>
