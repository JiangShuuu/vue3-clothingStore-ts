<template>
  <main class="flex-col space-y-10 flex-center">
    <Form class="flex-col space-y-10 w-[500px] flex-center" @submit="handleSubmit" :validation-schema="schema">
      <h1 class="text-3xl">Sign Up</h1>

      <div class="space-y-5">
        <div class="space-x-10">
          <label for="name">name</label>
          <Field id="name_vaildate" name="name_vaildate" type="name" class="border border-black" />
          <ErrorMessage name="name_vaildate" class="error-style" />
        </div>
        <div class="space-x-10">
          <label for="email">email</label>
          <Field id="email_vaildate" name="email_vaildate" type="email" class="border border-black" />
          <ErrorMessage name="email_vaildate" class="error-style" />
        </div>
        <div class="space-x-5">
          <label for="password">Password</label>
          <Field id="password_vaildate" name="password_vaildate" type="password" class="border border-black" />
          <ErrorMessage name="password_vaildate" class="error-style" />
        </div>
        <div class="space-x-5">
          <label for="checkPassword">CheckPassword</label>
          <Field id="passwordConfirmation" name="passwordConfirmation" type="password" class="border border-black" />
          <ErrorMessage name="passwordConfirmation" class="error-style" />
        </div>
      </div>

      <button class="p-2 border rounded border-primary" type="submit">
        Submit
      </button>

    </Form>
    <div class="mb-3 text-center">
      <router-link to="/signin"> Sign In </router-link>
      <p class="mt-5 mb-3 text-center text-muted">&copy; 2022</p>
    </div>
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

    console.log(data)
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
