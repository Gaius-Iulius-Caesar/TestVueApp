<template>
  <div>
    <div class="selector">
      <el-tabs v-model="studyRate" class="demo-tabs">
        <el-tab-pane name="ALL"
          ><template #label
            ><span class="paneFont">全部</span>
          </template></el-tab-pane
        >
        <el-tab-pane name="finish"
          ><template #label
            ><span class="paneFont">已完成</span>
          </template></el-tab-pane
        >
        <el-tab-pane name="notfinish"
          ><template #label
            ><span class="paneFont">未完成</span>
          </template></el-tab-pane
        >
      </el-tabs>
    </div>
    <ul>
      <li v-for="(item, index) in study" :key="index" @click="open(item)">
        <div class="title">
          <el-tag v-if="item.type === 'homework'" type="warning" effect="plain"
            >作业</el-tag
          >
          <el-tag v-else-if="item.type === 'exam'" type="danger" effect="plain"
            >考试</el-tag
          >
          <span>{{ item.name }}</span>
          <span
            v-if="item.flag === true"
            style="
              margin-left: 575px;
              font-size: 14px;
              color: rgb(255, 135, 67);
            "
          >
            <span style="font-size: 22px; margin-right: 10px"
              >{{ item.score }} </span
            >分</span
          >
          <span v-else
            ><span
              v-if="item.rate === 1"
              style="margin-left: 550px; font-size: 18px; color: grey"
              >未批阅</span
            ><span
              v-else
              style="margin-left: 550px; font-size: 18px; color: grey"
              >未完成</span
            ></span
          >
        </div>
        <div class="content">{{ item.content }}</div>
        <div class="time">截止时间：{{ item.deadline }}</div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed } from "vue"
import "element-plus/theme-chalk/el-message-box.css"
import useCourse from "@/store/course"

const props = defineProps({ query: { type: Number, default: 0 } })
const course = useCourse()

const studyList = course.getStudyById(props.query)
const studyRate = ref("ALL")

const study = computed(() => {
  if (studyRate.value === "ALL") {
    return studyList
  }
  if (studyRate.value === "finish") {
    return studyList.filter((item) => item.rate === 1)
  }
  if (studyRate.value === "notfinish") {
    return studyList.filter((item) => item.rate === 0)
  }
  return []
})
</script>
<script>
export default {
  name: "CSStudy"
}
</script>

<style scoped>
.selector {
  margin: 25px 38px 0;
}
.selector .paneFont {
  font-size: 20px;
  font-weight: 600;
}
ul {
  padding: 0 22px;
}
ul > li {
  padding: 25px 16px 30px;
  cursor: pointer;
  border-bottom: 1px solid #e8e8e9;
}
ul > li .title {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 18px;
}
ul > li .title span:first-child {
  margin-right: 10px;
  font-size: 12px;
}
ul > li .content {
  overflow: hidden;
  text-overflow: ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-line-clamp: 3;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;

  max-height: 72px;
  margin: 10px 0;
  line-height: 24px;
  font-size: 14px;
}
ul > li .time {
  font-size: 14px;
  color: grey;
}
</style>
