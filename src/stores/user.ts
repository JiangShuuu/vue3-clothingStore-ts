import { defineStore } from 'pinia'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'
import usersAPI from '~/apis/user'
import { useCounterStore } from '~/stores/counter'

interface Product {
  Cart: {
    id: number,
    productCount: Number,
  },
  Category: Object,
  categoryId: number,
  description: string,
  id: number,
  image: string,
  isCart: boolean,
  isFavorited: boolean,
  isOpen: false,
  og_price: number,
  price: number,
  short_intro: string,
  title: string,
  viewCounts: number,
  count: number,
  total: number
}
interface User {
  currentUser: object|null,
  carts: Product[],
  isAuthenticated: boolean,
  token: string
}

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
      cartProducts.forEach((element: any) => {
        element.total = element.price * element.Cart.productCount
        mainCount.order.price += element.total
      })
      this.carts = cartProducts

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
    },
    async addCart (product:Product) {
      const toast = useToast()
      const route = useRouter()
      console.log('id', product.id)
      console.log(this.currentUser)

      if (!this.currentUser) {
        toast.error('請先登入')
        return route.push('/signIn')
      }

      const { data } = await usersAPI.addCart(product.id)
      console.log(data)

      this.carts.push(product)
      product.isCart = true
    },
    async deleteCart (product:Product) {
      const { data } = await usersAPI.deleteCart(product.id)

      this.carts = this.carts.filter(item => item.id !== product.id)
      product.isCart = false
    }
  }
})
