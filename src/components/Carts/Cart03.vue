<template>
  <main class="w-full">
    <div class="space-y-4 py-44">
      <h2 class="text-3xl text-primary">成功完成訂單！</h2>
      <h3 class="text-lg">前往<span class="text-primary">會員專區</span>查看訂單</h3>
      <router-link to="/products" class="block text-lg">選購更多商品</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'
import { onMounted } from 'vue'

const mainStore = useCounterStore()

onMounted(() => {
  mainStore.progress.progressNum = '100%'
  mainStore.progress.circle3 = true
})
</script>
