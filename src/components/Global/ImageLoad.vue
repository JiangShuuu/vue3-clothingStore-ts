<template>
  <div ref="imagebox" class="loading-image">
    <img @load="successLoadImg" :src="imageUrl" alt="載入圖片" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ imageUrl: any }>()

const imagebox = ref()

const successLoadImg = () => {
  imagebox.value.classList.remove('loading-image')
  // event.target.parentElement.classList.remove('loading-image')
}
</script>

<style lang="postcss" scoped>
.loading-image {
  height: 100%;
  position: relative;
  background-color: #fff;
  background-image: url(/image/loading.gif);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30%;
}
</style>
