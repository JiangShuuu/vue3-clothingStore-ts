<template>
  <main class="grid grid-cols-2 gap-3 mt-4 lg:grid-cols-3 justify-items-center xl:gap-8 xl:grid-cols-4 xl:px-14">
    <template v-for="arr in cards" :key="arr.id">
      <section class="relative cursor-pointer" @mouseenter="arr.isOpen = true" @mouseleave="arr.isOpen = false">
          <router-link :to="`/product/${arr.id}`" class="block overflow-hidden w-44 md:w-56 aspect-3/4">
            <img v-src="arr.image" src="/image/loading.gif" alt="">
          </router-link>
          <div v-if="arr.isCart"
            class="absolute bottom-0 z-10 origin-bottom scale-y-0 opacity-0 cursor-pointer flex-center hover:bg-black"
            :class="{ ani : arr.isOpen }" @click="deleteCart(arr)">
            <div class="h-10 p-2 bg-black w-44 md:w-56 opacity-30"></div>
            <span class="absolute text-white opacity-0" :class="{ showtext : arr.isOpen }">移除購物車</span>
          </div>
          <div v-else
            class="absolute bottom-0 z-10 origin-bottom scale-y-0 opacity-0 cursor-pointer flex-center hover:bg-black"
            :class="{ ani : arr.isOpen }" @click="addCart(arr)">
            <div class="h-10 p-2 bg-black w-44 md:w-56 opacity-30"></div>
            <span class="absolute text-white opacity-0" :class="{ showtext : arr.isOpen }">加入購物車</span>
          </div>
      </section>
    </template>
  </main>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import usersAPI from '~/apis/user'

const mainUser = useUserStore()
const route = useRouter()
const toast = useToast()
const props = defineProps<{ cards: any }>()

props.cards.forEach((element:any) => {
  element.isOpen = false
})

async function addCart (product:any) {
  try {
    if (!mainUser.currentUser) {
      toast.error('請先登入')
      return route.push('/signIn')
    }

    const { data } = await usersAPI.addCart(product.id)
    product.Cart = {
      productCount: 1
    }
    mainUser.carts.push(product)
    product.isCart = true
  } catch (error) {
    console.log(error)
  }
}

async function deleteCart (product:any) {
  try {
    const { data } = await usersAPI.deleteCart(product.id)
    mainUser.carts = mainUser.carts.filter(item => item.id !== product.id)
    product.isCart = false
  } catch (error) {
    console.log(error)
  }
}

</script>

<style lang="postcss" scoped>
.showtext {
  @apply opacity-100;
}
.ani {
  @apply scale-y-100 opacity-100 origin-bottom duration-200 transition ease-linear ;
}
</style>
