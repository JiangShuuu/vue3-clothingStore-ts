<template>
  <main class="grid grid-cols-6 gap-4">
    <NavBar />
    <section class="col-span-5 p-4">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import NavBar from '~/components/member/Navbar.vue'
</script>
