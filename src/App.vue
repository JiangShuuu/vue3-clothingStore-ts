<template>
  <Navbar />

  <GoTop />
  <main class="w-full h-full pt-12 md:pt-20">
    <div class="flex flex-col justify-center mt-1">
      <router-view></router-view>
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from './layouts/Navbar.vue'
import GoTop from './layouts/GoTop.vue'
import Footer from './layouts/Footer.vue'

</script>
