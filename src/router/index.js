/* eslint-disable */

import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ListItems from '@/components/ListItems'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Press from '@/components/Press'
import newItem from '@/components/newItem'
import Admin from '@/components/Admin'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: 'ListItems',
      component: ListItems,
    },
    {
      path: '/About',
      component: About,
    },
    {
      path: '/Contact',
      component: Contact,
    },
    {
      path: '/Press',
      component: Press,
    },
    {
      path: '/newItem',
      component: newItem,
    },
    {
      path: '/admin',
      component: Admin,
    },
  ],
});
