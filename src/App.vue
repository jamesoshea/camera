<template>
  <div id="app">
    <headerBar />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'

export default {
  components: {
    HeaderBar,
  }
}

</script>

<style lang="scss" scoped>

@import './assets/variables.scss';

#app {
  font-family: $standard-font;
}

</style>
