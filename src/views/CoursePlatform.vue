<template>
  <el-container>
    <el-header height="260px" style="padding: 0"><CPHeader /></el-header>
    <el-container
      :style="{
        position: 'relative',
        top: '-104px',
        right: '-12.5%',
        width: '75%',
        height: mainHeight
      }"
      ><el-main><CPMain style="height: 100%" @change-height="change" /></el-main
      ><el-aside style="padding: 20px"><CPAside /></el-aside
    ></el-container>
    <el-footer style="position: relative; top: -104px"
      ><CommonFooter
    /></el-footer>
  </el-container>
</template>

<script setup>
import CPHeader from "@/components/CoursePlatform/CPHeader.vue"
import CPMain from "@/components/CoursePlatform/CPMain.vue"
import CPAside from "@/components/CoursePlatform/CPAside.vue"
import CommonFooter from "@/components/CommonFooter.vue"

import { ref } from "vue"

const mainHeight = ref("")

const change = (length) => {
  if (length <= 10) mainHeight.value = "900px"
  else mainHeight.value = "auto"
}
</script>
<script>
export default {
  name: "CoursePlatform"
}
</script>

<style scoped></style>
