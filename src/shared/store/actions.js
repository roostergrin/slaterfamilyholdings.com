import axios from 'axios'
import api from 'api'
import {
  GET_PAGES,
  GET_BLOG,
  GET_CATEGORIES,
  GET_TYPES,
  GET_FILTER,
  GET_APP,
  VIEW_NAV,
  VIEW_BODY,
  VIEW_SHOWMODAL,
  VIEW_MODALCONTENT
} from './mutation-types'

const actions = {
  GET_PAGES ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/pages?per_page=100`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        commit(GET_PAGES, data)
      } catch (e) {
        console.log('PAGES API: ' + e)
      }
    })()
  },
  GET_APP ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/app`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        commit(GET_APP, data)
      } catch (e) { console.log('APP API: ' + e) }
    })()
  },
  GET_BLOG ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/posts?per_page=100&_embed`)
        const data = response.data.reduce(
          (allData, data) => ({ ...allData, [data.slug]: data }),
          {}
        )
        commit(GET_FILTER, response)
        commit(GET_BLOG, data)
      } catch (e) {
        console.log(e)
      }
    })()
  },
  GET_CATEGORIES ({ commit }) {
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/categories?per_page=100`)
        const shortenObjects = response.data.map((x) => {
          delete x._links
          delete x.meta
          delete x.acf
          delete x.link
          delete x.count
          delete x.description
          delete x.taxonomy
          return x
        })
        const location = shortenObjects.filter(item => item.slug === 'location').reduce(
          (arr, curr) => ({ ...arr, [curr.slug]: curr }),
          {}
        )
        .map(
          state => Object.assign({ children: [...(shortenObjects.filter(child => child.parent === state.id))] }, state)
        )
        console.log(location)
        const types = shortenObjects.filter(item => item.slug === 'type')
        .map(
          parent => Object.assign({ children: [...(shortenObjects.filter(child => child.parent === parent.id))] }, parent)
        )
        commit(GET_CATEGORIES, location)
        commit(GET_TYPES, types)
      } catch (e) {
        console.log(e)
      }
    })()
  },
  VIEW_NAV ({ commit }, data) {
    commit(VIEW_NAV, data)
  },
  VIEW_BODY ({ commit }, data) {
    commit(VIEW_BODY, data)
  },
  VIEW_SHOWMODAL ({ commit }, data) {
    commit(VIEW_SHOWMODAL, data)
  },
  VIEW_MODALCONTENT ({ commit }, data) {
    commit(VIEW_MODALCONTENT, data)
  }
}

export default actions
