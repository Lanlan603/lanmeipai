<!--  -->
<template>
  <div>
    <!-- 搜索区域 -->
    <div class="wrapper">
      <img src="@/assets/images/banner.jpg" width="100%" height="500px" alt="" />
      <div class="search">
        <div class="inp">
          <!-- <input type="text" v-model="inpVal" @keyup="search"/> -->
          <input type="text" v-model="iptval" />
        </div>
        <div class="btn">搜索</div>
        <!-- 定位展示内容搜索区域 -->
        <div class="show-data" v-show="isShow">
          <ul>
            <li>城市</li>
            <li v-for="item in list" :key="item.cn_name">
              {{ item.cn_name }} {{ item.en_name }}
              <span class="right" v-show="item.count">{{ item.count }}家酒店</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="container">
        <img
          src="@/assets/images/left.jpg"
          width="740"
          height="110"
          alt=""
        />
        <img
          src="@/assets/images/right.jpg"
          width="400"
          height="110"
          alt=""
        />
      </div>
    </div>
    <!-- 今日推荐 -->
    <div class="section">
      <div class="title">今日推荐</div>
      <ul class="content">
        <li v-for="(item, index) in recommendList" :key="index">
          <div class="img">
            <a href="##">
              <img :class="{animate: item.type == 'bbs'}" :src="item.data.pic" alt="" />
            </a>
          </div>
          <div class="info">
            <a href="##">
              <div class="desc">{{item.data.subject}}</div>
              <div class="bottom">
                <strong>{{item.data.username}}</strong>
                <span v-if="item.data.views">{{item.data.views}}预览过</span>
                <span v-else-if="item.data.tag">{{item.data.tag}}</span>
                <span v-else v-html="item.data.price"></span>
                <span></span>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      iptval: '',
      list: [],
      recommendList: []
    }
  },
  created() {
    this.$api.getRecommend()
    .then(res => {
      this.recommendList = res.data.data
    })
  },
  // 监听属性
  watch: {
    iptval(val) {
      if (!val) {
        this.list = [],
          this.isShow = false
        return;
      }
      this.$api.getSearch({
        keyword: val
      })
        .then(res => {
          console.log(res)
          // 没有数据的情况
          if (res.data.data.list.length === 0) {
            this.list = [],
              this.isShow = false
            return;
          } else {
            // 有数据
            this.list = res.data.data.list
            this.isShow = true
          }
        })
    }
  }
}
</script>

<style  scoped lang="less">
.wrapper {
  width: 100%;
  height: 500px;
  position: relative;

  .search {
    width: 600px;
    padding-left: 20px;
    position: absolute;
    top: 220px;
    left: 50%;
    margin-left: -310px;
    border-radius: 6px;
    height: 70px;
    background-image: linear-gradient(90deg,
        rgba(83, 144, 250, 0.8),
        rgba(95, 126, 248, 0.8));
    display: flex;

    .inp {
      width: 480px;
      background: #fff;
      height: 40px;
      margin-top: 15px;
      border-radius: 4px;
      overflow: hidden;

      input {
        width: 480px;
        height: 40px;
        border: none;
        outline: none;
        padding-left: 10px;
      }
    }

    .btn {
      width: 100px;
      height: 40px;
      background: aquamarine;
      margin-top: 15px;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      text-align: center;
      line-height: 40px;
      margin-left: 10px;
      cursor: pointer;
    }

    .show-data {
      width: 480px;
      min-height: 100px;
      border-radius: 4px;
      background: #fff;
      position: absolute;
      top: 60px;
      left: 20px;

      li {
        padding: 10px;
        color: #333;
      }

      li:hover {
        background: #eee;
      }

      span {
        color: #999;
        font-size: 14px;
      }

      .right {
        float: right;
      }
    }
  }
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.bg {
  background: #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  img {
    margin-left: 20px;
  }
}
.section {
  width: 1160px;
  margin: 20px auto;
  .title {
    position: relative;
    height: 74px;
    color: #636363;
    text-align: center;
    font: 36px/74px Hiragino Sans GB, Microsoft YaHei, SimHei, SimSun,
      sans-serif;
  }
}
.content {
  overflow: hidden;
  margin-right: -20px;
  li {
    width: 275px;
    height: 300px;
    float: left;
    box-sizing: border-box;
    border: 1px solid #eee;
    margin-bottom: 20px;
    margin-right: 20px;
  }
  li:hover {
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
  }
  .img {
    width: 275px;
    height: 185px;
    overflow: hidden;
    img {
      width: 275px;
      height: 185px;
    }
    .animate {
      transition: all 1.5s;
    }
    .animate:hover {
      transform: scale(1.2);
    }
  }
  .info {
    padding-left: 10px;
    padding-right: 10px;
    .desc {
      margin-top: 14px;
      height: 44px;
      font-size: 16px;
      overflow: hidden;
      color: #333;
    }
    .bottom {
      font-size: 14px;
      margin-top: 16px;
      height: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #636363;
      span {
        float: right;
       /deep/ em{
          font-style: normal;
          color: red;
        }
      }
    }
  }
}
</style>
