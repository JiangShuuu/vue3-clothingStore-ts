<template>
  <button @click="signIn">Apple登入</button>
</template>

<script setup lang="ts">
// firebase
import { firebaseApp } from '~/plugins/firebase'
import { getAuth, OAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'

const toast = useToast()
const firebaseAuth = getAuth(firebaseApp)
const provider = new OAuthProvider('.apple.com')

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
