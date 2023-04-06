<template>
  <el-space direction="vertical" fill="fill" style="width: 100%"
    ><el-card :body-style="{ padding: '0 0 10px 0' }"
      ><div class="card-title">课程成绩</div>
      <div class="course-score-sum">
        <span style="font-size: 50px">{{ scoreSum(myCourse.score) }}</span
        >分
      </div>
      <ul class="course-score">
        <li>
          <span>{{ myCourse.score.performance }}</span
          ><span>/100</span>
          <p>平时成绩</p>
        </li>
        <li>
          <span>{{ myCourse.score.homework }}</span
          ><span>/100</span>
          <p>作业成绩</p>
        </li>
        <li>
          <span>{{ myCourse.score.exam }}</span
          ><span>/100</span>
          <p>考试成绩</p>
        </li>
      </ul>
      <div style="color: grey; font-size: 12px; margin: 10px 0 0 13px">
        注：截止时间之后补学的成绩不计
      </div></el-card
    ><el-card :body-style="{ padding: '0 0 10px 0' }"
      ><div class="card-title">授课老师</div>
      <div class="course-teacher">
        <el-avatar :icon="UserFilled" :size="68" />
        <div>{{ myCourse.teacher }}</div>
      </div></el-card
    ><el-card :body-style="{ padding: '0 0 10px 0' }"
      ><div class="card-title">课程介绍</div>
      <div class="course-semester">
        {{ semesterLabel(myCourse.semester) }}
      </div>
      <div class="course-abstract">{{ myCourse.abstract }}</div></el-card
    ></el-space
  >
</template>
<script setup>
import useCourse from "@/store/course"
import { UserFilled } from "@element-plus/icons-vue"

const props = defineProps({ courseId: { type: Number, default: 0 } })
const course = useCourse()

const myCourse = course.getCourseById(props.courseId)

const scoreSum = (score) =>
  Math.round(((score.performance + score.homework + score.exam) / 3) * 10) / 10
const semesterLabel = (semester) => {
  const year1 = semester.split("#")[0]
  const year2 = parseInt(year1, 10) + 1
  const term = semester.split("#")[1]
  return `${year1}-${year2}学年 第${term}学期`
}
</script>
<script>
export default {
  name: "CSAside"
}
</script>

<style scoped>
.el-card {
  position: relative;
  background: url("@/assets/image/CSAsideBG.png") no-repeat 0 0;
  background-size: 100% auto;
}
.card-title {
  width: 100%;
  height: 68px;
  line-height: 68px;
  color: #3d4059;
  font-size: 20px;
  text-indent: 30px;
  background: url("@/assets/image/CSAsideLine.png") no-repeat 16px;
}
.course-score-sum {
  height: 75px;
  color: #04c19d;
  text-align: center;
  font-size: 24px;
}
.course-score {
  margin-top: 7px;
  height: 64px;
}
.course-score > li {
  float: left;
  width: 86px;
  height: 64px;
  margin-right: 10px;
  padding-top: 10px;
  background: #f5fbff;
  cursor: pointer;
  font-size: 12px;
  color: grey;
  text-align: center;
}
.course-score > li:first-child {
  margin-left: 10px;
}
.course-score > li > span:first-child {
  font-size: 22px;
  color: black;
}
.course-score > li > span:nth-of-type(2) {
  font-size: 16px;
}
.course-teacher {
  width: 100%;
  margin: 10px 0;
  text-align: center;
}
.course-teacher > div {
  height: 36px;
  margin: 4px 0 30px 0;
  line-height: 36px;
  font-size: 20px;
}
.course-semester {
  position: absolute;
  top: 0;
  right: 0;
  height: 68px;
  line-height: 68px;
  margin-right: 10px;
  color: grey;
}
.course-abstract {
  text-indent: 2em;
  font-size: 14px;
  padding: 10px 30px;
}
</style>
