<template>
  <main class="w-full max-w-[1280px] mx-auto mb-8">

    <Head>
      <title>Life Style Home Page</title>
      <meta key="description" name="description" content="JiangShuProfile">
      <meta key="og:title" property="og:title" content="Life Style Home Page">
      <meta key="og:url" property="og:url" :content="url" />
      <meta key="og:description" property="og:description" content="JiangShuProfile">
      <meta key="og:site_name" property="og:site_name" content="Life Style Page" />
      <meta key="og:type" property="og:type" content="Life Style type" />
      <meta key="og:image" property="og:image" content="" />
      <meta key="og:image:width" property="og:image:width" content="1200">
      <meta key="og:image:height" property="og:image:height" content="630">
      <meta key="og:image:alt" property="og:image:alt" content="LifeStyleHomePage"/>
    </Head>

    <Banner />
    <div class="flex-col w-full p-2 my-2 bg-gray-200 flex-center">
      <span class="text-xl font-light">HIGH QUALITY ASSURANCE</span>
      <span class="w-8 h-px my-2 bg-black"></span>
      <span class="text-sm font-extralight">每一件商品都經過嚴格篩選</span>
      <span class="text-sm font-extralight">- 力求時尚兼具好品質 -</span>
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
import { Head } from '@vueuse/head'

const url = import.meta.env.VITE_URL

</script>

<style lang="postcss" scoped>

</style>
