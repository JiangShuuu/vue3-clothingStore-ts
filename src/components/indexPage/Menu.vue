<template>
  <main class="grid w-full grid-rows-3 gap-2 px-3 md:grid-cols-3 md:grid-rows-1 md:px-0">
    <router-link to="/products?categoryId=1" class="imgbox">
      <img class="object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700"
        src="../../assets/Image/clothes.jpg" alt="">
      <li><i class="anicon fas fa-angle-double-down"></i></li>
      <span class="anispan">熱銷上衣</span>
    </router-link>
    <router-link to="/products?categoryId=3" class="imgbox">
      <img class="object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700"
        src="../../assets/Image/coat.jpg" alt="">
      <li><i class="anicon fas fa-angle-double-down"></i></li>
      <span class="anispan">精選外套</span>
    </router-link>
    <router-link to="/products?categoryId=2" class="imgbox">
      <img class="object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700"
        src="../../assets/Image/pants.jpg" alt="">
      <li><i class="anicon fas fa-angle-double-down"></i></li>
      <span class="anispan">經典褲款</span>
    </router-link>
  </main>
</template>

<style lang="postcss" scoped>
.imgbox {
  @apply relative w-full overflow-hidden border cursor-pointer h-80;
}
.anicon {
  @apply absolute text-white top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl animate-lift;

}
.anispan {
  @apply absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl cursor-default;
}
</style>
