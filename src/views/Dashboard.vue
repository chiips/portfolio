<template>
  <div>
    <h1 class="is-size-3">Drone Dashboard</h1>
    <a href="http://35.196.136.59:8080/" target="_blank">Website</a> |
    <a href="https://github.com/chiips/drones-dashboard" target="_blank">Github</a>
    <br>
    <br>
    <div class="columns">
    <div class="column is-half is-offset-one-quarter has-text-left">
      <p><b>Description: </b>The Drone Dashboard is a live dashboard for tracking the activity of drones. Sample drones are created on start, and visitors can add new drones, specifying their starting coordinates, which will then begin to travel on their own. A map presents the location of the drones, and a table presents each drone's details: ID, latitude, longitude, speed, and stationary status. The rows of stationary drones will be highlighted red.</p>
      <br>
      <p><b>Back-end: </b>RESTful JSON API written in <b>Go</b> using <b>Websockets</b>.</p>
      <p><b>Front-end: </b><b>HTML5</b>, the <b>Bootstrap CSS Framework</b>, <b>Vanilla Javascript</b>, and the <b>Google Maps Javascript API</b>.</p>
      <p><b>Data: </b>Resource storage using in-memory map.</p>
      <p><b>Deployment: </b>Deployed with <b>Docker</b> and <b>Kubernetes</b> on <b>Google Cloud Platform</b>.</p>
      <!-- <br>
      <p><b>Note: </b> The Github link directs to a web snippets repository highlighting the structure of the application and key code examples.</p> -->
      <br>
    </div>
    </div>

    <a href="http://35.196.136.59:8080/" target="_blank"><img src="../assets/dashboard.png"/></a>

  </div>
</template>

<style scoped>

</style>
