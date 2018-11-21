<template lang="pug" src="./custom-properties-list.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      activeCategories: [],
      currentLocation: null,
      currentType: null,
      currentRegion: null,
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
        // 15 is the parent of all locations
        if (category.parent === 15) {
          // sets state on current location for access to children after function runs
          this.currentLocation = category
          // adds category
          this.activeCategories.push(category)
        }
        // filters for types
        if (category.parent === 16) {
          // sets state on current Type
          this.currentType = category
          // filters out previous types
          let newCategories = this.activeCategories.filter(filterCat => filterCat.parent !== 16)
          this.activeCategories = newCategories
          this.activeCategories.push(category)
        }
        // filters for subregion
        if (this.currentLocation && category.parent === this.currentLocation.id) {
          // sets state on current Type
          this.currentRegion = category
          // filters out previous subregion
          let newCategories = this.activeCategories.filter(filterCat => filterCat.parent !== this.currentLocation.id)
          this.activeCategories = newCategories
          this.activeCategories.push(category)
        }
      } else {
        // filters out parent category
        if (this.currentLocation === category) {
          this.currentLocation = null
        }
        let newParentCategories = this.activeCategories.filter(filterCat => filterCat.id !== category.id)
        // filters all children categories out when parent is filtered out
        category.children.forEach((element) => {
          let removeChildCategories = newParentCategories.filter(cat => { return cat !== element })
          newParentCategories = removeChildCategories
        })
        // assigns activeCategories from filtered lists
        this.activeCategories = newParentCategories
      }
      // calls property filter
      this.filterProperties(category)
    },
    filterProperties (cat) {
      if (this.activeCategories.length > 0) {
        // if selected category is a parent location, e.g. state or country, no other locations can be selected filter works here
        if (cat.parent === 15 && this.activeCategories.includes(cat)) {
          // there can only be one parent location so this just has to filter the property list for the on location
          let activeProperties = this.locations.filter(location => location.categories.includes(cat.id))
          this.locations = activeProperties
        } else {
          let shownProperties = this.properties
          if (this.activeCategories.some((val) => val.parent === 15)) {
            let filteredProperties = shownProperties.filter(location => location.categories.includes(this.currentLocation.id))
            shownProperties = filteredProperties
          }
          // filters out types of properties
          if (this.activeCategories.some((val) => val.parent === 16)) {
            let filteredProperties = shownProperties.filter(location => location.categories.includes(this.currentType.id))
            shownProperties = filteredProperties
          }
          // filters out cities on states
          if (this.currentLocation && this.activeCategories.some((val) => val.parent === this.currentLocation.id)) {
            let filteredProperties = shownProperties.filter(location => location.categories.includes(this.currentRegion.id))
            shownProperties = filteredProperties
          }
          this.locations = shownProperties
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
        console.log(this.properties)
        clearInterval(fillLocations)
      }
    }, 100)
  }
}
</script>
