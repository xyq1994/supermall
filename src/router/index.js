import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
=======
import Home from '../views/Home.vue'
>>>>>>> 1b649f943adc4386bbe393c196ba4f9dda4f5d4b

Vue.use(VueRouter)

  const routes = [
<<<<<<< HEAD
    
  ]
=======
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]
>>>>>>> 1b649f943adc4386bbe393c196ba4f9dda4f5d4b

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
