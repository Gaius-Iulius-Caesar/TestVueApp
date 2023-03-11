<template>
  <div v-if="isRouterAlive" class="common-layout">
    <el-container>
      <BbsHeader />
      <div class="mainBbs">
        <el-main><RouterView /></el-main>
        <el-aside width="296px"> <BbsAside /></el-aside>
      </div>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { provide, nextTick, ref } from "vue"
import BbsHeader from "../components/BbsHeader.vue"
import BbsAside from "../components/BbsAside.vue"

export default {
  name: "AdminPage",
  components: { BbsHeader, BbsAside },
  setup() {
    const isRouterAlive = ref(true)
    const reload = () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    }
    provide("reload", reload)

    return {
      isRouterAlive
    }
  }
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
