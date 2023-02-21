<template>
  <b-card>
    <div class="mb-1">
      <b-button variant="primary" @click="button(0)">添加</b-button>
    </div>
    <div>
      <b-table :fields="fields" :items="items" show-empty class="text-nowrap" responsive striped tbody-tr-class="tableTr">
        <template #empty="scope">
          <span class="d-flex justify-content-center" style="font-size: 16px; font-weight: 400; color: #afafaf">
            暂无数据
          </span>
        </template>
        <template #cell(size)="data">
          <span>
            {{ findLabel(sizeOptions,data.item.size) }}
          </span>
        </template>
        <template #cell(leave)="data">
          <span>
            {{ findLabel(leaveOptions,data.item.leave) }}
          </span>
        </template>
        <template #cell(sig_time)="data">
          <span>
            {{ formatTime(data.item.sig_time) }}
          </span>
        </template>
        <template #cell(out_time)="data">
          <span>
            {{ formatTime(data.item.out_time) }}
          </span>
        </template>
        <template #cell(actions)="data">
          <div class="d-flex">
            <feather-icon icon="EditIcon" size="16" class="mr-50" style="cursor:pointer" :id="`edit_${data.index}`" @click="button(1,data)" />
            <b-tooltip :target="`edit_${data.index}`" title="编辑信息" placement="left" />
            <feather-icon icon="Trash2Icon" size="16" style="cursor:pointer" :id="`trash2_${data.index}`" @click="delModal(data.item.id)" />
            <b-tooltip :target="`trash2_${data.index}`" title="删除信息" placement="left" />
          </div>
        </template>
      </b-table>
    </div>
    <div>
      <b-modal v-model="showModal" hide-footer size="sm" title="提示：" centered>
        <div class="mb-1">此操作会删除数据，是否继续？</div>
        <div class="d-flex justify-content-end">
          <b-button variant="danger" class="mr-1">确定</b-button>
          <b-button variant="outline-danger">取消</b-button>
        </div>
      </b-modal>
    </div>
  </b-card>
</template>

<script>
import { sizeOptions, leaveOptions } from "./js/options";
import dayjs from "dayjs";
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
        { key: 'actions', label: '操作', thStyle: 'width:6.25rem' }
      ],
      items: [
        { id: 0, name: '安在信息', size: 3, leave: 2, sig_time: 1676959276000, out_time: 1708531200000, count: 3 }
      ],
      sizeOptions,
      leaveOptions,
      dayjs,
      showModal: false
    }
  },
  methods: {
    button(flag, data) {
      console.log(data, 'data');
      //   return
      const id = data ? data.item.id : undefined
      const routerName = flag == 0 ? 'agentAdd' : 'agentEdit';
      this.$router.push({
        name: routerName,
        query: { flag, id }
      })
    },
    // 回显数据
    findLabel(params, val) {
      let key = val;
      let items = [];
      params.forEach(item => {
        if (item.key === key) {
          items.push(item.label)
        }
      });
      return items.toString()
    },
    // 回显时间
    formatTime(time) {
      return dayjs(time).format('YYYY-MM-DD')
    },
    // 删除信息
    delModal(id) {
      console.log(id, 'iddddd');
      this.showModal = true;
    }
  },
}
</script>

<style lang="less">
.tableTr td {
  max-width: 12rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>