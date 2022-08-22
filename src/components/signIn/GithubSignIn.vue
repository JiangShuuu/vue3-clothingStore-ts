<template>
  <img src="/image/Github.svg" class="cursor-pointer w-14" alt="Github登入" @click="signIn"/>
</template>

<script setup lang="ts">
// firebase
import { firebaseApp } from '~/plugins/firebase'
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'

const toast = useToast()
const firebaseAuth = getAuth(firebaseApp)
const provider = new GithubAuthProvider()

const signIn = () => {
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      const credential: any = GithubAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      console.log(token)
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

</script>
