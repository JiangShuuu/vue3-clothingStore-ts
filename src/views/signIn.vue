<template>
  <main class="flex-col space-y-10 flex-center">
    <Form class="flex-col space-y-10 w-[500px] flex-center" @submit="onSubmit" :validation-schema="schema">
      <h1 class="text-3xl">Sign In</h1>

      <div class="space-y-5">
        <div class="space-x-5">
          <label for="email">email</label>
          <Field id="email_vaildate" name="email_vaildate" type="email" class="border border-black" />
          <ErrorMessage name="email_vaildate" class="error-style" />
        </div>
        <div class="space-x-5">
          <label for="password">Password</label>
          <Field id="password_vaildate" name="password_vaildate" type="password" class="border border-black" />
          <ErrorMessage name="password_vaildate" class="error-style" />
        </div>
      </div>

      <button class="p-2 border rounded border-primary" type="submit">
        Submit
      </button>

    </Form>
    <GoogleSignIn />
    <FacebookSignIn />
    <GithubSignIn />
    <div class="mb-3 text-center">
      <router-link to="/signup"> Sign Up </router-link>
      <p class="mt-5 mb-3 text-center text-muted">&copy; 2022</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'
import { useToast } from 'vue-toastification'

import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/plugins/yup/zhTW.json'

import GoogleSignIn from '~/components/signIn/GoogleSignIn.vue'
import FacebookSignIn from '~/components/signIn/FacebookSignIn.vue'
import GithubSignIn from '~/components/signIn/GithubSignIn.vue'
import userAPI from '~/apis/user'

const toast = useToast()
const route = useRouter()
const mainStore = useUserStore()
yup.setLocale(lang)

const schema = yup.object().shape({
  email_vaildate: yup.string().required().email().label('信箱'),
  password_vaildate: yup.string().required().label('密碼')
})

async function onSubmit (values:any) {
  try {
    const { data } = await userAPI.signIn({ email: values.email_vaildate, password: values.password_vaildate })

    // 將伺服器回傳的token 保存在 localStorage 中
    localStorage.setItem('token', data.data.token)

    // 透過 setCurrentUser 把使用者資料存到 vuex 的 state 中
    mainStore.setCurrentUser(data.data.user)

    // Toast
    toast.success('登入成功', {
      timeout: 1000
    })

    // 成功登入後進行轉址
    route.push('/member')
  } catch (error:any) {
    console.log('err', error)
    toast.error('請重新登入', error.response.data.message)
  }
}

</script>
