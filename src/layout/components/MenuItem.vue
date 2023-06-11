<script setup lang="ts">
defineProps(['menuItem'])
</script>

<template>
  <!-- 单一路径 -->
  <template v-if="!menuItem.children">
    <template v-if="!menuItem.meta.hidden">
      <el-menu-item :index="menuItem.path">
        <el-icon><component :is="menuItem.meta.icon"></component></el-icon>
        <span>{{ menuItem.meta.title }}</span>
      </el-menu-item>
    </template>
  </template>

  <!-- 只有一个子元素的sub路径组 -->
  <template v-if="menuItem.children && menuItem.children.length === 1">
    <template v-if="!menuItem.children[0].meta.hidden">
      <el-menu-item :index="menuItem.children[0].path">
        <el-icon>
          <component :is="menuItem.children[0].meta.icon"></component>
        </el-icon>
        <span>{{ menuItem.children[0].meta.title }}</span>
      </el-menu-item>
    </template>
  </template>

  <!-- 是一个sub路径组 -->
  <template v-if="menuItem.children && menuItem.children.length > 1">
    <template v-if="!menuItem.meta.hidden">
      <el-sub-menu :index="menuItem.path">
        <template #title>
          <el-icon><component :is="menuItem.meta.icon"></component></el-icon>
          <span>{{ menuItem.meta.title }}</span>
        </template>
        <menu-item
          v-for="item in menuItem.children"
          :key="item.path"
          :menuItem="item"
        ></menu-item>
      </el-sub-menu>
    </template>
  </template>
</template>

<style scoped></style>
