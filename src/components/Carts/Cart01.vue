<template>
  <section class="flex-col block w-full space-y-3 flex-center">
    <h2 class="text-2xl underline underline-offset-4 text-primary">購物車</h2>
    <CartLogin />
    <section class="border">
      <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
        <p>購物車</p>
        <p>(1 件)</p>
      </div>
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
  </section>
</template>

<script setup lang="ts">
import CartLogin from './CartLogin.vue'
</script>
