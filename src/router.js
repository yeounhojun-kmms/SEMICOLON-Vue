import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Page from './views/page'
import Page1 from './views/page1'
import Page2 from './views/page2'
import Page3 from './views/page3'
import Page4 from './views/page4'
import Page5 from './views/page5'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Page',
      path: '/brand',
      component: Page,
    },
    {
      name: 'Page1',
      path: '/promise_notopen',
      component: Page1,
    },
    {
      name: 'Page2',
      path: '/component',
      component: Page2,
    },
    {
      name: 'Page3',
      path: '/promise',
      component: Page3,
    },
    {
      name: 'Page4',
      path: '/',
      component: Page4,
    },
    {
      name: 'Page5',
      path: '/cand',
      component: Page5,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
