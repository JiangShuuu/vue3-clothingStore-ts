<template>
  <div class="progress-container">
    <!-- 進度條本體 -->
    <div class="progress" id="progress"></div>
    <!-- 進度條的圈圈（Steps） -->
    <div class="circle active">1</div>
    <div class="circle" :class="{ 'active': state.progress.circle2}">2</div>
    <div class="circle" :class="{ 'active': state.progress.circle3}">3</div>
    <div class="circle" :class="{ 'active': state.progress.circle4}">4</div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../../stores/counter'

const state = useCounterStore()
</script>

<style lang="postcss" scoped>
.progress-container {
    /* 讓這個元素成為 flexbox 的 container */
    display: flex;

    /* 使用 space-between 使內部元素取得相同間距 */
    justify-content: space-between;

    /* 想要使用 relative-absolute，所以這裡放 relative */
    position: relative;

    max-width: 100%;
    width: 350px;
  }
.progress-container::before {
  /* 使用偽元素一定要有 content，如果沒有內容可以放空字串 */
  content: '';

  /* 這裡使用了事先定義的未完成進度顏色 */
  background-color: #e0e0e0;

  /* 進度條容器的長寬 */
  height: 4px;
  width: 100%;

  /* 使用 relative-absolute */
  position: absolute;

  /* 調整 absolute 的位置到高度的 50%，距離左側 0 */
  top: 50%;
  left: 0;

  /* 因為這個元素自身的寬度，所以需要往上調自身寬度的 50% 回來才會回到正中間 */
  transform: translateY(-50%);

  /* 顯示到數字的後面 */
  z-index: -1;
}
.progress {
  /* 這裡使用了事先定義的已完成進度顏色 */
  background-color: #3498db;
  /* height 一樣 4px，width在切版時可以先放成 50%，調整好再改回進度為 0% 的狀態 */
  /* 附圖為 50% 的狀態 */
  height: 4px;
  width: v-bind('state.progress.progressNum');
  /* 一樣使用 relative-absolute把已完成進度條也放到正確位置上 */
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -1;
  /* 這裡用 transition 做出一點動畫效果*/
  transition: 0.4s ease;
}
.circle {
  /* 底色白色，文字顏色和邊框灰色 */
  background-color: #fff;
  color: #999;
  border: 3px solid #999;
  /* 把元素畫成寬高為 30px 的圓形 */
  border-radius: 50%;
  height: 30px;
  width: 30px;
  /* 用 flexbox 排版把文字放到正中間 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 一樣加上動畫效果 */
  transition: 0.4s ease;
}
.circle.active {
  border-color: #3498db;
}
</style>
