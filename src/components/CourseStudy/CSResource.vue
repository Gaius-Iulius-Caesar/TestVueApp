<template>
  <el-collapse>
    <el-collapse-item
      v-for="(item, index) in course.getResourceById(props.query)"
      :key="index"
      :name="index"
      ><template #title
        ><span class="title">{{ item.name }}</span></template
      >
      <div class="content">
        <div
          v-for="(resource, index2) in item.files"
          :key="index2"
          class="content-item"
        >
          {{ resource.lable }}
          <el-icon
            v-if="resource.type === 'pdf'"
            style="vertical-align: middle"
            :size="20"
            ><Document
          /></el-icon>
          <el-icon
            v-if="resource.type === 'video'"
            style="vertical-align: middle"
            :size="20"
            ><VideoCamera
          /></el-icon>
          <el-progress
            type="circle"
            :percentage="resource.rate"
            :width="30"
            style="vertical-align: middle; position: absolute; right: 0"
            :show-text="false"
          />
        </div></div
    ></el-collapse-item>
  </el-collapse>
</template>
<script setup>
import useCourse from "@/store/course"
import { Document, VideoCamera } from "@element-plus/icons-vue"

const props = defineProps({ query: { type: Number, default: 0 } })
const course = useCourse()
</script>
<script>
export default {
  name: "CSResource"
}
</script>

<style scoped>
.title {
  margin-left: 10px;
  color: #777993;
  font-size: 18px;
}
.content {
  padding-left: 30px;
  margin-top: 15px;
}
.content-item {
  position: relative;
  width: 100%;
  height: 60px;
  padding: 15px 0;
  color: #777993;
  font-size: 16px;
  line-height: 30px;
}
</style>
