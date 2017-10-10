const mutations = {
  getPages (state, data) {
    state.pages = data
    state.loading = false
  }
}

export default mutations
