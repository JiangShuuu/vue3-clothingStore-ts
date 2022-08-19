<template>
  <button @click="signIn">Google登入</button>
</template>

<script setup lang="ts">
// firebase
import { firebaseApp } from '~/plugins/firebase'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useToast } from 'vue-toastification'
import userAPI from '~/apis/user'

const toast = useToast()
const firebaseAuth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

const signIn = () => {
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      // console.log(result.user)
      userAPI.thirdPartyLogin(result.user)
        .then((data) => console.log(data))
    })
    .catch((err) => {
      console.log(err)
    })
}

</script>
