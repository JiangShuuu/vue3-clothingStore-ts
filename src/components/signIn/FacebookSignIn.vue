<template>
  <img src="/image/Facebook.svg" class="w-12 cursor-pointer" alt="Facebook登入" @click="signIn"/>
</template>

<script setup lang="ts">
// firebase
import { firebaseApp } from '~/plugins/firebase'
import { getAuth, FacebookAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'
import userAPI from '~/apis/user'

const mainStore = useUserStore()
const route = useRouter()
const toast = useToast()
const firebaseAuth = getAuth(firebaseApp)
const provider = new FacebookAuthProvider()

const signIn = () => {
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      const user = result.user

      userAPI.thirdPartyLogin(user)
        .then((data) => {
          // 將伺服器回傳的token 保存在 localStorage 中
          localStorage.setItem('token', data.data.data.token)

          // pinia user
          mainStore.setCurrentUser(data.data.data)

          // Toast
          toast.success('登入成功', {
            timeout: 1000
          })
          // 成功登入後進行轉址
          route.push('/member')
        })
        .catch((err) => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log(err)
    })
}

</script>
