<template>
  <el-table v-loading="loading" :data="categoriesData" style="width: 100%" max-height="600">
    <el-table-column fixed prop="id" label="Id"/>
    <el-table-column prop="name" label="類別名稱" />
    <el-table-column fixed="right" label="Operations" >
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
    <el-form ref="ruleFormRef" :rules="rules" :model="form">
      <el-form-item label="商品名稱" :label-width="formLabelWidth" prop="name">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)" :disabled="loading">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
  <el-button class="mt-4" style="width: 100%" @click="onClickItem('add', {})">Add Item</el-button>
</template>

<script lang="ts" setup>
import { ref, computed, reactive, onMounted } from 'vue'
import adminAPI from '~/apis/admin'
import { useToast } from 'vue-toastification'
import { Categories } from '~/plugins/type'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()

const loading = ref(true)
const toast = useToast()
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const categoriesData = ref()
const typeName = ref('add')
const form = reactive({
  id: 0,
  name: ''
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: '請輸入類別名稱', trigger: 'blur' },
    { min: 2, message: '至少 2 個字', trigger: 'blur' },
    { max: 10, message: '請小於 10 個字', trigger: 'blur' }
  ]
})

onMounted(() => {
  getCatrgories()
})

async function getCatrgories () {
  loading.value = true
  const { data } = await adminAPI.getCategories()
  categoriesData.value = data.data.categories
  loading.value = false
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      try {
        onAddItem()
      } catch (error) {
        loading.value = false
        console.log(error)
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const deleteRow = async (id: number) => {
  try {
    loading.value = true
    const { data } = await adminAPI.deleteCategory(id)
    if (data) {
      toast.success('成功移除')
    }
    categoriesData.value = categoriesData.value.filter((item: Categories) => item.id !== id)
    loading.value = false
  } catch (err:any) {
    loading.value = false
    if (err.response.data.error === 500) {
      toast.warning('請勿刪除預設類別!')
    } else {
      toast.error('請稍後再試!')
    }
    console.error(err)
  }
}

const onClickItem = (type: string, old: any) => {
  dialogFormVisible.value = true
  typeName.value = type

  if (type === 'edit') {
    form.id = old.id
    form.name = old.name
  } else {
    form.id = 0
    form.name = ''
  }
}

const onAddItem = async () => {
  loading.value = true

  try {
    if (typeName.value === 'add') {
      const { data } = await adminAPI.postCategory(form)
      console.log(data)
    } else if (typeName.value === 'edit') {
      const { data } = await adminAPI.putCategory(form.id, form)
      console.log(data)
    }
    getCatrgories()
    loading.value = false
  } catch (error) {
    loading.value = false
    toast.error('請稍後再試!')
    console.log(error)
  }
  dialogFormVisible.value = false
}

</script>

<style scoped>
body {
  margin: 0;
}

.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>
