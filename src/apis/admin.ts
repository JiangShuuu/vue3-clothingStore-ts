import { apiHelper } from '~/plugins/axios'

export default {
  getProducts () {
    return apiHelper.get('/admin/products')
  },
  postProduct (form:any) {
    return apiHelper.post('/admin/product', form)
  },
  putProdcut (id: number, data:any) {
    return apiHelper.put('/admin/product', data)
  },
  deleteProduct (id: number) {
    return apiHelper.delete(`/admin/product/${id}`)
  }
}
