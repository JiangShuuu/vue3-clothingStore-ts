<template>
  <NavTab />
  <main class="w-full h-full px-4 space-y-6 md:px-6 lg:max-w-[1280px] lg:mx-auto">
    <section class="w-full pt-6 md:flex md:space-x-6">
      <section class="lg:w-1/2 flex-center">
        <div class="mr-2 space-y-1">
          <div class="w-10 overflow-hidden aspect-3/4 md:w-16">
            <img class="object-cover"
              src="https://images.unsplash.com/photo-1657017846821-89c482a53a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
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
        </div>
        <div class="w-48 overflow-hidden aspect-3/4 md:w-72">
          <img class="object-cover"
            src="https://images.unsplash.com/photo-1656143269388-e65183fac19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="">
        </div>
      </section>
      <section class="flex flex-col justify-around lg:w-1/2">
        <div class="border-b-[1px] space-y-2">
          <h2 class="text-2xl font-bold">涼感上衣</h2>
          <p class="text-sm line-clamp-6 line-clamp">
            才玉福次「同欠象六遠」造根長歌田冬汁幸幸在主背走民朵來，帽送二像。買它雨服金青來合經一更辛半；乍定空兄品浪亮室又空出位半就、活坡歡根和八食示東秋把行要結休西穴、着貝進哪，者吃弟請登。
            爪很校五什完刃土真室後：歡海英。旦耳誰兄行馬雨歌行沒寫更，金娘半早已苗飛葉年更貓新奶肉平國每、回良錯告五圓和紅星爬葉親，用吹帽卜麼秋羊帽字歡但長亮借可雲話從姐。冰巾片快松實八干寸色麼香不放邊山。</p>
          <br>
        </div>
        <div>
          <div class="flex items-end pt-4 space-x-2">
            <p class="text-xl text-primary">NT$200</p>
            <p class="pb-1 text-sm text-gray-400 line-through">NT$1000</p>
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
import NavTab from '../components/Global/NavTab.vue'
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(route.params)
</script>
