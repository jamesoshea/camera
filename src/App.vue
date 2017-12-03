<template>
  <div id="app">
    <headerBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import uuid from 'uuid/v1'

export default {
  components: {
    HeaderBar,
  },
  mounted() {
    if (localStorage.getItem('uuid') == null) {
      const newUUID = uuid()
      localStorage.setItem('uuid', newUUID)
      this.$store.commit('setUUID', newUUID)
    } else {
      this.$store.commit('setUUID', localStorage.getItem('uuid'))
    }
  }
}

</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#app {
  font-family: $standard-font;
}

</style>
