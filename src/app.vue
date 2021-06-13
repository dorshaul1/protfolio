<template>
  <div id="app">
    <main-header />
    <router-view />
  </div>
</template>

<script>
import mainHeader from "../src/cmps/main-header";

export default {
  components: {
    mainHeader,
  },
};
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
