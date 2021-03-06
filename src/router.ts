import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/petter',
      name: 'petter',
      component: () => import('./views/Petter.vue')
    },
    {
      path: '/spellcaster',
      name: 'spellcaster',

      component: () => import('./views/SpellCaster.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',

      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/countdown',
      name: 'countdown',

      component: () => import('./views/Countdown.vue')
    },
    {
      path: '/password-generator',
      name: 'password-generator',

      component: () => import('./views/PasswordGenerator.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',

      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '*', // should go at end
      name: 'catch-all',
      component: () => import('./views/NotFound.vue'),
      meta: { public: true }
    }
  ]
})
