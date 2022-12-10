<!--  -->
<template>
  <div class="container">
    <h2 class="title">蓝莓酱</h2>
    <ul class="list">
      <li  v-for="(item, index) in list" :key="index">
        <div class="item">
          <img :src="item.img" alt="">
          <span>{{item.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
    }
  }
}
</script>

<style  scoped lang="less">
.container {
  width: 1200px;
  margin: 0 auto;
}
.title {
  text-align: center;
  padding: 10px;
}
.list {
  display: flex;
  flex-wrap: wrap;

  li {
    position: relative;
    box-sizing: border-box;
    width: 20%;
    height: 220px;
    padding: 10px;
    margin-bottom: 20px;
    .item {
      background: #eee;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        right: 20px;
        bottom: 0px;
        background: rgba(0, 0, 0, .2);
        color: #fff;
        border-radius: 4px;
        padding: 4px;
      }
    }
  }
}
</style>
