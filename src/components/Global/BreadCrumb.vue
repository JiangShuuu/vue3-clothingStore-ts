<template>
  <ol class="flex items-center mx-3 mt-5 space-x-2 text-sm text-gray-500 cursor-pointer md:mx-10">
    <li v-for="(item, i) in breadcrumbList" :key="i" class="pl-2">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
    </li>
  </ol>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const breadcrumbList = ref()

watch(route, () => {
  getBreadcrumbs()
})
onMounted(() => {
  getBreadcrumbs()
})

const isHome = (name:any) => {
  return name === 'Home'
}
const getBreadcrumbs = () => {
  let matched:any = route.matched
  console.log(matched)
  if (!isHome(route.name)) {
    matched = [{ path: '/', meta: { title: '首頁' } }].concat(matched)
  }
  breadcrumbList.value = matched
}

</script>

<style lang="postcss" scoped>
  li::after {
    content: '/';
    @apply ml-4;
  }
  li:last-child::after {
    content: '';
  }
</style>
