<template>
  <section class="flex flex-col">
    <h1 class="mb-4 text-xl text-primary">訂單記錄</h1>
    <main v-if="orderData && orderData.length < 1" class="w-full h-[400px] flex-center">
      <section>
        尚未新增任何訂單, 請至<router-link to="/products" class="text-2xl text-primary">商品區</router-link>選購
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
              <Icon icon="icon-park-outline:delete-five" class="absolute w-5 h-5 text-gray-500 cursor-pointer top-0.5 right-12" />
            </td>
            <td class="relative">
              <button class="absolute focus:outline-none top-1 right-6" @click="item.isOpen = !item.isOpen ">
                <Icon icon="ant-design:down-outlined" :class="{ 'burger-menu--active': item.isOpen }" />
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="8" class="menu" :class="{ 'menu-open': item.isOpen }">
              <section class="grid grid-cols-3 gap-4">
                <section v-for="order in item.OrderProducts" :key="order.id" class="py-2 border-b">
                  <div class="flex justify-between px-2 ">
                    <div class="flex space-x-2">
                      <div class="w-16 h-16 overflow-hidden border">
                        <img
                          :src="order.image"
                          class="object-cover" alt="">
                      </div>
                      <p class="text-sm">防風上衣</p>
                    </div>
                    <div class="flex flex-col items-end text-sm">
                      <div class="flex">
                        <p>數量:{{order.Orderlist.productCount}}</p>
                      </div>
                      <div class="flex">
                        <p class="mr-1">單價</p>
                        <p>NT${{order.price}}</p>
                      </div>
                      <div class="flex">
                        <p class="mr-1">總計</p>
                        <p>NT${{order.price * order.Orderlist.productCount}}</p>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
              <div class="w-full p-4 cursor-pointer flex-center" @click="item.isOpen = !item.isOpen">
                <Icon icon="ant-design:up-outlined" class="w-4 h-4" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  </section>
</template>

<script setup lang="ts">
import userAPI from '~/apis/user'
import { useToast } from 'vue-toastification'
import { ref, onMounted } from 'vue'
import { OrderInfo } from '~/plugins/type'

const toast = useToast()
const orderData = ref()

onMounted(() => {
  getOrder()
})

async function getOrder () {
  try {
    const { data } = await userAPI.getOrders()
    orderData.value = data.data.orders as OrderInfo

    orderData.value.forEach((element:OrderInfo) => {
      element.isOpen = false
    })
  } catch (err) {
    toast.error('系統錯誤請稍後再試')
    console.log(err)
  }
}

async function deleteOrder (id:number) {
  try {
    const { data } = await userAPI.deleteOrder(id)
    orderData.value = orderData.value.filter((item:OrderInfo) => item.id !== id)
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
