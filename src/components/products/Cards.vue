<template>
  <main class="grid grid-cols-2 gap-3 mt-4 md:grid-cols-3 justify-items-center lg:gap-4 lg:grid-cols-4 lg:px-14">
    <div class="relative cursor-pointer" v-for="arr in arrs" :key="arr.id" @mouseenter="arr.isOpen = true"
      @mouseleave="arr.isOpen = false">
      <div class="overflow-hidden w-44 md:w-56 aspect-3/4">
        <img class="object-cover"
          src="https://images.unsplash.com/photo-1656534898267-02e027ce3f6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="">
      </div>
      <div class="absolute bottom-0 origin-bottom scale-y-0 opacity-0 cursor-pointer flex-center hover:bg-black"
        :class="{ ani : arr.isOpen }">
        <div class="h-10 p-2 bg-black w-44 md:w-56 opacity-30"></div>
        <span class="absolute text-white opacity-0" :class="{ showtext : arr.isOpen }">加入購物車</span>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const arrs = reactive([
  {
    id: 1,
    isOpen: false
  },
  {
    id: 2,
    isOpen: false
  },
  {
    id: 3,
    isOpen: false
  },
  {
    id: 4,
    isOpen: false
  },
  {
    id: 5,
    isOpen: false
  },
  {
    id: 6,
    isOpen: false
  },
  {
    id: 7,
    isOpen: false
  },
  {
    id: 8,
    isOpen: false
  },
  {
    id: 9,
    isOpen: false
  }

])

</script>

<style lang="postcss" scoped>
.showtext {
  @apply opacity-100;
}
.ani {
  @apply scale-y-100 opacity-100 origin-bottom duration-200 transition ease-linear ;
}
</style>
