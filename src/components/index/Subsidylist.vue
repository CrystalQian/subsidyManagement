<template>
  <div>
    <!-- Class 与 Style 绑定，使用方法详见官网文档 -->
    <div :style="addstyle">
      <el-button type="primary">新增</el-button>
    </div>

    <el-table :data="tableData" height="350" max-height="350">
      <el-table-column prop="date" label="日期" width="180" fixed>
        <template v-slot="scope">
          <!-- 通过作用域插槽获得的变量就是talbeData中的内容 -->
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="地址" width="180"></el-table-column>
      <el-table-column prop="date" label="渠道编码" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column label="操作" width="220" fixed="right" header-align="center">
        <!-- header-align表头对齐方式 -->
        <template v-slot="scope">
          <el-button size="mini" @click="mod(scope)">修改</el-button>
          <el-button size="mini">查看</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background :page-sizes="pageSizes" :page-size="pageSize" :pager-count="7" hide-on-single-page
      layout="total,sizes,prev, pager, next,jumper" :total="totalCount">
    </el-pagination>

  </div>
</template>

<script>
  export default {
    name: "Demo",
    data() {
      return {

        /**
         * totalCount 查询总条数
         * tableData 表格中当前显示的数据数组
         * curPage 当前页
         * pageSize 一页显示的行数
         * pageSizes 一页显示的行数，可选
         */
        tableData: [{
            date: "20200101",
            name: "qian"
          },
          {
            date: "20200101",
            name: "test"
          },
          {
            date: "20200101",
            name: "hahah"
          }
        ],
        totalCount: 0,
        curPage: 1,
        pageSize: 10,
        pageSizes: [10, 20, 30],

        addstyle: {
          textAlign: "right",
          marginBottom: "10px"
        }
      };
    },
    methods: {
      mod(scope) {
        //scope是个对象，包括row,$index,column等属性
        console.log(row);
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
