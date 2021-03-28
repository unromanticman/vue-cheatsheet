import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VuexDemo from '../views/VuexDemo.vue'
import LifeCycle from '../views/LifeCycle.vue'
import ComponentDemo from '../views/ComponentDemo.vue'
import APIDemo from '../views/APIDemo.vue'
import ValidactionDemo from '../views/ValidactionDemo.vue'
import TableDemo from '../views/TableDemo.vue'
import NotFound from '../views/NotFound.vue'
import RouterDemo from '../views/RouterDemo.vue'
import RouterSubPage1 from '../views/RouterSubPage1.vue'
import RouterSubPage2 from '../views/RouterSubPage2.vue'

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
  {
    path: '/routerDemo',
    name: 'routerDemo',
    component: RouterDemo,
    props: { pageName: 'Router Demo' },
    children: [
      {
        path: 'subPage1',
        name: 'subPage2',
        component: RouterSubPage1
      },
      {
        path: 'subPage2',
        name: 'subPage2',
        component: RouterSubPage2
      },
    ]
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    props: { pageName: 'NotFound' }
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  mode: 'hash', // history與hash差別在重新整理，如果沒實體檔案history重整會掛掉，hash則不會
  base: process.env.BASE_URL,
  routes
})

export default router
