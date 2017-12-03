import Vue from 'vue'
import VueRouter from 'vue-router'

import Camera from './../components/camera/Camera'
import Gallery from './../components/Gallery'
import Login from './../components/Login'
import Register from './../components/Register'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Camera },
    { path: '/gallery', component: Gallery },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ],
  mode: 'history',
})

export default router