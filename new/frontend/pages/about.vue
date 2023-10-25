<template>
  <div class="text:center top:15vh abs w:100vw">
    <section class="p:20px {flex;jc:center;ai:center}@>md">
      <h2 class="color:white {flex;ai:center;p:20px}@>md"><IconBrandDiscordFilled class="mr:10px"/> Discord</h2>
      <iframe class="h:30vh w:100vw@<xs w:400@>xs r:10px shadow:6|4|crimson-58:hover ~300ms|ease-in" src="https://lanyard.cnrad.dev/api/503043347246743567?idleMessage=I%20hate%20my%20life%20"/>
    </section>
    <section class="p:20px">
      <h1 class="color:white p:25px"><IconBrandX/> My X (twitter) <a href="https://twitter.com/TommcyOWO" target="_blank" class="color:white f:18">@TommcyOWO</a></h1>
      <h1 class="color:white p:25px"><IconBrandGithub/> My Github <a href="https://github.com/tommcyOWO/" target="_blank" class="color:white f:18">@TommcyOWO</a></h1>
    </section>
    <section class="color:white p:20px">
      <div class="rel block text:center">
        <h2>關於Tomycat的介紹：</h2>
        <p>一位剛15歲國中準考生，正準備面對那<del class="text-decoration:line-through">可悲</del>國民會考。你對我有興趣?好奇怪的人。</p>
        <p>被所有人討厭的超級怪胎 ಥ⌣ಥ</p>
        <p>參加過110年度貓咪盃，從那時真正開始我的Coding人生到現在!!!</p>
        <p>很無聊對吧?</p>
        <p>支持居住正義；支持司法改革；支持醫用大麻合法化；支持多元性別；支持多元性取向</p>
      </div>
    </section>
  </div>
  <div class="abs top:110vh h:10px w:100%"/>
</template>


<script setup lang="ts">
import { IconBrandDiscordFilled, IconBrandX, IconBrandGithub } from '@tabler/icons-vue';
import { useTitle } from '@vueuse/core';

const { locale } = useI18n()

const title = useTitle();
const focused = useWindowFocus();

watch(focused, (isFocused) => {
  if (isFocused) {
    title.value = locale.value === 'taiwan_ch' ? "關於Tomycat ewe":"About Tomycat ewe";
  } else {
    title.value = locale.value === 'taiwan_ch' ? "關於Tomycat =w=" : "About Tomycat =w=";
  }
});
</script>

<style scoped>

</style>