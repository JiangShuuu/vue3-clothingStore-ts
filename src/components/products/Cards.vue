<template>
  <main class="grid grid-cols-2 gap-3 mt-4 md:grid-cols-3 justify-items-center lg:gap-4 lg:grid-cols-4 lg:px-14">
    <template v-for="arr in cards" :key="arr.id">
      <div class="relative cursor-pointer" @mouseenter="arr.isOpen = true"
        @mouseleave="arr.isOpen = false">
        <router-link :to="`/product/${arr.id}`" class="block overflow-hidden w-44 md:w-56 aspect-3/4">
          <ImageLoad :image-url="arr.image" />
        </router-link>
        <div v-if="arr.isCart" class="absolute bottom-0 origin-bottom scale-y-0 opacity-0 cursor-pointer flex-center hover:bg-black"
          :class="{ ani : arr.isOpen }" @click="mainUser.deleteCart(arr)" >
          <div class="h-10 p-2 bg-black w-44 md:w-56 opacity-30"></div>
          <span class="absolute text-white opacity-0" :class="{ showtext : arr.isOpen }">移除購物車</span>
        </div>
        <div v-else class="absolute bottom-0 origin-bottom scale-y-0 opacity-0 cursor-pointer flex-center hover:bg-black"
          :class="{ ani : arr.isOpen }" @click="mainUser.addCart(arr)" >
          <div class="h-10 p-2 bg-black w-44 md:w-56 opacity-30"></div>
          <span class="absolute text-white opacity-0" :class="{ showtext : arr.isOpen }">加入購物車</span>
        </div>
      </div>
    </template>
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import userAPI from '~/apis/user'

interface Products {
  Category: Object,
  categoryID: Number,
  description: String,
  id: Number,
  image: String,
  isOpen: Boolean,
  og_price: Number,
  price: Number,
  short_intro: String,
  title: String
}

const mainUser = useUserStore()
const toast = useToast()
const route = useRouter()
const props = defineProps<{ cards: any }>()
props.cards.forEach((element:any) => {
  element.isOpen = false
})
</script>

<style lang="postcss" scoped>
.showtext {
  @apply opacity-100;
}
.ani {
  @apply scale-y-100 opacity-100 origin-bottom duration-200 transition ease-linear ;
}
</style>
