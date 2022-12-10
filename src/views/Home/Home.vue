<template>
  <div class="home">
    <!-- 轮播图 -->
    <Banner :banner="banner" />
    <!-- 蓝莓酱 -->
    <Lanmei :list="list"/>
    <!-- 分页器 -->
    <MyPagination 
    :total="total" 
    :pageSize="pageSize" 
    @getPage="getPage" />
    <!-- 返回顶部 -->
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import Banner from './Banner'
import Lanmei from './Lanmei'
import MyPagination from '@/components/MyPagination'
export default {
  name: 'HomeView',
  components: {
    Banner,
    Lanmei,
    MyPagination
  },
  data() {
    return {
      banner: [],
      list: [],
      total: null,
      pageSize: null,
    }
  },
  created() {
    // 轮播图数据
    this.$api.getBanner()
    .then(res => {
      let banner = res.data.banner
      for (let i = 0; i < banner.length; i++) {
        banner[i].img = banner[i].img.replace('http://www.wwtliu.com/sxtstu', 'http://iwenwiki.com/api')
      }
      this.banner = banner
    })
    // 蓝莓酱数据
    this.getHttp(1)
  },
  methods: {
    // 获取分页页数
    getPage(num) {
      // 请求对应码数的接口数据
      this.getHttp(num)
    },
    // 请求蓝莓酱数据方法
    getHttp(page) {
      this.$api.getLanmei({
      blueBerryjam_id: page
    })
    .then(res => {
      let arr = res.data.blueBerryJam
      this.total = res.data.maxPage
      this.pageSize = 1
      arr.forEach(element => {
        element.img = element.img.replace('http://iwen.wiki/sxtstu','http://iwenwiki.com/api')
      })
      this.list = arr
    })
    },
  }
}
</script>
