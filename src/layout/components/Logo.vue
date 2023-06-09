<script setup lang="ts">
import setting from '@/setting'
</script>

<template>
  <div class="logo-container" v-if="setting.isShowLogo">
    <img class="logo-img" :src="setting.logoUrl" alt="" />
    <div class="logo-title">{{ setting.logoTitle }}</div>
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

  .logo-img {
    width: 40px;
    height: 40px;
    margin-right: $shallow-margin;
  }

  .logo-title {
    font-size: 20px;
    font-weight: 700;
    color: $base-text-color;
  }
}
</style>
