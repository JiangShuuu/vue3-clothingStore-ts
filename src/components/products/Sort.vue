<template>
  <main class="relative justify-between flex-center">
    <span class="text-xl">{{ title }}</span>
    <button @mouseenter="isOpen = !isOpen" class="space-x-2 text-sm flex-center">
      <span>{{ name }}</span>
      <i class="w-2.5 h-2.5 fa-solid fa-chevron-down"></i>
    </button>
    <div class="absolute z-10 hidden w-40 h-auto p-2 space-y-1 bg-white border shadow-md right-2 top-7"
      :class="{ open: isOpen }">
      <button @click="changeSort('全部')" class="item">全部</button>
      <button @click="changeSort('上架時間: 由新到舊')" class="item">上架時間: 由新到舊</button>
      <button @click="changeSort('上架時間: 由舊到新')" class="item">上架時間: 由舊到新</button>
      <button @click="changeSort('價格: 由高至低')" class="item">價格: 由高至低</button>
      <button @click="changeSort('價格: 由低至高')" class="item">價格: 由低至高</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{ categories: any }>()

const route = useRoute()
const title = ref('全部商品')

watch(route, (newRoute) => {
  const routeId = Number(newRoute.query.categoryId)

  const itemName = props.categories.find((item: any) => {
    return item.id === routeId
  })

  itemName ? title.value = itemName.name : title.value = '全部商品'
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
  @apply text-gray-500 hover:text-black;
}
.open {
  @apply block;
}
</style>
