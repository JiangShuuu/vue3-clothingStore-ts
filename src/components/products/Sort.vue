<template>
  <main class="relative justify-between flex-center" @mouseenter="isOpen = true" @mouseleave="isOpen = false">
    <span class="text-xl">{{ categoryName }}</span>
    <button  class="space-x-2 text-sm flex-center">
      <span>{{ name }}</span>
      <i class="w-2.5 h-2.5 fa-solid fa-chevron-down"></i>
    </button>
    <div class="absolute z-10 hidden w-40 h-auto p-2 space-y-1 bg-white border shadow-md right-2 top-7"
      :class="{ open: isOpen }">
      <router-link to="Products" class="item">預設</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'createdAt', sort: 'DESC' } }" class="item">上架時間: 由新到舊</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'createdAt', sort: 'ASC' } }" class="item">上架時間: 由舊到新</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'price', sort: 'DESC' } }" class="item">價格: 由高至低</router-link>
      <router-link :to="{ name: 'Products', query: { value: 'price', sort: 'ASC' } }" class="item">價格: 由低至高</router-link>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  categoryName: {
    type: String,
    default: '全部商品'
  }
})

const route = useRoute()
const isOpen = ref(false)
const name = ref('全部')
const routerName = route.query

if (routerName.value === 'createdAt') {
  if (routerName.sort === 'DESC') {
    name.value = '上架時間: 由新到舊'
  } else {
    name.value = '上架時間: 由舊到新'
  }
} else if (routerName.value === 'price') {
  if (routerName.sort === 'DESC') {
    name.value = '價格: 由高至低'
  } else {
    name.value = '價格: 由低至高'
  }
} else {
  name.value = '預設'
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
