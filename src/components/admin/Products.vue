<template>
  <div class="space-x-5">
    <el-input v-model="search" placeholder="Type to search" style="width: 30%" />
    <el-button max-width="500" @click="onAddItem">Add Item</el-button>
  </div>
  <el-table v-loading="loading" :data="filterTableData" style="width: 100%" max-height="600">
    <el-table-column fixed prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="state" label="State" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column prop="zip" label="Zip" width="120" />
    <el-table-column prop="address" label="Address" width="500" />
    <el-table-column fixed="right" label="Operations" width="150">
      <template #default="scope">
        <el-button link type="primary" size="small">Edit</el-button>
        <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.$index)">
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'

const now = new Date()
const loading = ref(false)

const search = ref('')
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const onAddItem = () => {
  now.setDate(now.getDate() + 1)
  tableData.value.push({
    date: dayjs(now).format('YYYY-MM-DD'),
    name: 'Aom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los AngelesNo. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  })
}
</script>
