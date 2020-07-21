<template>
  <div>
    <!-- Class 与 Style 绑定，使用方法详见官网文档 -->
    <div :style="addstyle">
      <el-button type="primary" @click="add">新增</el-button>
    </div>
    
    <Add :showAdd.sync="showAdd"></Add>
    <el-table :data="table" height="350" max-height="350">
      <el-table-column prop="date" label="日期" width="180" fixed>
        <template v-slot="scope">
          <!-- 通过作用域插槽获得的变量就是talbeData中的内容 -->
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="update_time" label="更新时间" width="180"></el-table-column>
      <el-table-column prop="chnl_id" label="渠道编码" width="180"></el-table-column>
      <el-table-column prop="chnl_name" label="渠道名称" width="180"></el-table-column>
      <el-table-column label="操作" width="220" fixed="right" header-align="center">
        <!-- header-align表头对齐方式 -->
        <template v-slot="scope">
          <el-button size="mini" @click="mod(scope)">修改</el-button>
          <el-button size="mini">查看</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background :page-sizes="pageSizes" :page-size="pageSize" :pager-count="7"
      @current-change="currentChange" @size-change="sizeChange" layout="total,sizes,prev, pager, next,jumper" :total="totalCount">
    </el-pagination>

  </div>
</template>

<script>
  import Add from './Add';
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
        table: [],
        totalCount: 0,
        curPage: 1,
        pageSize: 1,
        pageSizes: [1, 2, 3],

        addstyle: {
          textAlign: "right",
          marginBottom: "10px"
        },
        showAdd:false
      };
    },
    components: {
      Add
    },
    methods: {
      add(event) {
        //新增
        console.log("add");
        this.showAdd=true;
      },
      mod(scope) {
        //scope是个对象，包括row,$index,column等属性
        console.log(row);
      },
      currentChange(curPage) {
        //curPage是改变后的当前页
        this.curPage=curPage;
        //获取数据
        this.getTableInfo(curPage, this.pageSize);
        this.getTableInfoCount();
      },
      sizeChange(curSize){
        this.pageSize=curSize;
        //重新获取表格数据
        this.getTableInfo(this.curPage, this.pageSize);
        this.getTableInfoCount();
      },
      getTableInfoCount() {
        var _this = this;
        _this.$axios.get("http://localhost:3000/api/tableCount").then(response => {
          console.log(response);
          _this.totalCount = response.data.totalcount;
        }).catch(error => {
          console.log(error);
        })
      },
      //获得表格数据，分页
      getTableInfo(queryPage, pageSize) {
        var _this = this;
        _this.$axios
          .get("http://localhost:3000/api/table", {
            params: {
              queryPage: queryPage,
              pageSize: _this.pageSize
            }
          })
          .then(response => {
            _this.table = response.data.table;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    created() {},
    mounted() {
      //dom挂载后获取表数据
      //分页显示
      this.getTableInfo(this.curPage, this.pageSize);
      this.getTableInfoCount();
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
