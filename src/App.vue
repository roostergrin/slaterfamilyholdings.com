<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from './components/navigation/navigation'
export default {
  components: {
    Navigation
  },
  name: 'app'
}
</script>

<-- styles have been moved to main.sass file -->
<style src='./main.sass' lang='sass'>

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>
