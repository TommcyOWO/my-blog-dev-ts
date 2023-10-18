<template>
  <div class="jc:center ai:center flex h:100vh bg:gray-16@dark">
    <div class="flex ai:center h:300px w:250px r:10px b:2|solid|crimson-54">
      <div class="left:10% rel">
        <h3 class="mx:10px color:white@dark">{{ $t('username') }}</h3>
        <input class="mx:10px b:2|solid|crimson-54 r:8px outline:none h:25px" type="text" name="" id="">
        <h3 class="mx:10px mt:50px color:white@dark">{{ $t('password') }}</h3>
        <input class="mx:10px b:2|solid|crimson-54 r:8px outline:none h:25px" type="password" name="" id="">
      </div>

    </div>
  </div>
</template>

<script setup>
import '@master/css'

</script>

<style scoped lang="sass">

</style>