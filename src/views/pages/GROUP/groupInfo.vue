<template>
  <b-card>
    <div class="d-flex mb-2">
      <feather-icon :icon="`${flag == 0 ? 'UserPlusIcon' : 'UserIcon'}` " size="19" />
      <h4 class="mb-0 ml-50">{{ flag==0?'新增分组':'修改分组' }}</h4>
    </div>
    <ValidationObserver ref="groupForm" #default="{invalid}">
      <b-form @submit.prevent class="form" autocomplete="off">
        <b-row class="row">
          <b-col cols="7">
            <b-form-group label="id：" label-for="id" label-cols-md="auto">
              <ValidationProvider rules="required" name="id" #default="{errors}">
                <b-form-input :state="errors.length > 0?false:null" class="w34" v-model="group.id" />
                <small class="text-danger">{{ errors[0] }}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
          <b-col cols="7">
            <b-form-group label="姓名：" label-for="name" label-cols-md="auto">
              <ValidationProvider rules="required" name="name" #default="{errors}">
                <b-form-input class="w34" v-model="group.name" :state="errors.length>0?false:null" />
                <small class="text-danger">{{ errors[0] }}</small>
              </ValidationProvider>
            </b-form-group>
          </b-col>
        </b-row>
        <hr />
        <div class="d-flex">
          <b-button variant="primary" class="mr-1" :disabled="invalid">保存</b-button>
          <b-button variant="outline-primary">取消</b-button>
        </div>
      </b-form>
    </ValidationObserver>
  </b-card>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { required } from "@validations";
export default {
  name: 'groupInfo',
  components: { ValidationObserver, ValidationProvider },
  data() {
    return {
      required,
      flag: this.$route.query.flag,
      group: {
        id: '',
        name: ''
      }
    }
  },
}
</script>

<style lang="less">
.w34 {
  width: 34.375rem;
}
</style>