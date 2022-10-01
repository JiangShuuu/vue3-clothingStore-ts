<template>
  <div>
    adminhihihi
    <button @click="logout">登出</button>
  </div>
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
