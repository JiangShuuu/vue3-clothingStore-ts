<template>
  <main class="grid grid-cols-4 gap-4">
    <NavBar />
    <section class="col-span-3 p-4">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import NavBar from '~/components/member/Navbar.vue'
import { useUserStore } from '~/stores/user'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'

const mainStore = useUserStore()
const router = useRouter()

</script>
