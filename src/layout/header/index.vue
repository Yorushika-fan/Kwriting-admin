<template>
  <el-header>
    <div class="flex justify-between items-center w-full h-full">
      <Breadcrumb />
      <Setting />
    </div>
  </el-header>
</template>

<script setup lang="ts" name="header">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<style scoped lang="less"></style>
