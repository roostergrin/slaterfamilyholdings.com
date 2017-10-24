import axios from 'axios'
import api from 'api'

const actions = {
  GET_PAGES ({ commit }) {
    axios.get(api + '/wp/v2/pages')
      .then(response => {
        let data = {}
        for (let i = 0; i < response.data.length; i++) {
          const itemData = response.data[i]
          const slug = response.data[i].slug
          data[slug] = itemData
        }
        commit('getPages', data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export default actions
