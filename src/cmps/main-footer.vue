<template>
  <section id="about-me" class="footer">
    <h1 class="title">About me</h1>
    <h2 class="subtitle">Personal details</h2>
    <!-- <div class="image-me"> -->
    <div class="footer-main-container flex space-between">
      <div class="information flex column align-center">
        <img class="image-me" src="@/assets/img/me.jpeg" alt="" />
        <div class="social-media-container flex">
          <a
            href="https://github.com/dorshaul1"
            class="social-media flex center"
          >
            <img src="@/assets/img/icons/github.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/dorshaul/"
            class="social-media flex center"
          >
            <img src="@/assets/img/icons/linkedin.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="summary flex column center">
        <p>
          Full-Stack Web Developer specializing in advanced frameworks,
          including React, VueJS, Angular, NodeJS and MongoDB.<br />
          Army service at the Israeli Navy Computer Unit – Mamtam as Cyber
          Security Analyst.<br />
          Passionate about technology, striving to be the best, fast learner,
          and a team player.
        </p>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
</style>