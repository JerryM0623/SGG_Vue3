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
      <div class="bottom-view">
        <!-- 为页面切换特效做准备 -->
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
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
      padding: 0 $base-padding;
    }

    .bottom-view {
      width: 100%;
      height: calc(100vh - $layout-headerbar-height);
      padding: $base-padding;
      overflow: auto;

      .fade-enter-from {
        opacity: 0;
        transform: scale(0);
      }
      .fade-enter-active {
        transition: all 1s;
      }
      .fade-enter-to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}
</style>
