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
      // if (selected.length !== 0) {
      //   let arrFilter = function (arr, searchArr) {
      //     return arr.filter(item => {
      //       return searchArr.some(searchTerm => {
      //         return item.categories.indexOf(searchTerm.id) > -1
      //       })
      //     })
      //   }
      //   let typeFilter = []
      //   let locationFilter = []
      //   let finalFilter = []
      //   let arrFilter = function (arr, searchArr) {
      //     return arr.filter(item => {
      //       return searchArr.some(searchTerm => {
      //         // console.log(arr, searchArr, item, searchTerm)
      //         if (searchTerm.parent === 16) {
      //           item.categories.indexOf(searchTerm.id) > -1 ? typeFilter.push(item) : console.log('wrong type')
      //         } else {
      //           item.categories.indexOf(searchTerm.id) > -1 ? locationFilter.push(item) : console.log('wrong location')
      //         }
      //       })
      //     })
      //   }
      //   arrFilter(locations, selected)
      //   console.log(typeFilter)
      //   console.log(locationFilter)
      //   return finalFilter
      // }
    }
  },
  components: {
    Icon
  },
  methods: {
    select (category) {
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
    }
  },
  async created () {
    console.log(this.blog.filter(function (category) {
      return category.categories[2] === 15
    }))
    console.log(this.shown)
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
