<template>
  <main class="flex ">
    <section class="w-30">
      <Sidebar />
    </section>
    <section class="flex-1 p-8">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import Sidebar from '~/components/admin/Sidebar.vue'
</script>
