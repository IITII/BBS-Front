<template>
  <div id="app1">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <keep-alive>
      <b-b-s-nav-bar/>
    </keep-alive>
    <keep-alive>
      <BbsFooter/>
    </keep-alive>
    <!--    <login></login>-->
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import BBSNavBar from './components/header/NavBar'
  import BbsFooter from './components/footer/footer'
  // import login from './views/login/login'

  export default {
    name: 'App',
    components: {
      BBSNavBar,
      //HelloWorld,
      // NavBar,
      BbsFooter
      //login
    }
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
