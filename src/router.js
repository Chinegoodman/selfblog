import Vue from 'vue'
import Router from 'vue-router'
import home_test from './views/Home_test.vue'
import Home from './views/Home.vue'
// 添加主页的子级路由
import homechildren from './routernews/index'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/test',
      name: 'home_test',
      component: home_test
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    {
      path: '/home',
      // name:'home',
      component: Home,
      children:homechildren
    },
  ]
})
