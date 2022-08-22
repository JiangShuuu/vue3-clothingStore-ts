import { defineStore } from 'pinia'
import usersAPI from '~/apis/user'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    currentUser: null,
    carts: [],
    isAuthenticated: false,
    token: ''
  }),
  actions: {
    setCurrentUser (user:any) {
      this.currentUser = user.userData
      this.carts = user.CartProducts
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
        this.currentUser = data.data
        this.carts = data.data.CartProducts

        return true
      } catch (err) {
        console.log('err', err)
        this.revokeAuthentication()
        return false
      }
    }
  }
})
