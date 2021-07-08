<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link to="/custom-directive">Go to custom-directive</router-link>
      <router-link to="/vuex-parent">Go to vuex-parent</router-link>
      <router-link to="/vuex-child">Go to vuex-child</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
