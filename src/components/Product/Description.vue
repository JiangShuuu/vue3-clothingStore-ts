<template>
  <main>
    <p>{{data.product?.description}}</p>
  </main>
</template>

<script setup lang="ts">
defineProps<{ data:any }>()
</script>
