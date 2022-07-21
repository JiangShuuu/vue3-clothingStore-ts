<template>
  <main class="border">
    <div class="justify-between p-3 flex-center">
      <h2 class="font-bold">合計: NT$2800</h2>
      <div class="flex items-center h-full">
        <button class="focus:outline-none" @click="menuOpen = !menuOpen">
          <span :class="{ 'burger-menu--active': menuOpen }">V</span>
        </button>
      </div>
    </div>
    <div class="h-56 border menu" :class="{ 'menu-open': menuOpen }">
      123
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuOpen = ref(false)

</script>

<style lang="postcss" scoped>
.menu {
  @apply hidden opacity-0;
}
.menu-open {
  @apply block opacity-100;
}
.burger-menu::after,
.burger-menu::before {
  @apply absolute left-0;

  content: '';
  top: -6px;
  }

  .burger-menu::after {
    top: 6px;
  }

  .burger-menu--active {
    @apply bg-transparent;
  }

  .burger-menu--active::before {
    transform: rotate(45deg) translate(3px, 3px);
  }

  .burger-menu--active::after {
    transform: rotate(-45deg) translate(5px, -6px);
  }
</style>>
