import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Product from '@/components/Product'
import Plan from '@/components/Plan'
import About from '@/components/About'
import Footer2 from '@/components/Footer2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: {
        default: Home,
        header: Header,
        banner: Banner,
        content: Content,
        footer: Footer
      }
    },
    // {
    //   path: '/header',
    //   name: 'Header',
    //   component: Header
    // },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/plan',
      name: 'Plan',
      component: Plan
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/footer2',
      name: 'Footer2',
      component: Footer2
    }
  ]
})
