<template>
  <main class="fixed z-50 hidden bottom-24 right-4 md:bottom-14 md:right-14" :class="{ open: active } "
    @click="onClick">
    <div
      class="flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer border-primary opacity-30 hover:opacity-80">
      <Icon icon="cil:arrow-thick-to-top" class="w-5 h-5 text-primary" />
    </div>
  </main>
</template>

<script setup lang="ts">

import { onMounted, onUnmounted, ref } from 'vue'

const active = ref(false)

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  window.scrollY > 200 ? active.value = true : active.value = false
}

function onClick () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

</script>

<style lang="postcss" scoped>
.open {
  display: block;
}

</style>
