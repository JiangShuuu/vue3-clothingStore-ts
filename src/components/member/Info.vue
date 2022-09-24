<template>
  <main class="flex-col mb-40 flex-center">
    <Form class="flex-col space-y-10 w-[500px] flex-center" @submit="handleSubmit" :validation-schema="schema">
      <h1 class="pt-10 text-3xl">會員資料修改</h1>

      <div class="flex flex-col items-end space-y-5">
        <div class="items-start space-x-5 flex-center">
          <label for="name">名字</label>
          <div class="flex flex-col space-y-2">
            <Field v-model="userInfo.name" name="name_vaildate" v-slot="{ field }">
              <input v-bind="field" class="border border-black">
            </Field>
            <ErrorMessage name="name_vaildate" class="error-style" />
          </div>
        </div>
        <div class="items-start space-x-5 flex-center">
          <label for="email">信箱</label>
          <div class="flex flex-col space-y-2">
            <Field v-model="userInfo.email" name="email_vaildate" v-slot="{ field }">
              <input v-bind="field" class="border border-black">
            </Field>
            <ErrorMessage name="email_vaildate" class="error-style" />
          </div>
        </div>
        <div class="items-start space-x-5 flex-center">
          <label for="password">新密碼</label>
          <div class="flex flex-col space-y-2">
            <Field id="password_vaildate" name="password_vaildate" type="password" class="border border-black" />
            <ErrorMessage name="password_vaildate" class="error-style" />
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-2 text-center">
        <button class="p-2 border rounded border-primary" type="submit">
          Submit
        </button>
      </div>
    </Form>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import { ref, onMounted } from 'vue'
import userAPI from '~/apis/user'

import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/plugins/yup/zhTW.json'

const route = useRouter()
const toast = useToast()
const userInfo = ref({
  id: 0,
  email: '',
  name: ''
})
yup.setLocale(lang)

onMounted(() => {
  getCurrentUser()
})

const schema = yup.object().shape({
  name_vaildate: yup.string().required().label('名字'),
  email_vaildate: yup.string().required().email().label('信箱'),
  password_vaildate: yup.string().required().min(8).label('密碼')
})

async function getCurrentUser () {
  try {
    const { data } = await userAPI.getCurrentUser()
    userInfo.value = data.data.user.userData
  } catch (err:any) {
    console.log('err', err)
    toast.error(err.response.data.message)
  }
}

async function handleSubmit (values: any) {
  try {
    const { data } = await userAPI.putUser(userInfo.value.id, {
      name: userInfo.value.name,
      email: userInfo.value.email,
      password: values.password_vaildate
    })

    toast.success('更新成功', {
      timeout: 1000
    })

    route.push('/signIn')
  } catch (err: any) {
    console.log('err', err)
    toast.error(err.response.data.message)
  }
}

</script>
