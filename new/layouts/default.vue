<template>
    <div class="flex fixed w:100% jc:space-between font:medium bd:blur(5px) z-index:5">
      <ul class="list-style:none flex f:20px m:20px color:gray-80">
        <li v-for="route in routes" @click="moveTo(route)" class="m:20px ~300ms|ease-in color:crimson-54:hover cursor:pointer">{{ $t(route) }}</li>
    </ul>
    <div class="flex ai:center m:10px">
          <select v-model="locale" class="mx:10px b:2|solid|crimson-54 bg:white outline:none r:10px">
              <option value="en">English</option>
              <option value="taiwan_ch">台灣中文</option>
          </select>
    </div>
  </div>
  <slot/>
</template>

<script setup lang="ts">
import '@master/css';

const routes = ref(['index','about','overview_development','work'])

const { locale } = useI18n();

const router = useRouter();
const moveTo = (path:string) => router.push({ name: path });
</script>

<style scoped>

</style>