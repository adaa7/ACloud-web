<script setup>
import FileOperations from '@/components/FileOperations.vue';
import ImageOperation from '@/components/ImageOperation.vue';
</script>

<template>
  <div class="main">
    <FileOperations></FileOperations>
    <FileOperations :filetype="'img-default.png'" :filename="'文件1'" :Modifytime="'2024年12月1 14-18-13:53'"></FileOperations>
    <FileOperations :filetype="'mp5-default.png'"></FileOperations>
    <FileOperations :filetype="'music-default.png'"></FileOperations>
    <FileOperations :filetype="'text-default.png'"></FileOperations>
    <FileOperations :filetype="'other-default.png'"></FileOperations>
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-wrap: wrap;
}
</style>