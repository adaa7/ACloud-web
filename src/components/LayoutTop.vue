<script setup>
import { UploadFilled,Plus,Expand,Menu,Search } from '@element-plus/icons-vue';
</script>

<template>
<div class="layout-top">
    <div class="layout-top-left">
        <el-button size="small" type="primary"><el-icon><UploadFilled /></el-icon>上传</el-button>
        <el-button size="small" type="primary"><el-icon><Plus /></el-icon>新建文件夹</el-button>
        <div class="structure">全部文件></div>
    </div>
    <div class="layout-top-right">
        <div class="layout-top-right-top">
            <el-icon size="24" color="#409eff" class="toggle"><Expand /></el-icon>
            <el-icon size="24" color="#409eff" class="toggle"><Menu /></el-icon>
        </div>
        <div class="layout-top-right-buttom">
            <el-input v-model="input" style="width: 240px" placeholder="搜索文件"/>
            <el-icon class="search-icon" size="20"><Search /></el-icon>
        </div>
    </div>
</div>
</template>

<style scoped>
.layout-top{
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
}
.structure{
    color: #999;
    margin: 10px 0;
}
.layout-top-right-top{
    display: flex;
    width: 60px;
    justify-content: space-between;
}
.layout-top-right{
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
}
.layout-top-right-buttom{
    position: relative;
}
.search-icon{
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
.toggle{
    cursor: pointer;
}
</style>