<script lang="ts" setup>
import LayoutLeft from "@/components/LayoutLeft.vue";
import LayoutTop from "@/components/LayoutTop.vue";
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="index">
    <LayoutLeft></LayoutLeft>
    <div class="main">
      <div class="main-t">
        <LayoutTop></LayoutTop>
      </div>
      <div class="main-b"><RouterView></RouterView></div>
    </div>
  </div>
</template>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  display: flex;
}
.main{
  width: 100%;
  min-width: 1004px;
}
.main-b{
  width: 100%;
  height: 88%;
  overflow: scroll;
}
</style>