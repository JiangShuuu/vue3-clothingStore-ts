<template>
  <main class="w-full ">
    <section class="p-2 my-2 border rounded-lg md:hidden">
      <swiper :breakpoints="{
            375: {
          slidesPerView: 4,
          spaceBetween: 0,
        }
      }">
        <swiper-slide>
          <div class="item">全部商品</div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">熱賣商品</div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">新上市</div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">熱銷上衣</div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">精選外套</div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">經典褲款</div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">特價商品</div>
        </swiper-slide>
      </swiper>
    </section>
    <section
      class="hidden p-2 my-2 border rounded-lg md:justify-around md:flex-center lg:flex-col lg:border-none lg:space-y-4">
      <div class="item">全部商品</div>
      <router-link :to="{name: 'hot-product'}" class="item">熱賣商品</router-link>
      <div class="item">新上市</div>
      <div class="item">熱銷上衣</div>
      <div class="item">精選外套</div>
      <div class="item">經典褲款</div>
      <div class="item">特價商品</div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide, Navigation } from '../../plugins/swiper'

</script>

<style lang="postcss" scoped>
.item {
  @apply w-20 cursor-pointer text-lg hover:text-primary flex-center;
}
</style>
