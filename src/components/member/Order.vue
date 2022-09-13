<template>
  <h1 class="mb-4 text-xl text-primary">訂單記錄</h1>
  <main v-if="!orderData" class="w-full h-[400px] flex-center">
    <section>
      尚未有訂單, 請至<router-link to="/products" class="text-2xl text-primary">商品區</router-link>選購
    </section>
  </main>
  <main v-else class="min-h-[400px]">
    <table class="w-full border-separate border-spacing-5">
      <thead>
        <tr>
          <th>id</th>
          <th>收件人名字</th>
          <th>收件人電話</th>
          <th>收件人地址</th>
          <th>訂單金額</th>
          <th>訂單創建日期</th>
          <th>刪除訂單</th>
          <th>詳細</th>
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
          <td class="relative" @click="deleteOrder(item.id)">
            <Icon icon="icon-park-outline:delete-five" class="absolute w-5 h-5 text-gray-500 cursor-pointer top-0.5 right-14" />
          </td>
          <td class="relative">
            <button class="absolute focus:outline-none top-1 right-6" @click="item.isOpen = !item.isOpen ">
              <Icon icon="ant-design:down-outlined" :class="{ 'burger-menu--active': item.isOpen }" />
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="8" class="menu" :class="{ 'menu-open': item.isOpen }">
            <section class="mt-2 border-b">
              <div class="flex justify-between px-2">
                <div class="flex space-x-2">
                  <div class="w-16 h-16 overflow-hidden border">
                    <img
                      src="https://images.unsplash.com/photo-1657879005446-fd4563beddb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      class="object-cover" alt="">
                  </div>
                  <p class="text-sm">防風上衣</p>
                </div>
                <div class="flex items-end text-sm">
                  <p>NT$450</p>
                </div>
              </div>
              <div class="justify-between p-2 text-sm flex-center">
                <div class="justify-between w-32 flex-center">
                  <p>數量: 2</p>
                </div>
                <p>NT$900</p>
              </div>
            </section>
            <div class="p-2">
              <div class="space-y-2">
                <div class="justify-between text-sm flex-center">
                  <p>小計</p>
                  <p>NT$900</p>
                </div>
                <div class="justify-between text-sm flex-center">
                  <p>運費</p>
                  <p>免費</p>
                </div>
                <div class="justify-between text-sm font-bold flex-center">
                  <p>合計 (1件)</p>
                  <p>NT$900</p>
                </div>
              </div>
            </div>
            <hr>
            <div class="w-full p-4 cursor-pointer flex-center" @click="item.isOpen = !item.isOpen">
              <Icon icon="ant-design:up-outlined" class="w-4 h-4" />
            </div>
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

    orderData.value.forEach((element: any) => {
      element.isOpen = false
    })

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

<style lang="postcss" scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
.menu {
  height: 100%;
  display: none;
}

.menu-open {
  display: table-cell;
}

.burger-menu--active {
  animation: icon-rotate .2s ease-in-out;
  transform: rotate(180deg);
}
</style>
