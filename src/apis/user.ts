import { apiHelper } from '~/plugins/axios'

export default {
  thirdPartyLogin (data:any) {
    return apiHelper.post('/auth/third-party-login', data)
  },
  signIn (data:any) {
    return apiHelper.post('/signin', data)
  },
  signUp (data:any) {
    return apiHelper.post('/users/register', data)
  },
  getCurrentUser () {
    return apiHelper.get('/current_user')
  },
  addCart (id:number) {
    return apiHelper.post(`/cart/${id}`)
  },
  deleteCart (id:number) {
    return apiHelper.delete(`/cart/${id}`)
  },
  addCount (id:number) {
    return apiHelper.post(`/cart-add-count/${id}`)
  },
  reduceCount (id:number) {
    return apiHelper.post(`/cart-reduce-count/${id}`)
  },
  addOrder (data:any) {
    return apiHelper.post('/order', data)
  }
}
