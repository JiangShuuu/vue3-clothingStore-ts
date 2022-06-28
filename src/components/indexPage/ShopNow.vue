<template>
  <main class="w-full px-3 mt-2 md:px-0 md:flex md:flex-row-reverse">
    <div class="imgbox">
      <img class="object-cover h-[120%] w-full scale-100 hover:scale-110 ease-in-out duration-700"
        src="../../assets/Image/shop01.jpg" alt="">
    </div>
    <div class="flex-col my-5 space-y-2 flex-center md:flex-1">
      <span class="text-lg font-normol"> 質感日系時尚 </span>
      <div class="flex-col space-y-px flex-center">
        <span class="font-thin">自分に忠実 !</span>
        <span class="font-thin">我們希望創造一個優質空間</span>
        <span class="font-thin">讓每個前來的你們，都能穿出屬於自己的日系獨特風格。</span>
      </div>
      <button
        class="px-4 py-1.5 font-thin border border-black hover:bg-primary hover:text-white duration-500 ease-in-out">SHOP
        NOW</button>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.imgbox {
  @apply relative w-full overflow-hidden border cursor-pointer h-80 md:w-3/5;
}
</style>
