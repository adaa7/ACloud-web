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
  },
  Modifytime: {
    type: String,
    default: "2023-04-20 12:00:00",
  }
})

</script>

<template>
  <div class="main">
    <div class="main-left">
      <img :src="filetype" alt="">
      <div class="name">{{ filename }}</div>
      <div class="Date-modified">修改时间： {{ Modifytime }}</div>
    </div>
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
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.main:hover {
  background-color: #F0F0F0;
}

.name {
  margin-left: 10px;
  line-height: 60px;
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.Date-modified {
  line-height: 60px;
  margin: 0 10px;
  color: #999;
  overflow: hidden;
  text-overflow:ellipsis; 
  white-space: nowrap;
}

.main img {
  width: 60px;
  height: 60px;
  cursor: pointer;
}

.main-left {
  display: flex;
}
</style>