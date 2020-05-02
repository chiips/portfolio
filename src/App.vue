<template>
  <div id="app">
    <div class="navbar" role="navigation" aria-label="main navigation">

      <div class="navbar-brand">
        <div @click="closeMenu()">
          <router-link to="/" class="navbar-item is-size-4" >Christopher Galano</router-link>
        </div>

        <div role="button" v-bind:class="[navbarBurger, isActive ? 'is-active' : '']" aria-label="menu" aria-expanded="false" data-target="navMenu" @click="toggleMenu()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>

      <div id="navMenu" v-bind:class="[navbarMenu, isActive ? 'is-active' : '']" @click="closeMenu()">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item is-tab">Home</router-link>
          <router-link to="/about" class="navbar-item is-tab">About</router-link>
          <router-link to="/contact" class="navbar-item is-tab">Contact</router-link>
        </div>
      </div>
    </div>

    <div class="view">
      <router-view class="content"/>
    </div>

    <footer class="footer">
      <div class="content has-text-center">
        <p>
          © 2020 Christopher Galano
        </p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      navbarBurger: 'navbar-burger burger',
      navbarMenu: 'navbar-menu',
      isActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    },
    closeMenu () {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  //fix footer 1
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#nav {
  padding: 30px;
}

.content {

  padding: 2rem;

}

//fix footer 2
.view {
    flex: 1;
}

img {
  border: 1px solid #454640;
}

</style>
