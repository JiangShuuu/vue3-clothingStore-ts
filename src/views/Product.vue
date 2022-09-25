<template>
  <Loading v-if="loading" />
  <template v-else>
    <BreadCrumb />
    <main class="w-full h-full px-4 space-y-6 md:px-6 lg:max-w-[1280px] lg:mx-auto">
      <Header v-if="result" :data="result.product" />
      <section>
        <div class="justify-around text-lg flex-center ">
          <router-link :to="{ name: 'description'}" :class="['available',{ active: $route.name === 'description' }]">
            商品描述</router-link>
          <router-link :to="{ name: 'more'}" :class="['available',{ active: $route.name === 'more' }]">
            了解更多</router-link>
          <router-link :to="{ name: 'payment' }" :class="['available',{ active: $route.name === 'payment' }]">
            送貨付款方式</router-link>
          <router-link :to="{ name: 'comment' }" :class="['available',{ active: $route.name === 'comment' }]">
            顧客評價
          </router-link>
        </div>
        <div class="p-4 my-4 flex-center">
          <router-view v-if="result" :data="result.product" />
        </div>
      </section>
    </main>
  </template>
</template>
<script setup lang="ts">
import BreadCrumb from '~/components/global/BreadCrumb.vue'
import Header from '~/components/product/Header.vue'
import productsAPI from '~/apis/product'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const { id } = route.params
const result = ref()
const loading = ref()

onMounted(() => {
  get(id)
})

async function get (id: any) {
  try {
    loading.value = true
    const { data } = await productsAPI.getProduct(id)
    result.value = data.data
    loading.value = false
  } catch (err) {
    loading.value = false
    console.log(err)
  }
}

</script>

<style lang="postcss" scoped>
.active {
  @apply text-primary underline underline-offset-4
}

.available {
  @apply hover: text-primary hover:underline hover:underline-offset-4;
}
</style>
