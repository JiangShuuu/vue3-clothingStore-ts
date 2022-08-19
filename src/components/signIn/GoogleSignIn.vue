<template>
  <button @click="signIn">Google登入</button>
</template>

<script setup lang="ts">
// firebase
import { firebaseApp } from '~/plugins/firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'
import userAPI from '~/apis/user'

const toast = useToast()
const firebaseAuth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const mainStore = useUserStore()
const route = useRouter()

const signIn = () => {
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      const user = result.user
      // const accessToken = result.user.accessToken

      userAPI.thirdPartyLogin(user)
        .then((data) => {
          // 將伺服器回傳的token 保存在 localStorage 中
          localStorage.setItem('token', data.data.data.token)

          // pinia user
          mainStore.setCurrentUser(data.data.data.user)

          // Toast
          toast.success('登入成功', {
            timeout: 1000
          })
          // 成功登入後進行轉址
          route.push('/member')
        })
        .catch(err => {
          console.log(err)
        })
    })
    .catch((err) => {
      console.log(err)
    })
}

</script>
