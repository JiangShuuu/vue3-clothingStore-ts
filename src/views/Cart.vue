<template>
  <main class="flex-col flex-center">
    <CartProgress :progress="progress"/>

    <div>
      <!-- 前進後退按鈕 -->
      <button :disabled="isPrevDisabled" class="btn" id="prev" @click="processPrev">Prev</button>
      <button :disabled="isNextDisabled" class="btn" id="next" @click="processNext">Next</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import CartProgress from '../components/Carts/CartProgress.vue'

const progress =
  {
    progressNum: ref('0%'),
    circle2: ref(false),
    circle3: ref(false),
    circle4: ref(false)
  }

const isNextDisabled = ref(false)
const isPrevDisabled = ref(true)

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
  console.log(currentActive)
  // 第一件事：更新 .circle 元素的 .active class
  currentActive >= 2 ? progress.circle2.value = true : progress.circle2.value = false
  currentActive >= 3 ? progress.circle3.value = true : progress.circle3.value = false
  currentActive >= 4 ? progress.circle4.value = true : progress.circle4.value = false

  // 第二件事：更新進度條元素的長度
  // 因為是進度條的長度，所以我們用（已完成距離（進度-1）)/間隔數(圈圈總數-1) *100 取得長度百分比
  const length = ((currentActive - 1) / 3) * 100
  // 把單位加回去
  progress.progressNum.value = `${length}%`

  // 第三件事：更新按鈕狀態
  currentActive === 1 ? isPrevDisabled.value = true : isPrevDisabled.value = false
  currentActive === 4 ? isNextDisabled.value = true : isNextDisabled.value = false
}

</script>

<style lang="postcss" scoped>
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
