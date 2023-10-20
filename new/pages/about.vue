<template>
    <section class="rel w:100% top:20vh color:white">
    <div class="rel flex align-items:center justify-content:center">
      <div class="rel right:50px@>sm flex@>sm inline-block@<sm">
        <IconBrandDiscordFilled :size="40" class="mr:10px"/><h1>我的Discord</h1>
      </div>
      <iframe class="h:200px w:400px r:10px shadow:6|4|crimson-58:hover ~300ms|ease-in" src="https://lanyard.cnrad.dev/api/503043347246743567?idleMessage=I%20hate%20my%20life%20"></iframe>
    </div>
    <div class="rel flex align-items:center justify-content:center mt:50px w:100% p:20">
      <IconBrandX :size="40" class="mr:10px"/><h1>我的 X (twitter)</h1> <a class="rel color:white left:10px" href="https://twitter.com/TommcyOWO">@TommcyOWO</a>
    </div>
    <div class="rel flex align-items:center justify-content:center w:100% p:20">
      <IconBrandGithub :size="40" class="mr:10px"/><h1>我的github</h1> <a class="rel color:white left:10px" href="https://github.com/TommcyOWO">@TommcyOWO</a>
    </div>
    </section>
    <section class="rel w:100% top:25vh color:white">
      <div class="rel block text:center">
        <h2>關於Tomycat的介紹：</h2>
        <p>一位剛15歲國中準考生，正準備面對那<del class="text-decoration:line-through">可悲</del>國民會考。你對我有興趣?好奇怪的人。</p>
        <p>喜歡研究人類，探討人性，被所有人討厭的超級怪胎 ಥ⌣ಥ</p>
        <p>參加過110年度貓咪盃，從那時真正開始我的Coding人生到現在!!!</p>
        <p>很有趣對吧?</p>
        <p>支持居住正義；支持司法改革；支持醫用大麻合法化；支持多元性別；支持多元性取向</p>
      </div>
    </section>
    <div class="abs top:110vh h:10px w:100%"></div>
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