<!--  -->
<template>
  <div>
    <h2 class="title">登录界面</h2>
    <div class="box">
      <el-form 
      :model="loginForm" 
      status-icon 
      :rules="rules" 
      ref="ruleForm" 
      label-width="60px" 
      class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import jwt from 'jwt-decode'
export default {
    data() {
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { validator: validateUser, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log('校验成功',this.loginForm)
            // 请求登录接口 --token--
            this.$api.getLogin({
              user: this.loginForm.username,
              pwd: this.loginForm.password
            }).then(res => {
              console.log(res.data)
              console.log(jwt(res.data.token))
              let obj = {
                token: res.data.token,
                username: jwt(res.data.token).user
              }
              // 发送给Vuex
              this.$store.commit('LoginModule/setUser', obj)
              // 数据持久化
              localStorage.setItem('userinfo', JSON.stringify(obj))
              // 跳转到首页
              this.$router.push('/')
            })
          } else {
            console.log('校验失败')
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }/*  */
</script>

<style  scoped>
.title {
  text-align: center;
  margin-top: 50px;
}

.box {
  width: 400px;
  height: 240px;
  box-shadow: 0 0 5px 5px rgba(134, 134, 134, .1);
  margin: 20px auto;
  padding: 20px 40px 0 20px;
}
</style>
