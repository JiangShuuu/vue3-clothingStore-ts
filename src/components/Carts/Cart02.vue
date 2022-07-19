<template>
  <section class="flex-col block w-full h-full mb-24 space-y-3 flex-center">
    <h2 class="text-2xl underline underline-offset-4 text-primary">填寫資料</h2>
    <CartLogin />
    <section class="border">
      <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
        <p>顧客資料</p>
      </div>
      <div class="w-full p-2 space-y-3 text-sm text-start">
        <div class="space-y-1">
          <span>顧客名稱</span>
          <input type="name" name="" id="" class="block w-full p-1.5 border border-gray-300 rounded-sm">
        </div>
        <div class="space-y-1">
          <span>電子信箱</span>
          <input type="email" name="" id="" class="block w-full p-1.5 border border-gray-300 rounded-sm">
        </div>
        <div class="space-y-1">
          <span>電話號碼</span>
          <input type="text" name="" id="" class="block w-full p-1.5 border border-gray-300 rounded-sm">
        </div>
      </div>
    </section>
    <section class="w-full border">
      <div class="flex justify-between p-2 pl-4 text-lg bg-gray-200 flex-center">
        <p>送貨資料</p>
        <p class="text-sm">運費: NT$0</p>
      </div>
      <div class="p-2 text-sm text-start">
        <span>已選擇的送貨方式: 新竹物流</span>
        <div class="justify-start space-x-1 flex-center">
          <input type="checkbox" class="" name="">
          <span>收件人資料與顧客資料相同</span>
        </div>
      </div>
      <div class="p-2 space-y-4 text-sm text-start">
        <div class="space-y-1">
          <span>收件人名稱</span>
          <input type="name" name="" id="" class="block w-full p-1.5 border border-gray-300 rounded-sm">
          <span class="text-gray-400">請填入收件人真實姓名, 以確保順利收件</span>
        </div>
        <div class="space-y-1">
          <span>收件人電話號碼</span>
          <input type="name" name="" id="" class="block w-full p-1.5 border border-gray-300 rounded-sm">
        </div>
        <hr>
        <div class="flex flex-col">
          <span>地址</span>
          <span>送貨地點: 台灣</span>
          <div class="grid grid-cols-2 gap-4">
            <select name="" id="" class="w-full p-2 border rounded-md">
              <option value="" default>城市/縣</option>
              <option value="" default>信用卡 (支援國內外Visa、Master、JCB)</option>
            </select>
            <select name="" id="" class="w-full p-2 border rounded-md">
              <option value="" default>地區</option>
              <option value="" default>信用卡 (支援國內外Visa、Master、JCB)</option>
            </select>
            <input type="name" placeholder="地址" name="" id="" class="col-span-2 p-2 border border-gray-300 rounded-sm">
          </div>
        </div>
      </div>
    </section>

    <section class="w-full border">
      <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
        <p>訂單資訊</p>
      </div>
      <div class="p-4">
        <div class="space-y-2">
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
        <button
          class="w-full mt-5 md:mt-8 p-2.5 bg-green-600 border rounded-md text-white hover:brightness-110">前往結賬</button>
      </div>
    </section>

  </section>
</template>

<script setup lang="ts">
import CartLogin from './CartLogin.vue'
</script>
