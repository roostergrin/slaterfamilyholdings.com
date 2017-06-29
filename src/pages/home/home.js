import Vue from 'vue'
import template from './home.html'
import Loader from '../../components/loader/loader'
import Child from '../../components/child/child'
import axios from 'axios'

var Parent = Vue.component('parent', {
  template: template,
  data: () => {
    return {
      posts: [],
      errors: [],
      message: 'Hello Vue'
    }
  },
  created () {
    this.loading = true
    axios.get('http://jezdimir.roostertest3.com/wp-json/wp/v2/pages?slug=home')
      .then(response => {
        this.posts = response.data
        this.loading = false
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
