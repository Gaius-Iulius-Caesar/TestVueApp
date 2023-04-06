<template>
  <div class="header">
    <div class="header-content">
      <div class="header-content-left">
        <img class="logo" src="../../../public/logo.jpg" alt="" />
        <span>线上教学平台</span>
      </div>
      <div class="header-content-right">
        <el-space :size="10" spacer="|">
          <el-avatar :icon="UserFilled" />
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <span>用户名</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="settings"
                  ><el-icon><Setting /></el-icon>账号设置</el-dropdown-item
                >
                <el-dropdown-item command="logout"
                  ><el-icon><SwitchButton /></el-icon>安全退出</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-space>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowDown,
  Setting,
  SwitchButton,
  UserFilled
} from "@element-plus/icons-vue"
import router from "@/router/index"
import { ElMessage } from "element-plus"
import "element-plus/theme-chalk/el-loading.css"
import "element-plus/theme-chalk/el-message.css"

const handleCommand = (command) => {
  if (command === "settings") {
    ElMessage("功能暂未开放")
  } else if (command === "logout") {
    router.replace("/login")
  }
}
</script>
<script>
export default {
  name: "CourseOverviewHeader"
}
</script>
<style scoped>
.header {
  height: 100%;
  width: 100%;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
}
.header-content {
  display: flex;
  justify-content: space-between;
  width: 61.8%;
  height: 100%;
  margin: 0 auto;
}
.header-content-left {
  display: flex;
  align-items: center;
}
.header-content-left .logo {
  width: 70px;
  height: 100%;
}
span {
  font-size: 18px;
}
.header-content-right {
  display: flex;
  align-items: center;
}
.header-content-right .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  /*去掉悬停时的边框*/
  outline: 0;
}
</style>
