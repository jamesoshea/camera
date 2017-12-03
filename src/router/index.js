import Vue from 'vue'
import VueRouter from 'vue-router'

import Camera from './../components/Camera'
import Gallery from './../components/Gallery'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Camera },
    { path: '/gallery', component: Gallery }
  ],
  mode: 'history',
})

export default router