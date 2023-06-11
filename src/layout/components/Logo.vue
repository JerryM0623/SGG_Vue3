<script setup lang="ts">
import setting from '@/setting'
import useLayoutStore from '@/store/modules/layout.ts'

const layoutStore = useLayoutStore()
</script>

<template>
  <div class="logo-container">
    <img class="logo-img" :src="setting.logoUrl" alt="" />
    <div
      class="logo-title"
      :class="{ 'menu-fold': layoutStore.isSideMenuCollapse }"
    >
      {{ setting.logoTitle }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  width: 100%;
  height: $layout-logo-height;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 $shallow-padding;

  .logo-img {
    width: 40px;
    height: 40px;
    margin-right: $shallow-margin;
  }

  .logo-title {
    font-size: 20px;
    font-weight: 700;
    color: $base-text-color;
    white-space: nowrap;
    opacity: 1;
    transition: all 0.5s;

    &.menu-fold {
      opacity: 0;
    }
  }
}
</style>
