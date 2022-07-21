<template>
  <main class="border">
    <div class="justify-between p-3 flex-center">
      <h2 class="font-bold">合計: NT$2800</h2>
      <div class="flex items-center h-full">
        <button class="focus:outline-none" @click="menuOpen = !menuOpen">
          <Icon icon="ant-design:down-outlined" :class="{ 'burger-menu--active': menuOpen }" />
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
