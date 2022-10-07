<template>
  <h1 class="mb-4 text-xl">訂單列表</h1>
  <el-table v-loading="loading" :data="tableData" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p m="t-2 b-2">訂購者: {{ props.row.User.name }}</p>
          <p m="t-2 b-2">Email: {{ props.row.User.email }}</p>
          <el-table :data="props.row.OrderProducts">
            <el-table-column label="商品Id" prop="id" width="150"/>
            <el-table-column prop="image" label="圖片">
              <template #default="scope">
                <div style="display: flex; align-items: center">
                  <img :src="scope.row.image" />
                </div>
              </template>
            </el-table-column>
            <el-table-column label="商品名稱" prop="title" />
            <el-table-column label="原價" prop="og_price" />
            <el-table-column label="價格" prop="price" />
            <el-table-column label="訂購數量" prop="Orderlist.productCount" />
          </el-table>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="ID" prop="id" width="50" />
    <el-table-column label="訂購日期" prop="createdAt"  width="150">
      <template #default="scope">
        <p>{{dateFormat(scope.row.createdAt)}}</p>
      </template>
    </el-table-column>
    <el-table-column label="收件人名稱" prop="name" width="150"/>
    <el-table-column label="電話" prop="phone" width="150"/>
    <el-table-column label="地址" prop="address" />
    <el-table-column label="總金額" prop="total" width="150" />
    <el-table-column fixed="right" label="刪除訂單"  width="150">
      <template #default="scope">
        <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.row.id)">
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import adminAPI from '~/apis/admin'
import { useToast } from 'vue-toastification'

const tableData = ref()
const loading = ref(true)
const toast = useToast()

onMounted(() => {
  getOrders()
})

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

const getOrders = async () => {
  try {
    const { data } = await adminAPI.getOrders()
    tableData.value = data.data.orders
    loading.value = false
  } catch (error) {
    console.error(error)
    loading.value = false
  }
}

const deleteRow = async (id:number) => {
  try {
    loading.value = true
    const { data } = await adminAPI.deleteOrder(id)
    if (data) {
      toast.success('成功移除')
    }
    getOrders()
    loading.value = false
  } catch (error) {
    loading.value = false
    console.error(error)
  }
}
</script>
