<script setup>
import {
  VideoPlay,
  Picture,
  Folder,
  Headset,
} from '@element-plus/icons-vue'
import { ref } from 'vue';
import { useRouter } from "vue-router";
const router = useRouter();
const params = router.currentRoute.value.href;
console.log(params);
const username = ref('admin');
</script>

<template>
    <el-menu :default-active="params" class="el-menu-vertical-demo" router="true">
    <div class="menu-logo">
      <div class="logo"><img src="@/assets/logo.svg" alt="" /></div>
      <div class="logo-text">ACloud</div>
    </div>
    <div class="user">
      <el-avatar :size="40">user</el-avatar>
      <div class="username">{{ username }}</div>
    </div>
    <el-menu-item index="/index/MyFiles">
      <template #title>
        <el-icon>
          <Folder />
        </el-icon>
        <span>我的文件</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/index/Image">
      <el-icon>
        <Picture />
      </el-icon>
      <template #title>图片</template>
    </el-menu-item>
    <el-menu-item index="/index/Video">
      <el-icon>
        <VideoPlay />
      </el-icon>
      <template #title>视频</template>
    </el-menu-item>
    <el-menu-item index="/index/Audio">
      <el-icon>
        <Headset />
      </el-icon>
      <template #title>音频</template>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
  min-height: 400px;
}

.logo {
  width: 40px;
  height: 40px;
  background-color: #F3F3F3;
  border-radius: 50%;
}

.logo img {
  width: 32px;
  height: 32px;
  margin: 4px
}

.menu-logo {
  padding: 10px 20px;
  border-bottom: 1px solid #EBEBEB;
  display: flex;
}

.logo-text {
  font-size: 24px;
  font-weight: 600;
  line-height: 40px;
  color: black;
  margin-left: 10px;
}

.user {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.username {
  margin-left: 10px;
  font-size: 14px;
  color: black;
}
</style>