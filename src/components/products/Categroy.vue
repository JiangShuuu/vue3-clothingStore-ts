<template>
  <main class="items-start pt-4 space-y-5">
    <div class="item">全部商品</div>
    <div class="item">新上市</div>
    <div class="item">熱賣商品</div>
    <div class="item">熱銷上衣</div>
    <div class="item">精選外套</div>
    <div class="item">經典褲款</div>
    <div class="item">特價商品</div>
  </main>
</template>
<script setup lang="ts">
</script>
<style lang="postcss" scoped>
.item {
  @apply cursor-pointer text-lg hover:text-primary;
}
</style>
