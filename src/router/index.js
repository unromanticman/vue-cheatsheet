import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import VuexDemo from '../views/VuexDemo.vue'
import LifeCycle from '../views/LifeCycle.vue'
import ComponentDemo from '../views/ComponentDemo.vue'
import APIDemo from '../views/APIDemo.vue'
import ValidactionDemo from '../views/ValidactionDemo.vue'

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
  },
  {
    path: '/lifeCycle',
    name: 'LifeCycle',
    component: LifeCycle,
    props: { pageName: 'LifeCycle' }
  },
  {
    path: '/componentDemo',
    name: 'ComponentDemo',
    component: ComponentDemo,
    props: { pageName: 'ComponentDemo' }
  },
  {
    path: '/apiDemo',
    name: 'APIDemo',
    component: APIDemo,
    props: { pageName: 'API Demo' }
  },
  {
    path: '/validactionDemo',
    name: 'APIDemo',
    component: ValidactionDemo,
    props: { pageName: 'ValidactionDemo' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
