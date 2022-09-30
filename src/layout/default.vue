<template>
  <Navbar />

  <GoTop />
  <main class="w-full h-full pt-12 md:pt-20">
    <div class="flex-col justify-center mt-1">
      <router-view></router-view>
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from '~/components/global/Navbar.vue'
import GoTop from '~/components/global/GoTop.vue'
import Footer from '~/components/global/Footer.vue'

</script>
