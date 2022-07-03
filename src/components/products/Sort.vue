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

const route = useRoute()
const title = ref('全部商品')

watch(route, (newRoute) => {
  switch (newRoute.name) {
    case 'all': {
      title.value = '全部商品'
      break
    }
    case 'hot-product': {
      title.value = '熱門商品'
      break
    }
    case 'new-product': {
      title.value = '新上市'
      break
    }
    case 'clothes': {
      title.value = '熱銷上衣'
      break
    }
    case 'coat': {
      title.value = '精選外套'
      break
    }
    case 'pants': {
      title.value = '經典褲款'
      break
    }
    case 'specials': {
      title.value = '特價商品'
      break
    }
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
  @apply text-gray-500 hover:text-black;
}
.open {
  @apply block;
}
</style>
