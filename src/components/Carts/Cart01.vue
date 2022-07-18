<template>
  <section class="flex-col block w-full space-y-3 flex-center h-[1000px]">
    <h2 class="text-2xl underline underline-offset-4 text-primary">購物車</h2>
    <CartLogin />
    <section class="border">
      <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
        <p>購物車</p>
        <p>(1 件)</p>
      </div>
      <div class="flex justify-between p-2">
        <div class="flex space-x-2">
          <div class="w-16 h-16 overflow-hidden border">
            <img
              src="https://images.unsplash.com/photo-1657879005446-fd4563beddb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              class="object-cover" alt="">
          </div>
          <p class="text-sm">防風上衣</p>
        </div>
        <div class="flex flex-col items-end justify-between text-sm">
          <Icon icon="icon-park-outline:delete-five" class="w-5 h-5 text-gray-500 cursor-pointer" />
          <p>NT$450</p>
        </div>
      </div>
      <div class="justify-between p-2 flex-center">
        <div class="justify-between w-32 p-2 border flex-center">
          <Icon icon="fa-solid:minus" class="w-4 h-4 cursor-pointer" />
          <p class="text-sm">2</p>
          <Icon icon="fa-solid:plus" class="w-4 h-4 cursor-pointer" />
        </div>
        <p>NT$900</p>
      </div>
    </section>
    <section class="border">
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
    <section class="border">
      <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
        <p>訂單資訊</p>
      </div>
      <div class="p-4 space-y-2">
        <div class="justify-between text-sm flex-center">
          <p>小計</p>
          <p>NT$900</p>
        </div>
        <div class="justify-between text-sm flex-center">
          <p>運費</p>
          <p>NT$900</p>
        </div>
        <div class="cursor-pointer text-start text-primary hover:brightness-150">
          使用優惠代碼
        </div>
        <hr />
        <div class="justify-between text-sm font-bold flex-center">
          <p>合計 (1件)</p>
          <p>NT$900</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import CartLogin from './CartLogin.vue'
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
