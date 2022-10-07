import { defineStore } from 'pinia'
import { Product } from '~/plugins/type'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    searchText: '',
    progress: {
      progressNum: '0%',
      circle2: false,
      circle3: false
    },
    order: {
      price: 0,
      fee: 0,
      total: 0
    }
  }),
  actions: {
    addOrderCount (item:Product) {
      this.order.price += item.price
    },
    reduceOrderCount (item:Product) {
      this.order.price -= item.price
    }
  },
  getters: {
    orderTotal (state) {
      return state.order.total = state.order.price + state.order.fee
    }
  }
})
