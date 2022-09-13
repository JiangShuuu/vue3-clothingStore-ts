<template>
  <main class="flex-col py-10 space-y-10 border flex-center">
    <router-link to="/member/info" :class="['available',{ active: $route.name === 'info' }]">基本資料</router-link>
    <router-link to="/member/order" :class="['available',{ active: $route.name === 'order' }]">訂單紀錄</router-link>
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

.available {
  @apply hover:text-primary hover:underline hover:underline-offset-4;
}
</style>
