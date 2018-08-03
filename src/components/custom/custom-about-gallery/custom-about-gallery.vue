<template lang='pug' src='./custom-about-gallery.pug'></template>

<script>
import Icon from 'components/icon/icon'

export default {
  data () {
    return {
      modal: false,
      modalContent: false
    }
  },
  props: ['props'],
  methods: {
    openModal (i) {
      this.modal = true
      this.modalContent = i
      document.body.style.overflow = 'hidden'
    },
    closeModal () {
      this.modal = false
      document.body.style.overflow = 'auto'
      setTimeout(() => {
        this.modalContent = false
      }, 500)
    }
  },
  components: {
    Icon
  }
}
</script>
