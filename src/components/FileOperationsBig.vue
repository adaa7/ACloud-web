<script setup>
import { Download, Edit, Delete } from '@element-plus/icons-vue'
const props = defineProps({
  filetype: {
    type: String,
    default: "/src/assets/FolderPicture.png",
  },
  filename: {
    type: String,
    default: "新建文件夹",
  }
})
</script>

<template>
<div class="main">
    <img :src="filetype" alt="">
    <div class="operate">
      <el-button size="small" type="primary"><el-icon>
          <Download />
        </el-icon>下载</el-button>
      <el-button size="small" type="warning"><el-icon>
          <Edit />
        </el-icon>重命名</el-button>
      <el-button size="small" type="danger"><el-icon>
          <Delete />
        </el-icon>删除</el-button>
    </div>
    <div class="filename">{{filename}}</div>
</div>
</template>

<style scoped>
.main{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px
}
.main:hover>.operate{
    opacity: 1;
}
.main:hover{
    background-color: #F0F0F0;
}
.main img{
    height: 100%;
    width: 100%;
}
.operate{
    position: absolute;
    width: 200px;
    display: flex;
    justify-content: center;
    top: 0;
    opacity: 0;
}
.operate button{
    margin-left: 0;
    transition-property:all;
    transition-duration:0s;
}
.filename{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: black;
    overflow: hidden;
}
</style>