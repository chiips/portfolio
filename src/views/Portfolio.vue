<template>
  <div>
    <h1 class="is-size-3">Portfolio</h1>
   <br>
    <div class="columns">
    <div class="column is-half is-offset-one-quarter has-text-left">
      <p><b>Description: </b>This is a simple portfolio site to highlight software projects.</p>
      <br>
      <p><b>Front-end: </b>Single-Page Application created with <b>Vue.js</b> and <b>TypeScript</b>.</p>
      <p><b>Deployment: </b>Deployed on <b>Netlify</b>.</p>
      <br>
      <p><b>Note: </b>How many layers deep can you go in the iframe below?</p>
      <br>
    </div>
    </div>

    <iframe :src="url" onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:80%;border:none;overflow:hidden;"></iframe>

  </div>
</template>

<script lang="ts">
export default {
  data: function () {
    let url: string = '/'
    return {
      url
    }
  }
}
</script>

<style scoped>

</style>
