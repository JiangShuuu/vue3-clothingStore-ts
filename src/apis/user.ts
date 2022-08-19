import { apiHelper } from '~/plugins/axios'

export default {
  thirdPartyLogin (data:any) {
    return apiHelper.post('/auth/third-party-login', data)
  },
  signIn (data:any) {
    return apiHelper.post('/signin', data)
  },
  getCurrentUser () {
    return apiHelper.get('/current_user')
  }
}
