<template>
  <vt-button type="success" :plain="true" @click="open1">success</vt-button>
  <vt-button type="warning" :plain="true" @click="open2">close</vt-button>
  <vt-button type="info" :plain="true" @click="open3">message</vt-button>
  <vt-button type="danger" :plain="true" @click="open4">error</vt-button>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { VtMessage } from 'vuetom-ui'

const open1 = () => {
  VtMessage.success("Success",{
    details: 'Success details',
    onClose:function(){
      console.log('success callback')
    }
  })
} 

const open2 = () => {
  VtMessage.warning("Warning",{
    details: 'Warning details',
    showClose: true
  })
}

const open3 = () => {
 VtMessage.info("Message") 
}

const open4 = () => {
  VtMessage.error("Error",{
    details: 'Error details',
    showClose: true
  })
}
</script>
