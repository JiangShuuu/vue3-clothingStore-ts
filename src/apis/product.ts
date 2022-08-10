import { apiHelper } from '~/plugins/axios'

export default {
  getProducts (page:any, categoryId:any) {
    const searchParams = new URLSearchParams({ page, categoryId })

    return apiHelper.get(`/products?${searchParams.toString()}`)
  },
  getProduct (id:string) {
    return apiHelper.get(`/product/${id}`)
  }
}
