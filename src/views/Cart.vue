<template>
  <main class="relative flex-col p-4 text-center flex-center lg:max-w-[1280px] lg:mx-auto">
    <CartProgress class="py-5" />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import CartProgress from '../components/Carts/CartProgress.vue'

</script>

<style lang="postcss" scoped>
.btn {
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}
.btn:active {
  transform: scale(0.98);
}
.btn:focus {
  outline: 0;
}
.btn:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
</style>
