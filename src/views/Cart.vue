<template>
  <main class="flex-col p-4 text-center flex-center">
    <CartProgress :progress="progress" class="py-5" />
    <Cart01 />
    <div class="absolute bottom-20">
      <!-- 前進後退按鈕 -->
      <button :disabled="isPrevDisabled" class="btn" id="prev" @click="processPrev">Prev</button>
      <button :disabled="isNextDisabled" class="btn" id="next" @click="processNext">Next</button>
      </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import CartProgress from '../components/Carts/CartProgress.vue'
import Cart01 from '../components/Carts/Cart01.vue'

const progress = reactive(
  {
    progressNum: '0%',
    circle2: false,
    circle3: false,
    circle4: false
  }
)
const isNextDisabled = ref(false)
const isPrevDisabled = ref(true)

let currentActive = 1

function processNext () {
  currentActive === 4 ? currentActive = 4 : currentActive++
  update()
}
function processPrev () {
  currentActive === 1 ? currentActive = 1 : currentActive--
  update()
}
function update () {
  // 1. 更新 .circle 元素的 .active class
  currentActive >= 2 ? progress.circle2 = true : progress.circle2 = false
  currentActive >= 3 ? progress.circle3 = true : progress.circle3 = false
  currentActive >= 4 ? progress.circle4 = true : progress.circle4 = false

  // 2. 更新進度條元素的長度
  // 因為是進度條的長度，所以我們用（已完成距離（進度-1）)/間隔數(圈圈總數-1) *100 取得長度百分比
  const length = ((currentActive - 1) / 3) * 100
  // 把單位加回去
  progress.progressNum = `${length}%`

  // 3. 更新按鈕狀態
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
