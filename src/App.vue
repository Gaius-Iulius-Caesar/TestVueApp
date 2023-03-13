<template>
  <div v-if="isRouterAlive">
    <router-view></router-view>
  </div>
</template>

<script>
import { nextTick, provide, ref } from "vue"

export default {
  name: "App",
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
