<template>
  <div style="width: 1600px; margin: 20px auto">
    <VueVideo
      width="1600px"
      height="900px"
      :video-url="file.url"
      @rate-refresh="rateUpdate"
    ></VueVideo>
  </div>
</template>
<script setup>
import VueVideo from "@/components/Utils/VideoPlayer.vue"
import useCourse from "@/store/course"

const props = defineProps({ query: { type: Object, default: null } })
const course = useCourse()

const file = course.getFile(
  props.query.courseId,
  props.query.resourceId,
  props.query.fileId
)
const rateUpdate = (newRate) => {
  if (newRate > file.rate) {
    file.rate = newRate
  }
}
</script>
<script>
export default {
  name: "VideoLearning"
}
</script>

<style scoped></style>
