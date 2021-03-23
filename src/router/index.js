import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import VuexDemo from '../views/VuexDemo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: { pageName: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    props: { pageName: 'About' }
  },
  {
    path: '/vuexDemo',
    name: 'VuexDemo',
    component: VuexDemo,
    props: { pageName: 'VuexDemo' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
