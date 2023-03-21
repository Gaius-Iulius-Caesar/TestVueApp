<template>
  <el-container id="top">
    <el-header><CourseOverviewHeader /></el-header>
    <el-main>
      <el-space
        fill
        :fill-ratio="61.8"
        direction="vertical"
        size="large"
        style="width: 100%"
      >
        <el-card class="course-overview-reminder">
          <template #header>
            <div class="course-overview-reminder-header">
              <el-space>
                <span>重要提醒</span>
                <el-popover
                  trigger="hover"
                  width="200px"
                  content="显示未来30天内即将截止的考试、作业，如需查看全部事项请前往课程相关模块"
                >
                  <template #reference>
                    <el-icon :size="20"><QuestionFilled /></el-icon>
                  </template>
                </el-popover>
              </el-space>
            </div>
          </template>
          <CourseOverviewReminder />
        </el-card>
        <el-card class="course-overview-list">
          <CourseOverviewList />
        </el-card>
      </el-space>
      <div class="right-fix">
        <div class="right-fix-item" @click="$router.replace('/bbs')">
          <el-icon :size="30"><House /></el-icon>
          <span>主页</span>
        </div>
        <el-divider />
        <div class="right-fix-item">
          <el-icon :size="30"><ChatSquare /></el-icon><span>消息中心</span>
        </div>
        <el-divider />
        <div class="right-fix-item">
          <el-icon :size="30"><Service /></el-icon><span>客服</span>
        </div>
        <el-divider />
        <div class="right-fix-item">
          <el-icon :size="30" @click="$router.push('#id')"><ArrowUp /></el-icon
          ><span>TOP</span>
        </div>
      </div>
    </el-main>
    <el-footer><CommonFooter /></el-footer>
  </el-container>
</template>

<script setup>
import CourseOverviewHeader from "@/components/COHeader.vue"
import CourseOverviewReminder from "@/components/COReminder.vue"
import CourseOverviewList from "@/components/COList.vue"
import CommonFooter from "@/components/CommonFooter.vue"

import {
  ArrowUp,
  ChatSquare,
  House,
  QuestionFilled,
  Service
} from "@element-plus/icons-vue"
</script>
<script>
export default {
  name: "CourseOverview"
}
</script>
<style scoped>
.course-overview-reminder-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.course-overview-reminder-header span {
  font-weight: 600;
  font-size: 20px;
}
.right-fix {
  position: fixed;
  top: 50%;
  margin-top: -134px;
  right: 0;
  z-index: 199;
  width: 60px;
  box-shadow: var(--el-box-shadow);
}
.right-fix .el-divider {
  margin: 0 auto;
  width: 61.8%;
}
.right-fix .right-fix-item:first-child {
  height: 65px;
  padding: 5px 0 10px 0;
}
.right-fix .right-fix-item:last-child {
  height: 60px;
  padding: 5px 0 5px 0;
}
.right-fix-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 10px 0;
}
.right-fix-item:hover {
  background-color: rgba(133, 144, 144, 0.1);
  cursor: pointer;
}
.right-fix-item span {
  font-size: 12px;
}
</style>
