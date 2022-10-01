<template>
  <el-row class="tac">
    <el-col :span="10">
      <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <router-link to="/admin/products">
          <el-menu-item index="1">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>商品列表</span>
          </el-menu-item>
        </router-link>
        <router-link to="/admin/categories">
          <el-menu-item index="2">
            <el-icon>
              <document />
            </el-icon>
            <span>類別列表</span>
          </el-menu-item>
        </router-link>
        <el-menu-item index="3" @click="logout">
          <el-icon>
            <setting />
          </el-icon>
          <span>登出</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting
} from '@element-plus/icons-vue'
import { useUserStore } from '~/stores/user'
import { useRouter } from 'vue-router'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const mainStore = useUserStore()
const router = useRouter()

function logout () {
  mainStore.revokeAuthentication()
  router.push('/signin')
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 150px;
  min-height: 600px;
}
</style>
