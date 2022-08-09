<template>
  <main class="p-4 flex-center">
    <p>{{data?.description}}</p>
  </main>
</template>

<script setup lang="ts">
defineProps<{ data:any }>()
</script>
