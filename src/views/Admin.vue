<template>
  <div class="common-layout">
    <el-container>
      <BbsHeader />
      <el-main><RouterView></RouterView></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import BbsHeader from "../components/BbsHeader.vue"
// import BbsBody from "./BbsBody.vue"

export default {
  name: "AdminPage",
  components: { BbsHeader }
}
</script>

<style scoped></style>
