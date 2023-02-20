<template>
  <b-card>
    <div class="mb-1">
      <b-button variant="primary" @click="button(0)">添加</b-button>
    </div>
    <div>
      <b-table :fields="fields" :items="items"></b-table>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'agent',
  components: {
  },
  data() {
    return {
      fields: [
        { key: 'name', label: '名称' },
        { key: 'size', label: '规模' },
        { key: 'leave', label: '代理商级别' },
        { key: 'sig_time', label: '签约时间' },
        { key: 'out_time', label: '到期时间' },
        { key: 'count', label: '报备额度' },
        { key: 'actions', label: '操作' }
      ],
      items: []
    }
  },
  methods: {
    button(flag, data) {
      const id = data ? data.id : undefined
      const routerName = flag == 0 ? 'agentAdd' : 'agentEdit';
      this.$router.push({
        name: routerName,
        query: { flag, id }
      })
    }
  },
}
</script>