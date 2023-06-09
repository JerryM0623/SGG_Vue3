<script setup lang="ts">
import Logo from './components/Logo.vue'
</script>

<template>
  <div class="layout-container">
    <div class="menu">
      <Logo></Logo>
      <el-scrollbar class="menu-scroll">
        <el-menu
          default-active="1"
          class="layout-menu"
          background-color="#4c68ef"
          text-color="#ffffff"
          active-background-color="#3c57dc"
          active-text-color="#fb8a2e"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <el-sub-menu index="3">
            <template #title>权限管理</template>
            <el-menu-item index="3-1">用户管理</el-menu-item>
            <el-menu-item index="3-2">角色管理</el-menu-item>
            <el-menu-item index="3-3">菜单管理</el-menu-item>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>商品管理</template>
            <el-menu-item index="4-1">用户管理1</el-menu-item>
            <el-menu-item index="4-2">角色管理2</el-menu-item>
            <el-menu-item index="4-3">菜单管理3</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="content">
      <div class="top-header"></div>
      <div class="bottom-view"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  .menu {
    width: $layout-menu-width;
    height: 100vh;
    background-color: $base-color;
    padding: $shallow-padding $base-padding;

    .menu-scroll {
      width: 100%;
      height: calc(100% - $layout-logo-height);

      .layout-menu {
        border-right: unset;
      }
    }
  }

  .content {
    width: calc(100% - $layout-menu-width);
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .top-header {
      width: 100%;
      height: $layout-headerbar-height;
      border-bottom: 1px solid $border-color;
    }

    .bottom-view {
      width: 100%;
      height: calc(100vh - $layout-headerbar-height);
      padding: $base-padding;
      overflow: auto;
    }
  }
}
</style>
