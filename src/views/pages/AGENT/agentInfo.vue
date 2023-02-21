<template>
  <b-card>
    <div class="d-flex mb-2">
      <feather-icon :icon="`${flag == 0 ? 'UserPlusIcon' : 'UserIcon'}` " size="19" />
      <h4 class="mb-0 ml-50">{{ flag==0?'新增代理商':'修改代理商' }}</h4>
    </div>
    <ValidationObserver ref="agentForm" #default="{invalid}">
      <b-form @submit.prevent class="form" autocomplete="off">
        <b-row class="row">
          <b-col cols="7">
            <b-form-group label="代理商名称：" label-for="agentName" label-cols-md="auto">
              <ValidationProvider rules="required" name="agentName" #default="{errors}">
                <b-form-input maxlength="255" :state="errors.length>0?false:null" v-model="agent.name" class="w34" placeholder="请输入名称" />
                <small class="text-danger">{{errors[0]}}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="代理商规模：" label-for="size" label-cols-md="auto">
              <v-select class="w34" :options="sizeOptions" :reduce="(label)=>label.key" :searchable="false" :clearable="false" v-model="agent.size" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="行业分类：" label-for="fenLei" label-cols-md="auto">
              <el-cascader class="w34" :options="dicOptions" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="代理商等级：" label-for="leave" label-cols-md="auto">
              <v-select class="w34" :options="leaveOptions" :reduce="(label)=>label.key" :searchable="false" :clearable="false" v-model="agent.leave" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="代理商地址：" label-for="address" label-cols-md="auto">
              <el-cascader class="w34" :options="address" v-model="agent.address" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="社会信用代码：" label-for="code" label-cols-md="auto">
              <ValidationProvider rules="required|creditCode" name="creditCode" #default="{errors}">
                <b-form-input maxlength="18" :state="errors.length>0?false:null" v-model="agent.creditCode" class="w34" placeholder="请输入社会信用代码" />
                <small class="text-danger">{{errors[0]}}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="签约时间：" label-for="time" label-cols-md="auto">
              <el-date-picker style="width:34.375rem" type="date" v-model="agent.sig_time" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="签约到期时间：" label-for="out_time" label-cols-md="auto">
              <el-date-picker style="width:34.375rem" type="date" v-model="agent.out_time" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="报备额度：" label-for="count" label-cols-md="auto">
              <el-input-number v-model="agent.count" controls-position="right" :min="0" :max="100" style="width:34.375rem" />
            </b-form-group>
          </b-col>
        </b-row>
        <hr />
        <div>
          <b-button variant="primary" class="mr-1" type="submit" :disabled="invalid">保存</b-button>
          <b-button variant="outline-primary" @click="handle_reset">取消</b-button>
        </div>
      </b-form>
    </ValidationObserver>
  </b-card>
</template>


<script>
import { ValidationObserver, ValidationProvider, } from "vee-validate";
import { required, creditCode } from "@validations";
import { sizeOptions, leaveOptions, dicTree } from "./js/options";
export default {
  name: 'agentInfo',
  components: {
    ValidationObserver, ValidationProvider
  },
  data() {
    return {
      required,
      creditCode,
      flag: this.$route.query.flag,
      sizeOptions,  //代理商规模
      leaveOptions, //代理商等级
      dicTree,
      dicOptions: [],
      address: [{
        "value": 120000,
        "label": "天津市",
        "children": [{ "value": 120100, "label": "天津市", "children": [{ "value": 120101, "label": "和平区" },], }],
      }],
      agent: {
        name: '',
        size: 0,
        leave: 0,
        creditCode: '',
        sig_time: new Date(),
        out_time: new Date(),
        count: 0
      }
    }
  },
  mounted() {
    if (this.flag == 0) {
      this.setYear(),
        this.getDicTree()
    }
  },
  methods: {
    getDicTree() {
      const newTree = this.dicTree
      this.dicOptions = newTree.map((item) => {
        item.label = item.name;
        item.value = item.id;
        if (item.children) {
          item.children.forEach(k => {
            k.label = k.name;
            k.value = k.id;
            if (k.children) {
              k.children = null
            }
          });
        }
        return item
      })
    },
    setYear() {
      const date = new Date(this.agent.out_time);
      var year = date.getFullYear() + 1;
      var month = date.getMonth();
      var day = date.getDate();
      month = month + 1;
      month = month.toString().padStart(2, "0");
      day = day.toString().padStart(2, "0");
      this.$set(this.agent, "out_time", `${year}-${month}-${day}`);
    },
    handle_reset() {
      this.$router.back()
    }
  }
}
</script>

<style>
.w34 {
  width: 34.375rem;
}
</style>