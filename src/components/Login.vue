<template>
  <div class="logincard">

    <el-card >
      <template v-slot:header>
        <span>用户登录</span>
      </template>
      <el-input size="100px" placeholder="请输入用户名" v-model="username">
        <span slot="prepend">ai\</span>
      </el-input>
      <el-input size="100px" placeholder="请输入密码" v-model="password" type="password">
        <template #prepend><i class="el-icon-lock"></i></template>
      </el-input>
      <el-button type="primary" @click="onSubmit" class="longbtn">登录</el-button>
      <div style="margin-right:10px;text-align:right">
        <el-button type="text" @click="changeto('chinese')">Chinese</el-button>/<el-button type="text"
          @click="changeto('englist')" style="margin-left:0">English</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        username: "",
        password:""
      };
    },
    methods: {
      onSubmit() {
        //跳转到菜单页面
        this.$router.push({ path: '/index/Home' })
      },
      changeto(language) {
        console.log(language);
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logincard {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    text-align: center;
  }

  .el-input {
    margin-bottom: 10px;
  }

  .longbtn {
    width: 100%;
  }

</style>
