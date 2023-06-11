<script setup lang="ts">
import Logo from './components/Logo.vue'
import Menu from './components/Menu.vue'
import { constantRoutes } from '@/router/routes'
import {ArrowRight, Refresh, FullScreen, Setting } from '@element-plus/icons-vue'
</script>

<template>
  <div class="layout-container">
    <div class="menu">
      <Logo></Logo>
      <Menu :menuList="constantRoutes"></Menu>
    </div>
    <div class="content">
      <div class="top-header">
        <div class="headerbar-left">
          <el-icon><Expand /></el-icon>
          <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item>权限管理</el-breadcrumb-item>
            <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="headerbar-right">
          <el-button :icon="Refresh" circle />
          <el-button :icon="FullScreen" circle />
          <el-button :icon="Setting" circle />
          <el-avatar :size="30" src="/logo/logo.png" />
          <el-dropdown>
            <span class="el-dropdown-link">
              欢迎回来
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .headerbar-left {
        display: flex;
        flex-direction: row;
        align-items: center;

        .el-icon {
          margin-right: $shallow-margin;
        }
      }
      .headerbar-right {
        display: flex;
        flex-direction: row;
        align-items: center;

        .el-avatar {
          margin: 0 $shallow-margin;
        }

        .el-dropdown-link {
          cursor: pointer;
        }
      }
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
