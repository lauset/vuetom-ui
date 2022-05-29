<template>

  <vt-console 
    :show="consoleShow"
    :dealy="100"
    :rows="rows"
    height="300px"
    :pushMode="false"
    color="#eee"
    cmdPrefix=" ds2 >"
    ref="consoleRef" 
    @input-change="inputChange" 
    @exit="exitHandle">
    <template #header>
      操作: ls: 查询  cls: 清空<br>
      Last login: {{new Date()}}
    </template>
  </vt-console>

  <br>

  <vt-button @click="ptData">
    add 1
  </vt-button> 

</template>


<script setup lang="ts">
import { ref } from 'vue'
const consoleRef = ref(null)
const consoleShow = ref(true)
const rows = ref([])

const inputChange = (val) => {
  if (val.cmd === 'ls') 
    rows.value = [
      '001	Lab001	172.20.10.8	百克新厂区实验室1	8089',
      '002	Lab001	172.20.10.8	百克新厂区实验室2	8089',
      '003	Lab001	172.20.10.8	百克新厂区实验室3	8089',
      'Query OK',
      '18 rows in set <0.01 sec>'
    ]
}

const ptData = () => {
  consoleShow.value = true
  // 查询数据，然后调用print就行了
  // rows.value.push('add 1')
  consoleRef.value.print('add 1')
  // rows.value =[
  //     '001	Lab001	172.20.10.8	百克新厂区实验室1	8089',
  //     '002	Lab001	172.20.10.8	百克新厂区实验室2	8089',
  //     '003	Lab001	172.20.10.8	百克新厂区实验室3	8089',
  //     'Query OK',
  //     '18 rows in set <0.01 sec>'
  //   ] 

  // consoleRef.value.print([
  //   '001	Lab001	172.20.10.8	百克新厂区实验室1	8089',
  //   '002	Lab001	172.20.10.8	百克新厂区实验室2	8089',
  //   '003	Lab001	172.20.10.8	百克新厂区实验室3	8089',
  //   'Query OK',
  //   '18 rows in set <0.01 sec>'
  // ])
}

const exitHandle = (val) => {
  consoleShow.value = val
}

</script>