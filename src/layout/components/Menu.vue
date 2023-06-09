<script setup lang="ts">
import MenuItem from './MenuItem.vue'
defineProps(['menuList'])
</script>

<template>
  <el-scrollbar class="menu-scroll">
    <el-menu
      default-active="1"
      class="layout-menu"
      background-color="#4c68ef"
      text-color="#ffffff"
      active-background-color="#3c57dc"
      router
    >
      <menu-item
        v-for="item in menuList"
        :key="item.path"
        :menuItem="item"
      ></menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<style scoped lang="scss">
.menu-scroll {
  width: 100%;
  height: calc(100% - $layout-logo-height);

  .layout-menu {
    border-right: unset;
  }
}
</style>
