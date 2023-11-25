<template>
  <div class="text:center w:100% abs top:20vh color:white">
    <!-- <section v-for="repos in starred_publicRepos" :key="repos.id" class="p:10vh"> -->
      <!-- <h3>{{ repos.name }}</h3> -->
        <!-- <button> -->
          <!-- <a :href="repos.html_url">Go</a> -->
        <!-- </button> -->
    <!-- </section> -->
    <section class="p:10vh">
      <h2>想看到更多嗎?<br>去我的Github 看看吧!</h2>
    </section>
  </div>
</template>

<script setup lang="ts">
// import { Octokit } from "@octokit/rest";
// 
// const octokit = new Octokit({
  // auth: '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',
// });
// 
// const name = 'TommcyOWO';
// 
// const starred_publicRepos: any = ref([]);
// 
// onMounted(async () => {
  // try {
    // const response = await octokit.repos.listForUser({
      // username: name,
    // });
    // starred_publicRepos.value = response.data
  // } catch (error: any) {
    // console.error('獲取存儲庫列表時發生錯誤：', error.message);
  // }
// });

</script>

<style scoped>

</style>