<template>
  <div class="fixed bottom-0 w-full h-16 bg-white md:hidden">
    <ul class="justify-around h-full flex-center">
      <router-link to="/" class="flex-center" :class="['icon', { active: $route.path === '/' }]">
        <i class="w-5 h-5 my-1 fas fa-home i"></i>
        <span>首頁</span>
      </router-link>
      <router-link to="/search" class="flex-center" :class="['icon', { active: $route.path === '/search' }]">
        <i class="w-5 h-5 my-1 fas fa-search "></i>
        <span>搜尋商品</span>
      </router-link>
      <router-link to="/favorite" class="flex-center" :class="['icon', { active: $route.path === '/favorite' }]">
        <i class="w-5 h-5 my-1 far fa-heart "></i>
        <span>我的收藏</span>
      </router-link>
      <router-link to="/shoppingCar" class="flex-center" :class="['icon', { active: $route.path === '/shoppingCar' }]">
        <i class="w-5 h-5 my-1 fas fa-shopping-bag "></i>
        <span>購物車</span>
      </router-link>
    </ul>
  </div>
  <div class="hidden contain md:block">
    <div class="flex-col w-full bg-white flex-center">
      <div class="items-start justify-around w-[90%] flex-center">
        <div class="flex-center">
          <img class="w-40 h-40" src="../assets/Icon/logo.png" alt="" />
        </div>
        <ul>
          <li class="text_title">客戶服務</li>
          <li class="text_item">運送說明</li>
          <li class="text_item">退換貨相關</li>
          <li class="text_item">付款資訊</li>
          <li class="text_item">FAQ</li>
        </ul>
        <ul>
          <li class="text_title">關於我們</li>
          <li class="text_item">品牌故事</li>
          <li class="text_item">媒體連繫</li>
          <li class="text_item">Press kit</li>
        </ul>
        <ul>
          <li class="text_title">隱私政策</li>
          <li class="text_item">隱私權政策</li>
          <li class="text_item">Cookie</li>
          <li class="text_item">GDPR</li>
        </ul>
        <ul>
          <li class="text_title">追蹤Life Style</li>
          <li class="text_item">+886 0912697801</li>
          <div class="space-x-2 flex-center">
            <li class="icon"><i class="fab fa-facebook"></i></li>
            <li class="icon"><i class="fab fa-instagram"></i></li>
            <li class="icon"><i class="fab fa-medium"></i></li>
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

<script setup>
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
