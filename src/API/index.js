// 公共的请求方法
import base from './base'
import axios from 'axios'
import store from '@/store'
import {yaowen} from './type'
const api = {
  // 轮播图
  getBanner() {
    return axios.get(base.host + base.bannerUrl)
  },
  // 登录接口
  getLogin(params) {
    return axios.get(base.login, {
      params
    })
  },
  // 蓝莓酱接口
  getLanmei(params) {
    return axios.get(base.host + base.lanmei, {
      params
    })
  },
  
  // getUser
  getUser() {
    // 获取token
    let token = store.state.LoginModule.userinfo.token

    axios.defaults.headers.authorization = token
    return axios.post(base.getUser)
  },

  // 新闻接口
  getNews(type,num) {
   return axios.get(base.news + type + `/${(num - 1) * 10}-10.html`).then(res => {
      let data = JSON.parse(res.data.slice(9, -1))
      return data[type]
    })
  },

  // 穷游接口
  // 搜索
  getSearch(params) {
    return axios.get(base.search, {
      params
    })
  },
  // 今日推荐
  getRecommend() {
    return axios.get(base.recommend)
  }
}


export default api