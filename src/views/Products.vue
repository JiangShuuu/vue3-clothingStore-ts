<template>
  <NavTab />
  <main class="flex flex-col px-4 bg-white lg:px-10 lg:py-10 lg:flex-row">
    <section class="justify-start lg:flex-col lg:w-1/5 flex-center">
      <Categroy />
    </section>
    <section class="flex-1">
      <Sort v-if="$route.name === 'hot-product'" :title="'熱賣商品'"/>
      <Cards />
    </section>
  </main>
</template>

<script setup lang="ts">
import NavTab from '../components/Global/NavTab.vue'
import Categroy from '../components/Products/Categroy.vue'
import Sort from '../components/Products/Sort.vue'
import Cards from '../components/Products/Cards.vue'
</script>
