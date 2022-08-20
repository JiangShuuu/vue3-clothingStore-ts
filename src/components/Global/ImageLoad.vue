<template>
  <div class="loading-image">
    <img @load="successLoadImg" :src="imageUrl" alt="載入圖片">
  </div>
</template>

<script setup lang="ts">
defineProps<{ imageUrl: any }>()

const successLoadImg = () => {
  event.target.parentElement.classList.remove('.loading-image')
}
</script>

<style lang="postcss" scoped>
.loading-image {
    height: 100%;
    position: relative;
    background-color: #FFF;
    background-image: url(/image/loading.gif);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30%;
}
</style>
