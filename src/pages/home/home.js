import Vue from 'vue'
import template from './home.html'
import Loader from '../../components/loader/loader'
import Child from '../../components/child/child'
import axios from 'axios'

var Parent = Vue.component('parent', {
  template: template,
  data: () => {
    return {
      props: [],
      errors: [],
      message: 'Hello Vue'
    }
  },
  created () {
    this.loading = true
    axios.get('http://jezdimir.roostertest3.com/wp-json/acf/v3/pages/6')
      .then(response => {
        this.props = response.data.acf
        this.loading = false
        this.videosource = response.data.acf.promo_video_mp4
      })
      .catch(e => {
        this.errors.push(e)
        console.log(this.errors.push(e))
      })
  },
  components: {
    Child,
    Loader
  }
})

export default Parent
