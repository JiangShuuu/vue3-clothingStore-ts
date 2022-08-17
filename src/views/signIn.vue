<template>
  <main class="flex-col space-y-10 flex-center">
    <form class="flex-col space-y-10 w-72 flex-center" @submit.prevent.stop="handleSubmit">
      <h1 class="text-3xl">Sign In</h1>

      <div class="space-y-5">
        <div class="space-x-10">
          <label for="email">email</label>
          <input id="email" v-model="email" name="email" type="email" class="border border-black" placeholder="email"
            autocomplete="username" required autofocus />
        </div>
        <div class="space-x-5">
          <label for="password">Password</label>
          <input id="password" v-model="password" name="password" type="password" class="border border-black"
            placeholder="Password" autocomplete="current-password" required />
        </div>
      </div>

      <button class="p-2 border rounded border-primary" type="submit">
        Submit
      </button>

    </form>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'
import { useToast } from 'vue-toastification'
import GoogleSignIn from '~/components/signIn/GoogleSignIn.vue'
import FacebookSignIn from '~/components/signIn/FacebookSignIn.vue'
import GithubSignIn from '~/components/signIn/GithubSignIn.vue'
import userAPI from '~/apis/user'

const toast = useToast()
const password = ref()
const email = ref()
const route = useRouter()
const mainStore = useUserStore()

async function handleSubmit () {
  try {
    const { data } = await userAPI.signIn({ email: email.value, password: password.value })

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
  } catch (error) {
    console.log('err', error)
    toast.error('請重新登入')
  }
}

</script>
