<template>
  <div class="space-x-5">
    <el-input v-model="search" placeholder="Type to search" style="width: 30%" />
    <el-button max-width="500" text @click="dialogFormVisible = true">Add Item</el-button>
  </div>
  <el-table v-loading="loading" :data="filterTableData" style="width: 100%" max-height="600">
    <el-table-column fixed prop="id" label="Id" width="50" />
    <el-table-column prop="image" label="圖片" width="90">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <img :src="scope.row.image" />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="title" label="商品名稱" width="120" />
    <el-table-column prop="categoryId" label="類別" width="60" />
    <el-table-column prop="og_price" label="原價" width="80" />
    <el-table-column prop="price" label="特價" width="80" />
    <el-table-column prop="short_intro" label="簡介" width="250" />
    <el-table-column prop="description" label="描述"  />
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
  <el-dialog v-model="dialogFormVisible" title="新增商品">
    <el-form :model="form">
      <el-form-item label="圖片" :label-width="formLabelWidth">
        <img :src="form.image" class="mb-4 w-52"/>
        <el-input v-model="form.image" autocomplete="off" />
      </el-form-item>
      <el-form-item label="商品名稱" :label-width="formLabelWidth">
        <el-input v-model="form.title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="原價" :label-width="formLabelWidth">
        <el-input v-model="form.og_price" autocomplete="off" />
      </el-form-item>
      <el-form-item label="特價" :label-width="formLabelWidth">
        <el-input v-model="form.price" autocomplete="off" />
      </el-form-item>
      <el-form-item label="類別" :label-width="formLabelWidth">
        <el-input v-model="form.categoryId" autocomplete="off" />
      </el-form-item>
      <el-form-item label="簡介" :label-width="formLabelWidth">
        <el-input v-model="form.short_intro" autocomplete="off" />
      </el-form-item>
      <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off" />
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

const loading = ref(false)
const search = ref('')
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)

const tableData = ref([
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    title: 'sisisisis',
    og_price: 5000,
    price: 1000,
    categoryId: '上衣',
    short_intro: 'Los Angeles',
    description: 'No. 189, Grove St, Los AngeLos AngLos AngLos AngLos AngLos AnglesLos AngelesLos AngelesAngelesLos AngelesAngelesLos AngelesAngelesLos Angeles'
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    title: 'sisisisis',
    og_price: 5000,
    price: 1000,
    categoryId: '上衣',
    short_intro: 'Los Angeles',
    description: 'No. 189, Grove St, Los AngelesLos AngelesLos Angeles'
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    title: 'sisisisis',
    og_price: 5000,
    price: 1000,
    categoryId: '上衣',
    short_intro: 'Los Angeles',
    description: 'No. 189, Grove St, Los AngelesLos AngelesLos Angeles'
  }
])

const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}

const form = reactive({
  id: 1,
  image: 'https://images.unsplash.com/photo-1664448021787-7893ce42f81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
  title: 'sisisisis',
  og_price: 5000,
  price: 1000,
  categoryId: '上衣',
  short_intro: 'Los Angeles',
  description: 'No. 189, Grove St, Los AngelesLos AngelesLos Angeles'
})

const onAddItem = () => {
  tableData.value.push(form)
  dialogFormVisible.value = false
}

</script>
