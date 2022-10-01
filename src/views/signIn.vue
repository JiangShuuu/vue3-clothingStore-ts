<template>
  <main class="flex-col mb-10 space-y-10 flex-center">
    <Form class="flex-col space-y-10 w-[500px] flex-center" @submit="onSubmit" :validation-schema="schema">
      <h1 class="pt-10 text-3xl">會員登入</h1>

      <div class="flex flex-col items-end space-y-5">
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
      </div>

      <div class="flex flex-col space-y-2 text-center">
        <button class="p-2 border rounded border-primary" type="submit">
          Submit
        </button>
        <router-link to="/signup" class="text-primary"> Sign Up </router-link>
      </div>
    </Form>
    <div class="flex space-x-6">
      <GoogleSignIn />
      <FacebookSignIn />
      <GithubSignIn />
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
    const userInfo = data.data
    console.log(userInfo)
    // 將伺服器回傳的token 保存在 localStorage 中
    localStorage.setItem('token', userInfo.token)

    // 透過 setCurrentUser 把使用者資料存到 vuex 的 state 中
    mainStore.setCurrentUser(userInfo.user)

    // Toast
    toast.success('登入成功', {
      timeout: 1000
    })

    // 成功登入後進行轉址
    userInfo.user.userData.isAdmin ? route.push('/admin') : route.push('/member')
  } catch (error:any) {
    console.log('err', error)
    toast.error('請重新登入', error.response.data.message)
  }
}

</script>
