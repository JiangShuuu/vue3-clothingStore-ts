import { apiHelper } from '~/plugins/axios'

export default {
  payment (data: any) {
    console.log('client', data)
    return apiHelper.post('/payment', data)
  }
}
