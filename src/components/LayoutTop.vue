<script setup>
import { UploadFilled, Plus, Expand, Menu, Search } from '@element-plus/icons-vue';
import usefiledisplayStore from '@/stores/modules/filedisplay'
import { ref } from 'vue'

const centerDialogVisible = ref(false)
const state = usefiledisplayStore()
</script>

<template>
    <div class="layout-top">
        <div class="layout-top-left">
            <el-button size="small" type="primary" @click="centerDialogVisible = true"><el-icon>
                    <UploadFilled />
                </el-icon>上传</el-button>
            <el-button size="small" type="primary"><el-icon>
                    <Plus />
                </el-icon>新建文件夹</el-button>
            <div class="structure">全部文件></div>
        </div>
        <div class="layout-top-right">
            <div class="layout-top-right-top">
                <el-icon size="24" color="#409eff" class="toggle" @click="state.togglestyles(0)">
                    <Expand />
                </el-icon>
                <el-icon size="24" color="#409eff" class="toggle" @click="state.togglestyles(1)">
                    <Menu />
                </el-icon>
            </div>
            <div class="layout-top-right-buttom">
                <el-input v-model="input" style="width: 240px" placeholder="搜索文件" />
                <el-icon class="search-icon" size="20">
                    <Search />
                </el-icon>
            </div>
        </div>
        <el-dialog v-model="centerDialogVisible" title="文件上传" width="500" align-center>
            <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                   把文件拖动到此处或<em>点击上传</em>
                </div>
            </el-upload>
        </el-dialog>
    </div>
</template>

<style scoped>
.layout-top {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
}

.structure {
    color: #999;
    margin: 10px 0;
}

.layout-top-right-top {
    display: flex;
    width: 60px;
    justify-content: space-between;
}

.layout-top-right {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
}

.layout-top-right-buttom {
    position: relative;
}

.search-icon {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.toggle {
    cursor: pointer;
}
</style>