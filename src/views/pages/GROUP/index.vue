<template>
  <b-card>
    <div class="d-flex mb-2">
      <b-button variant="primary" @click="submit(0)">添加</b-button>
    </div>
    <div>
      <b-table :fields="fields" :items="items">
        <template #cell(actions)="data">
          <div class="d-flex">
            <feather-icon icon="EditIcon" size="16" class="mr-50" style="cursor: pointer;" :id="`edit_${data.index}`" @click="submit(1,data)" />
            <b-tooltip :target="`edit_${data.index}`" title="编辑信息" placement="left" />
            <feather-icon icon="Trash2Icon" size="16" style="cursor: pointer;" :id="`Trash2_${data.index}`" @click="delModal(data.item.id)" />
            <b-tooltip :target="`Trash2_${data.index}`" title="删除信息" placement="left" />
          </div>
        </template>
      </b-table>
    </div>
    <div>
      <b-modal v-model="showModal" hide-footer size="sm" title="提示：" centered>
        <div class="mb-1 d-flex justify-content-center">此操作会删除数据，是否继续？</div>
        <div class="d-flex justify-content-end">
          <b-button variant="danger" class="mr-1" @click="del_btn(0)">确定</b-button>
          <b-button variant="outline-danger" @click="del_btn(0)">取消</b-button>
        </div>
      </b-modal>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'group',
  components: {

  },
  data() {
    return {
      fields: [
        { key: 'id', label: 'id' },
        { key: 'name', label: '名称' },
        { key: 'actions', label: '操作' }
      ],
      items: [
        { id: '0', name: '张三' }
      ],
      showModal: false
    }
  },
  methods: {
    submit(flag, data) {
      const id = data ? data.item.id : undefined;
      const routerName = flag == 0 ? 'groupAdd' : 'groupEdit';
      this.$router.push({
        name: routerName,
        query: { flag, id }
      })
    },
    delModal(id) {
      this.showModal = true
    },
    del_btn(flag) {
      if (flag == 0) {
        this.showModal = false
      } else {
        this.showModal = false
      }
    }
  },
}
</script>