<script setup lang="ts">
import {ref} from 'vue';
import {useRouter,useRoute} from 'vue-router';
import {init, Style } from'@master/css';

Style.extend('classes', {
  btn: 'inline-flex center-content font:14 font:semibold font:white bg:crimson-54 px:10 h:35 r:4'
})

init()

const route = useRoute();
const webName = ref(route.name);

const router = useRouter()

const push = (async (herf:string) => {
  router.push(herf)
});

</script>
<template>
  <nav class="fixed flex h:10vh w:100% align-items:center z:2 bd:blur(5px)">
    <div class="rel w:100% f:18 color:gray-80 left:20">
      
    <span v-if="webName === 'index'" @click="push('/')" class="m:10px cursor:pointer color:crimson-54">首頁</span>
    <span v-else @click="push('/')" class="m:10px cursor:pointer color:crimson-54:hover ~300ms|ease-in">首頁</span>

    <span v-if="webName === 'about'" @click="push('/about')" class="m:10px cursor:pointer color:crimson-54">介紹</span>
    <samp v-else @click="push('/about')" class="m:10px cursor:pointer color:crimson-54:hover ~300ms|ease-in">介紹</samp>
    <span v-if="webName === 'development_introduction'" @click="push('/development_introduction')" class="m:10px cursor:pointer color:crimson-54">開發介紹</span>
    <samp v-else @click="push('/development_introduction')" class="m:10px cursor:pointer color:crimson-54:hover ~300ms|ease-in">開發介紹</samp>
    </div>
    <div class="rel color:white right:20">
      <samp class="m:10px cursor:pointer bg:crimson-58:hover ~300ms|ease-in btn" v-if="'ee'==='ee'">Singout</samp>
      <samp class="m:10px cursor:pointer bg:crimson-58:hover ~300ms|ease-in btn" v-else>Logon</samp>  
    </div>
  </nav>
</template>