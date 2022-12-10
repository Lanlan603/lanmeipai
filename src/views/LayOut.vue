<!--  -->
<template>
  <div>
    <!-- 公共导航 -->
    <MyMenu/>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import MyMenu from '@/components/MyMenu'
export default {
  data () {
    return {
    }
  },
  components: {
    MyMenu
  }
}
</script>

<style  scoped>

</style>
