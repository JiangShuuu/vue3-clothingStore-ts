<template>
  <div class="fixed z-10 w-full -mt-2 bg-white shadow-md">
    <div class="relative flex-col flex-center">
      <div class="w-[200px]">
        <img class="w-[200px]" src="../../assets/Icon/LogoBA.png" alt="" />
      </div>
      <div class="main">
        <div class="w-full md:hidden">
          <label for="navbar-toggle" class="nav_taggle-label">
            <span class="hamburger"></span>
          </label>
          <input type="checkbox" class="navbar-toggle" id="navbar-toggle" v-model="isOpen" />
          <div class="content_list">
            <div class="content_list_background" @click="checkClose"></div>
            <ul class="content_list_items">
              <router-link to="/" class="content_list_item font-extralight">首頁</router-link>
              <router-link to="/products" class="content_list_item font-extralight">所有商品</router-link>
              <router-link to="/pending" class="content_list_item font-extralight">關於我們</router-link>
              <router-link to="/pending" class="content_list_item font-extralight">聯絡我們</router-link>
              <router-link to="/pending" class="content_list_item font-extralight">Facebook專頁</router-link>
            </ul>
          </div>
        </div>
        <div class="hidden w-full md:block">
          <ul class="mb-2 space-x-8 flex-center">
            <router-link to="/" class="item">首頁</router-link>
            <router-link to="/products" class="item">所有商品</router-link>
            <router-link to="/pending" class="item">關於我們</router-link>
            <router-link to="/pending" class="item">聯絡我們</router-link>
            <router-link to="/pending" class="item">Facebook專頁</router-link>
          </ul>
        </div>
      </div>
      <div class="absolute right-4 top-3.5">
        <ul class="flex-center">
          <router-link to="/signIn" class="pt-1 md:pt-0">
            <Icon icon="carbon:user-avatar" class="text-gray-400 cursor-pointer w-7 h-7 hover:text-primary" :class="{ color: user.currentUser }"/>
          </router-link>
          <router-link to="/cart" class="relative hidden mx-2 md:block">
            <Icon icon="eva:shopping-cart-outline" class="text-gray-400 cursor-pointer w-7 h-7 hover:text-primary" />
            <div class="absolute w-4 h-4 rounded-full -top-0.5 -right-1 bg-primary flex-center">
              <p class="text-[1px] text-white">{{user.carts.length || 0}}</p>
            </div>
          </router-link>
          <li class="hidden md:block">
            <Icon icon="fa-solid:search" class="text-gray-400 cursor-pointer w-7 h-7 hover:text-primary" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '~/stores/user'

const isOpen = ref(false)
const user = useUserStore()

function checkClose () {
  isOpen.value = !isOpen.value
}

</script>

<style lang="postcss" scoped>
.color {
  @apply text-primary;
}
.item {
  @apply font-extralight
}
.item:hover {
  @apply underline underline-offset-8 decoration-2 decoration-primary cursor-pointer
}
.content_list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: scale(0, 1);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}
.content_list_background{
  position: absolute;
    top: 3.5rem;
    left: 0;
    width: 100%;
    height: 100vh;
    background: gray;
    opacity: 0.25;
}
.content_list_items {
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 40%;
  min-height: 100vh;
  z-index: 1;
  background: white;
  text-align: center;
  opacity: 0;
}
.content_list_item {
  padding-top: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}
.content_list_item:hover {
  @apply underline underline-offset-8 decoration-2 decoration-primary -translate-x-0.5 -translate-y-0.5 cursor-pointer;
}
.nav_taggle-label {
  position: absolute;
  top: 1.5rem;
  left: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.hamburger {
  position: relative;
}
.hamburger,
.hamburger::before,
.hamburger::after {
  width: 25px;
  height: 3px;
  background: black;
  margin: 0.2rem 0;
}

.hamburger::before,
.hamburger::after {
  position: absolute;
  content: "";
  left: 0;
}

.hamburger::before {
  top: 5px;
}

.hamburger::after {
  bottom: 5px;
}
.navbar-toggle {
  visibility: hidden;
  display: none;
}

.navbar-toggle:checked~.content_list {
  transform: scale(1, 1);
}

.navbar-toggle:checked~.content_list .content_list_items {
  transition: opacity 0.3s ease-out 0.15s;
  opacity: 1;
}
</style>
