<template>
  <h1 class="mb-4 text-xl text-primary">訂單記錄</h1>
  <main v-if="!orderData" class="w-full h-[400px] flex-center">
    <section>
      尚未有訂單, 請至<router-link to="/products" class="text-2xl text-primary">商品區</router-link>選購
    </section>
  </main>
  <main v-else class="min-h-[400px]">
    <table class="border-separate border-spacing-5">
      <thead>
        <tr>
          <th>id</th>
          <th>收件人名字</th>
          <th>收件人電話</th>
          <th>收件人地址</th>
          <th>訂單金額</th>
          <th>訂單創建日期</th>
          <th>刪除訂單</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in orderData" :key="index">
        <tr>
          <td class="text-center align-middle">{{item.id}}</td>
          <td class="text-center align-middle">{{item.name}}</td>
          <td class="text-center align-middle">{{item.phone}}</td>
          <td class="text-center align-middle">{{item.address}}</td>
          <td class="text-center align-middle">{{item.total}}</td>
          <td class="text-center align-middle">{{dateFormat(item.createdAt)}}</td>
          <td class="text-center align-middle" @click="deleteOrder(item.id)">
            <Icon icon="icon-park-outline:delete-five" class="w-5 h-5 ml-5 text-center text-gray-500 cursor-pointer" />
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script setup lang="ts">
import userAPI from '~/apis/user'
import { useToast } from 'vue-toastification'
import { ref, onMounted } from 'vue'

const toast = useToast()
const orderData = ref()

interface OrderInfo {
  id: number,
  name: string,
  phone: number,
  address: string,
  total: number,
}

onMounted(() => {
  getOrder()
})

async function getOrder () {
  try {
    const { data } = await userAPI.getOrders()
    orderData.value = data.data.orders as OrderInfo
    console.log(orderData.value)
  } catch (err) {
    toast.error('系統錯誤請稍後再試')
    console.log(err)
  }
}

async function deleteOrder (id:number) {
  try {
    const { data } = await userAPI.deleteOrder(id)
    orderData.value = orderData.value.filter((item:OrderInfo) => item.id !== id)
    console.log(data)
  } catch (err) {
    toast.error('系統錯誤請稍後再試')
    console.log(err)
  }
}

const dateFormat = (dateStr: string): string => {
  const date = dateStr.replace(/ /g, 'T')
  const dateObj = new Date(date)

  if (dateObj.toString() === 'Invalid Date') {
    return ''
  }

  return dateObj.toLocaleDateString('zh-TW', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).replace(/\//g, '-')
}

</script>
