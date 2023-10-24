<template>
  <div class="text:center color:white w:100% f:30 abs top:20vh">
    <h1>
    {{ error.statusCode }}
    </h1>
    <p class="mt:20">你有想過你為何在這嗎?<br>這裡沒有你要的東西，請回去吧。</p>
  </div>
</template>

<script setup lang="ts">
import '@master/css'

defineProps(['error'])
</script>

<style scoped>

</style>