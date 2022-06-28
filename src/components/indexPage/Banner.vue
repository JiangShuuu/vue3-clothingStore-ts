<template>
  <div>
    <swiper :modules="modules" :slides-per-view="1" :navigation="{
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev'
    }" :pagination="{ clickable: true }" :autoplay="{ delay: 2000 }">
      <swiper-slide v-for="(img, index) in imgs" :key="index">
        <div class="relative flex items-center justify-center w-full h-40 md:h-56 lg:h-72">
          <img :src="img" alt="" class="object-cover w-full h-40 md:h-56 lg:h-72">
        </div>
      </swiper-slide>
      <div class="absolute z-10 swiper-next right-6 -translate-y-2/4 top-2/4 icon arrow_right">
        <i class=" fa-solid fa-angle-right"></i>
      </div>
      <div class="absolute z-10 swiper-prev left-6 -translate-y-2/4 top-2/4 icon arrow_left">
        <i class=" fa-solid fa-angle-left"></i>
      </div>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide, Navigation, Pagination, Autoplay } from '../../plugins/swiper'

const modules = [Navigation, Pagination, Autoplay]

const imgs = [
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
]

</script>

<style lang="postcss" scoped>
.sliderWrapper:global(.swiper-pagination-bullet) {
  @apply bg-gray-500 opacity-30;
}
.sliderWrapper:global(.swiper-pagination-bullet-active) {
  @apply bg-white opacity-100;
}

.icon {
  @apply flex items-center justify-center cursor-pointer w-10 h-10 border-2 opacity-25 rounded-full hover:bg-white hover:text-gray-400 hover:opacity-50
}
</style>
