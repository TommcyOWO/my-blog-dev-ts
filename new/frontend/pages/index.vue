<template>

  <main class="bg:gray-16">
    <img class="inline-block h:1000px w:100% obj:cover" src="@/assets/bg.jpg">
    <div class="abs color:white bd:blur(5px) r:10px top:300 left:50% transform:translate(-50%,-50%)">
      <h1>{{ $t('welcom') }}</h1>
    </div>
  </main>

</template>

<script setup lang="ts">
import '@master/css';
</script>

<style scoped lang="sass">
</style>