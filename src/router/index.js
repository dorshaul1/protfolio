import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import mainHero from '../cmps/main-hero'
import specialities from '../cmps/specialities'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'mainHero',
        component: mainHero
      },
      {
        path: '/specialities',
        name: 'specialities',
        component: specialities
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
