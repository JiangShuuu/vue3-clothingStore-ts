import { apiHelper } from '~/plugins/axios'

export default {
  payment (data: any) {
    console.log('client', data)
    return apiHelper.post('/payment', data)
  },
  // 列印物流單
  print (data: any) {
    console.log('client', data)
    return apiHelper.post('/print', data)
  },
  // 獲取地圖
  getmap (data:any) {
    console.log('client', data)
    return apiHelper.post('/getmap', data)
  }
}
