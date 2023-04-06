<template>
  <div class="course-platform-header">
    <el-image :src="HeaderImage" fit="cover" />
    <div class="course-platform-header-content">
      <div class="school">
        <el-image :src="USTCImg" fit="contain"></el-image>
      </div>
      <div class="welcom">
        <div class="welcom-left">
          <el-avatar :size="65" :icon="UserFilled" />
          <div class="welcom-left-content">
            <span>欢迎您，XXX</span><span>软件学院</span>
          </div>
        </div>
        <div class="welcom-right">
          <span>{{ course.courseList.length }}</span>
          <span>在学课程</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserFilled } from "@element-plus/icons-vue"
import useCourse from "@/store/course"
import HeaderImage from "@/assets/image/CPHeader.jpg"
import USTCImg from "@/assets/image/ustc.svg"

const course = useCourse()
</script>
<script>
export default {
  name: "CoursePlatformHeader"
}
</script>

<style scoped>
.course-platform-header {
  position: relative;
  height: 100%;
}
.course-platform-header > .el-image {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.course-platform-header-content {
  height: 60%;
  width: 75%;
  margin: 0 auto;
}
.school {
  width: 100%;
  height: 35%;
}
.school .el-image {
  height: 100%;
}
.welcom {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 36px 0 0 0;
}
.welcom-left {
  display: flex;
  z-index: 1;
}
.welcom-left-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 10px;
}
.welcom-left-content span:first-child {
  font-size: 20px;
  font-weight: bold;
  color: black;
}
.welcom-left-content span:last-child {
  font-size: 15px;
}
.welcom-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 1;
}
.welcom-right span:first-child {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: black;
}
.welcom-right span:last-child {
  font-size: 15px;
}
</style>
