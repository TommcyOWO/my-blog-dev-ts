<script setup lang="ts">
import '@master/css';
import { useMagicKeys, useWindowFocus, useTitle } from '@vueuse/core';
import { watch,ref } from 'vue';

import guide from '@/components/guide.vue';
import Search from '@/components/search.vue';

//search
const showSearch = ref(false);
let searchTerm = '';

function handleSearch(term: string) {
  console.log('搜尋:', term);
}

const keys = useMagicKeys()
const CtrlK = keys['Ctrl+Shift+K']

watch(CtrlK, (v) => {
  if (v) {
    showSearch.value = !showSearch.value;
  }
})

const title = useTitle()
const focused = useWindowFocus()

watch(focused, (isFocused) => {
  if (isFocused) {
    title.value = "Tomycat's Blog .w.";
  } else {
    title.value = '回來 qwq';
  }
});

</script>
<template>
  <guide/>
  <main>
    <img class="inline-block h:1000px w:100% obj:cover" src="@/assets/bg.jpg">
    <div class="abs color:gray-88 bd:blur(5px) r:10px top:300 left:50% transform:translate(-50%,-50%)">
      <h1>歡迎來到Tomycat 的部落格</h1>
    </div>
  </main>
  <Search v-if="showSearch" @search="handleSearch"/>
</template>