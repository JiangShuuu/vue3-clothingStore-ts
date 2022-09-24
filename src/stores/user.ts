import { defineStore } from 'pinia'
import usersAPI from '~/apis/user'
import { useCounterStore } from '~/stores/counter'
import { User } from '~/plugins/type'

export const useUserStore = defineStore({
  id: 'user',
  state: ():User => ({
    currentUser: null,
    carts: [],
    isAuthenticated: false,
    token: ''
  }),
  actions: {
    setCurrentUser (user:any) {
      this.currentUser = user.userData

      // CartProduct
      const mainCount = useCounterStore()
      const cartProducts = user.CartProducts
      mainCount.order.price = 0

      if (cartProducts) {
        cartProducts.forEach((element: any) => {
          element.total = element.price * element.Cart.productCount
          mainCount.order.price += element.total
        })
        this.carts = cartProducts
      }

      // auth & token
      this.isAuthenticated = true
      this.token = `${localStorage.getItem('token')}`
      console.log('currentUser', user.userData.name)
    },
    revokeAuthentication () {
      this.currentUser = null
      this.isAuthenticated = false
      this.carts = []
      this.token = ''
      localStorage.removeItem('token')
    },
    async fetchCurrentUser () {
      try {
        const { data } = await usersAPI.getCurrentUser()

        this.setCurrentUser(data.data.user)

        return true
      } catch (err) {
        console.log('err', err)
        this.revokeAuthentication()
        return false
      }
    }
  }
})
