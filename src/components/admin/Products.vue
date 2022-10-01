<template>
  <div class="space-x-5">
    <el-input v-model="search" placeholder="Type to search" style="width: 30%" />
    <el-button max-width="500" text @click="dialogFormVisible = true">Add Item</el-button>
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

  <!-- Add Item -->
  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Promotion State" :label-width="formLabelWidth">
        <el-input v-model="form.state" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Promotion City" :label-width="formLabelWidth">
        <el-input v-model="form.city" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Promotion Zip" :label-width="formLabelWidth">
        <el-input v-model="form.zip" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Promotion Address" :label-width="formLabelWidth">
        <el-input v-model="form.address" autocomplete="off" />
      </el-form-item>
      <!-- <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item> -->
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onAddItem">Confirm</el-button>
      </span>
    </template>
  </el-dialog>

</template>

<script lang="ts" setup>
import { ref, computed, reactive } from 'vue'
import dayjs from 'dayjs'

const now = new Date()
const loading = ref(false)
const search = ref('')
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

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

now.setDate(now.getDate() + 1)

const form = reactive({
  date: dayjs(now).format('YYYY-MM-DD'),
  name: 'AA',
  state: 'CC',
  city: 'DD',
  address: 'WW',
  zip: 'II'
})

const onAddItem = () => {
  tableData.value.push(form)
  dialogFormVisible.value = false
}

</script>
