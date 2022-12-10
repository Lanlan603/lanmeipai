import router from './index'
import store from '@/store'
// 路由拦截
router.beforeEach((to, from, next) => {
  // 1. 判断当前路由是否需要登录
  if(to.meta.islogin) {
    // 2. 判断用户是否登录
    let token = store.state.LoginModule.userinfo.token
    if(token) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 不需要登录
    next()
  }
})