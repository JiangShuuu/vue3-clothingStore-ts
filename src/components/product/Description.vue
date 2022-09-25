<template>
  <main>
    <p>{{data.description}}</p>
  </main>
</template>

<script setup lang="ts">
import { Product } from '~/plugins/type'
defineProps<{ data:Product }>()
</script>
