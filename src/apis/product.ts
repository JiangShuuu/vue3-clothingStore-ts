import { apiHelper } from '~/plugins/axios'

export default {
  getProducts (page:string, categoryId:string, sort:string, value:string) {
    const searchParams = new URLSearchParams({ page, categoryId, sort, value })
    return apiHelper.get(`/products?${searchParams.toString()}`)
  },
  getProduct (id:string) {
    return apiHelper.get(`/product/${id}`)
  },
  searchProducts (keyword:string) {
    const searchParams = new URLSearchParams({ keyword })

    return apiHelper.get(`/products/search?${searchParams.toString()}`)
  }
}
