import { defineStore } from 'pinia'
import usersAPI from '~/apis/user'
import { useCounterStore } from '~/stores/counter'
import { CurrentUser, User } from '~/plugins/type'

export const useUserStore = defineStore({
  id: 'user',
  state: ():User => ({
    currentUser: {} as CurrentUser['userData'],
    carts: [],
    isAuthenticated: false,
    isAdmin: 0,
    token: ''
  }),
  actions: {
    setCurrentUser (user:CurrentUser) {
      this.currentUser = user.userData
      this.isAdmin = user.userData.isAdmin
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
      this.currentUser = { avatar: '' }
      this.isAuthenticated = false
      this.carts = []
      this.token = ''
      this.isAdmin = 0
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
