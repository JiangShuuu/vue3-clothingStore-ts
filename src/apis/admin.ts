import { apiHelper } from '~/plugins/axios'

export default {
  getProducts () {
    return apiHelper.get('/admin/products')
  },
  postProduct (formData:any) {
    return apiHelper.post('/admin/product', formData)
  },
  putProdcut (id: number, formData:any) {
    return apiHelper.put(`/admin/product/${id}`, formData)
  },
  deleteProduct (id: number) {
    return apiHelper.delete(`/admin/product/${id}`)
  }
}
