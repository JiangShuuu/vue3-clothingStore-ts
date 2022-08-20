<template>
  <main class="relative justify-between flex-center">
    <span class="text-xl">{{ categoryName }}</span>
    <button @mouseenter="isOpen = !isOpen" class="space-x-2 text-sm flex-center">
      <span>{{ name }}</span>
      <i class="w-2.5 h-2.5 fa-solid fa-chevron-down"></i>
    </button>
    <div class="absolute z-10 hidden w-40 h-auto p-2 space-y-1 bg-white border shadow-md right-2 top-7"
      :class="{ open: isOpen }">
      <router-link to="Products" @click="changeSort('預設')" class="item">預設</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'createdAt', sort: 'DESC' } }"
        @click="changeSort('上架時間: 由新到舊')" class="item">上架時間: 由新到舊</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'createdAt', sort: 'ASC' } }"
        @click="changeSort('上架時間: 由舊到新')" class="item">上架時間: 由舊到新</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'price', sort: 'DESC' } }" @click="changeSort('價格: 由高至低')"
        class="item">價格: 由高至低</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'price', sort: 'ASC' } }" @click="changeSort('價格: 由低至高')"
        class="item">價格: 由低至高</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

defineProps({
  categoryName: {
    type: String,
    default: '全部商品'
  }
})

const isOpen = ref(false)
const name = ref('全部')

function changeSort (newName:string) {
  name.value = newName
  isOpen.value = false
}
</script>

<style lang="postcss" scoped>
.item {
  @apply block text-gray-500 hover:text-black;
}
.open {
  @apply block;
}
</style>
