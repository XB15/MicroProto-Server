import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/status',
    name: 'status',
    component: () => import('../views/StatusView.vue')
  },
  {
    path: '/fan',
    name: 'fan',
    component: () => import('../views/FanView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/SettingsView.vue')
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('../views/UpdateView.vue')
  },
  {
    path: '/ears',
    name: 'ears',
    component: () => import('../views/EarsView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
