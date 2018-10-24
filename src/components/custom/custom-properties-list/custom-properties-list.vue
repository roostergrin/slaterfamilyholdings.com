<template lang="pug" src="./custom-properties-list.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      activeCategories: [],
      currentLocation: null,
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
  methods: {
    // selects the category to be filtered out or put back in
    selectCategories (category) {
      if (!this.activeCategories.includes(category)) {
        this.activeCategories.push(category)
        this.filterProperties(category)
      } else {
        let newParentCategories = this.activeCategories.filter(filterCat => filterCat.id !== category.id)
        category.children.forEach((element) => {
          let removeChildCategories = newParentCategories.filter(cat => { return cat !== element })
          newParentCategories = removeChildCategories
        })
        this.activeCategories = newParentCategories
        this.filterProperties(category)
      }
    },
    someVals (currentVal, arrVal) {
      return currentVal === arrVal
      // this.someVals(property.categories, val)
    },
    filterProperties (cat) {
      if (this.activeCategories.length > 0) {
        // if selected category is a parent location, e.g. state or country, no other locations can be selected filter works here
        if (cat.parent === 15 && this.activeCategories.includes(cat)) {
          this.currentLocation = cat.id
          let activeProperties = this.locations.filter(location => location.categories.includes(cat.id))
          this.locations = activeProperties
        } else {
          // all other category values have overlaps and must be filtered from the parent array
          const allFilterList = this.properties.reduce((shownProperties, property) => {
            if (this.activeCategories.some((val) => property.categories.includes(val.id))) {
              shownProperties.push(property)
            }
            if (this.activeCategories.some((val) => val.parent === 15)) {
              let filteredProperties = shownProperties.filter(location => location.categories.includes(this.currentLocation))
              shownProperties = filteredProperties
            }
            return shownProperties
          }, [])
          this.locations = allFilterList
        }
      }
      if (this.activeCategories.length <= 0) {
        this.locations = this.properties
      }
    }
  },
  created () {
    let fillLocations = setInterval(() => {
      if (this.properties.length > 1) {
        this.loading = false
        this.locations = this.properties
        clearInterval(fillLocations)
      }
    }, 100)
  }
}
</script>
