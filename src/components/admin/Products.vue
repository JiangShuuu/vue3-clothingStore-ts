<template>
  <div class="space-x-5">
    <el-input v-model="search" placeholder="Type to search" style="width: 30%" />
    <el-button max-width="500" text @click="onClickItem('add', {})">Add Item</el-button>
  </div>
  <el-table :data="filterTableData" style="width: 100%" max-height="600">
    <el-table-column fixed prop="id" label="Id" width="50" />
    <el-table-column prop="image" label="圖片" width="90">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <img :src="scope.row.image" />
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="title" label="商品名稱" width="120" />
    <el-table-column prop="categoryId" label="類別" width="60" >
      <template #default="scope">
        <div v-for="item in categories" :key="item.id">
          <p v-if="item.id === scope.row.categoryId">{{item.name}}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="og_price" label="原價" width="80" />
    <el-table-column prop="price" label="特價" width="80" />
    <el-table-column prop="short_intro" label="簡介" width="250" />
    <el-table-column prop="description" label="描述"  />
    <el-table-column fixed="right" label="Operations" width="150">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="onClickItem('edit', scope.row)">Edit</el-button>
        <el-button link type="danger" size="small" @click.prevent="deleteRow(scope.row.id)">
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
        <input
          class="ml-10"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          @change="handleFileChange"
          />
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
        <el-select v-model="form.categoryId" placeholder="Please select a zone">
          <template v-for="item in categories" :key="item.id">
            <el-option :label="item.name" :value="item.id" />
          </template>
        </el-select>
      </el-form-item>
      <el-form-item label="簡介" :label-width="formLabelWidth">
        <el-input v-model="form.short_intro" autocomplete="off" />
      </el-form-item>
      <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input v-model="form.description" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onAddItem()" :disabled="loading">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, onMounted } from 'vue'
import adminAPI from '~/apis/admin'
import { useToast } from 'vue-toastification'
import { Categories, Product } from '~/plugins/type'

const loading = ref(true)
const toast = useToast()
const search = ref('')
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const tableData = ref([])
const typeName = ref('add')
const categories = ref()

const filterTableData = computed(() =>
  tableData.value.filter(
    (data: any) =>
      !search.value ||
      data.title.toLowerCase().includes(search.value.toLowerCase())
  )
)

const form = reactive({
  id: 0,
  image: '',
  imageFile: '',
  title: '',
  og_price: 0,
  price: 0,
  newcategory: 0,
  categoryId: 1,
  short_intro: '',
  description: ''
})

onMounted(() => {
  getProducts()
})

const onClickItem = (type: string, old: any) => {
  dialogFormVisible.value = true
  typeName.value = type

  if (type === 'edit') {
    form.id = old.id
    form.image = old.image
    form.title = old.title
    form.og_price = old.og_price
    form.price = old.price
    form.categoryId = old.categoryId
    form.short_intro = old.short_intro
    form.description = old.description
  } else {
    form.image = ''
    form.title = ''
    form.og_price = 0
    form.price = 0
    form.categoryId = 1
    form.short_intro = ''
    form.description = ''
  }
}

async function getProducts () {
  loading.value = true
  const { data } = await adminAPI.getProducts()
  tableData.value = data.data.products
  categories.value = data.data.categories as Categories
  loading.value = false
}

const deleteRow = async (id:number) => {
  try {
    loading.value = true
    const { data } = await adminAPI.deleteProduct(id)
    if (data) {
      toast.success('成功移除')
    }
    tableData.value = tableData.value.filter((item:Product) => item.id !== id)
    loading.value = false
  } catch (err) {
    loading.value = false
    console.log(err)
  }
}

const handleFileChange = (e: any) => {
  const files = e.target.files

  if (files.length === 0) {
    return form.image = ''
  } else {
    const imageURL = window.URL.createObjectURL(files[0])
    form.image = imageURL
    form.imageFile = files[0]
  }
}

const onAddItem = async () => {
  loading.value = true
  const formData = new FormData()
  formData.append('image', form.imageFile)
  formData.append('title', form.title)
  formData.append('og_price', `${form.og_price}`)
  formData.append('price', `${form.price}`)
  formData.append('categoryId', `${form.categoryId}`)
  formData.append('short_intro', `${form.short_intro}`)
  formData.append('description', `${form.description}`)

  // for (const [key, value] of formData) {
  //   console.log(`${key}: ${value}`)
  // }
  try {
    if (typeName.value === 'add') {
      const { data } = await adminAPI.postProduct(formData)
      console.log(data)
    } else if (typeName.value === 'edit') {
      const { data } = await adminAPI.putProdcut(form.id, formData)
      console.log(data)
    }
    getProducts()
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error)
  }
  dialogFormVisible.value = false
}

</script>
