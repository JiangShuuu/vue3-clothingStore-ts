<template>
  <div class="flex flex-col items-center justify-center px-2 py-20">
    <div class="flex-col mb-4 flex-center">
      <img src="/image/404.png" class="w-1/2 max-w-lg mb-10" />
      <h1 class="mb-3 text-xl text-center lg:text-4xl">找不到此頁面</h1>
      <p class="mb-3 text-base text-center lg:text-xl">您要搜尋的頁面可能已刪除、更改名稱或暫時不可瀏覽。</p>
    </div>
    <div class="flex space-x-3">
      <router-link to="/" class="px-4 py-2 text-white rounded btn bg-primary">回首頁</router-link>
      <a href="#" class="px-4 py-2 text-white rounded btn bg-primary" @click.prevent="$router.back()">上一頁</a>
    </div>
  </div>
</template>
