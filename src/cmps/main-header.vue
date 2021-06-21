<template>
  <header class="main-header flex space-between align-center">
    <h1 class="logo">Dor Shaul</h1>
    <img class="side-menu-btn" @click="toggleSideMenu()" src="@/assets/img/icons/menu.png" alt="">
    <!-- <button @click="toggleSideMenu()">open</button> -->
    <div
      class="screen"
      @click="toggleSideMenu()"
      :class="{ menuOpen: isSideMenuOpen }"
    ></div>
    <nav class="flex" :class="{ menuOpen: isSideMenuOpen }">
      <a href="#home" v-smooth-scroll>Home</a>
      <a href="#specialities" v-smooth-scroll>Specialities</a>
      <a href="#protfolio" v-smooth-scroll>Protfolio</a>
      <a href="#about-me" v-smooth-scroll>About Me</a>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSideMenuOpen: false,
    };
  },
  methods: {
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
  },
};
</script>

<style>
</style>