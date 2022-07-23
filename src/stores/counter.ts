import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    progress: {
      currentActive: 1,
      progressNum: '0%',
      circle2: false,
      circle3: false,
      circle4: false
    }
  }),
  actions: {
    next () {
      this.progress.currentActive === 4 ? this.progress.currentActive = 4 : this.progress.currentActive++
      // 1. 更新 .circle 元素的 .active class
      this.progress.currentActive >= 2 ? this.progress.circle2 = true : this.progress.circle2 = false
      this.progress.currentActive >= 3 ? this.progress.circle3 = true : this.progress.circle3 = false
      this.progress.currentActive >= 4 ? this.progress.circle4 = true : this.progress.circle4 = false
      // 2. 更新進度條元素的長度
      // 因為是進度條的長度，所以我們用（已完成距離（進度-1）)/間隔數(圈圈總數-1) *100 取得長度百分比
      const length = ((this.progress.currentActive - 1) / 3) * 100
      // 把單位加回去
      this.progress.progressNum = `${length}%`
    },
    prev () {
      this.progress.currentActive === 4 ? this.progress.currentActive = 4 : this.progress.currentActive--

      this.progress.currentActive >= 2 ? this.progress.circle2 = true : this.progress.circle2 = false
      this.progress.currentActive >= 3 ? this.progress.circle3 = true : this.progress.circle3 = false
      this.progress.currentActive >= 4 ? this.progress.circle4 = true : this.progress.circle4 = false

      const length = ((this.progress.currentActive - 1) / 3) * 100
      this.progress.progressNum = `${length}%`
    }
  }
})
