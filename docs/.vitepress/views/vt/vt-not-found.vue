<script setup lang="ts">
import { computed } from 'vue'

const goHome = () => {
  window.location.href = `/docs/`
}
</script>

<template>
  <div class="vt-result">
    <vt-button @click="goHome">Go Home</vt-button>
  </div>
</template>

<style scoped>
.vt-result {
  height: 100vh;
  width: 100vw;
}
</style>
