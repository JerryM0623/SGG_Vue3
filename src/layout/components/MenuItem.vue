<script setup lang="ts">
/**
 * 认知：
 * 单一选项就应该是但已选项不存在children属性
 * 一旦某一个route出现了children属性，那他就是一个sub-route
 * 即使他的children没有子元素，这个route也不会存在所谓的跳转
 */
defineProps(['menuItem'])
</script>

<template>
  <!-- 单一路径 -->
  <template v-if="!menuItem.children">
    <template v-if="!menuItem.meta.hidden">
      <el-menu-item :index="menuItem.path">
        <el-icon><component :is="menuItem.meta.icon"></component></el-icon>
        {{ menuItem.meta.title }}
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
        {{ menuItem.children[0].meta.title }}
      </el-menu-item>
    </template>
  </template>

  <!-- 是一个sub路径组 -->
  <template v-if="menuItem.children && menuItem.children.length > 1">
    <template v-if="!menuItem.meta.hidden">
      <el-sub-menu :index="menuItem.path">
        <template #title>
          <el-icon><component :is="menuItem.meta.icon"></component></el-icon>
          {{ menuItem.meta.title }}
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
