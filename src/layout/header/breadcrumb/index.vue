<template>
  <div class="flex">
    <el-icon @click="changeIcon">
      <component :is="layOutSettingStore.isCollapse ? 'Fold' : 'Expand'" />
    </el-icon>
    <el-breadcrumb class="ml-4" separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        v-show="item.meta.title"
        :to="item.path"
      >
        <el-icon class="align-top">
          <component :is="item.meta.icon" />
        </el-icon>
        <span class="ml-1">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script setup lang="ts" name="headerBreadcrumb">
import useLayOutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
const $route = useRoute()
const layOutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  layOutSettingStore.isCollapse = !layOutSettingStore.isCollapse
}
</script>
