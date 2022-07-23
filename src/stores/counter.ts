import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    progress: {
      progressNum: '0%',
      circle2: false,
      circle3: false
    }
  }),
  actions: {
  }
})
