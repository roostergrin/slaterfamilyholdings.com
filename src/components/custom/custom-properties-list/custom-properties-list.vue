<template lang="pug" src="./custom-properties-list.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      activeCategories: [],
      locations: []
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
    setTimeout(() => {
      this.locations = this.properties
    }, 1000)
  },
  methods: {
    selectCategories (category) {
      if (!this.activeCategories.includes(category)) {
        this.activeCategories.push(category)
        this.filterProperties(category.id)
      } else if (this.activeCategories.includes(category)) {
        let newParentCategories = this.activeCategories.filter(filterCat => filterCat.id !== category.id)
        category.children.forEach(function (element) {
          newParentCategories.indexOf(element)
          newParentCategories.splice(1, newParentCategories.indexOf(element))
        })
        this.activeCategories = newParentCategories
        this.removeFilterProperties()
      }
    },
    filterProperties (i) {
      let newCurrent = this.locations.filter(location => location.categories.includes(i))
      this.locations = newCurrent
    },
    removeFilterProperties () {
      let fullArr = this.properties
      let filterArr = []
      if (this.activeCategories.length > 0) {
        this.activeCategories.forEach(function (category) {
          let filtered = fullArr.filter(property => property.categories.includes(category.id))
          filterArr = filtered
        })
        this.locations = filterArr
      }
      if (this.activeCategories.length <= 0) {
        this.locations = this.properties
      }
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>
