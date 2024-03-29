import { apiHelper } from '~/plugins/axios'

export default {
  thirdPartyLogin (data:object) {
    return apiHelper.post('/auth/third-party-login', data)
  },
  signIn (data:object) {
    return apiHelper.post('/signin', data)
  },
  signUp (data:object) {
    return apiHelper.post('/users/register', data)
  },
  putUser (id:number, data:object) {
    return apiHelper.put(`/users/${id}`, data)
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
  addOrder (data:object) {
    return apiHelper.post('/order', data)
  },
  getOrders () {
    return apiHelper.get('/orders')
  },
  deleteOrder (id:number) {
    return apiHelper.delete(`/order/${id}`)
  }
}
