<template lang='pug' src='./home.pug'></template>

<script>
import api from 'api'
import axios from 'axios'
import Loader from 'components/loader/loader'
import Child from 'components/child/child'
import MainVideo from 'components/video/video'

export default {
  name: 'HomePage',
  data: () => {
    return {
      name: 'home',
      props: [],
      message: 'Hello Vue (from $data.message)',
      videosource: [],
      loading: true
    }
  },
  created () {
    this.loading = true
    axios.get(api + '/acf/v3/pages/2 ')
      .then(response => {
        this.props = response.data.acf
        this.loading = false
        this.videosource.push(response.data.acf.promo_video_mp4)
        this.videosource.push(response.data.acf.promo_video_webm)
      })
      .catch(e => {
        this.errors.push(e)
        console.log(this.errors.push(e))
        console.log(e)
      })
  },
  components: {
    Child,
    Loader,
    MainVideo
  }
}
</script>
