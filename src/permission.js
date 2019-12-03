import router from './router'

import { getToken } from './utils/cookie'
import store from './store'
const whiteList = ['/login', '/about']

router.beforeEach((to, from, next) => {
  if (getToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      // get user info
      const userInfo = store.getters.userInfo && store.getters.userInfo > 0
      if (userInfo) {
        next()
      } else {
        store.dispatch('getUserInfo')
        next()
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})
