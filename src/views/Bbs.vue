<template>
  <div v-if="isRouterAlive" class="common-layout">
    <el-container>
      <BbsHeader />
      <el-main><RouterView /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import { provide, nextTick, ref } from "vue"
import BbsHeader from "../components/BbsHeader.vue"

export default {
  name: "AdminPage",
  components: { BbsHeader },
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

<style scoped></style>
