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
      return this.$store.state.categories
    },
    properties () {
      return this.$store.state.filter
    }
  },
  methods: {
    // selects the category to be filtered out or put back in
    selectCategories (category) {
      if (!this.$store.state.activeCats.includes(category)) {
        // 15 is the parent of all locations
        if (category.parent === 15) {
          // sets state on current location for access to children after function runs
          this.currentLocation = category
          // adds category
          let fullCategoryList = this.$store.state.activeCats
          // adds category to list
          fullCategoryList.push(category)
          this.$store.dispatch('ACTIVE_CATS', fullCategoryList)
        }
        // filters for types
        if (category.parent === 16) {
          // sets state on current Type
          this.currentType = category
          // filters out previous types
          let catList = this.$store.state.activeCats.filter(filterCat => filterCat.parent !== 16)
          // adds category to list
          catList.push(category)
          this.$store.dispatch('ACTIVE_CATS', catList)
        }
        // filters for subregion
        if (this.currentLocation && category.parent === this.currentLocation.id) {
          // sets state on current Type
          this.currentRegion = category
          // filters out previous subregion
          let newCategories = this.$store.state.activeCats.filter(filterCat => filterCat.parent !== this.currentLocation.id)
          // adds category to list
          newCategories.push(category)
          this.$store.dispatch('ACTIVE_CATS', newCategories)
        }
      } else {
        // filters out parent category
        if (this.currentLocation === category) {
          this.currentLocation = null
        }
        let newParentCategories = this.$store.state.activeCats.filter(filterCat => filterCat.id !== category.id)
        // filters all children categories out when parent is filtered out
        category.children.forEach((element) => {
          let removeChildCategories = newParentCategories.filter(cat => { return cat !== element })
          newParentCategories = removeChildCategories
        })
        // assigns activeCategories from filtered lists
        this.$store.dispatch('ACTIVE_CATS', newParentCategories)
      }
      // calls property filter
      this.filterProperties(category)
    },
    filterProperties (cat) {
      if (this.$store.state.activeCats.length > 0) {
        // if selected category is a parent location, e.g. state or country, no other locations can be selected filter works here
        if (cat.parent === 15 && this.$store.state.activeCats.includes(cat)) {
          // there can only be one parent location so this just has to filter the property list for the on location
          let activeProperties = this.$store.state.activeProps.filter(location => location.categories.includes(cat.id))
          this.$store.dispatch('ACTIVE_PROPS', activeProperties)
        } else {
          let shownProperties = this.properties
          if (this.$store.state.activeCats.some((val) => val.parent === 15)) {
            let filteredProperties = shownProperties.filter(location => location.categories.includes(this.currentLocation.id))
            shownProperties = filteredProperties
          }
          // filters out types of properties
          if (this.$store.state.activeCats.some((val) => val.parent === 16)) {
            let filteredProperties = shownProperties.filter(location => location.categories.includes(this.currentType.id))
            shownProperties = filteredProperties
          }
          // filters out cities on states
          if (this.currentLocation && this.$store.state.activeCats.some((val) => val.parent === this.currentLocation.id)) {
            let filteredProperties = shownProperties.filter(location => location.categories.includes(this.currentRegion.id))
            shownProperties = filteredProperties
          }
          this.$store.dispatch('ACTIVE_PROPS', shownProperties)
        }
      }
      if (this.$store.state.activeCats.length <= 0) {
        this.$store.dispatch('ACTIVE_PROPS', this.properties)
      }
    }
  },
  created () {
    let fillLocations = setInterval(() => {
      if (this.properties.length > 1) {
        this.loading = false
        if (this.$store.state.activeCats === null) {
          this.$store.dispatch('ACTIVE_CATS', this.categories)
        }
        if (this.$store.state.activeProps === null) {
          this.$store.dispatch('ACTIVE_PROPS', this.properties)
        }
        clearInterval(fillLocations)
      }
    }, 100)
  },
  components: {
    Icon
  }
}
</script>
