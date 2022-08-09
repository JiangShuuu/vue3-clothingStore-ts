<template>
  <NavTab />
  <main class="w-full h-full px-4 space-y-6 md:px-6 lg:max-w-[1280px] lg:mx-auto">
    <Header v-if="result" :data="result" />
    <section>
      <div class="justify-around text-lg flex-center ">
        <router-link :to="{ name: 'description'}" class="hover:text-primary hover:underline hover:underline-offset-4">
          商品描述</router-link>
        <router-link :to="{ name: 'more'}" class="hover:text-primary hover:underline hover:underline-offset-4">
          了解更多</router-link>
        <router-link :to="{ name: 'payment' }" class="hover:text-primary hover:underline hover:underline-offset-4">
          送貨付款方式</router-link>
        <router-link :to="{ name: 'comment' }" class="hover:text-primary hover:underline hover:underline-offset-4">
          顧客評價
        </router-link>
      </div>
      <router-view />
    </section>
  </main>
</template>
<script setup lang="ts">
import NavTab from '~/components/Global/NavTab.vue'
import Header from '~/components/Product/Header.vue'
import productsAPI from '~/apis/product'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const { id } = route.params
const result = ref()

onMounted(() => {
  get(id)
})

async function get (id:any) {
  const { data } = await productsAPI.getProduct(id)
  result.value = data.data.product
  console.log(result.value)
}

</script>
