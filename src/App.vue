<template>
  <div id="app" class="has-navbar-fixed-top has-navbar-fixed-bottom">
    <NavBar></NavBar>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
// import 'bulma/css/bulma.css'

export default {
  name: 'App',
  components: {
    HomePage,
    NavBar,
    Footer,
  },
};
</script>

<style lang="css">
    @import '../node_modules/bulma/css/bulma.css';
    @import './assets/custom.css';
    @import url('https://fonts.googleapis.com/css?family=Inika');
</style>
