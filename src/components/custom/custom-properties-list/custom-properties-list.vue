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
      animation: 'fade'
    }
  },
  props: ['blog'],
  computed: {
    categories () {
      return this.$store.state.types
    },
    properties () {
      let locations = this.blog
      let selected = this.shown
      if (selected.length === 0) {
        return locations
      }
      if (selected.length !== 0) {
        let arrFilter = function (arr, searchArr) {
          return arr.filter(item => {
            return searchArr.some(searchTerm => {
              return item.categories.indexOf(searchTerm.id) > -1
            })
          })
        }
        let newArr = arrFilter(locations, selected)
        return newArr
      }
    }
  },
  components: {
    Icon
  },
  methods: {
    select (category) {
      if (this.shown.includes(category)) {
        this.shown = this.shown.filter(item => item !== category)
        if (category.children > 0) {

        }
      } else {
        this.shown.push(category)
      }
    }
  }
}
</script>

<style lang="css">

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

</style>
