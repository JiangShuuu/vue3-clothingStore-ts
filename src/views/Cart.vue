<template>
  <main class="container flex-col flex-center">
    <div class="progress-container">
      <!-- 進度條本體 -->
      <div class="progress" id="progress" ref="progress"></div>
      <!-- 進度條的圈圈（Steps） -->
      <div class="circle active">1</div>
      <div class="circle">2</div>
      <div class="circle">3</div>
      <div class="circle">4</div>
    </div>
    <div>
      <!-- 前進後退按鈕 -->
      <button class="btn" id="prev" disabled @click="processPrev">Prev</button>
      <button class="btn" id="next" @click="processNext">Next</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const progressNum = ref('0%')

// onMounted(() => {
//   console.log(progress.value)
// })
// 前進按鈕
const prev:any = document.getElementById('prev')
// 後退按鈕
const next:any = document.getElementById('next')
// 進度圈圈
const circles = document.querySelectorAll('.circle')
// const progress:any = document.getElementById('progress')
let currentActive = 1

function processNext () {
  currentActive++
  if (currentActive > 4) {
    currentActive = 4
  }
  update()
}
function processPrev () {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
}
function update () {
  // progress.value.classList.add('w-14')
  // 第一件事：更新 .circle 元素的 .active class

  // // 遍歷一遍 circles
  // circles.forEach((circle, idx) => {
  //   // 如果現在的 circle 的 index 比 進度（currentActive） 小的話，就是一個已完成進度，加上 active
  //   if (idx < currentActive) {
  //     circle.classList.add('active')
  //   } else {
  //     // 否則這個 circle 就是一個未完成進度，拿掉 active
  //     circle.classList.remove('active')
  //   }
  // })

  // // 第二件事：更新進度條元素的長度
  // // 因為是進度條的長度，所以我們用（已完成距離（進度-1）)/間隔數(圈圈總數-1) *100 取得長度百分比
  const length = ((currentActive - 1) / 3) * 100
  // // 把單位加回去
  progressNum.value = `${length}%`

  // 第三件事：更新按鈕狀態
  // if (currentActive === 1) {
  //   // 如果還在第一步，那就不能後退，後退鈕 disable
  //   prev.disabled = true
  // } else if (currentActive === circles.length) {
  //   // 如果已經到了最後一步，那就不能前進，前進鈕 disable
  //   next.disabled = true
  // } else {
  //   // 如果都不是的話，就不用 disable，disabled 設為 false
  //   prev.disabled = false
  //   next.disabled = false
  // }
}

</script>

<style lang="postcss" scoped>
.container {
  text-align: center;
}
.progress-container {
  /* 讓這個元素成為 flexbox 的 container */
  display: flex;

  /* 使用 space-between 使內部元素取得相同間距 */
  justify-content: space-between;

  /* 想要使用 relative-absolute，所以這裡放 relative */
  position: relative;

  margin-bottom: 30px;
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
  width: v-bind(progressNum);

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
.btn {
  background-color: #3498db;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 30px;
  margin: 5px;
  font-size: 14px;
}
.btn:active {
  transform: scale(0.98);
}
.btn:focus {
  outline: 0;
}
.btn:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}
</style>
