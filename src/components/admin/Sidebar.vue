<template>
  <main class="flex-col justify-start py-10 space-y-10 border-b-2 border-r-2 flex-center">
    <router-link to="/admin/products" :class="['available',{ active: $route.name === 'adminProducts' }]">商品列表</router-link>
    <router-link to="/admin/categories" :class="['available',{ active: $route.name === 'adminCategories' }]">分類列表</router-link>
    <button @click="logout" class="text-lg hover:text-primary">登出</button>
  </main>
</template>
<script lang="ts" setup>
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'

const mainStore = useUserStore()
const router = useRouter()

function logout () {
  mainStore.revokeAuthentication()
  router.push('/signin')
}
</script>

<style lang="postcss" scoped>
.active {
  @apply text-primary text-xl underline underline-offset-4;
}

.available:hover {
  @apply text-primary underline underline-offset-4;
}
</style>
