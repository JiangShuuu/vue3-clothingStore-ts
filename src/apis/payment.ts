import { apiHelper } from '~/plugins/axios'

export default {
  payment (data: any) {
    return apiHelper.get('/payment', data)
  }
}
