<template>
  <section class="main-hero-container">
    <div class="main-hero flex center column" :style="mainHero">
      <h2>I'm Dor Shaul</h2>
      <h1>Full stack / Frontend Developer</h1>
      <a href="#specialities" v-smooth-scroll>
        <font-awesome-icon icon="arrow-down" />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mainHero: {
        backgroundImage: `url(${require("@/assets/img/code.jpg")})`,
      },
    };
  },
};
</script>

<style>
</style>