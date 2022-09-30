<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const layout = ref()

watch(route, () => {
  if (route.meta.layout) {
    layout.value = `${route.meta.layout}-layout`
  } else {
    layout.value = 'default-layout'
  }
})

</script>
