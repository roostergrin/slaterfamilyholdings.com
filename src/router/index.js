import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import OurPractice from '@/pages/our-practice/our-practice'
import PageNotFound from '@/pages/404/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      description: 'Home page description',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: OurPractice
    },
    {
      path: '/*',
      name: 'page-not-found',
      component: PageNotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
