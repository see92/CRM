<template>
  <b-card>
    <div class="mb-1">
      <b-button variant="primary" @click="handle_submit(0)">添加</b-button>
    </div>
    <div>
      <b-table :fields="fieldsList" :items="items">
        <template #empty="scope">
          <span class="d-flex justify-content-center" style="font-size: 16px; font-weight: 400; color: #afafaf;">
            暂无数据
          </span>
        </template>
        <template #cell(type)="data">
          <span>
            {{ data.item.type == 0 ? '普通管理员':'超级管理员' }}
          </span>
        </template>
        <template #cell(status)="data">
          <span>
            {{ data.item.status == 0 ? '启用' : '禁用' }}
          </span>
        </template>
        <template #cell(actions)="data">
          <div class="d-flex">
            <!-- {{ data.index }} -->
            <feather-icon icon="EditIcon" size="16" class="mr-50" style="cursor:pointer" :id="`edit_${data.index}`" @click="handle_submit(1,data.item)" />
            <b-tooltip :target="`edit_${data.index}`" title="编辑信息" placement="left" />
            <feather-icon icon="Trash2Icon" size="16" style="cursor:pointer" :id="`trash2_${data.index}`" @click="handle_remove(data.item.id)" />
            <b-tooltip :target="`trash2_${data.index}`" title="删除信息" placement="left" />
          </div>
        </template>
      </b-table>
    </div>
    <div>
      <b-modal size="sm" title="提示：" centered v-model="delModel" hide-footer>
        <div class="mb-1 justify-content-center d-flex">此操作将会删除数据，是否继续？</div>
        <div class="d-flex justify-content-end">
          <b-button variant="danger" class="mr-1" @click="del_btn(0)">确定</b-button>
          <b-button variant="outline-danger" @click="del_btn(1)">取消</b-button>
        </div>
      </b-modal>
    </div>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      fieldsList: [
        { key: 'name', label: '姓名' },
        { key: 'phone', label: '手机号码' },
        { key: 'type', label: '类型' },
        { key: 'status', label: '状态' },
        { key: 'des', label: '描述' },
        { key: 'actions', label: '操作' }
      ],
      items: [
        { id: 0, name: '张三', phone: 13345137561, type: 0, status: 0, des: '' }
      ],
      delModel: false
    }
  },
  methods: {
    handle_submit(flag, data) {
      const id = data ? data.id : undefined;
      const routerName = flag == 0 ? 'smsAdd' : 'smsEdit';
      this.$router.push({
        name: routerName,
        query: { flag, id }
      })
    },
    handle_remove(id) {
      this.delModel = true
      console.log(id, 'iddddddddd');
    },
    del_btn(flag) {
      if (flag == 0) {
        this.delModel = false
      } else {
        this.delModel = false
      }
    }
  },
}
</script>