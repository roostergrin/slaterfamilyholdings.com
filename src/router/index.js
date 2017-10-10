import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import AboutUs from '@/pages/about-us/about-us'
import Treatments from '@/pages/treatments/treatments'
import PatientInfo from '@/pages/patient-info/patient-info'
import Testimonials from '@/pages/testimonials/testimonials'
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
      component: AboutUs
    },
    {
      path: '/treatments',
      name: 'treatments',
      component: Treatments
    },
    {
      path: '/patient-info',
      name: 'patient-info',
      component: PatientInfo
    },
    {
      path: '/testimonials',
      name: 'testimonials',
      component: Testimonials
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
