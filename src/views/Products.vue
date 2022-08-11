<template>
  <BreadCrumb />
  <main class="flex flex-col px-4 bg-white lg:px-10 lg:py-10 lg:flex-row">
    <section class="justify-start lg:flex-col lg:w-1/5 flex-center">
      <Categroy v-if="categories" :categories="categories" />
    </section>
    <section class="flex-1">
      <Sort v-if="categories" :categories="categories" />
      <div>
        <Cards v-if="result" :cards="result" />
        <Pagination v-if="pagination && pagination.pages.length > 1" :category-num="categoryNum"
          :current-page="pagination.currentPage" :total-page="pagination.pages" :previous-page="pagination.prev"
          :next-page="pagination.next" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import BreadCrumb from '~/components/Global/BreadCrumb.vue'
import Categroy from '../components/Products/Categroy.vue'
import Sort from '../components/Products/Sort.vue'
import Cards from '../components/Products/Cards.vue'
import Pagination from '~/components/Products/Pagination.vue'
import productsAPI from '~/apis/product'
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

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

const route = useRoute()
const result = ref()
const pagination = ref()
const categories = ref()
const categoryNum = ref()

const { page = '', categoryId = '' } = route.query
get(page, categoryId)

async function get (page:any, categoryId:any) {
  const { data } = await productsAPI.getProducts(page, categoryId)

  result.value = data.data.data as Products
  pagination.value = data.data.pagination
  categories.value = data.data.categories
  categoryNum.value = categoryId
}

onBeforeRouteUpdate((to, from, next) => {
  const { page = '', categoryId = '' } = to.query
  get(page, categoryId)
  next()
})
</script>
