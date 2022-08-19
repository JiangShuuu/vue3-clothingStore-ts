import { defineStore } from 'pinia'
import usersAPI from '~/apis/user'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    currentUser: null,
    isAuthenticated: false,
    token: ''
  }),
  actions: {
    setCurrentUser (user:any) {
      this.currentUser = user
      this.isAuthenticated = true
      this.token = `${localStorage.getItem('token')}`
      console.log('currentUser', user.name)
    },
    revokeAuthentication () {
      this.currentUser = null
      this.isAuthenticated = false
      this.token = ''
      localStorage.removeItem('token')
    },
    async fetchCurrentUser () {
      try {
        const { data } = await usersAPI.getCurrentUser()
        this.currentUser = data.data

        return true
      } catch (err) {
        console.log('err', err)
        this.revokeAuthentication()
        return false
      }
    }
  }
})
