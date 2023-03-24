<template>
  <el-container style="position: relative">
    <el-header height="260px" style="padding: 0"><CPHeader /></el-header>
    <div
      style="
        position: absolute;
        top: 156px;
        right: 12.5%;
        width: 75%;
        height: 80vh;
      "
    >
      <el-container style="height: 100%"
        ><el-main><CPMain style="height: 100%" /></el-main
        ><el-aside style="padding: 20px"><CPAside /></el-aside
      ></el-container>
    </div>
    <el-footer style="margin-top: 70vh"><CommonFooter /></el-footer>
  </el-container>
</template>

<script setup>
import CPHeader from "@/components/CPHeader.vue"
import CPMain from "@/components/CPMain.vue"
import CPAside from "@/components/CPAside.vue"
import CommonFooter from "@/components/CommonFooter.vue"
</script>
<script>
export default {
  name: "CoursePlatform"
}
</script>

<style scoped></style>
