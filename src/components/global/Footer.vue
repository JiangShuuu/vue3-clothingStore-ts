<template>
  <div class="fixed bottom-0 w-full h-16 bg-white md:hidden">
    <ul class="justify-around h-full flex-center">
      <router-link to="/" class="flex-center" :class="['icon', { active: $route.path === '/' }]">
        <Icon icon="ant-design:home-outlined" class="w-6 h-6 my-1" />
        <span>首頁</span>
      </router-link>
      <router-link to="/search" class="flex-center" :class="['icon', { active: $route.path === '/search' }]">
        <Icon icon="fe:search" class="w-6 h-6 my-1" />
        <span>搜尋商品</span>
      </router-link>
      <router-link to="/favorite" class="flex-center" :class="['icon', { active: $route.path === '/favorite' }]">
        <Icon icon="clarity:heart-line" class="w-5 h-5 my-1" />
        <span>我的收藏</span>
      </router-link>
      <router-link to="/cart" class="relative flex-center" :class="['icon', { active: $route.path === '/cart' }]">
        <Icon icon="eva:shopping-cart-outline" class="w-5 h-5 my-1" />
        <span>購物車</span>
        <div class="absolute w-4 h-4 rounded-full -top-0.5 right-0 bg-primary flex-center">
          <p class="text-[1px] text-white">{{user.carts.length || 0}}</p>
        </div>
      </router-link>
    </ul>
  </div>
  <div class="hidden contain md:block">
    <div class="flex-col w-full bg-white flex-center">
      <div class="items-start justify-around w-[90%] flex-center">
        <div class="flex-center">
          <img class="w-40 h-40" src="/image/logo.png" alt="" />
        </div>
        <ul class="flex flex-col">
          <li class="text_title">客戶服務</li>
          <router-link to="/pending" class="text_item">運送說明</router-link>
          <router-link to="/pending" class="text_item">退換貨相關</router-link>
          <router-link to="/pending" class="text_item">付款資訊</router-link>
          <router-link to="/pending" class="text_item">FAQ</router-link>
        </ul>
        <ul class="flex flex-col">
          <li class="text_title">關於我們</li>
          <router-link to="/pending" class="text_item">品牌故事</router-link>
          <router-link to="/pending" class="text_item">媒體連繫</router-link>
          <router-link to="/pending" class="text_item">Press kit</router-link>
        </ul>
        <ul class="flex flex-col">
          <li class="text_title">隱私政策</li>
          <router-link to="/pending" class="text_item">隱私權政策</router-link>
          <router-link to="/pending" class="text_item">Cookie</router-link>
          <router-link to="/pending" class="text_item">GDPR</router-link>
        </ul>
        <ul class="flex flex-col">
          <li class="text_title">追蹤Life Style</li>
          <li class="text_item">+886 0912697801</li>
          <div class="space-x-2 flex-center">
            <Icon icon="akar-icons:facebook-fill" />
            <Icon icon="akar-icons:instagram-fill" />
            <Icon icon="bxl:medium-old" />
          </div>
        </ul>
      </div>
      <div class="flex-col mt-1 mb-4 flex-center">
        <span class="font-thin">@2022 CopyRight</span>
        <span class="font-thin">本站僅作品練習，圖資來源為網路資源，無任何商業營利用途</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
</script>

<style lang="postcss" scoped>
.text_title {
  @apply py-2 text-lg font-normal cursor-default;
}
.text_item {
  @apply py-0.5 text-gray-400 hover:text-primary cursor-pointer;
}
.icon {
  @apply flex flex-col my-1 text-gray-400 hover:text-primary cursor-pointer;
}
.active {
  @apply text-primary
}
</style>
