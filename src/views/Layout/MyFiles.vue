<script setup>
import FileOperations from '@/components/FileOperations.vue';
import FileOperationsBig from '@/components/FileOperationsBig.vue';
import usefiledisplayStore from '@/stores/modules/filedisplay'
const state = usefiledisplayStore()
state.getfiledisplay()
function Openthefolder(filePid,folderType) {
  if(folderType == 1){
    
  }
  console.log(filePid);
}
</script>

<template>
  <ul v-infinite-scroll="load" class="main" style="overflow: auto">
    <FileOperations v-if="state.style == 0" v-for="item in state.filelist" :filetype="item.fileCover" :filename="item.fileName" :Modifytime="item.createTime" @dblclick="Openthefolder(item.filePid,item.folderType)"></FileOperations>
    <FileOperationsBig v-else v-for="item in state.filelist" :filetype="item.fileCover" :filename="item.fileName" @dblclick="Openthefolder(item.filePid)"></FileOperationsBig>
    <!-- <FileOperations :filetype="'img-default.png'" :filename="'文件1'" :Modifytime="'2024年12月1 14-18-13:53'"></FileOperations>
    <FileOperations :filetype="'mp5-default.png'"></FileOperations>
    <FileOperations :filetype="'music-default.png'"></FileOperations>
    <FileOperations :filetype="'text-default.png'"></FileOperations>
    <FileOperations :filetype="'other-default.png'"></FileOperations> -->
  </ul> 
</template>

<style scoped>
.main{
  display: flex;
  flex-wrap: wrap;
}
</style>