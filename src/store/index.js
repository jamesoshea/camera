import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fileNames: [],
    uuid: null,
  },
  getters: {
    uuid(state) {
      return state.uuid
    }
  },
  mutations: {
    setUUID(state, uuid) {
      state.uuid = uuid
    }
  }
})

export default store;