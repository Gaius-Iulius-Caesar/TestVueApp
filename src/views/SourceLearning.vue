<template>
  <el-container>
    <el-header style="padding: 0"><COHeader /></el-header>
    <el-main style="padding: 0"><router-view /></el-main>
    <el-footer><CommonFooter /></el-footer>
  </el-container>
</template>

<script>
export default {
  name: "SourceLearning"
}
</script>

<style scoped></style>
