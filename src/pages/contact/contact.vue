<template lang='pug' src='./contact.pug'></template>

<script>
import Loader from 'components/loader/loader'
import BlockContact from 'components/block/block-contact/block-contact'
import Hero from 'components/hero/hero'

export default {
  name: 'contact',
  computed: {
    props () {
      return this.$store.state.pages['contact']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    BlockContact,
    Hero
  }
}
</script>
