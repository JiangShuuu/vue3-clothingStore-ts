<template>
  <main class="flex-center">
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

      <div class="mb-3 text-center">
        <router-link to="/signup"> Sign Up </router-link>
        <p class="mt-5 mb-3 text-center text-muted">&copy; 2022</p>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userAPI from '~/apis/user'

const password = ref()
const email = ref()

async function handleSubmit () {
  const { data } = await userAPI.signIn({ email: email.value, password: password.value })
  console.log(data)
}

</script>
