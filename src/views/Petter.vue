<template>
  <div>
    <h1 class="is-size-3">Petter</h1>
    <a href="https://github.com/chiips/snippets" target="_blank">Github</a>
    <br />
    <br />
    <div class="columns">
      <div class="column is-half is-offset-one-quarter has-text-left">
        <p>
          <b>Description:</b>Petter is social media for your pets. Sign up your pet, set their best photo, and share their musings with the world.
        </p>
        <br />
        <p>
          <b>Back-end:</b>RESTful JSON API written in
          <b>Go</b>.
        </p>
        <p>
          <b>Front-end:</b>Single-Page Application created with
          <b>Vue.js</b> and
          <b>Vuex</b>.
        </p>
        <p>
          <b>Data:</b>Resource storage in
          <b>PostgreSQL</b> and session storage in
          <b>Redis</b>.
        </p>
        <p>
          <b>Deployment:</b>Deployed with
          <b>Nginx</b> on
          <b>Ubuntu</b> server on
          <b>DigitalOcean</b>.
        </p>
        <br />
        <p>
          <b>Note:</b><b> Deployment is currently paused.</b> The Github link directs to a web snippets repository highlighting the structure of the application and key code examples.
        </p>
        <br />
      </div>
    </div>
    <carousel
      perPage="1"
      navigationEnabled="true"
      navigationClickTargetSize="1"
      paginationActiveColor="#8A4D76"
      paginationColor="#FA7C91"
    >
      <slide>
        <img src="../assets/petter/home.png" />
      </slide>
      <slide>
        <img src="../assets/petter/search.png" />
      </slide>
      <slide>
        <img src="../assets/petter/submission.png" />
      </slide>
      <slide>
        <img src="../assets/petter/profile.png" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'petter',
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped>
</style>
