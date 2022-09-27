<template>
  <Head>
    <title>Life Style Cart</title>
    <meta key="description" name="description" content="Life Style Cart - JiangShuProfile">
    <meta key="og:title" property="og:title" content="Life Style Cart">
    <meta key="og:url" property="og:url" :content="url" />
    <meta key="og:description" property="og:description" content="Life Style Cart - JiangShuProfile">
    <meta key="og:site_name" property="og:site_name" content="Life Style Cart" />
    <meta key="og:type" property="og:type" content="Life Style type" />
    <meta key="og:image" property="og:image" content="/image/clothes.jpg" />
    <meta key="og:image:width" property="og:image:width" content="1200">
    <meta key="og:image:height" property="og:image:height" content="630">
    <meta key="og:image:alt" property="og:image:alt" content="Life Style Cart" />
  </Head>
  <main class="relative flex-col p-4 text-center flex-center lg:max-w-[1280px] lg:mx-auto">
    <CartProgress class="py-5" />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import CartProgress from '~/components/carts/CartProgress.vue'
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/user'
import { Head } from '@vueuse/head'

const url = `${import.meta.env.VITE_URL}/cart`
const mainUser = useUserStore()

onMounted(() => {
  mainUser.fetchCurrentUser()
})

</script>

<style lang="postcss" scoped>
.btn {
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}

.btn:active {
  transform: scale(0.98);
}

.btn:focus {
  outline: 0;
}

.btn:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
</style>
