<template lang='pug' src='./sports-entertainment.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Hero from 'components/hero/hero'
import CustomSportsEntertainmentHNL from 'components/custom/custom-sports-entertainment-nhl/custom-sports-entertainment-nhl'
import CustomSportsEntertainmentArena from 'components/custom/custom-sports-entertainment-arena/custom-sports-entertainment-arena'
import CustomSportsEntertainmentBurnLater from 'components/custom/custom-sports-entertainment-burnlater/custom-sports-entertainment-burnlater'
import CustomSportsEntertainmentGrizzlies from 'components/custom/custom-sports-entertainment-grizzlies/custom-sports-entertainment-grizzlies'

export default {
  name: 'sports-entertainment',
  computed: {
    props () {
      return this.$store.state.pages['sports-entertainment']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Hero,
    CustomSportsEntertainmentHNL,
    CustomSportsEntertainmentArena,
    CustomSportsEntertainmentBurnLater,
    CustomSportsEntertainmentGrizzlies
  }
}
</script>
