<script setup lang="ts">
import guide from '@/components/guide.vue';
import '@master/css';
import { 
  IconBrandVue,IconBrandReact,IconBrandReactNative,IconBrandHtml5,IconBrandCss3,
  IconBrandJavascript,IconBrandTypescript,
  IconBrandNodejs,IconBrandPython,
  IconBrandMysql,IconBrandMongodb,IconBrandFirebase
  } from '@tabler/icons-vue';

</script>
<template>
  <guide/>
  <div class="abs top:100 w:100% flex@>md justify-content:center color:white">
    <div class="p:50px text:center inline-block@<md">
      <h3>前端語言及框架</h3>
      <div class="rel f:25 h:350px w:250px r:10px bg:gray-20 shadow:4|6|crimson-58:hover ~300ms|ease-in">
          <ul class="rel top:10% list-style:none">
            <li class="p:5px"><IconBrandVue class="rel right:10px"/>Vue</li>
            <li class="p:5px"><IconBrandReact class="rel right:10px"/>React</li>
            <li class="p:5px"><IconBrandReactNative class="rel right:10px"/>ReactNative</li>
            <li class="p:5px"><IconBrandTypescript class="rel right:10px"/>Typescript</li>
            <li class="p:5px"><IconBrandHtml5 class="rel right:10px"/>Html5</li>
            <li class="p:5px"><IconBrandCss3 class="rel right:10px"/>Css3</li>
            <li class="p:5px"><IconBrandJavascript class="rel right:10px"/>Javascript</li>
          </ul>
      </div>
    </div>
    <div class="p:50px text:center inline-block@<md">
      <h3>後端語言及框架</h3>
      <div class="rel f:25 h:350px w:250px r:10px bg:gray-20 shadow:4|6|crimson-58:hover ~300ms|ease-in">
            <ul class="rel top:10% list-style:none">
              <li class="p:5px"><img src="@/assets/fastapi.svg" class="rel h:20px w:20px right:10px">FastAPI</li>
              <li class="p:5px"><img src="@/assets/flask.svg" class="rel h:25px w:25px right:10px"/>Flask</li>
              <li class="p:5px"><IconBrandTypescript class="rel right:10px"/>Typescript</li>
              <li class="p:5px"><IconBrandNodejs class="rel right:10px"/>Node.js</li>
              <li class="p:5px"><IconBrandPython class="rel right:10px"/>Python</li>
            </ul>
      </div>
    </div>
    <div class="p:50px text:center inline-block@<md">
      <h3>資料庫</h3>
      <div class="rel f:25 h:350px w:250px r:10px bg:gray-20 shadow:4|6|crimson-58:hover ~300ms|ease-in">
        <ul class="rel top:10% list-style:none">
          <li class="p:5px"><IconBrandMysql class="rel right:10px"/>MySQL</li>
          <li class="p:5px"><IconBrandMongodb class="rel right:10px"/>MongoDB</li>
          <li class="p:5px"><IconBrandFirebase class="rel right:10px"/>Firebace</li>
        </ul>
      </div>
    </div>
  </div>
</template>