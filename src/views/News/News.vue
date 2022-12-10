<!--  -->
<template>
  <div class="container">
    <h2 class="th">新闻界面</h2>
    <div class="wrapper">
      <div class="left"></div>
      <div class="center">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="要闻" name="1">
            <ul class="list">
              <li v-for="item in yaowenList" :key="item.docid">
                <img :src="item.imgsrc" alt="" />
                <div class="info">
                  <div class="title">{{ item.title }}</div>
                  <div class="desc">
                    来源：{{ item.source }} <span>时间：{{ item.ptime }}</span>
                  </div>
                  <div class="read">阅读：{{ item.commentCount }}</div>
                </div>
              </li>
            </ul>
            <!-- 显示分页器 -->
            <MyPagination :total="total" :pageSize="pageSize" @getPage="getPage" />
          </el-tab-pane>
          <el-tab-pane label="国内" name="2">
            <ul class="list">
              <li v-for="item in guoneiList" :key="item.docid">
                <img :src="item.imgsrc" alt="" />
                <div class="info">
                  <div class="title">{{ item.title }}</div>
                  <div class="desc">
                    来源：{{ item.source }} <span>时间：{{ item.ptime }}</span>
                  </div>
                  <div class="read">阅读：{{ item.commentCount }}</div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="国际" name="3">
            <ul class="list">
              <li v-for="item in guojiList" :key="item.docid">
                <img :src="item.imgsrc" alt="" />
                <div class="info">
                  <div class="title">{{ item.title }}</div>
                  <div class="desc">
                    来源：{{ item.source }} <span>时间：{{ item.ptime }}</span>
                  </div>
                  <div class="read">阅读：{{ item.commentCount }}</div>
                </div>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { yaowen, guonei, guoji } from '@/API/type'
import MyPagination from '@/components/MyPagination'
export default {
  data() {
    return {
      activeName: '1',
      yaowenList: [],
      guoneiList: [],
      guojiList: [],
      total: 10,
      pageSize: 1,
      count: 1
    }
  },
  components: {
    MyPagination
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    },
    getPage(num) {
      this.$api.getNews(yaowen, num).then(res => {
        this.yaowenList = res
        document.documentElement.scrollTop = 0
      })
    },
    load() {
      console.log('加载更多数据')
    }
  },
  created() {
    // 要闻数据
    this.$api.getNews(yaowen, 1)
      .then((res) => {
        this.yaowenList = res
      })
    // 国内数据
    this.$api.getNews(guonei, 1)
      .then((res) => {
        this.guoneiList = res
      })
    // 国际数据
    this.$api.getNews(guoji, 1)
      .then((res) => {
        this.guojiList = res
      })
  }
}
</script>

<style  scoped lang="less">
.container {
  margin: 20px auto;
  width: 1200px;
}

.th {
  margin-bottom: 20px;
}

.wrapper {
  display: flex;

  .center {
    width: 780px;
  }

  .left {
    width: 200px;
    min-height: 600px;
    background: #f5f5f5;
    margin-right: 10px;
  }

  .right {
    margin-left: 10px;
    width: 200px;
    min-height: 600px;
    background: #f5f5f5;
  }
}

.list {
  li {
    display: flex;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }

  img {
    width: 140px;
    height: 88px;
    margin-right: 10px;
  }

  .info {
    height: 88px;
    position: relative;
    flex: 1;

    .title {
      color: #404040;
      font-size: 20px;
      cursor: pointer;
    }

    .title:hover {
      color: #f34540;
    }

    .desc {
      position: absolute;
      left: 10px;
      bottom: 0;
      color: #888;
      font-size: 12px;

      span {
        margin-left: 30px;
      }
    }

    .read {
      color: #888;
      font-size: 12px;
      position: absolute;
      right: 30px;
      bottom: 0px;
    }
  }
}

/deep/ .el-tabs__header {
  background: #f7f9fa;
  border-top: 1px solid #f04343;
  height: 50px;
  line-height: 50px;

  .el-tabs__active-bar {
    height: 0;
  }

  .el-tabs__item {
    padding: 0;
    height: 50px;
    line-height: 50px;
    display: block;
    float: left;
    width: 65px;
    text-align: center;
    font: normal 16px/50px "Microsoft Yahei";
  }

  .el-tabs__item.is-active {
    background: #f04343;
    font-weight: bold;
    color: #fff;
  }
}
</style>
