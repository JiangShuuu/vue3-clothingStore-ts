import { apiHelper } from '~/plugins/axios'

export default {
  getProducts () {
    return apiHelper.get('/products')
  },
  getProduct (id:string) {
    return apiHelper.get(`/product/${id}`)
  }
}
