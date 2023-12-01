<template>
  <div class="p-2 text-gray-900 font-semibold">首页</div>
  <div class="p-2 text-gray-900 font-semibold">学习TailwindCSS</div>
  <div class="p-2 text-gray-900 font-semibold">TailwindCSS的设计哲学</div>
  <div class="p-2 text-gray-900 font-semibold">最佳实践</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'

onMounted(() => {
  // 获取用户信息
  useUserStore().userInfo()
})
</script>

<style></style>
