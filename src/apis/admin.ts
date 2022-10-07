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
  },
  getCategories () {
    return apiHelper.get('/admin/categories')
  },
  postCategory (data:any) {
    return apiHelper.post('/admin/categories', data)
  },
  putCategory (id:number, data:any) {
    return apiHelper.put(`/admin/categories/${id}`, data)
  },
  deleteCategory (id:number) {
    return apiHelper.delete(`/admin/categories/${id}`)
  },
  getOrders () {
    return apiHelper.get('/admin/orders')
  },
  deleteOrder (id:number) {
    return apiHelper.delete(`/admin/orders/${id}`)
  }
}
