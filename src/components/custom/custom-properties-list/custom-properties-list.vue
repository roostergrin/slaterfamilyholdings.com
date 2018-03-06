<template lang="pug" src="./custom-properties-list.pug"></template>

<script>
export default {
  data () {
    return {
      propertyTypes: this.filtering.property_type,
      propertyLocations: this.filtering.property_location,
      propertyCities: false,
      selectedProperties: 'All',
      selectedLocations: 'All',
      selectedCities: false
    }
  },
  props: ['blog', 'filtering'],
  computed: {
    filteredProperties () {
      var locations = this.blog
      var selectedType = this.selectedProperties
      var selectedLocation = this.selectedLocations
      var selectedCity = this.selectedCities
      var filteredPropertiesList = []
      if (selectedType === 'All' && selectedLocation === 'All') {
        return locations
      } else if (selectedLocation === 'All') {
        locations.filter(function (location) {
          if (location.acf.property_type === selectedType) {
            if (selectedCity === false) {
              filteredPropertiesList.push(location)
            } else {
              if (location.acf.property_location.city === selectedCity) {
                filteredPropertiesList.push(location)
              }
            }
          }
        })
        return filteredPropertiesList
      } else if (selectedType === 'All') {
        locations.filter(function (location) {
          if (location.acf.property_location.state === selectedLocation) {
            if (selectedCity === false) {
              filteredPropertiesList.push(location)
            } else {
              if (location.acf.property_location.city === selectedCity) {
                filteredPropertiesList.push(location)
              }
            }
          }
        })
        return filteredPropertiesList
      } else {
        locations.filter(function (location) {
          if (location.acf.property_type === selectedType && location.acf.property_location.state === selectedLocation) {
            if (selectedCity === false) {
              filteredPropertiesList.push(location)
            } else {
              if (location.acf.property_location.city === selectedCity) {
                filteredPropertiesList.push(location)
              }
            }
          }
        })
        return filteredPropertiesList
      }
    }
  },
  methods: {
    locationSelect (i) {
      this.selectedCities = false
      this.propertyCities = this.propertyLocations[i].location.city
    },
    clearFilter () {
      this.selectedProperties = 'All'
      this.selectedLocations = 'All'
    },
    clearCity () {
      this.selectedLocations = 'All'
    }
  },
  created () {
    console.log(this.properties)
  }
}
</script>
