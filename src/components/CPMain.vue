<template>
  <el-card
    ><div class="course-platform-main-header">
      <span>全部课程</span>
      <div class="course-platform-main-header-right">
        <el-select
          v-model="semesterSelect"
          clearable
          placeholder="Select"
          size="large"
          style="width: 200px"
          @change="selectChange"
          @clear="selectClear"
        >
          <el-option label="全部" value="ALL"></el-option>
          <el-option
            v-for="(semester, index) in course.getSemesterList()"
            :key="index"
            :label="semesterLabel(semester)"
            :value="semester"
          />
        </el-select>
        <el-divider direction="vertical" border-style="none" />
        <el-button
          :icon="Plus"
          text
          size="large"
          @click="addCourseDialogVisible = true"
          >加入课程</el-button
        >
        <el-dialog
          v-model="addCourseDialogVisible"
          title="加入课程"
          width="20%"
          center
        >
          <el-input
            v-model="addCourseCode"
            placeholder="请输入课程号"
            size="large"
          >
            <template #prepend>K</template>
          </el-input>
          <template #footer>
            <span class="dialog-footer">
              <el-button size="large" @click="addCourseDialogVisible = false"
                >取消</el-button
              >
              <el-button
                type="primary"
                size="large"
                @click="addCourseDialogVisible = false"
              >
                加入
              </el-button>
            </span>
          </template>
        </el-dialog>
      </div>
    </div>
    <div class="course-platform-main-content">
      <el-space wrap size="large"
        ><el-card
          v-for="(item, index) in courseList"
          :key="index"
          shadow="hover"
          :body-style="{ width: '250px', height: '270px' }"
          ><el-image
            style="width: 100%; height: 50%; border-radius: 3px"
            :src="item.cover"
            fit="fill"
          >
            <template #error>
              <div class="image-slot">
                <el-icon :size="30"><IconPicture /></el-icon>
              </div>
            </template>
          </el-image>
          <div class="item-content">
            <span class="course-name">{{ item.name }}</span>
            <span class="course-teacher">{{ item.teacher }}</span>
            <el-tag>学习进度：{{ item.rate * 100 }}%</el-tag>
          </div></el-card
        ></el-space
      >
    </div>
  </el-card>
</template>
<script setup>
import { ref, reactive } from "vue"
import { Plus, Picture as IconPicture } from "@element-plus/icons-vue"
import useCourse from "@/store/course"

const course = useCourse()

const semesterSelect = ref("ALL")
const semesterLabel = (semester) => {
  const year1 = semester.split("#")[0]
  const year2 = parseInt(year1, 10) + 1
  const term = semester.split("#")[1]
  return `${year1}-${year2}学年 第${term}学期`
}

const courseList = reactive(course.getCPMain("ALL"))
const selectChange = (value) => {
  courseList.length = 0
  courseList.push(...course.getCPMain(value))
}
const selectClear = () => {
  courseList.length = 0
}

const addCourseDialogVisible = ref(false)
const addCourseCode = ref("")
</script>
<script>
export default {
  name: "CPMain"
}
</script>

<style scoped>
.course-platform-main-content .el-card:hover {
  border-color: #00ff80;
}
.course-platform-main-header {
  display: flex;
  justify-content: space-between;
  height: 40px;
}
.course-platform-main-header span {
  font-size: 20px;
}
.item-content {
  display: flex;
  flex-direction: column;
}
.item-content .course-name {
  font-size: 18px;
  margin-bottom: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-content .course-teacher {
  margin-bottom: 10px;
}
.item-content .el-tag {
  width: 50%;
}
</style>
