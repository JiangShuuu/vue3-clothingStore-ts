<template>
  顧客評價
  {{ data.Comments }}
</template>

<script setup lang="ts">
import { Product } from '~/plugins/type'
defineProps<{ data:Product }>()
</script>
