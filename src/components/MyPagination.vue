<!--  -->
<template>
  <div class="page">
    <el-pagination 
    background 
    layout="total, prev, pager, next, jumper" 
    :total="total"
    :page-size="pageSize"
    @current-change="indexChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default() {
        return 100
      }
    },
    pageSize: {
      type: Number,
      default() {
        return 10
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    indexChange(num) {
      this.$emit('getPage', num)
    }
  }
}
</script>

<style  scoped>
.page {
  margin: 30px;
  text-align: center;
}
</style>
