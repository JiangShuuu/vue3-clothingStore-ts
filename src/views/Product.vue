<template>
  <NavTab />
  <main class="w-full h-full px-4 space-y-6 md:px-6 lg:max-w-[1280px] lg:mx-auto">
    <Header />
    <section>
      <div class="justify-around text-lg flex-center ">
        <router-link :to="{ name: 'description'}" class="hover:text-primary hover:underline hover:underline-offset-4">
          商品描述</router-link>
        <router-link :to="{ name: 'more'}" class="hover:text-primary hover:underline hover:underline-offset-4">
          了解更多</router-link>
        <router-link :to="{ name: 'payment' }" class="hover:text-primary hover:underline hover:underline-offset-4">
          送貨付款方式</router-link>
        <router-link :to="{ name: 'comment' }" class="hover:text-primary hover:underline hover:underline-offset-4">
          顧客評價
        </router-link>
      </div>
      <router-view />
    </section>
  </main>
</template>
<script setup lang="ts">
import NavTab from '../components/Global/NavTab.vue'
import Header from '~/components/Product/Header.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(route.params)
</script>
