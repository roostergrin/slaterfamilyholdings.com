import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/home'
import About from '@/pages/about/about'
import PrivateEquity from '@/pages/private-equity/private-equity'
import FinancialInvestments from '@/pages/financial-investments/financial-investments'
// import GreenInitiative from '@/pages/green-initiative/green-initiative'
import Contact from '@/pages/contact/contact'
import Properties from '@/pages/properties/properties'
// import StartUps from '@/pages/startups/startups'
// import AssetMoneyMaker from '@/pages/asset-money-maker/asset-money-maker'
// import Partnerships from '@/pages/partnerships/partnerships'
import Property from '@/pages/property/property'
import PrivacyPolicy from '@/pages/privacy-policy/privacy-policy'
import TermsOfUse from '@/pages/terms-of-use/terms-of-use'
import ThankYou from '@/pages/thank-you/thank-you'
import PageNotFound from '@/pages/404/404'
import SportsEntertainment from '@/pages/sports-entertainment/sports-entertainment'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      menu: 'bottom'
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      menu: 'bottom',
      mobile: true
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties,
      menu: 'bottom',
      mobile: true
    },
    {
      path: '/private-equity',
      name: 'private equity',
      component: PrivateEquity,
      menu: 'bottom',
      mobile: true
    },
    {
      path: '/financial-investments',
      name: 'financial investments',
      component: FinancialInvestments,
      menu: 'bottom',
      mobile: true
    },
    {
      path: '/sports-entertainment',
      name: 'sports & entertainment',
      component: SportsEntertainment,
      menu: 'bottom',
      mobile: true
    },
    // {
    //   path: '/startups',
    //   name: 'startups',
    //   component: StartUps,
    //   menu: 'bottom',
    //   mobile: true
    // },
    // {
    //   path: '/asset-money-maker',
    //   name: 'asset money maker',
    //   component: AssetMoneyMaker,
    //   menu: 'bottom',
    //   mobile: true
    // },
    // {
    //   path: '/partnerships',
    //   name: 'partnerships',
    //   component: Partnerships,
    //   menu: 'bottom',
    //   mobile: true
    // },
    // {
    //   path: '/green-initiative',
    //   name: 'green initiative',
    //   component: GreenInitiative,
    //   menu: 'top',
    //   mobile: true
    // },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      menu: 'bottom',
      mobile: true
    },
    {
      path: '/privacy-policy',
      name: 'privacy policy',
      component: PrivacyPolicy
    },
    {
      path: '/terms-of-use',
      name: 'terms of use',
      component: TermsOfUse
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
