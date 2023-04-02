<template>
  <div>
    <div class="header">
      <div class="header-left">
        <img class="logo" src="../../public/logo.jpg" alt="" />
        <span>线上教学平台</span>
        <el-image class="ustc" :src="USTCImg" fit="contain"></el-image>
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
    <div class="banner">
      <div class="banner-content">
        <el-image
          style="width: 200px; height: 110px"
          :src="myCourse.cover"
          fit="fill"
        />
        <div class="course-name">
          <span>{{ myCourse.name }}</span>
          <span>课程号：未知</span>
        </div>
        <div class="course-rate">
          <span>{{ myCourse.rate * 100 }}%</span>
          <div>
            <span>学习进度</span>
            <el-popover
              trigger="hover"
              width="200px"
              content="此进度仅统计必学资源"
            >
              <template #reference>
                <el-icon :size="14" style="margin: 1px 0 0 5px"
                  ><WarningFilled
                /></el-icon>
              </template>
            </el-popover>
          </div>
        </div>
      </div>
      <div class="banner-menu">
        <div class="bar" @click="active">
          <span class="item active">学习资源</span>
          <span class="item">学习任务</span>
          <span class="item">作业考试</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ArrowDown,
  Bell,
  Reading,
  Setting,
  SwitchButton,
  UserFilled,
  WarningFilled
} from "@element-plus/icons-vue"
import USTCImg from "@/assets/image/ustc.svg"
import router from "@/router/index"
import { ElMessage } from "element-plus"
import "element-plus/theme-chalk/el-loading.css"
import "element-plus/theme-chalk/el-message.css"
import useCourse from "@/store/course"

const props = defineProps({ courseId: { type: Number, default: 0 } })
const course = useCourse()

const myCourse = course.getCourseById(props.courseId)
// 处理下拉框点击事件
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
// 实现tab切换效果
const active = (event) => {
  document
    .querySelector(".banner-menu .bar > .item.active")
    .classList.remove("active")
  event.target.classList.add("active")
  switch (event.target.innerText) {
    case "学习资源":
      router.push(`/course-study/resource?courseId=${myCourse.id}`)
      break
    case "学习任务":
      router.push(`/course-study/task?courseId=${myCourse.id}`)
      break
    case "作业考试":
      router.push(`/course-study/study?courseId=${myCourse.id}`)
      break
    default:
      break
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
  position: relative;
  height: 260px;
  background: url("@/assets/image/CSBanner.jpg") no-repeat;
  background-size: cover;
  overflow: hidden;
}
.banner-content {
  display: flex;
  width: 1200px;
  height: 110px;
  margin: 49px auto 0 auto;
}
.banner-content .course-name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 850px;
  height: 110px;
  margin-left: 28px;
}
.banner-content .course-name span:first-child {
  font-size: 28px;
}
.banner-content .course-name span:last-child {
  font-size: 18px;
}
.banner-content .course-rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 122px;
  height: 110px;
}
.banner-content .course-rate > span {
  font-size: 32px;
  font-weight: 600;
}
.banner-content .course-rate > div {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.banner-menu {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.banner-menu .bar {
  display: flex;
  width: 1000px;
  margin: 0 auto;
}
.banner-menu .bar > .item {
  position: relative;
  margin-right: 80px;
  width: 86px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: white;
}
.banner-menu .bar > .active {
  font-size: 20px;
}
.banner-menu .bar > .item.active::before {
  content: "";
  width: 20px;
  height: 4px;
  background: #fff;
  position: absolute;
  bottom: 3px;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
