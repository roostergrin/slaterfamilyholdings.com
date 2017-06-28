import Vue from 'vue'
import template from './home.html'
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
    axios.get('http://jezdimir.roostertest3.com/wp-json/wp/v2/pages?slug=home')
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
        console.log(this.errors.push(e))
      })
  },
  components: {
    Child
  }
})

export default Parent
