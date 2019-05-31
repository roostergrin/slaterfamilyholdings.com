<template lang="pug" src="./custom-sports-entertainment-arena.pug"></template>

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
          nextEl: '.custom-sports-entertainment-arena__next',
          prevEl: '.custom-sports-entertainment-arena__prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
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
