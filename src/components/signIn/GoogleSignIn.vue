<template>
  <button @click="signIn">Google登入</button>
</template>

<script setup lang="ts">
// firebase
import { firebaseApp } from '~/plugins/firebase'
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'

const toast = useToast()
const firebaseAuth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/userinfo.email')

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
