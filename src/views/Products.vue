<template>
  <NavTab />
  <main class="flex flex-col px-4 bg-white lg:px-10 lg:py-10 lg:flex-row">
    <section class="justify-start lg:flex-col lg:w-1/5 flex-center">
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
import Categroy from '../components/products/Categroy.vue'
import Sort from '../components/products/Sort.vue'
</script>
