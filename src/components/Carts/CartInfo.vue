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
    <div class="menu" :class="{ 'menu-open': menuOpen }">
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
  @apply opacity-0;
  height: 500px;
  max-height: 0;
  overflow: hidden;
  transition: max-height .25s;
}
.menu-open {
  @apply opacity-100 transition duration-700 ease-in-out;
  max-height: 300px;
  transition: max-height .25s;
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
</style>
