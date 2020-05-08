<template>
  <div id="app1">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <nav-bar/>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import NavBar from './components/header/NavBar'

  export default {
    name: 'App',
    components: {
      //HelloWorld,
      NavBar
    }
  }
</script>

<style>
  #app1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
