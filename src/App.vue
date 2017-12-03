<template>
  <div id="app">
    <headerBar />
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './services/firebase'

import HeaderBar from './components/HeaderBar.vue'

export default {
  components: {
    HeaderBar,
  },
  mounted() {
    const self = this
    auth.onAuthStateChanged(function(user) {
      if (user) {
        self.$store.commit('setUser', user)
      } else {
        self.$store.commit('setUser', null)
      }
    }); 
  }
}

</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#app {
  font-family: $standard-font;
  background-color: $light-color;
  min-height: 100vh;
}

</style>
