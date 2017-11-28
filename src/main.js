import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'
import Camera from './components/Camera.vue'
import Gallery from './components/Gallery.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  routes: [
    { path: '/', component: Camera },
    { path: '/gallery', component: Gallery }
  ],
  mode: 'history',
})

const store = new Vuex.Store({
  state: {
    fileNames: []
  },
  getters: {
    fileNames(state) {
      return state.fileNames
    }
  },
  mutations: {
    addFileName (state, fileName) {
      state.fileNames.push(fileName)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})