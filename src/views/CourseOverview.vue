<template>
  <div>
    <el-container>
      <el-header><CourseOverviewHeader /></el-header>
      <el-main>
        <el-space
          fill
          :fill-ratio="61.8"
          direction="vertical"
          size="large"
          style="width: 100%"
        >
          <el-card class="course-reminder">
            <template #header>
              <div class="course-reminder-header">
                <el-space>
                  <span>重要提醒</span>
                  <el-popover
                    trigger="hover"
                    width="200px"
                    content="显示未来30天内即将截止的考斯、作业，如需查看全部事项请前往课程相关模块"
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
          <el-card class="course-list">
            <template #header>
              <div class="card-header">
                <span>Card name</span>
                <el-button class="button" text>Operation button</el-button>
              </div>
            </template>
            <CourseOverviewList />
          </el-card>
        </el-space>
      </el-main>
      <el-footer><CommonFooter /></el-footer>
    </el-container>
  </div>
</template>

<script setup>
import CourseOverviewHeader from "@/components/COHeader.vue"
import CourseOverviewReminder from "@/components/COReminder.vue"
import CourseOverviewList from "@/components/COList.vue"
import CommonFooter from "@/components/CommonFooter.vue"

import { QuestionFilled } from "@element-plus/icons-vue"
</script>
<script>
export default {
  name: "CourseOverview"
}
</script>
<style scoped>
.course-reminder-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.course-reminder-header span {
  font-weight: 600;
  font-size: 20px;
}
</style>
