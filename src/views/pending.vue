<template>
  <div class="flex flex-col items-center justify-center px-2 py-10">
    <div class="flex-col mb-4 flex-center">
      <img src="/image/build.png" class="w-1/2 max-w-lg mb-10" />
      <h1 class="mb-3 text-xl text-center lg:text-4xl">建構中...</h1>
      <p class="mb-3 text-base text-center lg:text-xl">目前的頁面尚未規劃，可點選下方部落格連結觀看其他作品。</p>
    </div>
    <div class="flex flex-col space-y-3">
      <a href="https://www.jiangshuuu.com/" target="_blank" class="px-8 py-4 text-2xl text-center text-white rounded bg-primary">JohnShu Blog</a>
      <div class="flex justify-between space-x-3">
        <router-link to="/" class="px-4 py-2 text-white bg-blue-300 rounded">回首頁</router-link>
        <a href="#" class="px-4 py-2 text-white bg-blue-300 rounded" @click.prevent="$router.back()">上一頁</a>
      </div>
    </div>
  </div>
</template>
