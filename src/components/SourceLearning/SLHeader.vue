<template>
  <div class="header">
    <el-page-header
      style="font-size: 18px"
      @back="
        $router.push({
          path: '/course-study',
          query: { courseId: props.courseId }
        })
      "
    >
      <template #title><span class="title">返回</span> </template>
      <template #content>
        <span class="content"> {{ props.title }} </span>
      </template>
    </el-page-header>
  </div>
</template>
<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  courseId: { type: Number, default: 0 }
})
</script>
<script>
export default {
  name: "SLHeader"
}
</script>

<style scoped>
.header {
  height: 100%;
  padding-left: 40px;
  line-height: 60px;
  box-shadow: var(--el-box-shadow);
}
.title {
  font-size: 18px;
}
.content {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
}
</style>
