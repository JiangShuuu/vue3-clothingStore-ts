import { apiHelper } from '~/plugins/axios'

export default {
  getProducts () {
    return apiHelper.get('/products')
  }
}
