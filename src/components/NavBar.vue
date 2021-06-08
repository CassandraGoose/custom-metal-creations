<template lang="html">
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <a class="navbar-item">
        <router-link to="/"><img src="../assets/navbarlogo.png" alt="LOGO HERE"></router-link>
      </a>

      <a class="navbar-item">
        <router-link to="/About">ABOUT</router-link>
      </a>

      <a class="navbar-item">
        <router-link to="/Contact">CONTACT</router-link>
      </a>

      <a class="navbar-item">
        <router-link to="/Press">IN THE PRESS</router-link>
      </a>

    </div>
  </nav>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Navbar',
};
</script>

<style lang="css">
</style>
