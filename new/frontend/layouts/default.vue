<template>
    <div class="flex fixed w:100% jc:space-between font:medium bd:blur(5px) z-index:5">
      <div>
        <IconMenu2 @click="menu_toggle()" color="white" class="hidden@>md m:20px cursor:pointer"/>
        <ul :class="{'hidden@<md':m_value}" class="list-style:none flex@>md f:20px color:gray-80">
          <li @click="moveTo('index')" :class="{ 'color:crimson-54': $route.path === '/' }" class="m:20px ~300ms|ease-in color:crimson-54:hover cursor:pointer">{{ $t('index') }}</li>
          <li v-for="route in routes" @click="moveTo(route)" :class="{'color:crimson-54': $route.path === '/'+route}" class="m:20px ~300ms|ease-in color:crimson-54:hover cursor:pointer">{{ $t(route) }}</li>
        </ul>
      </div>
    <div class="flex ai:center@>md m:10px {py:10px;rel}@<md text:center">
      <a href="https://github.com/TommcyOWO#-hi-im-tomycat-一個平平無奇數學爆幹爛的國3生" target="_blank"><IconBrandGithub color="white" class="mx:10px cursor:pointer"/></a>
      <select v-model="locale" class="mx:10px h:25px b:2|solid|crimson-54 bg:white outline:none r:10px">
          <option value="en">English</option>
          <option value="ch_tw">繁體中文</option>
      </select>
    </div>
  </div>
  <slot/>
</template>

<script setup lang="ts">
import '@master/css';
import { IconBrandGithub,IconMenu2 } from '@tabler/icons-vue';

const routes = ref(['about','overview_development','works'])
const { locale } = useI18n();
const router = useRouter();
const moveTo = (path:string) => router.push({ name: path });
const [ m_value,menu_toggle ] = useToggle(true);

</script>

<style scoped>

</style>