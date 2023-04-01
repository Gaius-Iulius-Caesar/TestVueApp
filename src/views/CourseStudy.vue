<template>
  <el-container
    ><el-header style="padding: 0; height: 330px"
      ><CSHeader :course-id="props.query" /></el-header
    ><el-container style="width: 1200px; margin: 0 auto"
      ><el-main><router-view /></el-main
      ><el-aside style="padding: 20px 0"
        ><CSAside :course-id="props.query" /></el-aside></el-container
    ><el-footer><CommonFooter /></el-footer
  ></el-container>
</template>
<script setup>
import CSHeader from "@/components/CSHeader.vue"
import CSAside from "@/components/CSAside.vue"
import CommonFooter from "@/components/CommonFooter.vue"

const props = defineProps({ query: { type: Number, default: 0 } })
</script>
<script>
export default {
  name: "CourseStudy"
}
</script>

<style scoped></style>
