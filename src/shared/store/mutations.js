import {
  GET_PAGES,
  GET_APP,
  ACTIVE_CATS,
  ACTIVE_PROPS,
  GET_CATEGORIES,
  GET_BLOG,
  GET_FILTER,
  VIEW_NAV,
  VIEW_BODY,
  VIEW_SHOWMODAL,
  VIEW_MODALCONTENT } from './mutation-types.js'

const mutations = {
  [GET_PAGES] (state, data) {
    state.pages = data
    state.loading = false
  },
  [GET_BLOG] (state, data) {
    state.blog = data
    state.blog.current_page = {}
    state.blog.current_page.number = 1
    state.loading = false
  },
  [GET_CATEGORIES] (state, data) {
    state.categories = data
  },
  [GET_FILTER] (state, data) {
    state.filter = data
  },
  [GET_APP] (state, data) {
    state.app = data
  },
  [ACTIVE_CATS] (state, data) {
    state.activeCats = data
  },
  [ACTIVE_PROPS] (state, data) {
    state.activeProps = data
  },
  [VIEW_NAV] (state, data) {
    state.nav = data
  },
  [VIEW_BODY] (state, data) {
    state.body = data
  },
  [VIEW_SHOWMODAL] (state, data) {
    state.showModal = data
  },
  [VIEW_MODALCONTENT] (state, data) {
    state.modalContent = data
  }
}

export default mutations
