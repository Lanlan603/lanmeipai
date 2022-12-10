<!--  -->
<template>
  <div class="nav">
    <!-- <router-link to="/">首页</router-link>
    <router-link to="/">新闻</router-link>
    <router-link to="/about">我的</router-link> -->
    <!-- element ui库 导航 -->
    <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#545c64"
      text-color="#fff" active-text-color="#ffd04b" router>
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/news">新闻</el-menu-item>
      <el-menu-item index="/about">我的</el-menu-item>
      <el-menu-item index="/travel">旅游</el-menu-item>
      <!-- 右侧按钮 -->
      <div class="nav-right">
        <el-button 
        type="info" 
        size="small" 
        v-if="!userinfo.username"
        @click="toLogin">登录</el-button>
        <template v-else>
          <span>欢迎, {{userinfo.username}}</span>
          <i 
          class="el-icon-switch-button"
          @click="edixt"></i>
        </template>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      activeIndex: '/',
    }
  },
  computed: {
    ...mapState('LoginModule',['userinfo']),
  },
  methods: {
    ...mapMutations('LoginModule',['clearUser']),
    toLogin() {
      this.$router.push('/login')
    },
    edixt() {
      this.clearUser()
      localStorage.removeItem('userinfo')
      if (this.$route.path!== "/") {
        this.$router.push("/");
      }
    }
  }
}
</script>

<style  scoped lang="less">
.nav {
  background-color: #545c64;
}

.el-menu-demo {
  width: 1200px;
  margin: 0 auto;
}

.el-menu.el-menu--horizontal {
  border-bottom: 0;
}

.nav-right {
  float: right;
  line-height: 60px;
  color: white;
  span {
    padding-right: 15px;
  }
  i {
    font-size: 15px;
    vertical-align:auto;
    cursor: pointer;
  }
}
</style>
