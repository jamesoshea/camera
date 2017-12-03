import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fileNames: [],
    user: null,
  },
  getters: {
    id(state) {
      if (state.user) return state.user.uid
      return null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    logout() {
      state.user = null
    }
  }
})

export default store;