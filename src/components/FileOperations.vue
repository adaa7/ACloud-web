<script setup>
import { Download,Edit,Delete } from '@element-plus/icons-vue'
</script>

<template>
  <div class="main">
    <div class="main-left">
      <img src="@/assets/FolderPicture.png" alt="">
      <div class="name">新建文件夹</div>
      <div class="Date-modified">修改时间： 2024年12月1 14-18-13:53</div>
    </div> 
    <div class="operate">
      <el-button size="small" type="primary"><el-icon><Download /></el-icon>下载</el-button>
      <el-button size="small" type="warning"><el-icon><Edit /></el-icon>重命名</el-button>
      <el-button size="small" type="danger"><el-icon><Delete /></el-icon>删除</el-button>
    </div>
  </div>
</template>

<style scoped>
.main{
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name{
  margin-left: 10px;
  line-height: 60px;
  width: 400px;
  overflow: hidden;
}
.Date-modified{
  line-height: 60px;
  margin:0 10px;
  color: #999;
}
.main img{
  width: 60px;
  height: 60px;
  cursor: pointer;
}
.main-left{
  display: flex;
}
</style>