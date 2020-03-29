import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Members from '../views/Members.vue'
import Events from '../views/Events.vue'
import Join from '../views/Signup.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/members',
    name: 'Members',
    component:Members
  },
  {
    path: '/news',
    name: 'News',
    component:News
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/signup',
    name: 'Join',
    component:Join
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
