<template>
  <div>
    <h1>Portfolio</h1>
    <a href="#">Website</a> |
    <router-link :to="{ name: 'portfolio' }">Read More</router-link>
    <br>

    <iframe :src="url" width="500" height="600"></iframe>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      url: '/'
    }
  }
}
</script>

<style scoped>

</style>
