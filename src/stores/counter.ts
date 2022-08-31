import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    progress: {
      progressNum: '0%',
      circle2: false,
      circle3: false
    },
    order: {
      price: 0,
      fee: 200,
      total: 0
    }
  }),
  actions: {
    addOrderCount (item:any) {
      this.order.price += item.price
    },
    reduceOrderCount (item:any) {
      this.order.price -= item.price
    }
  },
  getters: {
    orderTotal (state) {
      return state.order.total = state.order.price + state.order.fee
    }
  }
})
