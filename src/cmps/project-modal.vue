<template>
  <section class="project-modal">
    <div class="screen" @click="closeModal"></div>
    <div class="modal-content flex column align-center">
        <p class="close-btn" @click="closeModal">X</p>
      <h1 class="title">{{ currProj.name }}</h1>
      <h2 class="subtitle">{{ currProj.title }}</h2>

      <img class="proj-image" :src="getImgUrl(currProj.imgUrl)" alt="" />

      <p>{{ currProj.desc }}</p>

      <a :href="currProj.url">{{ currProj.url }}</a>

    </div>
  </section>
</template>

<script>
import { protfolioService } from "../services/protfolio.service";
export default {
  data() {
    return {
      currProj: null,
    };
  },
  methods: {
    getImgUrl(image) {
      return require(`../assets/img/portfolio/${image}.jpg`);
    },
    closeModal() {
      this.$emit("close-modal");
    },
  },
  created() {
    this.currProj = protfolioService.getCurrProj();
  },
};
</script>

<style>
</style>