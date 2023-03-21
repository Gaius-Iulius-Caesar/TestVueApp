<template>
  <div class="course-overview-reminder-content">
    <el-space size="small" wrap style="width: 100%">
      <el-card
        v-for="(reminder, index) in Course.getReminder()"
        :key="index"
        style="width: 220px"
      >
        <template #header>
          <div class="course-overview-reminder-content-header">
            <el-space>
              <el-icon :size="15" color="green"><EditPen /></el-icon>
              <span>{{
                reminder.taskType === "homework" ? "作业" : "考试"
              }}</span>
            </el-space>
          </div>
        </template>
        <ul>
          <li class="course-name">&lt;&lt;{{ reminder.courseName }}&gt;&gt;</li>
          <li class="course-task">{{ reminder.taskName }}</li>
          <li class="course-deadline">
            <el-tag>截至{{ reminder.deadline }}</el-tag>
          </li>
        </ul>
      </el-card>
    </el-space>
  </div>
</template>
<script setup>
import { EditPen } from "@element-plus/icons-vue"
import useCourse from "@/store/course"

const Course = useCourse()
</script>
<script>
export default {
  name: "CourseReminder"
}
</script>

<style scoped>
.course-overview-reminder-content {
  padding: 0 20px;
}
.el-card:hover {
  margin: -20px 0 0 0;
  cursor: pointer;
}
.course-overview-reminder-content-header span {
  font-size: 15px;
  color: green;
}
li {
  margin: 0 0 15px 0;
}
.course-name {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.course-task {
  font-size: 14px;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
