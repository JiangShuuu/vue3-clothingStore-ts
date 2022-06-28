<template>
  <NavTab />
  <main class="flex px-10 py-10 bg-white">
    <section class="flex-col justify-start w-1/5 flex-center">
      <Categroy />
    </section>
    <section class="flex-1">
      <div class="justify-between flex-center">
        <span class="text-xl">全部商品</span>
        <Sort />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import NavTab from '../components/global/NavTab.vue'
import Categroy from '../components/products/categroy.vue'
import Sort from '../components/products/Sort.vue'
</script>
