import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugin/element'
import './assets/css/reset.css'
import api from './API'
import './router/permission.js'
Vue.prototype.$api = api
// 获取本地存储
let userinfo = localStorage.getItem('userinfo')
if(userinfo) {
  userinfo = JSON.parse(userinfo)
  store.commit('LoginModule/setUser',userinfo)
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
