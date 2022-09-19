<template>
  <section class="w-full pt-6 md:flex md:space-x-6">
    <section class="lg:w-1/2 flex-center">
      <!-- <div class="mr-2 space-y-1">
        <div class="w-10 overflow-hidden aspect-3/4 md:w-16">
          <img class="object-cover"
            src="https://images.unsplash.com/photo-1656143269388-e65183fac19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="">
        </div>
        <div class="w-10 overflow-hidden aspect-3/4 md:w-16">
          <img class="object-cover"
            src="https://images.unsplash.com/photo-1657010489882-5530566824be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="">
        </div>
        <div class="w-10 overflow-hidden aspect-3/4 md:w-16">
          <img class="object-cover"
            src="https://images.unsplash.com/photo-1656143269388-e65183fac19f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="">
        </div>
      </div> -->
      <div class="w-48 overflow-hidden aspect-3/4 md:w-72">
        <img class="object-cover" v-src="data.product.image" src="/image/loading.gif" alt="">
      </div>
    </section>
    <section class="flex flex-col justify-around w-full lg:w-1/2">
      <div class="border-b-[1px] space-y-2">
        <h2 class="text-2xl font-bold">{{ data.product.title }}</h2>
        <p class="text-sm line-clamp-6 line-clamp">
          {{ data.product.short_intro }}
        </p>
        <br>
      </div>
      <div>
        <div class="flex items-end pt-4 space-x-2">
          <p class="text-xl text-primary">NT${{ data.product.price }}</p>
          <p class="pb-1 text-sm text-gray-400 line-through">NT${{ data.product.og_price }}</p>
        </div>
      </div>
      <div class="space-y-5">
        <button @click="addCart(data)" :disabled="isLoading" v-if="!data.isCart" class="w-full p-2 px-4 text-white rounded-lg bg-secondary">加入購物車</button>
        <button @click="deleteCart(data)" :disabled="isLoading" v-else class="w-full p-2 px-4 text-white bg-red-500 rounded-lg">移出購物車</button>
        <!-- <div class="space-x-1 flex-center">
          <Icon icon="ant-design:heart-outlined" />
          <p>加入追蹤清單</p>
        </div> -->
        <div class="space-x-2 flex-center">
          <p class="">分享到</p>
          <Icon icon="bi:line" class="text-[#06C755] w-7 h-7" />
          <Icon @click="shareOnFacebook" icon="akar-icons:facebook-fill" class="text-[#4267B2] w-7 h-7" />
          <Icon icon="akar-icons:instagram-fill" class="text-[#E1306C] w-7 h-7" />
          <button v-clipboard:copy="url" v-clipboard:success="onSuccess">
            <Icon icon="akar-icons:link-chain" class="text-[#4267a1] w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { ref } from 'vue'
import usersAPI from '~/apis/user'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

defineProps<{ data:any }>()

const mainUser = useUserStore()
const isLoading = ref(false)
const toast = useToast()
const route = useRouter()
const url = `https://profile.jiangshuuu.com${route.currentRoute.value.fullPath}`

function onSuccess () {
  toast.success('成功複製連結！')
}

async function addCart (product: any) {
  try {
    isLoading.value = true

    if (!mainUser.currentUser) {
      toast.error('請先登入')
      return route.push('/signIn')
    }

    const { data } = await usersAPI.addCart(product.product.id)

    product.product.Cart = {
      productCount: 1
    }

    mainUser.carts.push(product.product)
    product.isCart = true

    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    console.log(error)
  }
}

async function deleteCart (product: any) {
  try {
    isLoading.value = true

    const { data } = await usersAPI.deleteCart(product.product.id)
    mainUser.carts = mainUser.carts.filter(item => item.id !== product.product.id)
    product.isCart = false

    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    console.log(error)
  }
}

function shareOnFacebook () {
  const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + 'https://profile.jiangshuuu.com/products'
  window.open(navUrl, '_blank')
}

// function shareCopy () {
//   // eslint-disable-next-line no-new
//   // new $clipboard({
//   //   text: () => {
//   //     return 'https://profile.jiangshuuu.com/products' + '?utm_medium=album&utm_campaign=share&utm_source=copy'
//   //   }
//   // })
//   // const navUrl =
//   // window.open(navUrl, '_blank')
// }

</script>
