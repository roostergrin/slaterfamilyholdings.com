<template lang="pug" src="./custom-properties-list.pug"></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      // showInfo: false,
      // propertyLocations: this.filtering.property_location,
      // propertyCities: false,
      // selectedProperties: 'All',
      // selectedLocations: 'All',
      showGrand: false,
      typeFilter: {},
      locationFilter: {},
      cityFilter: {},
      inSlide: false,
      outSlide: this.fade,
      animate: false,
      animation: 'fade'
    }
  },
  props: ['blog'],
  computed: {
    // categories () {
    //   const cat = this.$store.state.categories
    //   const parents = shortenObjects.filter(type => type.id !== 1 && type.parent === 0).map(child => Object.assign({ children: [...(cat.filter(x => x.parent === child.id))] }, child))
    //   return parents
    // },
    // types () {
    //   return this.categories.filter(type => type.parent !== 0)
    // }
  //   filteredProperties () {
  //     var locations = this.blog
  //     var selectedType = this.selectedProperties
  //     var selectedLocation = this.selectedLocations
  //     var selectedCity = this.selectedCities
  //     var filteredPropertiesList = []
  //     if (selectedType === 'All' && selectedLocation === 'All') {
  //       return locations
  //     } else if (selectedLocation === 'All') {
  //       locations.filter(function (location) {
  //         if (location.acf.property_type === selectedType) {
  //           if (selectedCity === false) {
  //             filteredPropertiesList.push(location)
  //           } else {
  //             if (location.acf.property_location.city === selectedCity) {
  //               filteredPropertiesList.push(location)
  //             }
  //           }
  //         }
  //       })
  //       return filteredPropertiesList
  //     } else if (selectedType === 'All') {
  //       locations.filter(function (location) {
  //         if (location.acf.property_location.state === selectedLocation) {
  //           if (selectedCity === false) {
  //             filteredPropertiesList.push(location)
  //           } else {
  //             if (location.acf.property_location.city === selectedCity) {
  //               filteredPropertiesList.push(location)
  //             }
  //           }
  //         }
  //       })
  //       return filteredPropertiesList
  //     } else {
  //       locations.filter(function (location) {
  //         if (location.acf.property_type === selectedType && location.acf.property_location.state === selectedLocation) {
  //           if (selectedCity === false) {
  //             filteredPropertiesList.push(location)
  //           } else {
  //             if (location.acf.property_location.city === selectedCity) {
  //               filteredPropertiesList.push(location)
  //             }
  //           }
  //         }
  //       })
  //       return filteredPropertiesList
  //     }
  //   }
  // },
  },
  components: {
    Icon
  },
  mounted () {
    console.log(this.$store.state)
  }
  // methods: {
    // locationSelect (i) {
    //   this.selectedCities = false
    //   this.propertyCities = this.propertyLocations[i].location.city
    // },
    // clearFilter () {
    //   this.selectedProperties = 'All'
    //   this.selectedLocations = 'All'
    // },
    // clearCity () {
    //   this.selectedLocations = 'All'
    // },
    // hideType () {
    //   if (this.typeFilter === 'Active') {
    //     this.typeFilter = 'Disable'
    //   } else {
    //     this.typeFilter = 'Active'
    //   }
    // },
    // hideLocation () {
    //   if (this.locationFilter === 'Active') {
    //     this.locationFilter = 'Disable'
    //   } else {
    //     this.locationFilter = 'Active'
    //   }
    // },
    // hideState () {
    //   if (this.cityFilter === 'Active') {
    //     this.cityFilter = 'Disable'
    //   } else {
    //     this.cityFilter = 'Active'
    //   }
    // },
    // mobileClick (i) {
    //   this.showInfo = i
    // }
  // }
  // created () {
  //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  //     this.typeFilter = 'Disable'
  //     this.locationFilter = 'Disable'
  //   }
  // }
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
