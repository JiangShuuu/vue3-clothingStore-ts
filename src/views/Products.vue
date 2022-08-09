<template>
  <BreadCrumb />
  <main class="flex flex-col px-4 bg-white lg:px-10 lg:py-10 lg:flex-row">
    <section class="justify-start lg:flex-col lg:w-1/5 flex-center">
      <Categroy />
    </section>
    <section class="flex-1">
      <Sort />
      <Cards v-if="result" :cards="result" />
    </section>
  </main>
</template>

<script setup lang="ts">
import BreadCrumb from '~/components/Global/BreadCrumb.vue'
import Categroy from '../components/Products/Categroy.vue'
import Sort from '../components/Products/Sort.vue'
import Cards from '../components/Products/Cards.vue'
import productsAPI from '~/apis/product'
import { ref } from 'vue'

interface Products {
  Category: Object,
  categoryID: Number,
  description: String,
  id: Number,
  image: String,
  isOpen: Boolean,
  og_price: Number,
  price: Number,
  short_intro: String,
  title: String
}

const result = ref()

async function get () {
  const { data } = await productsAPI.getProducts()
  result.value = data.data.data as Products
  console.log(result.value)
}

get()
</script>
