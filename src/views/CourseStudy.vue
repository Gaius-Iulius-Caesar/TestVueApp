<template>
  <el-container
    ><el-header style="padding: 0; height: 320px"><CSHeader /></el-header
    ><el-container><el-main></el-main><el-aside></el-aside></el-container
    ><el-footer><CommonFooter /></el-footer
  ></el-container>
</template>
<script setup>
import CSHeader from "@/components/CSHeader.vue"
import CommonFooter from "@/components/CommonFooter.vue"
// import defineProps from "vue"
//
// const props = defineProps({ query: { type: Number, default: 0 } })
</script>
<script>
export default {
  name: "CourseStudy"
}
</script>

<style scoped></style>
