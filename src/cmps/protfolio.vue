<template>
  <section id="protfolio" class="protfolio">
    <h1 class="title">Protfolio</h1>
    <h2 class="subtitle">Some of my projects</h2>
    <div class="projects-container flex wrap justify-center">
      <div
        class="project flex column space-between"
        @click="this,openModal(project.id)"
        :key="project.id"
        v-for="project in projects"
      >
        <div class="project-screen flex center">
          <img src="@/assets/img/icons/plus.svg" alt="" />
        </div>
        <img :src="getImgUrl(project.imgUrl)" alt="" />
        <h1 class="title">{{ project.name }}</h1>
        <h1 class="subtitle">{{ project.title }}</h1>
      </div>
    </div>
    <project-modal v-if="isModalOpen" @close-modal="isModalOpen = false" />
  </section>
</template>

<script>
import { protfolioService } from "../services/protfolio.service";
import projectModal from "./project-modal.vue";
export default {
  components: { projectModal },
  name: "protfolio",
  data() {
    return {
      projects: null,
      isModalOpen: false,
    };
  },
  created() {
    this.projects = protfolioService.getProjects();
  },
  methods: {
    getImgUrl(image) {
      return require(`../assets/img/portfolio/${image}.jpg`);
    },
    openModal(id) {
      protfolioService.setCurrProj(id);
      this.isModalOpen = true;
    },
  },
};
</script>

<style>
</style>