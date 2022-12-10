<!--  -->
<template>
  <div>
    <h1>个人中心页面</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created(){
    this.$api.getUser()
    .then(res => {
      console.log(res.data)
      if(res.data.status !== 200) {
        this.$router.push('/login')
      }
    })
  }
}
</script>

<style  scoped>

</style>

