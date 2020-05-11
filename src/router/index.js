import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import C2c from '../views/C2c.vue'
import Heyue from '../views/Heyue.vue'
import Bibi from '../views/Bibi.vue'
import Zhanghu from '../views/Zhanghu.vue'







Vue.use(VueRouter)

  const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/c2c',
    name: 'c2c',
    component: C2c
  },
  {
    path: '/heyue',
    name: 'heyue',
    component: Heyue
  },
  {
    path: '/bibi',
    name: 'bibi',
    component: Bibi
  },
  {
    path: '/zhanghu',
    name: 'zhanghu',
    component: Zhanghu
  },

]

const router = new VueRouter({
  routes
})

export default router
