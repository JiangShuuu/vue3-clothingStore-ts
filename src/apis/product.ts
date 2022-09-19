import { apiHelper } from '~/plugins/axios'

export default {
  getProducts (page:any, categoryId:any, sort:any, value:any) {
    const searchParams = new URLSearchParams({ page, categoryId, sort, value })
    return apiHelper.get(`/products?${searchParams.toString()}`)
  },
  getProduct (id:string) {
    return apiHelper.get(`/product/${id}`)
  },
  searchProducts (keyword:any) {
    const searchParams = new URLSearchParams({ keyword })

    return apiHelper.get(`/products/search?${searchParams.toString()}`)
  }
}
