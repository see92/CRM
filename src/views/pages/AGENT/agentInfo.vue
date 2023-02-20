<template>
  <b-card>
    <div class="d-flex mb-2">
      <feather-icon :icon="`${flag == 0 ? 'UserPlusIcon' : 'UserIcon'}` " size="19" />
      <h4 class="mb-0 ml-50">{{ flag==0?'新增代理商':'修改代理商' }}</h4>
    </div>
    <ValidationObserver ref="agentForm" #default="{invalid}">
      <b-form @submit.prevent class="form">
        <b-row class="row">
          <b-col cols="7">
            <b-form-group label="代理商名称：" label-for="agentName" label-cols-md="auto">
              <ValidationProvider rules="required" name="agentName" #default="{errors}">
                <b-form-input maxlength="255" :state="errors.length>0?false:null" v-model="agent.name" class="w34" />
                <small class="text-danger">{{errors[0]}}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="代理商规模：" label-for="size" label-cols-md="auto">
              <v-select class="w34" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="行业分类：" label-for="fenLei" label-cols-md="auto">
              <el-cascader class="w34" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="代理商等级：" label-for="leave" label-cols-md="auto">
              <v-select class="w34" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="社会信用代码：" label-for="code" label-cols-md="auto">
              <b-form-input class="w34" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="签约时间：" label-for="time" laebl-for="time" label-cols-md="auto">
              <b-form-input class="w34" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="签约到期时间：" label-for="out_time" label-cols-md="auto">
              <b-form-input class="w34" />
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="报备额度：" label-for="count" label-cols-md="auto">
              <b-form-input class="w34" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </ValidationObserver>
  </b-card>
</template>


<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "@validations";

export default {
  name: 'agentInfo',
  components: {
    ValidationObserver, ValidationProvider
  },
  data() {
    return {
      required,
      flag: this.$route.query.flag,
      agent: {
        name: ''
      }
    }
  },
}
</script>

<style>
.w34 {
  width: 34.375rem;
}
</style>