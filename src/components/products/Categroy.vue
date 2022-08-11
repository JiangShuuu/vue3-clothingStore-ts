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
          <router-link :to="{ name: 'Products'}" class="item">全部商品</router-link>
        </swiper-slide>
        <template v-for="item in categories" :key="item.id">
          <swiper-slide>
            <router-link :to="{ name: 'Products', query: { categoryId: item.id } }" class="item">
              {{item.name}}
            </router-link>
          </swiper-slide>
        </template>
      </swiper>
    </section>
    <section
      class="hidden p-2 my-2 border rounded-lg md:justify-around md:flex-center lg:flex-col lg:border-none lg:space-y-4">
      <router-link :to="{ name: 'Products'}" class="item">全部商品</router-link>
      <template v-for="item in categories" :key="item.id">
        <router-link :to="{ name: 'Products', query: { categoryId: item.id, sort: sortName, value: valueName } }" class="item">
          {{item.name}}</router-link>
      </template>
      <!-- <router-link :to="{name: 'new-product'}" class="item">新上市</router-link>
      <router-link :to="{name: 'clothes'}" class="item">熱銷上衣</router-link>
      <router-link :to="{name: 'coat'}" class="item">精選外套</router-link>
      <router-link :to="{name: 'pants'}" class="item">經典褲款</router-link>
      <router-link :to="{name: 'specials'}" class="item">特價商品</router-link> -->
    </section>
  </main>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide, Navigation } from '../../plugins/swiper'

defineProps<{ categories:any, sortName:any, valueName:any }>()

</script>

<style lang="postcss" scoped>
.item {
  @apply w-20 cursor-pointer text-lg hover:text-primary flex-center;
}
</style>
