<template>
  <b-card>
    <div class="d-flex">
      <feather-icon :icon="`${flag == 0 ? 'UserPlusIcon' : 'UserIcon'}` " size="19" />
      <h4 class="mb-0 ml-50">{{ flag==0?'新增人员':'修改人员' }}</h4>
    </div>
    <ValidationObserver ref="smsForm" #default="{invalid}">
      <b-form @submit.prevent="handle_pre">
        <b-container class="bv-example-row">
          <!-- 姓名 -->
          <b-row align-h="center">
            <b-col cols="4">
              <b-form-group label="姓名：" label-for="name" label-cols-md="3">
                <ValidationProvider rules="required|name" name="name" #default="{errors}">
                  <b-form-input v-model="user.name" maxlength="255" :state="errors.length > 0 ? false :null" />
                  <small class="text-danger"> {{ errors[0] }}</small>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- 手机号 -->
          <b-row align-h="center">
            <b-col cols="4">
              <b-form-group label="手机号码：" label-for="phone" label-cols-md="3">
                <ValidationProvider rules="required|phone" name="phone" #default="{errors}">
                  <b-form-input v-model="user.phone" maxlength="11" placeholder="请输入手机号码" :state="errors.length > 0 ? false : null" />
                  <small class="text-danger">{{ errors[0] }} </small>
                </ValidationProvider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- 人员类型 -->
          <b-row align-h="center">
            <b-col cols="4">
              <b-form-group label="人员类型：" label-for="type" label-cols-md="3">
                <v-select :options="typeOptions" :reduce="(label) => label.key" :searchable="false" :clearable="false" v-model="user.type" />
              </b-form-group>
            </b-col>
          </b-row>
          <!-- 状态 -->
          <b-row align-h="center">
            <b-col cols="4">
              <b-form-group label="状态：" label-for="status" label-cols-md="3">
                <v-select :options="statusOptions" :reduce="(label) => label.key" :searchable="false" :clearable="false" v-model="user.status" />
              </b-form-group>
            </b-col>
          </b-row>
          <!-- 描述 -->
          <b-row align-h="center">
            <b-col cols="4">
              <b-form-group label="描述：" label-for="des" label-cols-md="3">
                <b-form-input v-model="user.des" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-container>
        <hr />
        <div class="d-flex justify-content-start">
          <b-button variant="primary" class="mr-1" @click="handle_submit(0)">保存</b-button>
          <b-button variant="outline-primary" @click="handle_submit(1)">取消</b-button>
        </div>
      </b-form>
    </ValidationObserver>
  </b-card>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { name } from "@validations";
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
      icon: { 0: 'UserPlusIcon', 1: 'UserIcon' },
      flag: this.$route.query.flag,
      title: '',  //标题
      user: {
        name: '',
        phone: '',
        type: 0,
        status: 0,
        des: ''
      }
    }
  },
  methods: {
    handle_submit(flag) {
      if (flag == 1) {
        this.$router.back()
      }
    }
  },
}
</script>