<script setup lang="ts" name="Menu">
defineProps(['menuList'])
</script>
<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有二级路由 -->
    <template v-if="!item.children && !item.meta.hidden">
      <el-menu-item :index="item.path">
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 只有一个二级路由 展示为一级路由 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item :index="item.children[0].path">
        <el-icon>
          <component :is="item.children[0].meta.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有多个二级路由 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon" />
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children" />
    </el-sub-menu>
  </template>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
