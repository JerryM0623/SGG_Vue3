<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import { useRoute } from 'vue-router'
import useLayoutStore from '@/store/modules/layout.ts'

const layoutStore = useLayoutStore()
defineProps(['menuList'])
const route = useRoute()
</script>

<template>
  <el-scrollbar class="menu-scroll">
    <el-menu
      :default-active="route.path"
      class="layout-menu"
      background-color="#4c68ef"
      text-color="#ffffff"
      active-text-color="#7ec265"
      router
      :collapse="layoutStore.isSideMenuCollapse"
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
