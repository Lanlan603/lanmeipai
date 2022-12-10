import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/views/LayOut'
import Home from '@/views/Home/Home'
import Login from '@/views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: LayOut,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: () => import( '../views/About/About'),
        meta: {islogin: true}
      },
      {
        path: '/news',
        name: 'News',
        component: () => import( '../views/News/News'),
        meta: {islogin: true}
      },
      {
        path: '/travel',
        name: 'Travel',
        component: () => import( '../views/Travel/Travel'),
        meta: {islogin: true}
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
