<template>
  <section class="flex-col block w-full h-full mb-24 space-y-3 flex-center">
    <h2 class="text-2xl underline underline-offset-4 text-primary">購物車</h2>
    <!-- <CartLogin /> -->
    <section class="border">
      <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
        <p>購物車</p>
        <p>(1 件)</p>
      </div>
      <CartProducts />
    </section>
    <div class="md:flex md:space-x-8">
      <section class="w-full border md:basis-3/5">
        <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
          <p>選擇送貨及付款方式</p>
        </div>
        <div class="p-2 space-y-3">
          <div class="flex flex-col space-y-1 text-sm text-start">
            <label for="">送貨地點</label>
            <select name="" id="" class="p-2 border rounded-md">
              <option value="" default>台北</option>
            </select>
          </div>
          <div class="flex flex-col space-y-1 text-sm text-start">
            <label for="">送貨方式</label>
            <select name="" id="" class="p-2 border rounded-md">
              <option value="" default>新竹物流</option>
              <option value="" default>7-11店取</option>
              <option value="" default>自取</option>
            </select>
          </div>
          <div class="flex flex-col space-y-1 text-sm text-start">
            <label for="">付款方式</label>
            <select name="" id="" class="p-2 border rounded-md">
              <option value="" default>銀行帳號/ATM</option>
              <option value="" default>信用卡 (支援國內外Visa、Master、JCB)</option>
            </select>
          </div>
        </div>
      </section>
      <section class="w-full border md:basis-2/5">
        <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
          <p>訂單資訊</p>
        </div>
        <div class="p-4">
          <div class="space-y-2">
            <div class="justify-between text-sm flex-center">
              <p>小計</p>
              <p>NT${{ mainStore.order.price }}</p>
            </div>
            <div class="justify-between text-sm flex-center">
              <p>運費</p>
              <p>NT${{ mainStore.order.fee }}</p>
            </div>
            <div class="cursor-pointer text-start text-primary hover:brightness-150">
              使用優惠代碼
            </div>
            <hr />
            <div class="justify-between text-sm font-bold flex-center">
              <p>合計 (1件)</p>
              <p>NT${{ mainStore.orderTotal }}</p>
            </div>
          </div>
          <button @click="nextStep"
            class="w-full mt-5 md:mt-8 p-2.5 bg-green-600 border rounded-md text-white hover:brightness-110">前往結賬</button>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
// import CartLogin from './CartLogin.vue'
import CartProducts from '~/components/carts/CartProducts.vue'
import { useCounterStore } from '~/stores/counter'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  mainStore.progress.progressNum = '0%'
  mainStore.progress.circle2 = false
  mainStore.progress.circle3 = false
})

const mainStore = useCounterStore()
const router = useRouter()

const nextStep = () => {
  router.push('/cart/info')
}

</script>

<style lang="postcss" scoped>
select {
  cursor: pointer;
  /* border: none; */
  /* outline: none; */
  /* width: 100%; */
  /* height: 40px; */
  /* line-height: 40px; */
  /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */
  /* background: url(../img/ico-arrow.png) 95% 50% no-repeat scroll transparent; */
  /* padding-right: 60px; */
}
</style>
