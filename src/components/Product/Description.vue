<template>
  <main>
    <p>{{data?.description}}</p>
  </main>
</template>

<script setup lang="ts">
defineProps<{ data:any }>()
</script>
