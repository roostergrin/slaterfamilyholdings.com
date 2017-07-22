<template>
  <div id="app" class='container-fluid'>
    <!-- <img src="./assets/logo.png"> -->
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from './components/loader/loader'
import Navigation from './components/navigation/navigation.vue'
export default {
  components: {
    Loader,
    Navigation
  },
  name: 'app'
}
</script>

<-- styles have been moved to main.sass file -->
<style src='./main.sass' lang='sass'></style>
