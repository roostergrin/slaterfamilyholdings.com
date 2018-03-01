<template lang="pug" src="./custom-properties-list.pug"></template>

<script>
export default {
  data () {
    return {
      properties: this.blog,
      selectedProperties: 'All',
      types: [
        {propertyType: 'multi-family'},
        {propertyType: 'office'},
        {propertyType: 'industrial'},
        {propertyType: 'agricultural'}
      ],
      propertyState: [
        {propertyType: 'California'},
        {propertyType: 'New York'},
        {propertyType: 'Hawaii'},
        {propertyType: 'Alaska'}
      ]
    }
  },
  props: ['props', 'blog'],
  computed: {
    filteredProperties () {
      var locations = this.properties
      var selected = this.selectedProperties
      var filteredPropertiesList = []
      if (selected === 'All') {
        return locations
      } else {
        locations.filter(function (property) {
          if (property.acf.property_type === selected) {
            filteredPropertiesList.push(property)
          }
        })
        console.log('Filter is working!!')
        return filteredPropertiesList
      }
    }
  },
  methods: {
    duplicateType () {
      console.log(this)
    }
  }
}
</script>
