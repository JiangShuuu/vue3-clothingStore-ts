<template>
  <p>03</p>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'
import { onMounted } from 'vue'

const mainStore = useCounterStore()

onMounted(() => {
  mainStore.progress.circle3 = true
})
</script>
