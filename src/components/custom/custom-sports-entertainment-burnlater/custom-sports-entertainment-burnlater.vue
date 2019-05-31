<template lang="pug" src="./custom-sports-entertainment-burnlater.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      swiperOptions: {
        loop: true,
        slidesPerView: 5,
        centeredSlides: true,
        autoplay: {
          delay: 3000
        },
        breakpoints: {
          640: {
            slidesPerView: 1
          }
        },
        navigation: {
          nextEl: '.custom-sports-entertainment-burnlater__next',
          prevEl: '.custom-sports-entertainment-burnlater__prev'
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
