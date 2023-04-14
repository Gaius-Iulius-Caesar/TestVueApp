<template>
  <el-container>
    <BbsHeader />
    <div class="mainBbs">
      <el-main><RouterView /></el-main>
      <el-aside width="296px"> <BbsAside /></el-aside>
    </div>
    <el-footer><CommonFooter /></el-footer>
  </el-container>
</template>

<script>
// import { provide, nextTick, ref } from "vue"
import CommonFooter from "@/components/CommonFooter.vue"
import BbsHeader from "@/components/BbsHeader.vue"
import BbsAside from "@/components/BbsAside.vue"

export default {
  name: "BbsPage",
  components: { BbsHeader, BbsAside, CommonFooter }
  // setup() {
  //   const isRouterAlive = ref(true)
  //   const reload = () => {
  //     isRouterAlive.value = false
  //     nextTick(() => {
  //       isRouterAlive.value = true
  //     })
  //   }
  //   provide("reload", reload)
  //
  //   return {
  //     isRouterAlive
  //   }
  // }
}
</script>

<style scoped>
.mainBbs {
  display: flex;
  width: 1000px;
  margin: 0 auto;
}
.el-main {
  margin-right: 10px;
  padding: 0px !important;
}
</style>
