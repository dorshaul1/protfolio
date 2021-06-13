<template>
  <div id="specialities" class="specialities flex column align-center">
    <h1 class="title">Specialities</h1>
    <h2 class="subtitle">My Technical Skills</h2>
    <div class="skills-container flex wrap justify-center">
      <!-- frontend -->

      <section class="container">
        <h1 class="title">Frontend</h1>
        <h2 class="subtitle">
          Top popular frameworks include state management
        </h2>
        <div class="preview-container flex wrap space-evenly">
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/react.svg"
                alt=""
              />
            </div>
            <h5>React</h5>
          </div>
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img class="logo-image" src="@/assets/img/icons/vue.svg" alt="" />
            </div>
            <h5>Vue</h5>
          </div>
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/angular.svg"
                alt=""
              />
            </div>
            <h5>Angular</h5>
          </div>
        </div>
      </section>

      <!-- backend -->

      <section class="container">
        <h1 class="title">Backend</h1>
        <h2 class="subtitle">
          Express, Node.js, Server-side programming, and databases
        </h2>
        <div class="preview-container flex wrap space-evenly">
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/node.svg"
                alt=""
              />
            </div>
            <h5>Node.js</h5>
          </div>
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/database.svg"
                alt=""
              />
            </div>
            <h5>MongoDB and MySQL</h5>
          </div>
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/server.svg"
                alt=""
              />
            </div>
            <h5>REST API</h5>
          </div>
        </div>
      </section>

      <!-- more skills -->

      <section class="container">
        <h1 class="title">More Skills</h1>
        <h2 class="subtitle">
          modern and responsive design, short and practical code
        </h2>
        <div class="preview-container flex wrap space-evenly">
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/sass.svg"
                alt=""
              />
            </div>
            <h5>Sass</h5>
          </div>
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/mobile.svg"
                alt=""
              />
            </div>
            <h5>Responsive Design</h5>
          </div>
          <div class="skill flex column align-center">
            <div class="skill-logo flex center">
              <img
                class="logo-image"
                src="@/assets/img/icons/code.svg"
                alt=""
              />
            </div>
            <h5>Practical Development</h5>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialities",
};
</script>

<style>
</style>