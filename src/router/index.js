import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VuexDemo from '../views/VuexDemo.vue'
import LifeCycle from '../views/LifeCycle.vue'
import ComponentDemo from '../views/ComponentDemo.vue'
import APIDemo from '../views/APIDemo.vue'
import ValidactionDemo from '../views/ValidactionDemo.vue'
import TableDemo from '../views/TableDemo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: { pageName: '首頁' }
  },
  {
    path: '/vuexDemo',
    name: 'VuexDemo',
    component: VuexDemo,
    props: { pageName: 'Vuex Demo' }
  },
  {
    path: '/lifeCycle',
    name: 'LifeCycle',
    component: LifeCycle,
    props: { pageName: 'LifeCycle Demo' }
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
    props: { pageName: 'Validaction Demo' }
  },
  {
    path: '/tableDemo',
    name: 'TableDemo',
    component: TableDemo,
    props: { pageName: 'Table Demo' }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
