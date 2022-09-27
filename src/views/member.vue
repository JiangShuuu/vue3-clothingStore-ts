<template>
  <Head>
    <title>Life Style 會員專頁</title>
    <meta key="description" name="description" content="Life Style Member - JiangShuProfile">
    <meta key="og:title" property="og:title" content="Life Style Member">
    <meta key="og:url" property="og:url" :content="url" />
    <meta key="og:description" property="og:description" content="Life Style Member - JiangShuProfile">
    <meta key="og:site_name" property="og:site_name" content="Life Style Member" />
    <meta key="og:type" property="og:type" content="Life Style type" />
    <meta key="og:image" property="og:image" content="/image/clothes.jpg" />
    <meta key="og:image:width" property="og:image:width" content="1200">
    <meta key="og:image:height" property="og:image:height" content="630">
    <meta key="og:image:alt" property="og:image:alt" content="Life Style Member" />
  </Head>
  <main class="grid grid-cols-6 gap-4">
    <NavBar />
    <section class="col-span-5 p-4">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import NavBar from '~/components/member/Navbar.vue'
import { Head } from '@vueuse/head'

const url = `${import.meta.env.VITE_URL}/member`
</script>
