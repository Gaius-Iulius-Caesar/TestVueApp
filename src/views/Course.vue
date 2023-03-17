<template>
  <div>
    <el-container>
      <el-header style="padding: 0"><CourseHeader /></el-header>
      <el-main>Main</el-main>
      <el-footer><MyFooter /></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import CourseHeader from "@/components/CourseHeader.vue"
import MyFooter from "@/components/MyFooter.vue"
</script>
<script>
export default {
  name: "CoursePage"
}
</script>
<style scoped></style>
