<template>
  <main class="w-full max-w-[1280px] mx-auto mb-8">
    <Banner />
    <div class="flex-col w-full p-2 my-2 bg-gray-200 flex-center">
      <span class="text-xl font-light">HIGH QUALITY ASSURANCE</span>
      <span class="w-8 h-px my-2 bg-black"></span>
      <span class="text-sm font-extralight">每一件商品都經過嚴格篩選</span>
      <span class="text-sm font-extralight">- 力求時尚兼具好品質 -</span>
    </div>
    <div>
      test01
    </div>
    <Menu />
    <ShopNow />
    <Subscribe />
  </main>
</template>

<script setup lang="ts">
import Banner from '~/components/indexPage/Banner.vue'
import Menu from '~/components/indexPage/Menu.vue'
import ShopNow from '~/components/indexPage/ShopNow.vue'
import Subscribe from '~/components/indexPage/Subscribe.vue'
</script>

<style lang="postcss" scoped>
</style>
