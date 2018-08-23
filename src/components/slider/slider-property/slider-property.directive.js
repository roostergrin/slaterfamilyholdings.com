import Vue from 'vue'
import $ from 'jquery'
// eslint-disable-next-line
import slick from 'slick-carousel'
import Arrow from 'templates/left-arrow.html'

const SliderPropertyDirective = Vue.directive('slider-property', {
  bind (el) {
    $(document).ready(function () {
      const slider = $(el)
      slider.slick({
        arrows: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        dots: false,
        infinite: true,
        prevArrow: `
        <div class='slider-property__arrow slider-property__arrow--prev'>
          ${Arrow}
        </div>
        `,
        nextArrow: `
        <div class='slider-property__arrow slider-property__arrow--next'>
          ${Arrow}
        </div>
        `
      })
    })
  }
})

export default SliderPropertyDirective
