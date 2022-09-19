<template>
  顧客評價
  {{ data.product.Comments }}
</template>

<script setup lang="ts">
defineProps<{ data:any }>()
</script>
