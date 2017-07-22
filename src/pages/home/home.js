import Vue from 'vue'
import template from './home.html'
import api from 'api'
import axios from 'axios'
import Loader from 'components/loader/loader'
// import Child from 'components/child/child'
import Child from 'components/child/child.vue'
import MainVideo from 'components/video/video'
import BootstrapComponent from 'components/bootstrap/bootstrap'

var Home = Vue.component('home', {
  name: 'HomePage',
  template: template,
  data: () => {
    return {
      name: 'home',
      props: [],
      // errors: [],
      message: 'Hello Vue (from $data.message)',
      videosource: []
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
    MainVideo,
    BootstrapComponent
  }
})

export default Home
