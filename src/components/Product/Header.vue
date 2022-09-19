<template>
  <section class="w-full pt-6 md:flex md:space-x-6">
    <section class="lg:w-1/2 flex-center">
      <!-- <div class="mr-2 space-y-1">
        <div class="w-10 overflow-hidden aspect-3/4 md:w-16">
          <img class="object-cover"
            src="https://images.unsplash.com/photo-1656143269388-e65183fac19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="">
        </div>
        <div class="w-10 overflow-hidden aspect-3/4 md:w-16">
          <img class="object-cover"
            src="https://images.unsplash.com/photo-1657010489882-5530566824be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="">
        </div>
        <div class="w-10 overflow-hidden aspect-3/4 md:w-16">
          <img class="object-cover"
            src="https://images.unsplash.com/photo-1656143269388-e65183fac19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="">
        </div>
      </div> -->
      <div class="w-48 overflow-hidden aspect-3/4 md:w-72">
        <img class="object-cover" :src="data.image" alt="">
      </div>
    </section>
    <section class="flex flex-col justify-around w-full lg:w-1/2">
      <div class="border-b-[1px] space-y-2">
        <h2 class="text-2xl font-bold">{{ data.title }}</h2>
        <p class="text-sm line-clamp-6 line-clamp">
          {{ data.short_intro }}
        </p>
        <br>
      </div>
      <div>
        <div class="flex items-end pt-4 space-x-2">
          <p class="text-xl text-primary">NT${{ data.price }}</p>
          <p class="pb-1 text-sm text-gray-400 line-through">NT${{ data.og_price }}</p>
        </div>
      </div>
      <div class="space-y-2">
        <div class="space-x-6 flex-center">
          <Icon icon="akar-icons:minus" />
          <p>1</p>
          <Icon icon="akar-icons:plus" />
        </div>
        <button class="w-full p-2 px-4 text-white rounded-lg bg-secondary">加入購物車</button>
        <div class="space-x-1 flex-center">
          <Icon icon="ant-design:heart-outlined" />
          <p>加入追蹤清單</p>
        </div>
        <div class="space-x-2 flex-center">
          <p class="">分享到</p>
          <Icon icon="bi:line" class="text-[#06C755] w-7 h-7" />
          <Icon icon="akar-icons:facebook-fill" class="text-[#4267B2] w-7 h-7" />
          <Icon icon="akar-icons:instagram-fill" class="text-[#E1306C] w-7 h-7" />
          <Icon icon="akar-icons:link-chain" class="text-[#4267a1] w-7 h-7" />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">

defineProps<{ data:any }>()
</script>
