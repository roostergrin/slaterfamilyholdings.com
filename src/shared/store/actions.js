import axios from 'axios'
import api from 'api'
import {
  GET_PAGES,
  GET_BLOG,
  GET_CATEGORIES,
  GET_FILTER,
  GET_APP,
  ACTIVE_CATS,
  ACTIVE_PROPS,
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
        commit(GET_FILTER, response.data)
        commit(GET_BLOG, data)
      } catch (e) {
        console.log(e)
      }
    })()
  },
  GET_CATEGORIES ({ commit }) {
    // gets possible post categories for filters
    (async () => {
      try {
        const response = await axios.get(`${api}/wp/v2/categories?per_page=100`)
        let shortenObjects = response.data.map((category) => {
          delete category._links
          delete category.meta
          delete category.acf
          delete category.link
          delete category.count
          delete category.description
          delete category.taxonomy
          return category
        })
        const data = shortenObjects.map((category) => {
          category.children = shortenObjects.filter(child => child.parent === category.id)
          return category
        }).filter(category => category.parent === 0)
        commit(GET_CATEGORIES, data)
      } catch (e) {
        console.log(e)
      }
    })()
  },
  ACTIVE_CATS ({ commit }, data) {
    commit(ACTIVE_CATS, data)
  },
  ACTIVE_PROPS ({ commit }, data) {
    commit(ACTIVE_PROPS, data)
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
