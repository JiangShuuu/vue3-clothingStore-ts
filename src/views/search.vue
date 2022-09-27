<template>
  <Head>
    <title>Life Style 商品搜尋</title>
    <meta key="description" name="description" content="Life Style Search - JiangShuProfile">
    <meta key="og:title" property="og:title" content="Life Style Search">
    <meta key="og:url" property="og:url" :content="url" />
    <meta key="og:description" property="og:description" content="Life Style Search - JiangShuProfile">
    <meta key="og:site_name" property="og:site_name" content="Life Style Search" />
    <meta key="og:type" property="og:type" content="Life Style type" />
    <meta key="og:image" property="og:image" content="/image/shop01.jpg" />
    <meta key="og:image:width" property="og:image:width" content="1200">
    <meta key="og:image:height" property="og:image:height" content="630">
    <meta key="og:image:alt" property="og:image:alt" content="Life Style Search" />
  </Head>
  <main class="flex-col mt-10 flex-center">
    <h1 class="text-2xl">搜尋商品</h1>
    <form @submit.prevent="get()" class="mt-10 flex-center">
      <input type="text" v-model="keyword" placeholder="輸入關鍵字..." class="p-2 border rounded-lg">
      <button class="p-2 ml-5 text-white border rounded-lg bg-primary" type="submit" >Search</button>
    </form>
    <section class="w-full h-full flex-center">
      <div v-if="!products" class="h-[500px] flex-center">
        <h1 class="text-3xl">查不到此商品，請輸入其他關鍵字！</h1>
      </div>
      <div v-else class="my-10">
        <div v-for="item in products" :key="item.id">
          <router-link :to="`/product/${item.id}`" class="flex-col mb-2 border flex-center">
            <div class="grid grid-flow-row grid-cols-3 p-2 text-sm">
              <div class="grid grid-flow-row grid-cols-2 ml-12 w-36 flex-center">
                <div class="w-16 h-16 overflow-hidden border">
                  <img :src="item.image" class="object-cover" alt="">
                </div>
                <p class="text-sm">{{item.title}}</p>
              </div>
              <div class="flex-center">
                <s>{{item.og_price}}</s>
              </div>
              <div class="flex-center">
                <p>NT${{ item.price }}</p>
              </div>
            </div>
            <span>{{item.short_intro}}</span>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useCounterStore } from '~/stores/counter'
import { SearchProducts } from '~/plugins/type'
import productAPI from '~/apis/product'
import { Head } from '@vueuse/head'

const url = `${import.meta.env.VITE_URL}/search`

onMounted(() => {
  keyword.value = mainCount.searchText
  get()
})

const mainCount = useCounterStore()
const keyword = ref('')
const products = ref()

async function get () {
  try {
    if (keyword.value === '') {
      return
    }
    const { data } = await productAPI.searchProducts(keyword.value)

    products.value = data.data.products as SearchProducts

    mainCount.searchText = keyword.value
  } catch (err) {
    console.log(err)
  }
}
</script>
