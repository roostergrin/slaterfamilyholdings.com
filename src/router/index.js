import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import About from '@/pages/about/about'
import GreenInitiative from '@/pages/green-initiative/green-initiative'
import Contact from '@/pages/contact/contact'
import Properties from '@/pages/properties/properties'
import StartUps from '@/pages/startups/startups'
import AssetMoneyMaker from '@/pages/asset-money-maker/asset-money-maker'
import Partnerships from '@/pages/partnerships/partnerships'
import Property from '@/pages/property/property'
import ThankYou from '@/pages/thank-you/thank-you'
import PageNotFound from '@/pages/404/404'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      menu: 'top'
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      menu: 'top'
    },
    {
      path: '/green-initiative',
      name: 'green initiative',
      component: GreenInitiative,
      menu: 'top'
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      menu: 'top'
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties,
      menu: 'bottom'
    },
    {
      path: '/startups',
      name: 'startups',
      component: StartUps,
      menu: 'bottom'
    },
    {
      path: '/asset-money-maker',
      name: 'asset money maker',
      component: AssetMoneyMaker,
      menu: 'bottom'
    },
    {
      path: '/partnerships',
      name: 'partnerships',
      component: Partnerships,
      menu: 'bottom'
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou,
      menu: 'hidden'
    },
    {
      path: '/:postID',
      name: 'property',
      component: Property,
      menu: 'hidden'
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
