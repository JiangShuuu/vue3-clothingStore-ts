<template>
  <main class="flex-col space-y-10 flex-center">
    <form class="flex-col space-y-10 w-96 flex-center" @submit.prevent.stop="handleSubmit">
      <h1 class="text-3xl">Sign Up</h1>

      <div class="space-y-5">
        <div class="space-x-10">
          <label for="name">name</label>
          <input id="name" v-model="user.name" name="name" type="name" class="border border-black" placeholder="name"
            autocomplete="username" required autofocus />
        </div>
        <div class="space-x-10">
          <label for="email">email</label>
          <input id="email" v-model="user.email" name="email" type="email" class="border border-black" placeholder="email"
            autocomplete="username" required autofocus />
        </div>
        <div class="space-x-5">
          <label for="password">Password</label>
          <input id="password" v-model="user.password" name="password" type="password" class="border border-black"
            placeholder="Password" autocomplete="current-password" required />
        </div>
        <div class="space-x-5">
          <label for="checkPassword">CheckPassword</label>
          <input id="checkPassword" v-model="user.passwordCheck" name="checkPassword" type="password" class="border border-black"
            placeholder="checkPassword" autocomplete="current-password" required />
        </div>
      </div>

      <button class="p-2 border rounded border-primary" type="submit">
        Submit
      </button>

    </form>
    <div class="mb-3 text-center">
      <router-link to="/signin"> Sign In </router-link>
      <p class="mt-5 mb-3 text-center text-muted">&copy; 2022</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'
import { useToast } from 'vue-toastification'
import userAPI from '~/apis/user'

const route = useRouter()
const toast = useToast()
const user = reactive({
  name: 'qwe',
  email: 'gggg@gmail.com',
  password: 'qwe',
  passwordCheck: 'qwe'
})

async function handleSubmit () {
  try {
    const { data } = await userAPI.signUp({ name: user.name, email: user.email, password: user.password, passwordCheck: user.passwordCheck })

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
