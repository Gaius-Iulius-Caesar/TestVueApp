<template>
  <div>
    <el-space direction="vertical" fill="fill">
      <el-card class="study-sys"
        ><div class="title">
          <span class="card-title">学习系统</span>
        </div>
        <ul>
          <li>
            <div @click="$router.push('/course-overview')">
              <el-icon :size="30"><Reading /></el-icon>
              <div class="li-info">
                <span>在线课程</span><span>我的在线课堂</span>
              </div>
            </div>
            <el-icon :size="20"><ArrowRight /></el-icon>
          </li>
          <li>
            <div @click="ElMessage({ message: '功能暂未开放' })">
              <el-icon :size="30"><Compass /></el-icon>
              <div class="li-info">
                <span>用户指南</span><span>您的平台操作小助手</span>
              </div>
            </div>
            <el-icon :size="20"><ArrowRight /></el-icon>
          </li></ul
      ></el-card>
      <el-card>
        <div class="title"><span class="card-title">学习通知</span></div>
        <div>
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp"
            >
              <span class="info-title">{{ activity.content }}</span>
            </el-timeline-item>
          </el-timeline>
        </div>
        <div class="bottom" @click="$router.push('/bbs/announce')">
          <span>查看全部</span
          ><el-icon :size="15"><ArrowRightBold /></el-icon></div
      ></el-card>
    </el-space>
  </div>
</template>
<script setup>
import {
  ArrowRight,
  ArrowRightBold,
  Compass,
  Reading
} from "@element-plus/icons-vue"
import { ElMessage } from "element-plus"

const activities = [
  {
    content: "放假通知",
    timestamp: "2022-04-15"
  },
  {
    content: "重要通知！！学习时间临近截止",
    timestamp: "2022-04-11"
  },
  {
    content: "【温馨提示】2023年春节在线客服工作时间调整通知",
    timestamp: "2022-05-15"
  }
]
</script>
<script>
export default {
  name: "CPAside"
}
</script>

<style scoped>
.title {
  margin-bottom: 20px;
}
.title .card-title {
  font-size: 18px;
  font-weight: bold;
}
.study-sys ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.study-sys ul li:hover {
  cursor: pointer;
  background-color: #f5f7fa;
}
.study-sys ul li > div {
  display: flex;
  align-items: center;
}
.study-sys ul li .li-info {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}
.study-sys ul li .li-info > span:first-child {
  font-size: 14px;
}
.study-sys ul li .li-info > span:last-child {
  font-size: 12px;
  font-weight: lighter;
}
.info-title {
  font-size: 15px;
  color: green;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.bottom span {
  font-size: 15px;
}
.bottom:hover {
  cursor: pointer;
}
</style>
