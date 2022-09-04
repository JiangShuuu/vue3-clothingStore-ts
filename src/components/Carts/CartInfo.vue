<template>
  <main class="border">
    <div class="justify-between p-3 flex-center">
      <h2 class="font-bold">合計: NT${{ mainStore.order.total }}</h2>
      <div class="flex items-center h-full">
        <button class="focus:outline-none" @click="menuOpen = !menuOpen">
          <Icon icon="ant-design:down-outlined" :class="{ 'burger-menu--active': menuOpen }" />
        </button>
      </div>
    </div>
    <hr />
    <div class="menu" :class="{ 'menu-open': menuOpen }">
      <!-- product -->
      <section class="mt-2 border-b">
        <div class="flex justify-between px-2">
          <div class="flex space-x-2">
            <div class="w-16 h-16 overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1657879005446-fd4563beddb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="object-cover" alt="">
            </div>
            <p class="text-sm">防風上衣</p>
          </div>
          <div class="flex items-end text-sm">
            <p>NT$450</p>
          </div>
        </div>
        <div class="justify-between p-2 text-sm flex-center">
          <div class="justify-between w-32 flex-center">
            <p>數量: 2</p>
          </div>
          <p>NT$900</p>
        </div>
      </section>
      <section class="mt-2 border-b">
        <div class="flex justify-between px-2">
          <div class="flex space-x-2">
            <div class="w-16 h-16 overflow-hidden border">
              <img
                src="https://images.unsplash.com/photo-1657879005446-fd4563beddb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                class="object-cover" alt="">
            </div>
            <p class="text-sm">防風上衣</p>
          </div>
          <div class="flex items-end text-sm">
            <p>NT$450</p>
          </div>
        </div>
        <div class="justify-between p-2 text-sm flex-center">
          <div class="justify-between w-32 flex-center">
            <p>數量: 2</p>
          </div>
          <p>NT$900</p>
        </div>
      </section>
      <!--  -->
      <div class="p-2">
        <div class="space-y-2">
          <div class="justify-between text-sm flex-center">
            <p>小計</p>
            <p>NT$900</p>
          </div>
          <div class="justify-between text-sm flex-center">
            <p>運費</p>
            <p>免費</p>
          </div>
          <div class="justify-between text-sm font-bold flex-center">
            <p>合計 (1件)</p>
            <p>NT$900</p>
          </div>
        </div>
      </div>
      <hr>
      <div class="w-full p-4 cursor-pointer flex-center" @click="menuOpen = !menuOpen">
        <Icon icon="ant-design:up-outlined" class="w-4 h-4" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCounterStore } from '~/stores/counter'
const mainStore = useCounterStore()
const menuOpen = ref(false)
const orderCountHeight = ref('0px')

onMounted(() => {
  count(2)
})

function count (num: number) {
  const height = (104 * num) + 150
  // 把單位加回去
  orderCountHeight.value = `${height}px`
}

</script>

<style lang="postcss" scoped>
.menu {
  height: v-bind(orderCountHeight);
  max-height: 0;
  overflow: hidden;
  transition: max-height .25s;
}
.menu-open {
  @apply transition duration-700 ease-in-out;
  max-height: v-bind(orderCountHeight);
  transition: max-height .25s;
}

@keyframes icon-rotate {
  0% {
    transform: rotate(0deg)
  }
  25% {
    transform: rotate(45deg)
  }
  50% {
    transform: rotate(90deg)
  }
  75% {
    transform: rotate(120deg)
  }
  100% {
    transform: rotate(180deg)
  }
}

.burger-menu--active {
  animation: icon-rotate .2s ease-in-out;
  transform: rotate(180deg);
}
</style>
