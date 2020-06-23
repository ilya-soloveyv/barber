const state = () => ({
  item: {},
  list: [],
})

const getters = {}

const mutations = {
  SET_LIST(state, clients) {
    state.list = clients
  },
}

const actions = {
  async GET_LIST({ state, commit }, params) {
    const clients = await this.$axios.$post('/api/client/get')
    commit('SET_LIST', clients)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
