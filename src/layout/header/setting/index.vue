<template>
  <div class="flex">
    <el-button
      type="primary"
      @click="updateRefsh"
      circle
      size="small"
      icon="Refresh"
    ></el-button>
    <el-button
      type="primary"
      @click="fullScreen"
      circle
      size="small"
      icon="FullScreen"
    ></el-button>
    <el-button type="primary" circle size="small" icon="Setting"></el-button>
    <img
      class="w-6 h-6 rounded-2xl mx-4"
      :src="userstore.userInfo.avatar"
      alt=""
    />
    <el-dropdown>
      <span class="el-dropdown-link">
        {{ userstore.userInfo.username }}
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts" name="headerSetting">
// import info from '@/assets/images/login.png'
import useLayOutSettingStore from '@/store/modules/setting'
import { useUserStore } from '@/store/modules/user'
const layOutSettingStore = useLayOutSettingStore()
const updateRefsh = () => {
  layOutSettingStore.refsh = !layOutSettingStore.refsh
}

const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
const userstore = useUserStore()
</script>
