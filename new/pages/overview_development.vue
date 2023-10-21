<template>
  <div class="abs top:20vh w:100% text:center f:20 color:white flex@>md jc:center@>md">
    <section class="inline-block px:10 mb:20px">
      <h2>{{ $t('frontend') }}</h2>
      <div class="h:400px w:300px bg:gray-20 r:10 shadow:4|6|crimson-58:hover ~300ms|ease-in">
        <ul class="list-style:none p:30px">
          <li class="p:5px flex jc:center"><IconBrandVue class="rel right:10px"/>Vue</li>
          <li class="p:5px flex jc:center"><IconBrandNuxt class="rel right:10px"/>Nuxt</li>
          <li class="p:5px flex jc:center"><IconBrandJavascript class="rel right:10px"/>Javascript</li>
          <li class="p:5px flex jc:center"><IconBrandTypescript class="rel right:10px"/>Typescript</li>
          <li class="p:5px flex jc:center"><IconBrandReact class="rel right:10px"/>React、ReactNative</li>
        </ul>
      </div>
    </section>
    <section class="inline-block px:10 mb:20px">
      <h2>{{ $t('backend') }}</h2>
      <div class="h:400px w:300px bg:gray-20 r:10 shadow:4|6|crimson-58:hover ~300ms|ease-in">
        <ul class="list-style:none p:30px">
          <li class="p:5px"><img src="@/assets/fastapi.svg" class="rel h:20px w:20px right:10px">FastAPI</li>
          <li class="p:5px"><img src="@/assets/flask.svg" class="rel h:25px w:25px right:10px"/>Flask</li>
          <li class="p:5px"><IconBrandTypescript class="rel right:10px"/>Typescript</li>
          <li class="p:5px"><IconBrandNodejs class="rel right:10px"/>Node.js</li>
          <li class="p:5px"><IconBrandPython class="rel right:10px"/>Python</li>
        </ul>
      </div>
    </section>
    <section class="inline-block px:10 mb:20px">
      <h2>{{ $t('database') }}</h2>
      <div class="h:400px w:300px bg:gray-20 r:10 shadow:4|6|crimson-58:hover ~300ms|ease-in">
          <ul class="list-style:none p:30px">
            <li class="p:5px"><IconBrandMysql class="rel right:10px"/>MySQL</li>
            <li class="p:5px"><IconBrandMongodb class="rel right:10px"/>MongoDB</li>
          </ul>
      </div>
    </section>
</div>
</template>

<script setup lang="ts">
import {
  IconBrandVue, IconBrandReact,IconBrandNuxt, IconBrandHtml5, IconBrandCss3,
  IconBrandJavascript, IconBrandTypescript,
  IconBrandNodejs, IconBrandPython,
  IconBrandMysql, IconBrandMongodb, IconBrandFirebase
} from '@tabler/icons-vue';
</script>

<style scoped>

</style>