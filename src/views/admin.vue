<template>
  <main class="flex">
    <Sidebar />
    <section class="p-8">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import Sidebar from '~/components/admin/Sidebar.vue'
</script>
