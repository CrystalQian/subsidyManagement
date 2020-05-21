import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/index/Home'
import Subsidylist from '@/components/index/Subsidylist'
import Limit from '@/components/index/Limit'
import Budget from '@/components/index/Budget'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index/Home',
      name: "Home",
      component: Home,
      children: [{
        path: '/index/Subsidylist',
        name: "Subsidylist",
        component: Subsidylist
      },{
        path: '/index/Limit',
        name: "Limit",
        component: Limit
      },{
        path: '/index/Budget',
        name: "Budget",
        component: Budget
      }]
    }

  ]
})
