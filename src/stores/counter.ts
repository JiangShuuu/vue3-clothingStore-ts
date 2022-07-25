import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    progress: {
      progressNum: '0%',
      circle2: false,
      circle3: false
    },
    cartProduct: {
      price: 450,
      count: 0,
      total: 0
    },
    order: {
      price: 0,
      fee: 200,
      total: 0
    }
  }),
  actions: {
    addCount (item:any) {
      if (item.count >= 0) {
        item.count++
        item.total = item.count * item.price
        this.order.price += item.price
      }
    },
    reduceCount (item:any) {
      if (item.count > 0) {
        item.count--
        item.total = item.count * item.price
        this.order.price -= item.price
      }
    }
  },
  getters: {
    orderTotal (state) {
      return state.order.total = state.order.price + state.order.fee
    }
  }
})
