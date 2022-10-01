import { apiHelper } from '~/plugins/axios'

export default {
  getProducts () {
    return apiHelper.get('/admin/products')
  },
  getProduct (id:string) {
    return apiHelper.get(`/product/${id}`)
  },
  searchProducts (keyword:string) {
    const searchParams = new URLSearchParams({ keyword })

    return apiHelper.get(`/products/search?${searchParams.toString()}`)
  }
}
