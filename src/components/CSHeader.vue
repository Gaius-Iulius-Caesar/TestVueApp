<template>
  <div>
    <div class="header">
      <div class="header-left">
        <img class="logo" src="../../public/logo.jpg" alt="" />
        <span>线上教学平台</span>
        <el-image
          class="ustc"
          src="../../public/ustc.svg"
          fit="contain"
        ></el-image>
      </div>
      <div class="header-right">
        <el-button text @click="$router.push('/course-platform')"
          ><span style="font-size: 18px">我的课程</span></el-button
        >
        <div
          style="height: 27px; border-right: 1px solid; margin: 0 30px 0 15px"
        ></div>
        <el-avatar :icon="UserFilled" />
        <el-divider border-style="none" direction="vertical" />
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <span>用户名</span>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="overview"
                ><el-icon><Reading /></el-icon>在线学堂</el-dropdown-item
              >
              <el-dropdown-item command="information"
                ><el-icon><Bell /></el-icon>消息中心</el-dropdown-item
              >
              <el-dropdown-item command="settings"
                ><el-icon><Setting /></el-icon>账号管理</el-dropdown-item
              >
              <el-dropdown-item command="logout"
                ><el-icon><SwitchButton /></el-icon>安全退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <div class="banner"></div>
  </div>
</template>

<script setup>
import {
  ArrowDown,
  Bell,
  Reading,
  Setting,
  SwitchButton,
  UserFilled
} from "@element-plus/icons-vue"
import router from "@/router/index"
import { ElMessage } from "element-plus"
import "element-plus/theme-chalk/el-loading.css"
import "element-plus/theme-chalk/el-message.css"

const handleCommand = (command) => {
  if (command === "overview") {
    router.replace("/course-overview")
  } else if (command === "information") {
    ElMessage("功能暂未开放")
  } else if (command === "settings") {
    ElMessage("功能暂未开放")
  } else if (command === "logout") {
    router.replace("/login")
  }
}
</script>
<script>
export default {
  name: "CourseStudyHeader"
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 100%;
  box-shadow: 0 1px 3px hsla(0, 0%, 7%, 0.1);
  padding: 0 70px;
}
.header-left {
  display: flex;
  align-items: center;
}
.header-left .logo {
  width: 70px;
  height: 100%;
}
.header-left span {
  font-size: 18px;
}
.header-left .ustc {
  height: 27px;
  border-left: 1px solid;
  padding-left: 10px;
  margin-left: 10px;
}
.header-right {
  display: flex;
  align-items: center;
}
.header-right .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  /*去掉悬停时的边框*/
  outline: 0;
}
.banner {
  height: 260px;
  background: url("public/CSBanner.jpg") no-repeat;
  background-size: cover;
}
</style>
