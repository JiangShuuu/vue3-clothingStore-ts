<template>
  <main class="flex-col mb-10 space-y-10 flex-center">
    <Form class="flex-col space-y-10 w-[500px] flex-center" @submit="handleSubmit" :validation-schema="schema">
      <h1 class="pt-10 text-3xl">會員註冊</h1>

      <div class="flex flex-col items-end space-y-5">
        <div class="items-start space-x-5 flex-center">
          <label for="name">name</label>
          <div class="flex flex-col space-y-2">
            <Field id="name_vaildate" name="name_vaildate" type="name" class="border border-black" />
            <ErrorMessage name="name_vaildate" class="error-style" />
          </div>
        </div>
        <div class="items-start space-x-5 flex-center">
          <label for="email">email</label>
          <div class="flex flex-col space-y-2">
            <Field id="email_vaildate" name="email_vaildate" type="email" class="border border-black" />
            <ErrorMessage name="email_vaildate" class="error-style" />
          </div>
        </div>
        <div class="items-start space-x-5 flex-center">
          <label for="password">Password</label>
          <div class="flex flex-col space-y-2">
            <Field id="password_vaildate" name="password_vaildate" type="password" class="border border-black" />
            <ErrorMessage name="password_vaildate" class="error-style" />
          </div>
        </div>
        <div class="items-start space-x-5 flex-center">
          <label for="checkPassword">CheckPassword</label>
          <div class="flex flex-col space-y-2">
            <Field id="passwordConfirmation" name="passwordConfirmation" type="password" class="border border-black" />
            <ErrorMessage name="passwordConfirmation" class="error-style" />
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-2 text-center">
        <button class="p-2 border rounded border-primary" type="submit">
          Submit
        </button>
        <router-link to="/signin" class="text-primary"> Sign In </router-link>
      </div>
    </Form>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import userAPI from '~/apis/user'

import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/plugins/yup/zhTW.json'

const route = useRouter()
const toast = useToast()
yup.setLocale(lang)

const schema = yup.object().shape({
  name_vaildate: yup.string().required().label('名字'),
  email_vaildate: yup.string().required().email().label('信箱'),
  password_vaildate: yup.string().required().label('密碼'),
  passwordConfirmation: yup.string().required().oneOf([yup.ref('password_vaildate')], '密碼不相同').label('密碼確認')
})

async function handleSubmit (values: any) {
  try {
    const { data } = await userAPI.signUp({
      name: values.name_vaildate,
      email: values.email_vaildate,
      password: values.password_vaildate,
      passwordCheck: values.passwordConfirmation
    })

    toast.success('註冊成功', {
      timeout: 1000
    })

    route.push('/signIn')
  } catch (err:any) {
    console.log('err', err)
    toast.error(err.response.data.message)
  }
}

</script>
