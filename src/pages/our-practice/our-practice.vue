<template lang='pug' src='./our-practice.pug'></template>

<script>
import Child from 'components/child/child'
import FormMain from 'components/form/form'

export default {
  name: 'OurPractice',
  data: () => {
    return {
      message: 'Our Practice'
    }
  },
  components: {
    Child,
    FormMain
  }
}
</script>
