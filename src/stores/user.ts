import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false,
    token: ''
  }),
  actions: {
    setCurrentUser (currentUser:any) {
      this.currentUser = {
        ...this.currentUser,
        // 透過API取得的 currentUser
        ...currentUser
      }
      this.isAuthenticated = true
      this.token = `${localStorage.getItem('token')}`
      console.log(this.token)
    },
    revokeAuthentication () {
      this.currentUser = {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      }
      this.isAuthenticated = false
      this.token = ''
      localStorage.removeItem('token')
    }
  }
})
