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
    select (category) {
      if (!this.activeCategories.includes(category.id)) {
        this.activeCategories.push(category.id)
        this.filter(category.id)
      } else if (this.activeCategories.includes(category.id)) {
        let newCategories = this.activeCategories.filter(id => {
          id !== category.id
          category.children.forEach(child => {
            id === child.parent
          })
        })
        this.activeCategories = newCategories
        this.removeFilter()
      }
    },
    filter (i) {
      let newCurrent = this.locations.filter(location => location.categories.includes(i))
      this.locations = newCurrent
    },
    removeFilter () {
      let fullArr = this.properties
      let filterArr = []
      if (this.activeCategories.length > 0) {
        this.activeCategories.forEach(function (category) {
          let filtered = fullArr.filter(property => property.categories.includes(category))
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
