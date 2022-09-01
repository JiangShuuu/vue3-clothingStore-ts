<template>
  <section class="flex-col hidden md:flex">
    <div class="hidden grid-flow-row grid-cols-5 py-3 text-sm border md:grid">
      <p>商品資料</p>
      <p>原價</p>
      <p>單件價格</p>
      <p>數量</p>
      <p>小計</p>
    </div>
    <div v-for="item in userCarts" :key="item.id">
      <div class="relative hidden grid-flow-row grid-cols-5 p-2 text-sm border md:grid">
        <div class="grid grid-flow-row grid-cols-2 ml-12 w-36 flex-center">
          <div class="w-16 h-16 overflow-hidden border">
            <img :src="item.image" class="object-cover" alt="">
          </div>
          <p class="text-sm">{{item.title}}</p>
        </div>
        <div class="flex-center">
          <s>{{item.og_price}}</s>
        </div>
        <div class="flex-center">
          <p>NT${{ item.price }}</p>
        </div>
        <div class="flex-center">
          <div class="justify-between w-32 p-2 border flex-center">
            <button @click="reduceCount(item)" :disabled="isLoading">
              <Icon icon="fa-solid:minus" class="w-4 h-4" />
            </button>
            <p class="text-sm">{{ item.Cart.productCount }}</p>
            <button @click="addCount(item)" :disabled="isLoading">
              <Icon icon="fa-solid:plus" class="w-4 h-4" />
            </button>
          </div>
        </div>
        <div class="flex-center">
          <p>NT${{ item.total }}</p>
        </div>
        <dev class="absolute top-7 right-8" @click="userStore.deleteCart(item)">
          <Icon icon="icon-park-outline:delete-five" class="w-5 h-5 text-gray-500 cursor-pointer" />
        </dev>
      </div>
    </div>
  </section>
  <button>按我</button>
  <section class="md:hidden">
    <div class="flex justify-between p-2">
      <div class="flex space-x-2">
        <div class="w-16 h-16 overflow-hidden border">
          <img
            src="https://images.unsplash.com/photo-1657879005446-fd4563beddb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            class="object-cover" alt="">
        </div>
        <p class="text-sm">防風上衣</p>
      </div>
      <div class="flex flex-col items-end justify-between text-sm">
        <Icon icon="icon-park-outline:delete-five" class="w-5 h-5 text-gray-500 cursor-pointer" />
        <p>NT$450</p>
      </div>
    </div>
    <div class="justify-between p-2 flex-center">
      <div class="justify-between w-32 p-2 border flex-center">
        <Icon icon="fa-solid:minus" class="w-4 h-4 cursor-pointer" />
        <p class="text-sm">2</p>
        <Icon icon="fa-solid:plus" class="w-4 h-4 cursor-pointer" />
      </div>
      <p>NT$900</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
import { useUserStore } from '~/stores/user'
import { ref } from 'vue'
import userAPI from '~/apis/user'

// store
const userStore = useUserStore()
const mainStore = useCounterStore()
const userCarts = userStore.carts

// ref
const isLoading = ref(false)

async function addCount (item:any) {
  await userAPI.addCount(item.id)
    .then(() => {
      isLoading.value = true

      item.Cart.productCount += 1
      item.total = item.Cart.productCount * item.price
      mainStore.addOrderCount(item)

      isLoading.value = false
    })
    .catch(err => {
      console.log(err)
    })
}

async function reduceCount (item:any) {
  await userAPI.reduceCount(item.id)
    .then(() => {
      isLoading.value = true

      item.Cart.productCount -= 1
      item.total = item.Cart.productCount * item.price
      mainStore.reduceOrderCount(item)

      isLoading.value = false
    })
    .catch(err => {
      console.log(err)
    })
}
</script>
