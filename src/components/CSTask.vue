<template>
  <ul>
    <li
      v-for="(item, index) in course.getTaskById(props.query)"
      :key="index"
      @click="open(item)"
    >
      <div class="title">
        <el-tag v-if="item.type === 'inform'" type="info" effect="plain"
          >通知</el-tag
        >
        <el-tag v-else-if="item.type === 'task'" type="danger" effect="plain"
          >任务</el-tag
        ><span>{{ item.title }}</span>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="time">发布时间：{{ item.timestamp }}</div>
    </li>
  </ul>
</template>
<script setup>
import { ElMessageBox } from "element-plus"
import "element-plus/theme-chalk/el-message-box.css"
import useCourse from "@/store/course"

const props = defineProps({ query: { type: Number, default: 0 } })
const course = useCourse()

const open = (item) => {
  ElMessageBox.alert(item.content, item.title, {
    confirmButtonText: "确认收到",
    customStyle: "padding: 10px",
    closeOnClickModal: true,
    closeOnHashChange: true,
    closeOnPressEscape: true
  }).catch(() => {})
}
</script>
<script>
export default {
  name: "CSTask"
}
</script>

<style scoped>
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
