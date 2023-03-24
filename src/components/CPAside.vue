<template>
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
    <div class="bottom" @click="$router.replace('/course-platform')">
      <span>查看全部</span><el-icon :size="15"><ArrowRightBold /></el-icon></div
  ></el-card>
</template>
<script setup>
import { ArrowRightBold } from "@element-plus/icons-vue"

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
.info-title {
  font-size: 15px;
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
