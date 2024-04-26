<script setup lang='ts'>
import Menu from './Menu/Menu.vue';
</script>

<template>
  <div class="box">
    <div class="left">
      <Menu></Menu>
    </div>
    <div class="main">
      <div class="top">
        <div class="button">

        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
.box {
  display: flex;
  width: 100%;
  height: 100vh;

  .left {
    width: 228px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-right: 2px solid #E9E9E9;
  }
  
  .main {
    flex: 1;
    .top {
      height: 84px;
    }
  }
}
</style>