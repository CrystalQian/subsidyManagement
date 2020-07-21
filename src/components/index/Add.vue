<template>
  <div>
    <el-dialog title="新增" :visible="showAdd" width="60%" :before-close="closex" center>
      <el-form label-position="right" :inline="true" :model="form" label-width="120px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="发展渠道编码">
              <el-input v-model="form.chnl_id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="发展渠道名称">
              <el-input v-model="form.chnl_name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="结算渠道编码">
              <el-input v-model="form.chnl_id"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="结算渠道名称">
              <el-input v-model="form.chnl_name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="补贴用途">
              <el-select v-model="form.usage_type_desc" @change="changeusagetype">
                <el-option v-for="item in usageTypes" :key="item.value" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="部门类型">
              <el-select v-model="form.usage_type_desc" @change="changeusagetype">
                <el-option v-for="item in usageTypes" :key="item.value" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="账期">
              <el-select v-model="form.usage_type_desc" @change="changeusagetype">
                <el-option v-for="item in usageTypes" :key="item.value" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="总额">
              <el-select v-model="form.usage_type_desc" @change="changeusagetype">
                <el-option v-for="item in usageTypes" :key="item.value" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="净额">
              <el-select v-model="form.usage_type_desc" @change="changeusagetype">
                <el-option v-for="item in usageTypes" :key="item.value" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="税额">
              <el-select v-model="form.usage_type_desc" @change="changeusagetype">
                <el-option v-for="item in usageTypes" :key="item.value" :value="item.label"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer">
        <el-button @click="updateShow">取 消</el-button>
        <el-button type="primary" @click="updateShow($event,'confirm')">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
  export default {
    name: "Add",
    props: {
      showAdd: Boolean
    },

    data() {
      return {

        form: {
          chnl_id: "saadf",
          chnl_name: "渠道名称",
          usage_type: "",
          usage_type_desc: ""
        },
        usageTypes: [{
            label: '用于装修',
            value: '01'
          },
          {
            label: '用于买房',
            value: '02'
          },
          {
            label: '用于买车',
            value: '03'
          }
        ]
      };
    },
    methods: {
      changeusagetype(curvalue) {
        this.usageTypes.find((item) => {
          if (item.label == curvalue) {
            this.form.usage_type = item.value;
          }
        })
      },
      updateShow() {
        //配合sync使用的自定义事件（update:propname）
        this.$emit("update:showAdd", false);
        if (arguments["1"] == "confirm") {
          //新增保存操作
          this.submit();
        }
      },
      submit() {
        //this.form的数据保存到数据库中
        this.$axios({
          method: 'post',
          url: 'http://localhost:3000/api/addsubmit',
          data: {
            form: this.form
          }
        }).then(function (response) {
          response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });
      },
      closex(done) {
        this.updateShow();
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
