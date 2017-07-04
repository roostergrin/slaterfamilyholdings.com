import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import OurPractice from '@/pages/our-practice/our-practice'
import PageNotFound from '@/pages/404/404'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/our-practice',
      name: 'our-practice',
      component: OurPractice
    },
    {
      path: '/*',
      name: 'page-not-found',
      component: PageNotFound
    }
  ]
})
