import Vue from 'vue'
import $ from 'jquery'
// eslint-disable-next-line
import slick from 'slick-carousel'

const SliderPropertyDirective = Vue.directive('slider-property', {
  bind (el) {
    $(document).ready(function () {
      const slider = $(el)
      slider.slick({
        arrows: true,
        autoplay: true,
        speed: 1000,
        fade: true,
        dots: false,
        infinite: true,
        prevArrow: `
        <div class='slider-property__arrow slider-property__arrow--prev'>
        </div>
        `,
        nextArrow: `
        <div class='slider-property__arrow slider-property__arrow--next'>
        </div>
        `
      })
    })
  }
})

export default SliderPropertyDirective
