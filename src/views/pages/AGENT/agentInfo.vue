<template>
  <b-card>
    <div class="d-flex">
      <feather-icon :icon="`${flag == 0 ? 'UserPlusIcon' : 'UserIcon'}` " size="19" />
      <h4 class="mb-0 ml-50">{{ flag==0?'新增代理商':'修改代理商' }}</h4>
    </div>

    <ValidationObserver ref="agentForm" #default="{invalid}">
      <b-form @submit.prevent>

      </b-form>
    </ValidationObserver>
  </b-card>
</template>


<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
  name: 'agentInfo',
  components: {
    ValidationObserver, ValidationProvider
  },
  data() {
    return {
      flag: this.$route.query.flag
    }
  },
}
</script>