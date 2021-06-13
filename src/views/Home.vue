<template>
  <section id="home" class="home">
    <main-hero />
    <specialities />
    <protfolio />
    <main-footer />
  </section>
</template>

<script>
import MainFooter from '../cmps/main-footer.vue';
import mainHero from "../cmps/main-hero";
import Protfolio from "../cmps/protfolio.vue";
import specialities from "../cmps/specialities";

export default {
  name: "Home",
  components: {
    mainHero,
    specialities,
    Protfolio,  
    MainFooter},
  created() {
    // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // handleScroll (event) {
    //   // console.log('event:', event)
    //   // Any code to be executed when the window is scrolled
    // }
  },
};
</script>
