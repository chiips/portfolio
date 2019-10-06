<template>
  <div>
    <h1>Portfolio</h1>
    <a href="#">Website</a>
    <br>
    <p>Portfolio is more!</p>
    <br>

    <!-- <iframe :src="url" height="1000rem" width="1000rem"></iframe> -->
    <iframe :src="url" onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}(this));' style="height:200px;width:80%;border:none;overflow:hidden;"></iframe>

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
