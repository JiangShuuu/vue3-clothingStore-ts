import { apiHelper } from '~/plugins/axios'

export default {
  signIn (data:any) {
    return apiHelper.post('/signin', data)
  },
  getCurrentUser () {
    return apiHelper.get('/current_user')
  }
}
