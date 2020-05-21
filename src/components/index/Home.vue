<template>
  <div>
    <el-container>
      <el-header class="header">
        <el-menu mode="horizontal">
          <el-menu-item index="0">佣金支付</el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
    <el-container :style="containerStyle">
      <el-aside class="aside">
        <el-menu router ><!-- router表示启用路由 -->
          <el-menu-item index="/index/Subsidylist">补贴管理</el-menu-item>
          <el-menu-item index="/index/Limit">补贴上限设置</el-menu-item>
          <el-menu-item index="/index/Budget">预算设置</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
        
      </el-main>
    </el-container>
    <el-container>
      <el-footer class="footer">footer</el-footer>
    </el-container>

  </div>
</template>

<script>
  var div_height = window.screen.availHeight-200;
  export default {
    name: "Home",
    data() {
      return {
        containerStyle:{
          height:div_height-50+'px'
        }
        
      };
    },
    methods: {

    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header {
    background: lightpink;
  }

  .aside {
    background: lightblue;
    height:100%;
  }

  .main {
    background: lightgreen;
  }

  .footer {
    background: lightpink;
  }

</style>
