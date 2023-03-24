<template>
  <div class="course-overview-list-content">
    <div class="bottom" @click="$router.replace('/course-platform')">
      <span>查看全部</span><el-icon :size="15"><ArrowRightBold /></el-icon>
    </div>
    <el-tabs v-model="category" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane name="compulsive"
        ><template #label
          ><span class="paneFont">必修课</span>
        </template></el-tab-pane
      >
      <el-tab-pane name="optional"
        ><template #label
          ><span class="paneFont">选修课</span>
        </template></el-tab-pane
      >
      <el-tab-pane name="public"
        ><template #label
          ><span class="paneFont">公共课</span>
        </template></el-tab-pane
      >
    </el-tabs>
    <ul>
      <li v-for="(item, index) in course.getCOList(category)" :key="index">
        <el-card
          :body-style="{
            display: 'flex',
            alignItems: 'center',
            height: '120px',
            padding: '0px'
          }"
          shadow="hover"
          ><el-image
            style="width: 160px; height: 90px; border-radius: 3px"
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
            <el-progress
              :percentage="item.rate * 100"
              :format="format"
              style="width: 350px"
            /></div
        ></el-card>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { ArrowRightBold, Picture as IconPicture } from "@element-plus/icons-vue"
import useCourse from "@/store/course"

const course = useCourse()
const category = ref("compulsive")
const format = (percentage) => (percentage === 100 ? "完成" : `${percentage}%`)
const handleClick = (TabsPaneContext, Event) => {
  console.log()
}
</script>
<script>
export default {
  name: "CourseList"
}
</script>

<style scoped>
.course-overview-list-content {
  position: relative;
}
.bottom {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  height: 40px;
}
.bottom span {
  font-size: 15px;
}
.bottom:hover {
  cursor: pointer;
}
.paneFont {
  font-size: 20px;
  font-weight: 600;
}
.item-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90px;
  margin: 0 10px;
}
.item-content .course-name {
  font-size: 18px;
}
.item-content .course-teacher {
  font-size: 12px;
}
.item-content .course-rate {
  justify-self: flex-end;
  width: 150px;
  font-size: 12px;
}
</style>
