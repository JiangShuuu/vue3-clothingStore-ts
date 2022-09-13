<template>
  <h1 class="mb-4 text-xl text-primary">訂單記錄</h1>
  <main v-if="!orderData" class="w-full h-[400px] flex-center">
    <section>
      尚未有訂單, 請至<router-link to="/products" class="text-2xl text-primary">商品區</router-link>選購
    </section>
  </main>
  <main v-else>
    <table class="table-auto">
      <thead>
        <tr>
          <th>id</th>
          <th>收件人名字</th>
          <th>收件人電話</th>
          <th>收件人地址</th>
          <th>訂單金額</th>
          <th>訂單創建日期</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in orderData" :key="index">
        <tr>
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.address}}</td>
          <td>{{item.total}}</td>
          <td>{{item.createdAt}}</td>
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
</script>
