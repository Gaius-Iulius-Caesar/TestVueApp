<template>
  <el-collapse>
    <el-collapse-item
      v-for="(resource, index) in course.getResourceById(props.query)"
      :key="index"
      :name="index"
      ><template #title
        ><span class="title">{{ resource.name }}</span></template
      >
      <div class="content">
        <div
          v-for="(file, index2) in resource.files"
          :key="index2"
          class="content-item"
          @click="sourceStudy(index, index2, file)"
        >
          {{ file.label }}
          <el-icon
            v-if="file.type === 'pdf'"
            style="vertical-align: middle"
            :size="20"
            ><Document
          /></el-icon>
          <el-icon
            v-if="file.type === 'video'"
            style="vertical-align: middle"
            :size="20"
            ><VideoCamera
          /></el-icon>
          <el-progress
            type="circle"
            :percentage="file.rate * 100"
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
import { useRouter } from "vue-router"
import { Document, VideoCamera } from "@element-plus/icons-vue"

const props = defineProps({ query: { type: Number, default: 0 } })
const course = useCourse()
const router = useRouter()
const sourceStudy = (resourceIndex, fileIndex, file) => {
  if (file.type === "pdf") {
    router.push({
      path: "/source-learn/pdf",
      query: {
        cId: props.query,
        rId: resourceIndex,
        fId: fileIndex
      }
    })
  }
}
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
  cursor: pointer;
  color: #777993;
  font-size: 16px;
  line-height: 30px;
}
</style>
