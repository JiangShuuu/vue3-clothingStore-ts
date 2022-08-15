<template>
  我已登入
  <button @click="logout">登出</button>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'

const mainStore = useUserStore()
const router = useRouter()

function logout () {
  mainStore.revokeAuthentication()
  router.push('/signin')
}

</script>
