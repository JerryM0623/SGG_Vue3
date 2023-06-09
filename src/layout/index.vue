<script setup lang="ts">
import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import { constantRoutes } from '@/router/routes'
</script>

<template>
  <div class="layout-container">
    <div class="menu">
      <Logo></Logo>
      <Menu :menuList="constantRoutes"></Menu>
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
