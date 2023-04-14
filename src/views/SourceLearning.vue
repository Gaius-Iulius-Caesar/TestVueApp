<template>
  <el-container>
    <el-header style="padding: 0"
      ><SLHeader :course-id="props.query.courseId" :title="file.label"
    /></el-header>
    <el-main style="padding: 0"><router-view /></el-main>
    <el-footer style="box-shadow: 0 -5px 3px hsla(0, 0%, 7%, 0.1); padding: 0"
      ><CommonFooter
    /></el-footer>
  </el-container>
</template>
<script setup>
import useCourse from "@/store/course"

const props = defineProps({ query: { type: Object, default: null } })
const course = useCourse()

const file = course.getFile(
  props.query.courseId,
  props.query.resourceId,
  props.query.fileId
)
</script>
<script>
export default {
  name: "SourceLearning"
}
</script>

<style scoped></style>
