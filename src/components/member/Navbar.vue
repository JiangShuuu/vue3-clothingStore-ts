<template>
  <main class="justify-around py-3 border-b-2 border-r-2 lg:justify-start lg:flex-col lg:py-10 lg:space-y-10 flex-center">
    <router-link to="/member/info" :class="['available',{ active: $route.name === 'memberInfo' }]">基本資料</router-link>
    <router-link to="/member/order" :class="['available',{ active: $route.name === 'memberOrder' }]">訂單紀錄</router-link>
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
