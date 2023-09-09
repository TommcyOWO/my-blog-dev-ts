<script setup lang="ts">
import '@master/css';
import {IconSearch} from '@tabler/icons-vue';
import { getCurrentInstance } from 'vue';

let searchTerm = '';
const instance = getCurrentInstance();

const handleInput = (event:Event) => {
  const target = event.target as HTMLInputElement;
  searchTerm = target.value;
}

const handleSearch = () => {
  if (searchTerm.trim() !== '') {
    instance?.emit('search', searchTerm);
  }
}
</script>
<template>
  <div class="fixed flex
      right:0 h:50px top:100 left:50%
      align-items:center transform:translate(-50%,-50%)">
    <IconSearch @click="handleSearch" class="cursor:pointer"/>
    <input class="w:100% border:1|solid|crimson-58 bg:transparent r:5px outline:none" type="text" v-model="searchTerm" @input="handleInput">
  </div>
</template>
<style scoped>
</style>