import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouters from './modules/index'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About')
    },
    ...configRouters
  ]
})
