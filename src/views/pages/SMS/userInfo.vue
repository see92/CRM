<template>
  <b-card>
    <div class="d-flex mb-2">
      <feather-icon :icon="`${flag == 0 ? 'UserPlusIcon' : 'UserIcon'}` " size="19" />
      <h4 class="mb-0 ml-50">{{ flag==0?'新增人员':'修改人员' }}</h4>
    </div>
    <ValidationObserver ref="smsForm" #default="{invalid}">
      <b-form @submit.prevent="handle_pre" class="form" autocomplete="off">
        <!-- 姓名 -->
        <b-row class="row">
          <b-col cols="7">
            <b-form-group label="姓名：" label-for="name" label-cols-md="auto">
              <ValidationProvider rules="required" name="name" #default="{errors}">
                <b-form-input v-model="user.name" maxlength="255" :state="errors.length > 0 ? false :null" class="w34" />
                <small class="text-danger"> {{ errors[0] }}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <!-- 手机号 -->
          <b-col cols="7">
            <b-form-group label="手机号码：" label-for="phone" label-cols-md="auto">
              <ValidationProvider rules="required|phone" name="phone" #default="{errors}">
                <b-form-input v-model="user.phone" maxlength="11" placeholder="请输入手机号码" :state="errors.length > 0 ? false : null" class="w34" />
                <small class="text-danger">{{ errors[0] }} </small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <!-- 性别 -->
          <b-col cols="7">
            <b-form-group label="性别：" label-for="sex" label-cols-md="auto">
              <div class="d-flex" style="margin-top:.25rem">
                <b-form-radio class="mr-1" plain v-model="user.sex" value="0"> 男</b-form-radio>
                <b-form-radio plain v-model="user.sex" value="1"> 女</b-form-radio>
              </div>
            </b-form-group>
          </b-col>
          <!-- 邮箱 -->
          <b-col cols="7">
            <b-form-group label="邮箱：" label-for="email" label-cols-md="auto">
              <ValidationProvider rules="email" name="email" #default="{errors}">
                <b-form-input class="w34" v-model="user.mail" :state="errors.length > 0?false:null" />
                <small class="text-danger">{{ errors[0] }}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>

          <!-- 人员类型 -->
          <b-col cols="7">
            <b-form-group label="人员类型：" label-for="type" label-cols-md="auto">
              <v-select class="w34" :options="typeOptions" :reduce="(label) => label.key" :searchable="false" :clearable="false" v-model="user.type" />
            </b-form-group>
          </b-col>
          <!-- 状态 -->
          <b-col cols="7">
            <b-form-group label="状态：" label-for="status" label-cols-md="auto">
              <v-select class="w34" :options="statusOptions" :reduce="(label) => label.key" :searchable="false" :clearable="false" v-model="user.status" />
            </b-form-group>
          </b-col>
          <!-- 公司 -->
          <b-col cols="7">
            <b-form-group label="公司信息：" label-for="company" label-cols-md="auto">
              <v-select class="w34" />
            </b-form-group>
          </b-col>
          <!-- 描述 -->
          <b-col cols="7">
            <b-form-group label="描述：" label-for="des" label-cols-md="auto">
              <b-form-input class="w34" v-model="user.des" />
            </b-form-group>
          </b-col>
        </b-row>

        <hr />
        <div class="d-flex justify-content-start">
          <b-button variant="primary" class="mr-1" @click="handle_submit(0)" :disabled="invalid">保存</b-button>
          <b-button variant="outline-primary" @click="handle_submit(1)">取消</b-button>
        </div>
      </b-form>
    </ValidationObserver>

    <div>
    </div>
  </b-card>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { name, email } from "@validations";
import { typeOptions, statusOptions } from "./js/options";
export default {
  components: {
    ValidationObserver, ValidationProvider
  },
  data() {
    return {
      typeOptions,
      statusOptions,
      name,
      email,
      icon: { 0: 'UserPlusIcon', 1: 'UserIcon' },
      flag: this.$route.query.flag,
      title: '',  //标题
      user: {
        name: '',
        phone: '',
        type: 0,
        status: 0,
        des: '',
        sex: 0,
        mail: '',
        company: ''
      },
    }
  },

  methods: {
    handle_submit(flag) {
      if (flag == 1) {
        this.$router.back()
      }
    },

  },
}
</script>

<style>
.w34 {
  width: 34.375rem;
}
</style>