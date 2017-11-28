import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Camera from './components/Camera.vue'
import Gallery from './components/Gallery.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Camera },
    { path: '/gallery', component: Gallery }
  ],
  mode: 'history',
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
