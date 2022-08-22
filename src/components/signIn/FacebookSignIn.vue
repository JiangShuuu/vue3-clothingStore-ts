<template>
  <img src="/image/Facebook.svg" class="w-12 cursor-pointer" alt="Facebook登入" @click="signIn"/>
</template>

<script setup lang="ts">
// firebase
import { firebaseApp } from '~/plugins/firebase'
import { getAuth, FacebookAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'

const toast = useToast()
const firebaseAuth = getAuth(firebaseApp)
const provider = new FacebookAuthProvider()

const signIn = () => {
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((err) => {
      console.log(err)
    })
}

</script>
