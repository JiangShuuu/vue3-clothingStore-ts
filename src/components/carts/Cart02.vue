<template>
  <section class="flex-col block w-full h-full mb-24 space-y-3 flex-center">
    <h2 class="text-2xl underline underline-offset-4 text-primary">填寫資料</h2>
    {{custom.total}}
    <Form class="space-y-3 md:space-y-0 md:flex md:space-x-4" @submit="handleSubmit" :validation-schema="simpleSchema">
      <div class="w-full space-y-3">
        <section class="border">
          <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
            <p>顧客資料</p>
          </div>
          <div class="w-full p-2 space-y-3 text-sm text-start">
            <div class="space-y-1">
              <span>顧客名稱</span>
              <Field v-model="member.name" name="name" v-slot="{ field }">
                <input v-bind="field" class="block w-full p-1.5 border border-gray-300 rounded-sm">
              </Field>
              <ErrorMessage name="name" class="error-style" />
            </div>
            <div class="space-y-1">
              <span>電子信箱</span>
              <Field v-model="member.email" name="email" v-slot="{ field }">
                <input v-bind="field" class="block w-full p-1.5 border border-gray-300 rounded-sm">
              </Field>
              <ErrorMessage name="email" class="error-style" />
            </div>
            <div class="space-y-1">
              <span>電話號碼</span>
              <Field v-model.number="member.phone" name="phone" v-slot="{ field }">
                <input v-bind="field" class="block w-full p-1.5 border border-gray-300 rounded-sm">
              </Field>
              <ErrorMessage name="phone" class="error-style" />
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
              <input type="checkbox" @change="checkInfo" class="" name="">
              <span>收件人資料與顧客資料相同</span>
            </div>
          </div>
          <div class="p-2 space-y-4 text-sm text-start">
            <div class="flex flex-col space-y-1">
              <span>收件人名稱</span>
              <Field v-model="custom.name" name="customName" v-slot="{ field }">
                <input v-bind="field" class="block w-full p-1.5 border border-gray-300 rounded-sm">
              </Field>
              <span class="text-gray-400">請填入收件人真實姓名, 以確保順利收件</span>
              <ErrorMessage name="customName" class="error-style" />
            </div>
            <div class="space-y-1">
              <span>收件人電話號碼</span>
              <Field v-model.number="custom.phone" name="customPhone" v-slot="{ field }">
                <input v-bind="field" class="block w-full p-1.5 border border-gray-300 rounded-sm">
              </Field>
              <ErrorMessage name="customPhone" class="error-style" />
            </div>
            <hr>
            <div class="flex flex-col">
              <span>地址</span>
              <span>送貨地點: 台灣</span>
              <div class="grid grid-cols-2 gap-4">
                <select name="" v-model="cityName" @change="reArea" class="w-full p-2 border rounded-md">
                  <option disabled selected>--城市/縣--</option>
                  <option v-for="(city, index) in cities" :key="index" :value="city.name" >{{city.name}}</option>
                </select>
                <template v-for="(city, index) in cities" :key="index">
                  <select name="field" as="select" v-model="areaName" v-if="cityName === city.name" class="w-full p-2 border rounded-md">
                    <option disabled selected>--地區--</option>
                    <option v-for="(area, index) in city.districts" :key="index" :value="area.name" default>{{area.name}}</option>
                  </select>
                </template>
                <Field v-model="custom.address" name="address" placeholder="地址" v-slot="{ field }">
                  <input v-bind="field" class="col-span-2 p-2 border border-gray-300 rounded-sm">
                </Field>
                <ErrorMessage name="address" class="error-style" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="w-full space-y-3">
        <section class="w-full border">
          <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
            <p>付款資料</p>
          </div>
          <div class="p-4 text-sm text-start">
            <p>已選擇的付款方式: 銀行轉帳/ATM</p>
          </div>
        </section>
        <section class="w-full border">
          <div class="flex p-2 pl-4 space-x-3 text-lg bg-gray-200 text-start">
            <p>訂單備註</p>
          </div>
          <div class="p-4">
            <textarea placeholder="有什麼想告訴賣家嗎?" class="w-full h-24 p-2 text-sm border"></textarea>
          </div>
        </section>
        <section class="p-2 space-y-1 text-sm border">
          <div class="justify-start space-x-1 flex-center">
            <input type="checkbox" class="" name="">
            <span>成為 LifeStyle 官方網站的會員</span>
          </div>
          <div class="justify-start space-x-1 flex-center">
            <input type="checkbox" class="" name="">
            <span>我想收到最新資訊及優惠方案</span>
          </div>
          <hr>
          <div class="space-y-3">
            <button type="submit"
              class="w-full mt-3 md:mt-8 p-2.5 bg-green-600 border rounded-md text-white hover:brightness-110">提交訂單
            </button>
            <button @click="prevStep" class="font-medium text-blue-500 text-md hover:brightness-110"> &lt 返回購物車</button>
          </div>
        </section>
      </div>
    </Form>
  </section>
</template>

<script setup lang="ts">
import cities from '~/assets/twCity.json'
import { useCounterStore } from '~/stores/counter'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'
import { onMounted, ref, reactive } from 'vue'
import userAPI from '~/apis/user'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import lang from '~/plugins/yup/zhTW.json'
yup.setLocale(lang)

const mainCount = useCounterStore()
const mainUser = useUserStore()
const orderCarts = reactive(mainUser.carts)
const router = useRouter()

const cityName = ref('臺北市')
const areaName = ref('中正區')

const member = ref({
  name: '李小白',
  email: 'abcd@example.com',
  phone: '0912687888'
})

const custom = ref({
  name: '',
  phone: '',
  address: '',
  total: mainCount.order.total
})

const reArea = () => {
  areaName.value = ''
}

function checkInfo () {
  if (custom.value.name) {
    custom.value.name = ''
    custom.value.phone = ''
  } else {
    custom.value.name = member.value.name
    custom.value.phone = member.value.phone
  }
}

const simpleSchema = yup.object().shape({
  name: yup.string().required().label('名字'),
  email: yup.string().required().email().label('信箱'),
  phone: yup.number().required().integer().label('電話'),
  customName: yup.string().required().label('收件人名字'),
  customPhone: yup.number().required().integer().label('收件人電話'),
  address: yup.string().required().label('地址')
})

async function handleSubmit () {
  try {
    customInfo()
    const { data } = await userAPI.addOrder(custom.value)
    mainUser.carts = []
    router.push('/cart/confirm')
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  mainCount.progress.progressNum = '50%'
  mainCount.progress.circle2 = true
  mainCount.progress.circle3 = false
})

function customInfo () {
  custom.value.total += mainCount.order.fee
  custom.value.address = `${cityName.value}${areaName.value}${custom.value.address}`
}

const prevStep = () => {
  router.push('/cart/order')
}
</script>
