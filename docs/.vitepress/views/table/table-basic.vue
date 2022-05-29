<template>
  <div class="vt-tt" id="vt-ttt">
    <vt-button @click="test">测试</vt-button>
    <hr>
    <vt-table
      :columns="cols"
      :rows="rows"
      :table-options="tc"
      :is-loading="loading"
      @sort-change="sortChanged"
      :search-options="{
        enabled: true
      }"
      :page-options="{
          enabled: true,
          mode: 'records',
          perPage: 5,
          position: 'bottom',
          perPageDropdown: [1, 5, 20],
          dropdownAllowAll: false,
          setCurrentPage: 1,
          nextLabel: '下',
          prevLabel: '上',
          rowsPerPageLabel: '每页数量',
          ofLabel: 'of',
          pageLabel: 'page', // for 'pages' mode
          allLabel: 'All',
          infoFn: (params) => `Showing ${params.firstRecordOnPage} to ${params.lastRecordOnPage} of page ${params.currentPage}`,
        }"
      >
       <!-- @row-click="handleRowClick"
      @row-dblclick="handleRowDBClick"
      @cell-click="handleCellClick" -->
        <template #body-actions-1="{ row }">
          <vt-button type="primary" size="macos">操作</vt-button>
        </template>
        <template #body-actions-2="{ row }">
          <vt-button type="primary" size="macos">删除</vt-button>
        </template>
        <template #footer-actions>
          TLLLLLLL
        </template>
        <template #no-data>
          NO NO NO
        </template>
      </vt-table>
    <hr>
  </div>
</template>

<script setup>
import { computed, toRef, ref, getCurrentInstance, reactive, onMounted } from 'vue'
const { proxy } = getCurrentInstance()

let cols = reactive([])
let rows = reactive([])
let tc = reactive({})
const loading = ref(true)

cols = [
  {
    label: 'Name',
    field: 'name',
  },
  {
    label: 'Age',
    field: 'age',
    type: 'number',
  },
   {
    label: 'Age',
    field: 'age',
    type: 'number',
  },
   {
    label: 'Age',
    field: 'age',
    type: 'number',
  },
   {
    label: 'Age',
    field: 'age',
    type: 'number',
  },
   {
    label: 'Age',
    field: 'age',
    type: 'number',
  },
   {
    label: 'Age',
    field: 'age',
    type: 'number',
  },
  {
    label: 'Created On',
    field: 'createdAt',
    type: 'date',
    dateInputFormat: 'yyyy-MM-dd',
    dateOutputFormat: 'MMM do yy',
  },
  {
    label: 'Percent',
    field: 'score',
    type: 'percentage',
  },
  {
    label: '11',
    actions: true,
    fixed: 'right'
  },
  {
    label: '操作2',
    actions: true,
    // fixed: 'right'
  }
]

rows = [
  { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
  // { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
  // { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
  // { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
  // { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
  // { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
]

tc = {
  maxHeight: '', // 默认null
  fixedHeader: false, // 默认false
  'rtl': false,
  lineNumbers: false, // 默认false
}

const handleRowClick = (_row) => {
  console.log(_row);
  console.log('row click');
}

const handleRowDBClick = (_row) => {
  console.log(_row);
  console.log('row db click');
}

const handleCellClick = (_cell) => {
  console.log(_cell);
  console.log('cell click');
}

const sortChanged = (_s) => {
  console.log(_s);
}


onMounted(() => {
  setTimeout(() => {
    loading.value = false
  },2000)  
})

const test= () => {
  // VtMessage.warning("234",{
  //   showClose:true,
  //   onClose:function(){
  //       console.log('111')
  //   }
  // })
  // proxy.$msg.warning("",{
  //   showClose:true,
  //   onClose:function(){
  //       console.log('111')
  //   }
  // })
}

</script>

<style lang="scss">

</style>