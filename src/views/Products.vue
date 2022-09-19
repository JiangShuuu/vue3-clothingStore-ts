<template>
  <Loading v-if="loading"/>
  <template v-else>
    <BreadCrumb />
    <main class="flex flex-col px-4 bg-white lg:px-10 lg:py-10 lg:flex-row">
      <section class="justify-start lg:flex-col lg:w-1/5 flex-center">
        <Categroy v-if="categories" :categories="categories" :sort-name="sortName" :value-name="valueName" />
      </section>
      <section class="flex-1">
        <Sort v-if="categories" :category-name="categoryName" />
        <div class="space-y-20">
          <Cards v-if="result" :cards="result" />
          <Pagination v-if="pagination && pagination.pages.length > 1" :category-num="categoryNum"
            :current-page="pagination.currentPage" :total-page="pagination.pages" :previous-page="pagination.prev"
            :next-page="pagination.next" :sort-name="sortName" :value-name="valueName" />
        </div>
      </section>
    </main>
  </template>
</template>

<script setup lang="ts">
import BreadCrumb from '~/components/global/BreadCrumb.vue'
import Categroy from '~/components/products/Categroy.vue'
import Sort from '~/components/products/Sort.vue'
import Cards from '~/components/products/Cards.vue'
import Pagination from '~/components/products/Pagination.vue'
import productsAPI from '~/apis/product'
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useToast } from 'vue-toastification'

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
const sortName = ref()
const valueName = ref()
const categoryName = ref()
const toast = useToast()
const loading = ref(true)

const { page = '', categoryId = '', sort = '', value = '' } = route.query
get(page, categoryId, sort, value)

async function get (page:any, categoryId:any, sort:any, value:any) {
  try {
    loading.value = true
    const { data } = await productsAPI.getProducts(page, categoryId, sort, value)

    result.value = data.data.data as Products
    pagination.value = data.data.pagination
    categories.value = data.data.categories
    categoryNum.value = categoryId
    sortName.value = sort
    valueName.value = value

    console.log(result.value)

    // SortTitle
    const routeId = Number(route.query.categoryId)
    const itemName = categories.value.find((item: any) => {
      return item.id === routeId
    })

    itemName ? categoryName.value = itemName.name : categoryName.value = '全部商品'

    loading.value = false
  } catch (err) {
    loading.value = false
    toast.error('系統錯誤請稍候再試')
  }
}

onBeforeRouteUpdate((to, from, next) => {
  const { page = '', categoryId = '', sort = '', value = '' } = to.query
  get(page, categoryId, sort, value)

  next()
})
</script>
